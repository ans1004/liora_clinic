// Patents 페이지네이션 기능

document.addEventListener('DOMContentLoaded', function() {
    const cardList = document.querySelector('.patents-card-list');
    const paginationNumbers = document.querySelectorAll('.pagination-number');
    const paginationFirst = document.querySelector('.pagination-first');
    const paginationPrev = document.querySelector('.pagination-prev');
    const paginationNext = document.querySelector('.pagination-next');
    const paginationLast = document.querySelector('.pagination-last');
    
    let currentPage = 1;
    const cardsPerPage = 8;
    const totalCards = cardList ? cardList.children.length : 0;
    const totalPages = Math.ceil(totalCards / cardsPerPage);
    
    // 카드들을 페이지별로 나누기
    function showPage(page) {
        if (!cardList) return;
        
        const cards = Array.from(cardList.children);
        const startIndex = (page - 1) * cardsPerPage;
        const endIndex = startIndex + cardsPerPage;
        
        // 모든 카드 숨기기
        cards.forEach((card, index) => {
            if (index >= startIndex && index < endIndex) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
        
        // 페이지 번호 업데이트
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
    
    // 버튼 상태 업데이트
    function updateButtonStates(page) {
        // 첫 페이지 버튼
        if (paginationFirst) {
            paginationFirst.disabled = page === 1;
        }
        
        // 이전 페이지 버튼
        if (paginationPrev) {
            paginationPrev.disabled = page === 1;
        }
        
        // 다음 페이지 버튼
        if (paginationNext) {
            paginationNext.disabled = page === totalPages;
        }
        
        // 마지막 페이지 버튼
        if (paginationLast) {
            paginationLast.disabled = page === totalPages;
        }
    }
    
    // 페이지 번호 클릭 이벤트
    paginationNumbers.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            currentPage = index + 1;
            showPage(currentPage);
        });
    });
    
    // 첫 페이지 버튼
    if (paginationFirst) {
        paginationFirst.addEventListener('click', () => {
            currentPage = 1;
            showPage(currentPage);
        });
    }
    
    // 이전 페이지 버튼
    if (paginationPrev) {
        paginationPrev.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                showPage(currentPage);
            }
        });
    }
    
    // 다음 페이지 버튼
    if (paginationNext) {
        paginationNext.addEventListener('click', () => {
            if (currentPage < totalPages) {
                currentPage++;
                showPage(currentPage);
            }
        });
    }
    
    // 마지막 페이지 버튼
    if (paginationLast) {
        paginationLast.addEventListener('click', () => {
            currentPage = totalPages;
            showPage(currentPage);
        });
    }
    
    // 초기 페이지 표시
    showPage(1);
});

