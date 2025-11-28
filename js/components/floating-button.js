// Floating 버튼 컴포넌트 - 서브 메뉴 기능 포함
(function() {
    'use strict';

    // Floating 버튼 초기화 함수
    function initFloatingButton() {
        const floatingButton = document.querySelector('.floating-button');
        if (!floatingButton) return;

        // 사파리에서 position: fixed가 제대로 동작하도록 floating 버튼을 body에 직접 배치
        // 부모 요소의 overflow: hidden이나 transform이 position: fixed에 영향을 주는 것을 방지
        const originalParent = floatingButton.parentElement;
        document.body.appendChild(floatingButton);

        // 서브 Floating 버튼들 데이터
        // 경로는 현재 페이지의 위치에 따라 조정
        const basePath = window.location.pathname.includes('/liora_clinic/') ? '/liora_clinic/' : './';
        const subButtons = [
            {
                icon: `${basePath}public/icon/talktalk.svg`,
                href: 'https://talk.naver.com/',
                alt: 'Home'
            },
            {
                icon: `${basePath}public/icon/naver-svgrepo-com.svg`,
                href: 'https://m.place.naver.com/my/timeline?tab=RESERVATION',
                alt: 'Naver'
            },
            {
                icon: `${basePath}public/icon/Floating_Ka.svg`,
                href: 'https://business.kakao.com/info/kakaotalkchannel/',
                alt: 'Kakao'
            }
        ];

        // 서브 버튼 컨테이너 생성
        const subButtonsContainer = document.createElement('div');
        subButtonsContainer.className = 'floating-sub-buttons';
        
        // 각 서브 버튼 생성
        subButtons.forEach((button, index) => {
            const subButton = document.createElement('a');
            subButton.href = button.href;
            subButton.className = 'floating-sub-button';
            subButton.setAttribute('data-index', index);
            
            const icon = document.createElement('img');
            icon.src = button.icon;
            icon.alt = button.alt;
            icon.className = 'floating-sub-icon';
            
            subButton.appendChild(icon);
            subButtonsContainer.appendChild(subButton);
        });

        // 서브 버튼 컨테이너를 body에 추가 (floating 버튼과 함께)
        document.body.appendChild(subButtonsContainer);

        // 클릭 이벤트 리스너 추가
        floatingButton.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // active 클래스 토글
            floatingButton.classList.toggle('active');
            subButtonsContainer.classList.toggle('active');
        });

        // 외부 클릭 시 닫기
        document.addEventListener('click', function(e) {
            if (!floatingButton.contains(e.target) && !subButtonsContainer.contains(e.target)) {
                floatingButton.classList.remove('active');
                subButtonsContainer.classList.remove('active');
            }
        });
    }

    // 페이지 로드 시 초기화
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initFloatingButton);
    } else {
        initFloatingButton();
    }
})();

