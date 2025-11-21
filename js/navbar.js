// Navbar 스크롤 이벤트 처리
(function() {
    'use strict';
    
    const navbar = document.querySelector('.navbar');
    
    if (!navbar) {
        console.error('Navbar element not found');
        return;
    }
    
    let lastScrollY = window.pageYOffset || window.scrollY || 0;
    let ticking = false;
    
    // 스크롤 이벤트 리스너
    function handleScroll() {
        const currentScrollY = window.pageYOffset || window.scrollY || 0;
        
        // 맨 위에 있으면 항상 투명
        if (currentScrollY === 0) {
            navbar.classList.remove('scrolled');
            lastScrollY = currentScrollY;
            ticking = false;
            return;
        }
        
        // 스크롤 방향 확인
        const isScrollingDown = currentScrollY > lastScrollY;
        
        if (isScrollingDown) {
            // 아래로 스크롤 - 배경색 추가
            navbar.classList.add('scrolled');
        } else {
            // 위로 스크롤 - 배경색 제거
            navbar.classList.remove('scrolled');
        }
        
        lastScrollY = currentScrollY;
        ticking = false;
    }
    
    // 스크롤 이벤트 최적화 (throttling)
    function onScroll() {
        if (!ticking) {
            window.requestAnimationFrame(handleScroll);
            ticking = true;
        }
    }
    
    // 이벤트 리스너 등록
    window.addEventListener('scroll', onScroll, { passive: true });
    
    // 초기 상태 확인
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', handleScroll);
    } else {
        handleScroll();
    }
    
    // 네비게이션 초기화 함수 (컴포넌트에서 호출)
    window.initNavbar = function() {
        handleScroll();
    };
})();

