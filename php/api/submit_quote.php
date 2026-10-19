<?php
// Place at: /public_html/api/submit_quote.php on Hostinger

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

// ── RATE LIMITING ────────────────────────────────────────────
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$lockDir = sys_get_temp_dir() . '/bmx_rate';
@mkdir($lockDir, 0700, true);
$lockFile = $lockDir . '/' . md5($ip . '_quote');
if (file_exists($lockFile) && (time() - filemtime($lockFile)) < 120) {
    http_response_code(429);
    echo json_encode(['success' => false, 'message' => 'Too many requests. Please wait 2 minutes.']);
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

// ── WHITELIST ENUMS ──────────────────────────────────────────
$validCategories = ['web-development', 'mobile-app', 'cloud-solutions', 'ai-ml', 'digital-transformation', 'consulting'];
$validTimelines = ['urgent', 'standard', 'flexible', 'planning'];
$validBudgets = ['$5,000 - $10,000', '$10,000 - $25,000', '$25,000 - $50,000', '$50,000 - $100,000', '$100,000+'];

// ── SANITIZE ─────────────────────────────────────────────────
$name = trim(strip_tags($data['name'] ?? ''));
$email = trim(strip_tags($data['email'] ?? ''));
$phone = trim(strip_tags($data['phone'] ?? ''));
$company = trim(strip_tags($data['company'] ?? ''));
$projectName = trim(strip_tags($data['projectName'] ?? ''));
$category = trim(strip_tags($data['serviceCategory'] ?? ''));
$description = trim(strip_tags($data['description'] ?? ''));
$budget = trim(strip_tags($data['budgetRange'] ?? ''));
$timeline = trim(strip_tags($data['timeline'] ?? ''));
$addInfo = trim(strip_tags($data['additionalInfo'] ?? ''));
$ua = substr($_SERVER['HTTP_USER_AGENT'] ?? '', 0, 500);

// ── VALIDATE ─────────────────────────────────────────────────
$errors = [];
if (strlen($name) < 2 || strlen($name) > 120)
    $errors[] = 'Name required (2–120 chars).';
if (!filter_var($email, FILTER_VALIDATE_EMAIL))
    $errors[] = 'Valid email required.';
if (strlen($phone) < 7 || strlen($phone) > 30)
    $errors[] = 'Valid phone number required.';
if (strlen($company) < 1 || strlen($company) > 120)
    $errors[] = 'Company name required.';
if (strlen($projectName) < 2)
    $errors[] = 'Project name required.';
if (!in_array($category, $validCategories, true))
    $errors[] = 'Invalid service category.';
if (strlen($description) < 20)
    $errors[] = 'Project description must be at least 20 characters.';
if (!in_array($budget, $validBudgets, true))
    $errors[] = 'Invalid budget selection.';
if (!in_array($timeline, $validTimelines, true))
    $errors[] = 'Invalid timeline selection.';

if ($errors) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => implode(' ', $errors)]);
    exit;
}

// ── DATABASE INSERT ───────────────────────────────────────────
try {
    $dsn = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=" . DB_CHARSET;
    $pdo = new PDO($dsn, DB_USER, DB_PASS, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES => false,
    ]);

    $stmt = $pdo->prepare(
        "INSERT INTO quote_requests
         (name, email, phone, company, project_name, service_category,
          description, budget_range, timeline, additional_info, ip_address, user_agent)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
    );
    $stmt->execute([
        $name,
        $email,
        $phone,
        $company,
        $projectName,
        $category,
        $description,
        $budget,
        $timeline,
        $addInfo,
        $ip,
        $ua
    ]);

    touch($lockFile);
    http_response_code(201);
    echo json_encode([
        'success' => true,
        'message' => "Thank you, {$name}! Your quote request has been received. Our team will send a detailed proposal within 48 hours.",
    ]);

} catch (PDOException $e) {
    error_log('[BaramijX] Quote submission error: ' . $e->getMessage());
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Server error. Please try again later.']);
}
