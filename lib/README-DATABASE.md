# 데이터베이스 연결 가이드

## 설정 방법

### 1. 데이터베이스 설정 파일 생성

`lib/db-config.php` 파일을 생성하고 실제 서버 정보를 입력하세요:

```php
<?php
define('DB_HOST', 'localhost');      // 데이터베이스 호스트
define('DB_NAME', 'liora_clinic');   // 데이터베이스 이름
define('DB_USER', 'your_username');   // 데이터베이스 사용자명
define('DB_PASS', 'your_password');  // 데이터베이스 비밀번호
define('DB_CHARSET', 'utf8mb4');
```

### 2. 데이터베이스 사용 활성화

`lib/config.php` 파일에서 데이터베이스 사용을 활성화하세요:

```php
define('USE_DATABASE', true);
```

## 사용 방법

### 기본 사용법

```php
<?php
require_once __DIR__ . '/lib/config.php';
require_once __DIR__ . '/lib/helper-functions.php';

// 데이터베이스 인스턴스 가져오기
$db = getDB();

if ($db) {
    // SELECT 쿼리 실행
    $users = $db->query("SELECT * FROM users WHERE status = ?", ['active']);
    
    // 단일 행 조회
    $user = $db->queryOne("SELECT * FROM users WHERE id = ?", [1]);
    
    // INSERT 쿼리 실행
    $db->execute("INSERT INTO users (name, email) VALUES (?, ?)", ['홍길동', 'test@example.com']);
    
    // 마지막 삽입된 ID 가져오기
    $lastId = $db->lastInsertId();
    
    // UPDATE 쿼리 실행
    $db->execute("UPDATE users SET name = ? WHERE id = ?", ['김철수', 1]);
    
    // DELETE 쿼리 실행
    $db->execute("DELETE FROM users WHERE id = ?", [1]);
}
```

### 트랜잭션 사용

```php
<?php
$db = getDB();

if ($db) {
    try {
        $db->beginTransaction();
        
        $db->execute("INSERT INTO orders (user_id, total) VALUES (?, ?)", [1, 10000]);
        $orderId = $db->lastInsertId();
        $db->execute("INSERT INTO order_items (order_id, product_id, quantity) VALUES (?, ?, ?)", [$orderId, 1, 2]);
        
        $db->commit();
    } catch (Exception $e) {
        $db->rollBack();
        error_log("Transaction failed: " . $e->getMessage());
    }
}
```

## 보안 주의사항

1. `lib/db-config.php` 파일은 `.gitignore`에 포함되어 있어 버전 관리에서 제외됩니다.
2. 실제 서버 정보는 절대 공개 저장소에 커밋하지 마세요.
3. 프로덕션 환경에서는 `lib/config.php`의 `display_errors`를 `0`으로 설정하세요.

