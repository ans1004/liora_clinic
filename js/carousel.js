// Hero Slide Carousel Dot 애니메이션 및 슬라이드 전환 처리
(function() {
    'use strict';
    
    // floating-section 안의 carousel-dot만 선택
    const floatingSection = document.querySelector('.floating-section');
    if (!floatingSection) return; // floating-section이 없으면 종료
    
    const carouselContainer = floatingSection.querySelector('.carousel-dot');
    if (!carouselContainer) return; // carousel-dot이 없으면 종료
    
    const dots = carouselContainer.querySelectorAll('.dot');
    const slideItems = document.querySelectorAll('.hero-slide .slide-item');
    const headlineElement = document.querySelector('.hero-text .headline_hr');
    const descriptionElement = document.querySelector('.hero-text .description_hr');
    const duration = 5000; // 5초 동안 채워짐
    let currentIndex = 0;
    let animationId = null;
    let startTime = null;
    
    // 원의 둘레 계산 (2 * π * r)
    const circumference = 2 * Math.PI * 19.5; // r = 19.5 (약 122.52)
    
    // 각 슬라이드에 맞는 텍스트 데이터
    const slideTexts = [
        {
            headline: 'Your Daily Dose of<br>Confidence.',
            description: '매일 아침 거울 앞에서 느끼는 작은 변화가<br>당신의 하루를 완전히 새롭게 만들어 드립니다.'
        },
        {
            headline: 'Always ready for<br>Your best day',
            description: '눈을 뜨고 마주한 투명한 변화,<br>당신의 하루가 맑아지는 이유입니다.'
        },
        {
            headline: 'Your Daily Dose of<br>Confidence.',
            description: '매일 아침 거울 앞에서 느끼는 작은 변화가<br>당신의 하루를 완전히 새롭게 만들어 드립니다.'
        },
        {
            headline: 'Always ready for<br>Your best day',
            description: '눈을 뜨고 마주한 투명한 변화,<br>당신의 하루가 맑아지는 이유입니다.'
        }
    ];
    
    // 슬라이드 전환 함수
    function changeSlide(index) {
        // 텍스트 페이드 아웃 (이미지와 동시에 시작)
        if (headlineElement && descriptionElement) {
            headlineElement.style.opacity = '0';
            descriptionElement.style.opacity = '0';
        }
        
        // 모든 슬라이드 비활성화 (이미지 페이드 아웃)
        slideItems.forEach((slide, i) => {
            slide.classList.remove('active');
        });
        
        // 이미지와 텍스트가 동시에 페이드 인되도록 설정
        // requestAnimationFrame을 사용하여 브라우저 렌더링 사이클에 맞춤
        requestAnimationFrame(() => {
            // 선택된 슬라이드 활성화 (이미지 페이드 인 시작)
            if (slideItems[index] && index >= 0 && index < slideItems.length) {
                slideItems[index].classList.add('active');
            }
            
            // 텍스트 변경 및 페이드 인 시작 (이미지와 동시에)
            if (slideTexts[index] && headlineElement && descriptionElement) {
                headlineElement.innerHTML = slideTexts[index].headline;
                descriptionElement.innerHTML = slideTexts[index].description;
                
                // 다음 프레임에서 opacity를 1로 설정하여 페이드 인 시작
                requestAnimationFrame(() => {
                    headlineElement.style.opacity = '1';
                    descriptionElement.style.opacity = '1';
                });
            }
        });
    }
    
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
        
        // 슬라이드 전환
        changeSlide(index);
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
        
        // 첫 번째 슬라이드와 텍스트 설정 (페이드 효과 없이)
        currentIndex = 0;
        
        // 첫 번째 슬라이드 활성화
        if (slideItems[0]) {
            slideItems[0].classList.add('active');
        }
        
        // 첫 번째 텍스트 설정
        if (slideTexts[0] && headlineElement && descriptionElement) {
            headlineElement.innerHTML = slideTexts[0].headline;
            descriptionElement.innerHTML = slideTexts[0].description;
            headlineElement.style.opacity = '1';
            descriptionElement.style.opacity = '1';
        }
        
        // 첫 번째 dot 활성화
        if (dots[0]) {
            dots[0].classList.add('active');
            const circle = dots[0].querySelector('.progress-ring .progress-circle');
            if (circle) {
                circle.style.strokeDasharray = circumference;
                circle.style.strokeDashoffset = circumference;
            }
        }
        
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
    
    // dot 클릭 시 해당 dot으로 이동 및 슬라이드 전환
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

