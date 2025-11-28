<?php
/**
 * LIORA CLINIC - Server Setup Check
 * 서버 환경 확인 및 설정 체크
 * 
 * 사용 방법: 브라우저에서 /lib/server-setup.php 접속하여 서버 상태 확인
 */

// 보안: 개발 환경에서만 접근 가능하도록 설정
$allowed_ips = ['127.0.0.1', '::1']; // 로컬호스트만 허용
$client_ip = $_SERVER['REMOTE_ADDR'] ?? '';

// 운영 환경에서는 이 파일을 삭제하거나 접근을 차단하세요
// if (!in_array($client_ip, $allowed_ips)) {
//     die('Access Denied');
// }

header('Content-Type: text/html; charset=UTF-8');
?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>서버 환경 확인 - Liora Clinic</title>
    <style>
        body {
            font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif;
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
            background: #f5f5f5;
        }
        .container {
            background: white;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        h1 {
            color: #333;
            border-bottom: 2px solid #333;
            padding-bottom: 10px;
        }
        .status {
            margin: 20px 0;
            padding: 15px;
            border-radius: 5px;
        }
        .success {
            background: #d4edda;
            color: #155724;
            border: 1px solid #c3e6cb;
        }
        .error {
            background: #f8d7da;
            color: #721c24;
            border: 1px solid #f5c6cb;
        }
        .info {
            background: #d1ecf1;
            color: #0c5460;
            border: 1px solid #bee5eb;
        }
        .check-item {
            margin: 10px 0;
            padding: 10px;
            background: #f8f9fa;
            border-left: 4px solid #007bff;
        }
        .check-item strong {
            display: block;
            margin-bottom: 5px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🔧 서버 환경 확인</h1>
        
        <?php
        // PHP 버전 확인
        $php_version = phpversion();
        $php_ok = version_compare($php_version, '7.4.0', '>=');
        ?>
        <div class="status <?= $php_ok ? 'success' : 'error' ?>">
            <strong>PHP 버전:</strong> <?= $php_version ?>
            <?= $php_ok ? '✅' : '❌ (PHP 7.4 이상 필요)' ?>
        </div>
        
        <?php
        // 필수 확장 모듈 확인
        $required_extensions = ['pdo', 'pdo_mysql', 'mbstring', 'json'];
        $missing_extensions = [];
        
        foreach ($required_extensions as $ext) {
            if (!extension_loaded($ext)) {
                $missing_extensions[] = $ext;
            }
        }
        ?>
        <div class="status <?= empty($missing_extensions) ? 'success' : 'error' ?>">
            <strong>필수 PHP 확장 모듈:</strong>
            <?php if (empty($missing_extensions)): ?>
                ✅ 모든 확장 모듈이 설치되어 있습니다.
            <?php else: ?>
                ❌ 다음 확장 모듈이 필요합니다: <?= implode(', ', $missing_extensions) ?>
            <?php endif; ?>
        </div>
        
        <?php
        // 파일 권한 확인
        $writable_dirs = [__DIR__ . '/../data'];
        $writable_ok = true;
        $writable_issues = [];
        
        foreach ($writable_dirs as $dir) {
            if (!is_writable($dir)) {
                $writable_ok = false;
                $writable_issues[] = $dir;
            }
        }
        ?>
        <div class="status <?= $writable_ok ? 'success' : 'error' ?>">
            <strong>파일 권한:</strong>
            <?php if ($writable_ok): ?>
                ✅ 필요한 디렉토리가 쓰기 가능합니다.
            <?php else: ?>
                ❌ 다음 디렉토리의 쓰기 권한이 필요합니다:
                <ul>
                    <?php foreach ($writable_issues as $issue): ?>
                        <li><?= $issue ?></li>
                    <?php endforeach; ?>
                </ul>
            <?php endif; ?>
        </div>
        
        <?php
        // 설정 파일 확인
        $config_file = __DIR__ . '/config.php';
        $db_config_file = __DIR__ . '/db-config.php';
        ?>
        <div class="check-item">
            <strong>설정 파일:</strong>
            <ul>
                <li>config.php: <?= file_exists($config_file) ? '✅ 존재' : '❌ 없음' ?></li>
                <li>db-config.php: <?= file_exists($db_config_file) ? '✅ 존재' : '⚠️ 없음 (데이터베이스 미사용 시 정상)' ?></li>
            </ul>
        </div>
        
        <?php
        // 데이터베이스 연결 테스트 (db-config.php가 있는 경우)
        if (file_exists($db_config_file)) {
            require_once __DIR__ . '/config.php';
            require_once __DIR__ . '/db-config.php';
            require_once __DIR__ . '/database.php';
            
            try {
                $db = Database::getInstance();
                $result = $db->queryOne("SELECT 1 as test");
                
                if ($result && isset($result['test'])) {
                    echo '<div class="status success">';
                    echo '<strong>데이터베이스 연결:</strong> ✅ 성공';
                    echo '</div>';
                } else {
                    echo '<div class="status error">';
                    echo '<strong>데이터베이스 연결:</strong> ❌ 실패 (쿼리 실행 오류)';
                    echo '</div>';
                }
            } catch (Exception $e) {
                echo '<div class="status error">';
                echo '<strong>데이터베이스 연결:</strong> ❌ 실패<br>';
                echo '오류: ' . htmlspecialchars($e->getMessage());
                echo '</div>';
            }
        } else {
            echo '<div class="status info">';
            echo '<strong>데이터베이스:</strong> ⚠️ db-config.php 파일이 없습니다. 데이터베이스를 사용하지 않는 경우 정상입니다.';
            echo '</div>';
        }
        ?>
        
        <div class="check-item">
            <strong>서버 정보:</strong>
            <ul>
                <li>서버 소프트웨어: <?= $_SERVER['SERVER_SOFTWARE'] ?? '알 수 없음' ?></li>
                <li>문서 루트: <?= $_SERVER['DOCUMENT_ROOT'] ?? '알 수 없음' ?></li>
                <li>현재 시간: <?= date('Y-m-d H:i:s') ?></li>
                <li>타임존: <?= date_default_timezone_get() ?></li>
            </ul>
        </div>
        
        <div class="status info" style="margin-top: 30px;">
            <strong>⚠️ 보안 주의사항:</strong><br>
            이 파일은 개발 환경에서만 사용하세요. 운영 환경에서는 삭제하거나 접근을 차단하세요.
        </div>
    </div>
</body>
</html>

