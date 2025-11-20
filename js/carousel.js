// Carousel Dot 애니메이션 처리 (floating-section에만 적용)
(function() {
    'use strict';
    
    // floating-section 안의 carousel-dot만 선택
    const floatingSection = document.querySelector('.floating-section');
    if (!floatingSection) return; // floating-section이 없으면 종료
    
    const carouselContainer = floatingSection.querySelector('.carousel-dot');
    if (!carouselContainer) return; // carousel-dot이 없으면 종료
    
    const dots = carouselContainer.querySelectorAll('.dot');
    const duration = 5000; // 5초 동안 채워짐
    let currentIndex = 0;
    let animationId = null;
    let startTime = null;
    let isAnimating = false;
    
    // 원의 둘레 계산 (2 * π * r)
    const circumference = 2 * Math.PI * 19.5; // r = 19.5 (약 122.52)
    
    function updateProgress(dot, progress) {
        const circle = dot.querySelector('.progress-ring .progress-circle');
        if (circle) {
            const offset = circumference * (1 - progress);
            circle.style.strokeDashoffset = offset;
        }
    }
    
    function resetDot(dot) {
        const circle = dot.querySelector('.progress-ring .progress-circle');
        if (circle) {
            circle.style.strokeDashoffset = circumference;
        }
        dot.classList.remove('active');
    }
    
    function activateDot(index) {
        // 모든 dot 비활성화
        dots.forEach((dot, i) => {
            resetDot(dot);
        });
        
        // 현재 dot 활성화
        if (dots[index] && index >= 0 && index < dots.length) {
            dots[index].classList.add('active');
            const circle = dots[index].querySelector('.progress-ring .progress-circle');
            if (circle) {
                circle.style.strokeDasharray = circumference;
                circle.style.strokeDashoffset = circumference;
            }
        }
    }
    
    function nextDot() {
        // 다음 인덱스 계산 (루핑)
        currentIndex = (currentIndex + 1) % dots.length;
        activateDot(currentIndex);
    }
    
    function animate(timestamp) {
        if (!startTime) {
            startTime = timestamp;
        }
        
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        if (dots[currentIndex]) {
            updateProgress(dots[currentIndex], progress);
        }
        
        if (progress < 1) {
            animationId = requestAnimationFrame(animate);
        } else {
            // 애니메이션 완료 - 다음 dot으로 이동 (루핑)
            nextDot();
            startTime = null;
            
            // 다음 애니메이션 즉시 시작 (루핑)
            if (dots.length > 0) {
                startTime = null;
                animationId = requestAnimationFrame(animate);
            }
        }
    }
    
    // 초기화
    function init() {
        if (dots.length === 0) return;
        
        // 첫 번째 dot 활성화
        currentIndex = 0;
        activateDot(0);
        
        // 애니메이션 시작
        startTime = null;
        animationId = requestAnimationFrame(animate);
    }
    
    // 페이지 로드 시 초기화
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    // dot 클릭 시 해당 dot으로 이동
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
            currentIndex = index;
            startTime = null;
            activateDot(currentIndex);
            animationId = requestAnimationFrame(animate);
        });
    });
})();

