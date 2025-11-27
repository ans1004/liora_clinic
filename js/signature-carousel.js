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

    // 모바일 체크 함수
    function isMobile() {
        return window.innerWidth <= 768;
    }

    // 카드 전환 함수
    function showCard(index) {
        // 인덱스 범위 체크
        if (index < 0) {
            index = totalCards - 1; // 마지막 카드로
        } else if (index >= totalCards) {
            index = 0; // 첫 번째 카드로
        }

        // 모바일에서 슬라이드 방식
        if (isMobile()) {
            // 모든 카드에 클래스 제거
            cards.forEach((card, i) => {
                card.classList.remove('active', 'prev', 'next');
                
                if (i === index) {
                    card.classList.add('active');
                } else if (i < index) {
                    card.classList.add('prev');
                } else {
                    card.classList.add('next');
                }
            });
        } else {
            // 데스크탑에서는 기존 방식 유지
            cards.forEach((card, i) => {
                if (i === index) {
                    card.classList.add('active');
                } else {
                    card.classList.remove('active');
                }
            });
        }

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

    // 모바일 터치 슬라이드 기능
    if (isMobile()) {
        let touchStartX = 0;
        let touchEndX = 0;
        let isDragging = false;
        let currentCard = null;
        let nextCard = null;
        let prevCard = null;

        // 터치 시작
        cardsWrapper.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].clientX;
            isDragging = true;
            currentCard = cards[currentIndex];
            nextCard = currentIndex < totalCards - 1 ? cards[currentIndex + 1] : null;
            prevCard = currentIndex > 0 ? cards[currentIndex - 1] : null;
            
            // 드래그 중에는 transition 제거
            if (currentCard) currentCard.style.transition = 'none';
            if (nextCard) nextCard.style.transition = 'none';
            if (prevCard) prevCard.style.transition = 'none';
        }, { passive: true });

        // 터치 이동
        cardsWrapper.addEventListener('touchmove', (e) => {
            if (!isDragging || !currentCard) return;
            touchEndX = e.touches[0].clientX;
            const diff = touchStartX - touchEndX;
            
            // 현재 카드를 드래그 방향으로 이동
            currentCard.style.transform = `translateX(${diff}px)`;
            
            // 다음 카드 보이기 (오른쪽으로 드래그)
            if (diff > 0 && nextCard) {
                nextCard.style.opacity = '1';
                nextCard.style.visibility = 'visible';
                nextCard.style.transform = `translateX(calc(100% + ${diff}px))`;
            }
            
            // 이전 카드 보이기 (왼쪽으로 드래그)
            if (diff < 0 && prevCard) {
                prevCard.style.opacity = '1';
                prevCard.style.visibility = 'visible';
                prevCard.style.transform = `translateX(calc(-100% + ${diff}px))`;
            }
        }, { passive: true });

        // 터치 종료
        cardsWrapper.addEventListener('touchend', () => {
            if (!isDragging) return;
            isDragging = false;
            
            const diff = touchStartX - touchEndX;
            const threshold = 50; // 최소 스와이프 거리 (픽셀)
            
            // transition 다시 활성화
            cards.forEach(card => {
                card.style.transition = '';
                card.style.transform = '';
                card.style.opacity = '';
                card.style.visibility = '';
            });
            
            if (Math.abs(diff) > threshold) {
                if (diff > 0) {
                    // 오른쪽으로 스와이프 (다음 카드)
                    goToNext();
                } else {
                    // 왼쪽으로 스와이프 (이전 카드)
                    goToPrev();
                }
            } else {
                // 스와이프 거리가 부족하면 원래 위치로 복귀
                showCard(currentIndex);
            }
        }, { passive: true });

        // 터치 취소
        cardsWrapper.addEventListener('touchcancel', () => {
            if (isDragging) {
                isDragging = false;
                cards.forEach(card => {
                    card.style.transition = '';
                    card.style.transform = '';
                    card.style.opacity = '';
                    card.style.visibility = '';
                });
                showCard(currentIndex);
            }
        }, { passive: true });
    }

    // 초기화: 첫 번째 카드 표시
    showCard(0);
})();




