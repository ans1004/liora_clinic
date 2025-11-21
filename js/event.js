// Event 페이지 탭 필터링 및 페이지네이션 로직

document.addEventListener('DOMContentLoaded', function() {
    const tabItems = document.querySelectorAll('.event-tab-item');
    const cards = document.querySelectorAll('.event-card');
    const cardList = document.querySelector('.event-card-list');
    const paginationNumbers = document.querySelectorAll('.event-pagination .pagination-number');
    const paginationFirst = document.querySelector('.event-pagination .pagination-first');
    const paginationPrev = document.querySelector('.event-pagination .pagination-prev');
    const paginationNext = document.querySelector('.event-pagination .pagination-next');
    const paginationLast = document.querySelector('.event-pagination .pagination-last');
    
    let currentCategory = 'ongoing'; // 기본값: 진행중 이벤트
    let currentPage = 1;
    const cardsPerPage = 9; // 페이지당 9개 카드
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
            if (currentCategory === 'ongoing') {
                filteredCards = Array.from(cards).filter(card => {
                    return card.getAttribute('data-category') === 'ongoing';
                });
            } else if (currentCategory === 'ended') {
                filteredCards = Array.from(cards).filter(card => {
                    return card.getAttribute('data-category') === 'ended';
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
        
        currentPage = page; // currentPage 업데이트
        
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
        
        // 페이지 번호 활성화 업데이트 (동적으로 생성된 버튼 다시 선택)
        const currentPaginationNumbers = document.querySelectorAll('.event-pagination .pagination-number');
        currentPaginationNumbers.forEach((btn) => {
            if (parseInt(btn.textContent) === page) {
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
        const numbersContainer = document.querySelector('.event-pagination .pagination-numbers');
        if (!numbersContainer) return;
        
        numbersContainer.innerHTML = '';
        
        for (let i = 1; i <= totalPages; i++) {
            const button = document.createElement('button');
            button.classList.add('pagination-number', 'liora-body-3');
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
    
    // 카드 전체 클릭 이벤트 추가
    cards.forEach(card => {
        // 카드 전체를 클릭 가능하게 만들기
        card.style.cursor = 'pointer';
        
        card.addEventListener('click', function(e) {
            // 제목 링크를 클릭한 경우는 기본 동작 유지
            if (e.target.tagName === 'A' || e.target.closest('a')) {
                return;
            }
            
            // 카드의 data-id 가져오기
            const eventId = this.getAttribute('data-id');
            if (eventId) {
                window.location.href = `event-detail.html?id=${eventId}`;
            }
        });
    });
    
    // 초기 필터링 및 페이지 표시
    filteredCards = Array.from(cards).filter(card => {
        return card.getAttribute('data-category') === 'ongoing';
    });
    totalPages = Math.ceil(filteredCards.length / cardsPerPage);
    showPage(1);
    updatePaginationNumbers();
});

