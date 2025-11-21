// Notice 페이지 동적 생성 및 기능 구현

// Notice 데이터 (Notice detail과 동일한 제목과 날짜 형식 사용)
const noticeData = {
    "notices": [
        {
            "id": 1,
            "category": "공지",
            "title": "리오라의원 리뉴얼 오픈 안내",
            "date": "2025.10.01"
        },
        {
            "id": 2,
            "category": "공지",
            "title": "주차장 이용 안내",
            "date": "2025.10.01"
        },
        {
            "id": 3,
            "category": "공지",
            "title": "리오라의원 리뉴얼 오픈 안내",
            "date": "2025.10.01"
        },
        {
            "id": 4,
            "category": "공지",
            "title": "원장님 학회 참석으로 인한 11월 8일 휴진 안내",
            "date": "2025.10.01"
        },
        {
            "id": 5,
            "category": "공지",
            "title": "시술 전후 주의사항 안내",
            "date": "2025.10.01"
        },
        {
            "id": 6,
            "category": "공지",
            "title": "개인정보처리방침 개정",
            "date": "2025.11.05"
        },
        {
            "id": 7,
            "category": "공지",
            "title": "신규 패키지 출시 안내",
            "date": "2025.10.01"
        },
        {
            "id": 8,
            "category": "공지",
            "title": "상담 예약 시스템 업데이트",
            "date": "2025.10.01"
        },
        {
            "id": 9,
            "category": "공지",
            "title": "멤버십 혜택 조정 안내",
            "date": "2025.10.01"
        },
        {
            "id": 10,
            "category": "공지",
            "title": "VAT 적용 관련 정책 안내",
            "date": "2025.10.01"
        }
    ]
};

document.addEventListener('DOMContentLoaded', function() {
    const tableList = document.querySelector('.notice-table-list');
    const paginationContainer = document.querySelector('.notice-pagination');
    const searchInput = document.querySelector('.notice-search-input');
    const filterBtn = document.querySelector('.notice-filter-btn');
    
    let currentPage = 1;
    const itemsPerPage = 10; // 페이지당 10개 항목
    let filteredNotices = noticeData.notices;
    let totalPages = Math.ceil(filteredNotices.length / itemsPerPage);
    
    // 테이블 생성
    function createTable(notices) {
        if (!tableList) return;
        
        tableList.innerHTML = '';
        
        notices.forEach(notice => {
            const row = document.createElement('div');
            row.className = 'notice-table-row';
            row.setAttribute('data-id', notice.id);
            
            const content = document.createElement('div');
            content.className = 'notice-table-row-content';
            
            const category = document.createElement('div');
            category.className = 'notice-table-category liora-body-3';
            category.textContent = notice.category;
            
            const title = document.createElement('div');
            title.className = 'notice-table-title liora-body-3';
            title.textContent = notice.title;
            
            const date = document.createElement('div');
            date.className = 'notice-table-date liora-body-3';
            date.textContent = notice.date;
            
            content.appendChild(category);
            content.appendChild(title);
            content.appendChild(date);
            row.appendChild(content);
            
            // 클릭 이벤트 (상세 페이지로 이동)
            row.addEventListener('click', () => {
                window.location.href = `notice-detail.html?id=${notice.id}`;
            });
            
            tableList.appendChild(row);
        });
    }
    
    // 필터링 및 표시
    function filterAndDisplay() {
        // 검색 필터링
        const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
        if (searchTerm) {
            filteredNotices = noticeData.notices.filter(notice => {
                return notice.title.toLowerCase().includes(searchTerm) ||
                       notice.category.toLowerCase().includes(searchTerm);
            });
        } else {
            filteredNotices = noticeData.notices;
        }
        
        // 페이지 계산
        totalPages = Math.ceil(filteredNotices.length / itemsPerPage);
        
        // 현재 페이지의 Notice만 표시
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const pageNotices = filteredNotices.slice(startIndex, endIndex);
        
        createTable(pageNotices);
        updatePagination();
    }
    
    // 페이지네이션 생성
    function updatePagination() {
        if (!paginationContainer) return;
        
        paginationContainer.innerHTML = '';
        
        // First, Prev 버튼
        const firstBtn = createPaginationButton('first', 'first', currentPage === 1);
        const prevBtn = createPaginationButton('prev', 'prev', currentPage === 1);
        
        paginationContainer.appendChild(firstBtn);
        paginationContainer.appendChild(prevBtn);
        
        // 페이지 번호
        const numbersContainer = document.createElement('div');
        numbersContainer.className = 'pagination-numbers';
        
        for (let i = 1; i <= totalPages; i++) {
            const numberBtn = document.createElement('button');
            numberBtn.className = 'pagination-number liora-body-3';
            if (i === currentPage) {
                numberBtn.classList.add('active');
            }
            numberBtn.textContent = i;
            numberBtn.addEventListener('click', () => {
                currentPage = i;
                filterAndDisplay();
            });
            numbersContainer.appendChild(numberBtn);
        }
        
        paginationContainer.appendChild(numbersContainer);
        
        // Next, Last 버튼
        const nextBtn = createPaginationButton('next', 'next', currentPage === totalPages);
        const lastBtn = createPaginationButton('last', 'last', currentPage === totalPages);
        
        paginationContainer.appendChild(nextBtn);
        paginationContainer.appendChild(lastBtn);
    }
    
    // 페이지네이션 버튼 생성
    function createPaginationButton(type, label, disabled) {
        const button = document.createElement('button');
        button.className = `pagination-arrow pagination-${type}`;
        button.disabled = disabled;
        
        let svgPath = '';
        if (type === 'first') {
            svgPath = 'M18 18L12 12L18 6M12 18L6 12L12 6';
        } else if (type === 'prev') {
            svgPath = 'M15 18L9 12L15 6';
        } else if (type === 'next') {
            svgPath = 'M9 18L15 12L9 6';
        } else if (type === 'last') {
            svgPath = 'M6 18L12 12L6 6M12 18L18 12L12 6';
        }
        
        button.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="${svgPath}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `;
        
        button.addEventListener('click', () => {
            if (disabled) return;
            
            if (type === 'first') {
                currentPage = 1;
            } else if (type === 'prev') {
                currentPage--;
            } else if (type === 'next') {
                currentPage++;
            } else if (type === 'last') {
                currentPage = totalPages;
            }
            
            filterAndDisplay();
        });
        
        return button;
    }
    
    // 검색 기능
    if (searchInput) {
        let searchTimeout;
        searchInput.addEventListener('input', () => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                currentPage = 1;
                filterAndDisplay();
            }, 300);
        });
    }
    
    // 필터 버튼 기능 (필요시 확장 가능)
    if (filterBtn) {
        filterBtn.addEventListener('click', () => {
            // TODO: 필터 기능 추가
            console.log('Filter clicked');
        });
    }
    
    // 초기화
    filterAndDisplay();
});

