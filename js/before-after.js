// Before & After 페이지 필터링 및 페이지네이션 로직

document.addEventListener('DOMContentLoaded', function() {
    const tabItems = document.querySelectorAll('.before-after-tab-item');
    const cards = document.querySelectorAll('.before-after-card');
    const cardList = document.querySelector('.before-after-card-list');
    const paginationNumbers = document.querySelectorAll('.pagination-number');
    const paginationFirst = document.querySelector('.pagination-first');
    const paginationPrev = document.querySelector('.pagination-prev');
    const paginationNext = document.querySelector('.pagination-next');
    const paginationLast = document.querySelector('.pagination-last');
    
    let currentCategory = 'all';
    let currentPage = 1;
    const cardsPerPage = 4;
    let filteredCards = Array.from(cards);
    let totalPages = Math.ceil(filteredCards.length / cardsPerPage);
    
    // 탭 필터링 기능
    tabItems.forEach(tab => {
        tab.addEventListener('click', function() {
            // 활성 탭 업데이트
            tabItems.forEach(t => {
                t.classList.remove('active');
                if (t === tab) {
                    t.classList.add('active');
                }
            });
            
            // 카테고리 설정
            currentCategory = this.getAttribute('data-category');
            
            // 카드 필터링
            if (currentCategory === 'all') {
                filteredCards = Array.from(cards);
            } else {
                filteredCards = Array.from(cards).filter(card => {
                    return card.getAttribute('data-category') === currentCategory;
                });
            }
            
            // 페이지 재계산
            totalPages = Math.ceil(filteredCards.length / cardsPerPage);
            currentPage = 1;
            
            // 카드 표시 및 페이지네이션 업데이트
            showPage(currentPage);
            updatePaginationNumbers();
        });
    });
    
    // 페이지 표시 함수
    function showPage(page) {
        if (!cardList) return;
        
        // 모든 카드 숨기기
        cards.forEach(card => {
            card.style.display = 'none';
        });
        
        // 현재 페이지의 카드만 표시
        const startIndex = (page - 1) * cardsPerPage;
        const endIndex = startIndex + cardsPerPage;
        
        filteredCards.slice(startIndex, endIndex).forEach(card => {
            card.style.display = 'flex';
        });
        
        // 페이지 번호 활성화 업데이트
        paginationNumbers.forEach((btn, index) => {
            if (index + 1 === page) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        // 버튼 상태 업데이트
        updateButtonStates(page);
    }
    
    // 페이지네이션 번호 업데이트
    function updatePaginationNumbers() {
        const numbersContainer = document.querySelector('.pagination-numbers');
        if (!numbersContainer) return;
        
        numbersContainer.innerHTML = '';
        
        for (let i = 1; i <= totalPages; i++) {
            const button = document.createElement('button');
            button.classList.add('pagination-number');
            button.textContent = i;
            if (i === currentPage) {
                button.classList.add('active');
            }
            button.addEventListener('click', () => {
                currentPage = i;
                showPage(currentPage);
            });
            numbersContainer.appendChild(button);
        }
    }
    
    // 버튼 상태 업데이트
    function updateButtonStates(page) {
        if (paginationFirst) {
            paginationFirst.disabled = page === 1;
        }
        if (paginationPrev) {
            paginationPrev.disabled = page === 1;
        }
        if (paginationNext) {
            paginationNext.disabled = page === totalPages;
        }
        if (paginationLast) {
            paginationLast.disabled = page === totalPages;
        }
    }
    
    // 페이지네이션 버튼 이벤트
    if (paginationFirst) {
        paginationFirst.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage = 1;
                showPage(currentPage);
            }
        });
    }
    
    if (paginationPrev) {
        paginationPrev.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                showPage(currentPage);
            }
        });
    }
    
    if (paginationNext) {
        paginationNext.addEventListener('click', () => {
            if (currentPage < totalPages) {
                currentPage++;
                showPage(currentPage);
            }
        });
    }
    
    if (paginationLast) {
        paginationLast.addEventListener('click', () => {
            if (currentPage < totalPages) {
                currentPage = totalPages;
                showPage(currentPage);
            }
        });
    }
    
    // 초기 페이지 표시
    showPage(1);
    updatePaginationNumbers();
});

