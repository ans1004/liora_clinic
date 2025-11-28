<?php
/**
 * LIORA CLINIC - Site Configuration
 * 사이트 전역 설정
 */

// 사이트 기본 정보
define('SITE_NAME', 'Liora Clinic');
define('SITE_URL', 'https://liora-clinic.com'); // 실제 도메인으로 변경 필요

// 경로 설정
define('BASE_PATH', __DIR__ . '/..');
define('DATA_PATH', BASE_PATH . '/data');
define('COMPONENTS_PATH', BASE_PATH . '/components');
define('ASSETS_PATH', BASE_PATH . '/public');

// 인코딩
mb_internal_encoding('UTF-8');
mb_http_output('UTF-8');

// 에러 리포팅 (운영 환경에서는 off)
error_reporting(E_ALL);
ini_set('display_errors', 0); // 운영 환경에서는 0으로 설정

// 타임존
date_default_timezone_set('Asia/Seoul');

// 데이터베이스 사용 여부 (필요시 true로 변경)
define('USE_DATABASE', false);






