<?php
/**
 * LIORA CLINIC - Helper Functions
 * 유틸리티 함수들
 */

require_once __DIR__ . '/config.php';

/**
 * JSON 데이터 로드
 * @param string $filename JSON 파일명 (data/ 폴더 기준)
 * @return array|false
 */
function load_json_data($filename) {
    $filepath = DATA_PATH . '/' . $filename;
    if (!file_exists($filepath)) {
        return false;
    }
    
    $content = file_get_contents($filepath);
    $data = json_decode($content, true);
    
    if (json_last_error() !== JSON_ERROR_NONE) {
        error_log("JSON decode error in {$filename}: " . json_last_error_msg());
        return false;
    }
    
    return $data;
}

/**
 * 컴포넌트 포함 (데이터 전달)
 * @param string $component_path 컴포넌트 경로 (components/ 기준)
 * @param array $data 전달할 데이터
 */
function include_component($component_path, $data = []) {
    $filepath = COMPONENTS_PATH . '/' . $component_path . '.php';
    if (file_exists($filepath)) {
        extract($data);
        include $filepath;
    } else {
        error_log("Component not found: {$component_path}");
    }
}

/**
 * 안전한 HTML 출력 (XSS 방지)
 * @param string $text
 * @return string
 */
function h($text) {
    return htmlspecialchars($text, ENT_QUOTES, 'UTF-8');
}

/**
 * 에셋 경로 반환
 * @param string $path 에셋 경로 (public/ 기준)
 * @return string
 */
function asset($path) {
    return '/' . ltrim($path, '/');
}

/**
 * 데이터베이스 인스턴스 반환
 * @return Database|null
 */
function getDB() {
    if (!defined('USE_DATABASE') || !USE_DATABASE) {
        return null;
    }
    
    require_once __DIR__ . '/database.php';
    return Database::getInstance();
}






