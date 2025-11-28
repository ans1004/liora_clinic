<?php
/**
 * LIORA CLINIC - Database Connection
 * 데이터베이스 연결 클래스
 */

require_once __DIR__ . '/config.php';

// 데이터베이스 설정 파일 로드 (존재하는 경우)
if (file_exists(__DIR__ . '/db-config.php')) {
    require_once __DIR__ . '/db-config.php';
}

class Database {
    private static $instance = null;
    private $connection = null;
    
    // 데이터베이스 설정 (db-config.php에서 정의된 상수 사용, 없으면 기본값)
    private $host;
    private $dbname;
    private $username;
    private $password;
    private $charset;
    
    /**
     * 싱글톤 패턴으로 인스턴스 생성
     * @return Database
     */
    public static function getInstance() {
        if (self::$instance === null) {
            self::$instance = new self();
        }
        return self::$instance;
    }
    
    /**
     * 생성자 - 데이터베이스 연결
     */
    private function __construct() {
        // 설정 파일에서 상수 로드, 없으면 기본값 사용
        $this->host = defined('DB_HOST') ? DB_HOST : 'localhost';
        $this->dbname = defined('DB_NAME') ? DB_NAME : 'liora_clinic';
        $this->username = defined('DB_USER') ? DB_USER : 'root';
        $this->password = defined('DB_PASS') ? DB_PASS : '';
        $this->charset = defined('DB_CHARSET') ? DB_CHARSET : 'utf8mb4';
        
        try {
            $dsn = "mysql:host={$this->host};dbname={$this->dbname};charset={$this->charset}";
            $options = defined('DB_OPTIONS') ? DB_OPTIONS : [
                PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_EMULATE_PREPARES   => false,
            ];
            
            $this->connection = new PDO($dsn, $this->username, $this->password, $options);
        } catch (PDOException $e) {
            // 운영 환경에서는 에러 로그만 기록
            error_log("Database Connection Error: " . $e->getMessage());
            
            // 개발 환경에서만 에러 표시
            if (ini_get('display_errors')) {
                die("데이터베이스 연결 실패: " . $e->getMessage());
            } else {
                die("데이터베이스 연결에 실패했습니다. 관리자에게 문의하세요.");
            }
        }
    }
    
    /**
     * 데이터베이스 연결 객체 반환
     * @return PDO
     */
    public function getConnection() {
        return $this->connection;
    }
    
    /**
     * 쿼리 실행 (SELECT)
     * @param string $sql SQL 쿼리
     * @param array $params 바인딩할 파라미터
     * @return array
     */
    public function query($sql, $params = []) {
        try {
            $stmt = $this->connection->prepare($sql);
            $stmt->execute($params);
            return $stmt->fetchAll();
        } catch (PDOException $e) {
            error_log("Query Error: " . $e->getMessage() . " | SQL: " . $sql);
            return [];
        }
    }
    
    /**
     * 단일 행 조회
     * @param string $sql SQL 쿼리
     * @param array $params 바인딩할 파라미터
     * @return array|false
     */
    public function queryOne($sql, $params = []) {
        try {
            $stmt = $this->connection->prepare($sql);
            $stmt->execute($params);
            return $stmt->fetch();
        } catch (PDOException $e) {
            error_log("Query Error: " . $e->getMessage() . " | SQL: " . $sql);
            return false;
        }
    }
    
    /**
     * 쿼리 실행 (INSERT, UPDATE, DELETE)
     * @param string $sql SQL 쿼리
     * @param array $params 바인딩할 파라미터
     * @return bool
     */
    public function execute($sql, $params = []) {
        try {
            $stmt = $this->connection->prepare($sql);
            return $stmt->execute($params);
        } catch (PDOException $e) {
            error_log("Execute Error: " . $e->getMessage() . " | SQL: " . $sql);
            return false;
        }
    }
    
    /**
     * 마지막 삽입된 ID 반환
     * @return string
     */
    public function lastInsertId() {
        return $this->connection->lastInsertId();
    }
    
    /**
     * 트랜잭션 시작
     */
    public function beginTransaction() {
        return $this->connection->beginTransaction();
    }
    
    /**
     * 트랜잭션 커밋
     */
    public function commit() {
        return $this->connection->commit();
    }
    
    /**
     * 트랜잭션 롤백
     */
    public function rollBack() {
        return $this->connection->rollBack();
    }
    
    /**
     * 연결 종료 방지 (싱글톤 패턴)
     */
    private function __clone() {}
    
    /**
     * 역직렬화 방지
     */
    public function __wakeup() {
        throw new Exception("Cannot unserialize singleton");
    }
}

