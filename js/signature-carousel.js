// Signature 카드 전환 기능
(function() {
    'use strict';

    // signature 섹션 찾기
    const signatureSection = document.querySelector('.signature');
    if (!signatureSection) return; // signature 섹션이 없으면 종료

    const cardsWrapper = signatureSection.querySelector('.signature-cards-wrapper');
    const cards = signatureSection.querySelectorAll('.signature-card');
    const dots = signatureSection.querySelectorAll('.carousel-dot .dot');
    const prevButtons = signatureSection.querySelectorAll('.button-prev');
    const nextButtons = signatureSection.querySelectorAll('.button-next');

    if (!cardsWrapper || cards.length === 0) return; // 카드가 없으면 종료

    let currentIndex = 0;
    const totalCards = cards.length;

    // 카드 전환 함수
    function showCard(index) {
        // 인덱스 범위 체크
        if (index < 0) {
            index = totalCards - 1; // 마지막 카드로
        } else if (index >= totalCards) {
            index = 0; // 첫 번째 카드로
        }

        // 모든 카드 비활성화
        cards.forEach((card, i) => {
            if (i === index) {
                card.classList.add('active');
            } else {
                card.classList.remove('active');
            }
        });

        // 모든 dot 비활성화
        dots.forEach((dot, i) => {
            if (i === index) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });

        currentIndex = index;
    }

    // 이전 카드로 이동
    function goToPrev() {
        showCard(currentIndex - 1);
    }

    // 다음 카드로 이동
    function goToNext() {
        showCard(currentIndex + 1);
    }

    // 이전 버튼 이벤트 리스너
    prevButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            goToPrev();
        });
    });

    // 다음 버튼 이벤트 리스너
    nextButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            goToNext();
        });
    });

    // dot 클릭 이벤트 리스너
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showCard(index);
        });
    });

    // 초기화: 첫 번째 카드 표시
    showCard(0);
})();




