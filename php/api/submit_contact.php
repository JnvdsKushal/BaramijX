<?php
// Place at: /public_html/api/submit_contact.php on Hostinger

require_once __DIR__ . '/../../private/db_config.php';

// ── CORS ────────────────────────────────────────────────────
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin === ALLOWED_ORIGIN) {
    header('Access-Control-Allow-Origin: ' . ALLOWED_ORIGIN);
}
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// ── METHOD CHECK ────────────────────────────────────────────
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// ── RATE LIMITING (file-based) ───────────────────────────────
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$lockDir = sys_get_temp_dir() . '/bmx_rate';
@mkdir($lockDir, 0700, true);
$lockFile = $lockDir . '/' . md5($ip . '_contact');
if (file_exists($lockFile) && (time() - filemtime($lockFile)) < 60) {
    http_response_code(429);
    echo json_encode(['success' => false, 'message' => 'Too many requests. Please wait 60 seconds.']);
    exit;
}

// ── PARSE INPUT ─────────────────────────────────────────────
$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid JSON']);
    exit;
}

// ── HONEYPOT SPAM CHECK ─────────────────────────────────────
if (!empty($data['website'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Spam detected.']);
    exit;
}

// ── SANITIZE ────────────────────────────────────────────────
$name = trim(strip_tags($data['name'] ?? ''));
$email = trim(strip_tags($data['email'] ?? ''));
$phone = trim(strip_tags($data['phone'] ?? ''));
$company = trim(strip_tags($data['company'] ?? ''));
$message = trim(strip_tags($data['message'] ?? ''));
$referral = trim(strip_tags($data['referral'] ?? ''));
$ua = substr($_SERVER['HTTP_USER_AGENT'] ?? '', 0, 500);

// ── VALIDATE ────────────────────────────────────────────────
$errors = [];
if (strlen($name) < 2 || strlen($name) > 120)
    $errors[] = 'Name must be 2–120 characters.';
if (!filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($email) > 255)
    $errors[] = 'A valid email address is required.';
if (strlen($message) < 10 || strlen($message) > 5000)
    $errors[] = 'Message must be between 10 and 5000 characters.';

if ($errors) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => implode(' ', $errors)]);
    exit;
}

// ── DATABASE INSERT ──────────────────────────────────────────
try {
    $dsn = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=" . DB_CHARSET;
    $pdo = new PDO($dsn, DB_USER, DB_PASS, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES => false,
    ]);

    $stmt = $pdo->prepare(
        "INSERT INTO contact_submissions
         (name, email, phone, company, message, referral, ip_address, user_agent)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
    );
    $stmt->execute([$name, $email, $phone, $company, $message, $referral, $ip, $ua]);

    // Update rate limit file
    touch($lockFile);

    http_response_code(201);
    echo json_encode([
        'success' => true,
        'message' => "Thank you, {$name}! Your message has been received. We'll get back to you within 24 hours.",
    ]);

} catch (PDOException $e) {
    error_log('[BaramijX] Contact submission error: ' . $e->getMessage());
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Server error. Please try again later.']);
}
