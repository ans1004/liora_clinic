// Our Solution 카드 스크롤 기능
(function() {
    'use strict';

    // our-solution 섹션 찾기
    const solutionSection = document.querySelector('.our-solution');
    if (!solutionSection) return; // 섹션이 없으면 종료

    const cardsContainer = solutionSection.querySelector('.our-solution-cards');
    const cards = solutionSection.querySelectorAll('.our-solution-card');
    const prevButton = solutionSection.querySelector('.control .button-prev');
    const nextButton = solutionSection.querySelector('.control .button-next');

    if (!cardsContainer || cards.length === 0) return; // 카드가 없으면 종료

    // 카드 너비와 간격 계산
    const cardWidth = 416; // CSS에서 설정된 카드 너비
    const gap = 28; // CSS에서 설정된 gap
    const scrollAmount = cardWidth + gap; // 한 번에 스크롤할 거리

    // 스크롤 함수
    function scrollCards(direction) {
        if (!cardsContainer) return;

        const currentScroll = cardsContainer.scrollLeft;
        let targetScroll;

        if (direction === 'next') {
            // 다음 카드로 스크롤
            targetScroll = currentScroll + scrollAmount;
            // 마지막 카드에 도달했는지 확인
            const maxScroll = cardsContainer.scrollWidth - cardsContainer.clientWidth;
            if (targetScroll > maxScroll) {
                targetScroll = maxScroll; // 마지막 위치로
            }
        } else {
            // 이전 카드로 스크롤
            targetScroll = currentScroll - scrollAmount;
            if (targetScroll < 0) {
                targetScroll = 0; // 첫 번째 위치로
            }
        }

        // 부드러운 스크롤
        cardsContainer.scrollTo({
            left: targetScroll,
            behavior: 'smooth'
        });
    }

    // 버튼 상태 업데이트 함수
    function updateButtonStates() {
        if (!cardsContainer || !prevButton || !nextButton) return;

        const currentScroll = cardsContainer.scrollLeft;
        const maxScroll = cardsContainer.scrollWidth - cardsContainer.clientWidth;
        const scrollThreshold = 1; // 1px 오차 허용

        // 이전 버튼: 맨 왼쪽이면 비활성화
        if (currentScroll <= scrollThreshold) {
            prevButton.style.opacity = '0.5';
            prevButton.style.cursor = 'not-allowed';
            prevButton.disabled = true;
        } else {
            prevButton.style.opacity = '1';
            prevButton.style.cursor = 'pointer';
            prevButton.disabled = false;
        }

        // 다음 버튼: 맨 오른쪽이면 비활성화
        if (currentScroll >= maxScroll - scrollThreshold) {
            nextButton.style.opacity = '0.5';
            nextButton.style.cursor = 'not-allowed';
            nextButton.disabled = true;
        } else {
            nextButton.style.opacity = '1';
            nextButton.style.cursor = 'pointer';
            nextButton.disabled = false;
        }
    }

    // 이전 버튼 이벤트 리스너
    if (prevButton) {
        prevButton.addEventListener('click', (e) => {
            e.preventDefault();
            if (!prevButton.disabled) {
                scrollCards('prev');
                // 왼쪽 버튼을 누르면 항상 reversed 클래스 제거 (원래대로 돌아오기)
                solutionSection.classList.remove('reversed');
            }
        });
    }

    // 다음 버튼 이벤트 리스너
    if (nextButton) {
        nextButton.addEventListener('click', (e) => {
            e.preventDefault();
            if (!nextButton.disabled) {
                scrollCards('next');
                // our-solution 섹션에 reversed 클래스 추가 (padding 반대로)
                solutionSection.classList.add('reversed');
            }
        });
    }

    // 스크롤 이벤트 리스너 (버튼 상태 업데이트)
    if (cardsContainer) {
        cardsContainer.addEventListener('scroll', updateButtonStates);
    }

    // 초기 버튼 상태 설정
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', updateButtonStates);
    } else {
        updateButtonStates();
    }

    // 리사이즈 이벤트 리스너 (반응형 대응)
    window.addEventListener('resize', updateButtonStates);
})();




