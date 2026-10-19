<?php
// Place at: /public_html/api/subscribe_newsletter.php on Hostinger

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
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// ── PARSE & HONEYPOT ─────────────────────────────────────────
$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid JSON']);
    exit;
}
if (!empty($data['website'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Spam detected.']);
    exit;
}

// ── SANITIZE & VALIDATE ──────────────────────────────────────
$email = trim(strip_tags($data['email'] ?? ''));
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';

if (!filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($email) > 255) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => 'Please enter a valid email address.']);
    exit;
}

// ── DATABASE (INSERT IGNORE for duplicate emails) ────────────
try {
    $dsn = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=" . DB_CHARSET;
    $pdo = new PDO($dsn, DB_USER, DB_PASS, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES => false,
    ]);

    // UNIQUE KEY on email + INSERT IGNORE = silently skip duplicates
    $stmt = $pdo->prepare(
        "INSERT IGNORE INTO newsletter_subscribers (email, ip_address) VALUES (?, ?)"
    );
    $stmt->execute([$email, $ip]);

    // rowCount() = 0 means the email was already subscribed
    if ($stmt->rowCount() === 0) {
        $msg = "You're already subscribed to the BaramijX newsletter!";
    } else {
        $msg = "You've successfully subscribed! Welcome to the BaramijX community.";
    }

    http_response_code(201);
    echo json_encode(['success' => true, 'message' => $msg]);

} catch (PDOException $e) {
    error_log('[BaramijX] Newsletter subscription error: ' . $e->getMessage());
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Server error. Please try again later.']);
}
