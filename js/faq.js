// FAQ 페이지 동적 생성 및 기능 구현

// FAQ 데이터 (JSON에서 직접 포함)
const faqData = {
  "tabs": [
    {
      "id": "all",
      "label": "전체"
    },
    {
      "id": "treatment",
      "label": "시술 및 진료"
    },
    {
      "id": "effect",
      "label": "시술 효과"
    },
    {
      "id": "reservation",
      "label": "예약 및 방문"
    }
  ],
  "faqs": [
    {
      "id": 1,
      "category": "treatment",
      "categoryLabel": "시술 및 진료",
      "question": "시술 전 상담에서 어떤 내용을 확인하나요?",
      "answer": "시술 전 상담에서는 환자의 피부 상태, 과거 시술 이력, 복용 중인 약물, 알레르기 여부, 기대 효과 등을 종합적으로 확인합니다. 또한 시술 방법과 예상 결과, 주의사항에 대해 상세히 설명드리며, 환자분의 목표와 기대치를 파악하여 최적의 치료 계획을 수립합니다."
    },
    {
      "id": 2,
      "category": "treatment",
      "categoryLabel": "시술 및 진료",
      "question": "처음 방문 시 어떤 절차로 진료가 진행되나요?",
      "answer": "처음 방문 시에는 접수 후 간단한 문진표 작성, 의료진과의 상담, 피부 진단, 치료 계획 수립 순서로 진행됩니다. 상담을 통해 환자분의 피부 상태와 목표를 파악한 후, 맞춤형 치료 방안을 제시해드립니다. 시술을 진행하실 경우, 동의서 작성 후 시술이 진행됩니다."
    },
    {
      "id": 3,
      "category": "treatment",
      "categoryLabel": "시술 및 진료",
      "question": "시술 후 붓기는 언제쯤 빠지나요?",
      "answer": "시술 후 붓기는 보통 2-3일 정도면 빠집니다. 하지만 개인에 따라 붓기와 출혈, 멍, 신경손상 등 부작용이 발생할 수 있으며, 해당 시술 결과는 개인마다 차이가 있을 수 있습니다."
    },
    {
      "id": 4,
      "category": "treatment",
      "categoryLabel": "시술 및 진료",
      "question": "시술 후 주의해야 할 점이 있나요?",
      "answer": "시술 후 24시간 동안은 사우나, 찜질방, 과도한 운동 등 땀을 많이 흘리는 활동을 피하시고, 시술 부위를 자극하지 않도록 주의하세요. 자외선 차단제를 꼼꼼히 바르시고, 의료진이 권장하는 스킨케어 제품을 사용하시기 바랍니다. 시술 후 일주일 정도는 마사지나 강한 압력을 가하는 행위를 피해주세요."
    },
    {
      "id": 5,
      "category": "treatment",
      "categoryLabel": "시술 및 진료",
      "question": "약물 복용 중인데 시술 가능할까요?",
      "answer": "복용 중인 약물의 종류에 따라 시술 가능 여부가 달라질 수 있습니다. 특히 항응고제나 혈액 희석제를 복용 중이시라면 사전에 의료진에게 알려주시기 바랍니다. 상담 시 복용 중인 약물에 대해 정확히 알려주시면, 안전한 시술 계획을 수립해드릴 수 있습니다."
    },
    {
      "id": 6,
      "category": "treatment",
      "categoryLabel": "시술 및 진료",
      "question": "일상생활 복귀는 언제 가능한가요?",
      "answer": "대부분의 시술은 시술 직후 바로 일상생활로 복귀하실 수 있습니다. 다만 시술 종류에 따라 다소의 휴식이 필요할 수 있으며, 시술 후 1-2일 정도는 과도한 활동을 피하시는 것이 좋습니다. 구체적인 복귀 시기는 시술 종류와 개인 상태에 따라 다르므로, 시술 전 상담 시 의료진에게 확인하시기 바랍니다."
    },
    {
      "id": 7,
      "category": "treatment",
      "categoryLabel": "시술 및 진료",
      "question": "부작용이나 리스크가 있나요?",
      "answer": "모든 의료 시술에는 일정한 부작용과 리스크가 있을 수 있습니다. 일반적으로 발생할 수 있는 부작용으로는 붓기, 멍, 발적, 통증 등이 있으며, 대부분 일시적입니다. 드물게 감염, 색소 침착, 흉터 등의 합병증이 발생할 수 있으므로, 시술 전 상담을 통해 충분히 이해하신 후 진행하시기 바랍니다."
    },
    {
      "id": 8,
      "category": "treatment",
      "categoryLabel": "시술 및 진료",
      "question": "통증이나 마취는 필요한가요?",
      "answer": "시술 종류에 따라 통증 정도가 다르며, 대부분의 시술은 표면 마취제나 국소 마취를 사용하여 통증을 최소화합니다. 일부 시술의 경우 마취 없이도 진행 가능하며, 통증이 걱정되시면 시술 전 의료진과 상의하여 적절한 마취 방법을 선택하실 수 있습니다."
    },
    {
      "id": 9,
      "category": "treatment",
      "categoryLabel": "시술 및 진료",
      "question": "시술은 어떻게 진행되나요?",
      "answer": "시술은 상담 후 동의서 작성, 시술 부위 소독, 마취 적용(필요시), 시술 진행, 시술 후 관리 순서로 진행됩니다. 시술 시간은 종류에 따라 30분에서 2시간 정도 소요되며, 시술 중 의료진이 단계별로 설명을 드립니다. 시술 후에는 관리 방법과 주의사항을 안내받으실 수 있습니다."
    },
    {
      "id": 10,
      "category": "treatment",
      "categoryLabel": "시술 및 진료",
      "question": "결제 및 환불 정책은 어떻게 되나요?",
      "answer": "결제는 현금, 카드, 계좌이체 등 다양한 방법으로 가능하며, 시술 전 또는 시술 후 결제하실 수 있습니다. 환불 정책은 시술 진행 여부와 개인 사정에 따라 다르므로, 예약 시 상세한 환불 규정을 안내받으실 수 있습니다. 시술 전 취소 시에는 수수료가 발생할 수 있으며, 시술 진행 후에는 부분 환불만 가능할 수 있습니다."
    }
  ]
};

document.addEventListener('DOMContentLoaded', function() {
    const tabContainer = document.querySelector('.faq-tab');
    const accordionList = document.querySelector('.faq-accordion-list');
    const paginationContainer = document.querySelector('.faq-pagination');
    const searchInput = document.querySelector('.faq-search-input');
    
    let currentCategory = 'all';
    let currentPage = 1;
    const itemsPerPage = 10; // 페이지당 10개 항목
    let filteredFaqs = faqData.faqs;
    let totalPages = Math.ceil(filteredFaqs.length / itemsPerPage);
    
    // 탭 생성
    function createTabs() {
        if (!tabContainer) return;
        
        tabContainer.innerHTML = '';
        
        faqData.tabs.forEach(tab => {
            const tabItem = document.createElement('button');
            tabItem.className = 'faq-tab-item';
            if (tab.id === 'all') {
                tabItem.classList.add('active');
            }
            tabItem.setAttribute('data-category', tab.id);
            
            const tabSpan = document.createElement('span');
            tabSpan.className = tab.id === 'all' ? 'liora-body-2-emphasized' : 'liora-body-2';
            tabSpan.textContent = tab.label;
            tabItem.appendChild(tabSpan);
            
            tabItem.addEventListener('click', () => {
                currentCategory = tab.id;
                currentPage = 1;
                
                // 활성 탭 업데이트
                document.querySelectorAll('.faq-tab-item').forEach(t => {
                    t.classList.remove('active');
                    const span = t.querySelector('span');
                    if (span) {
                        span.className = 'liora-body-2';
                    }
                });
                tabItem.classList.add('active');
                const activeSpan = tabItem.querySelector('span');
                if (activeSpan) {
                    activeSpan.className = 'liora-body-2-emphasized';
                }
                
                filterAndDisplay();
            });
            
            tabContainer.appendChild(tabItem);
        });
    }
    
    // 아코디언 생성
    function createAccordions(faqs) {
        if (!accordionList) return;
        
        accordionList.innerHTML = '';
        
        faqs.forEach(faq => {
            const accordion = document.createElement('div');
            accordion.className = 'faq-accordion';
            accordion.setAttribute('data-id', faq.id);
            accordion.setAttribute('data-category', faq.category);
            
            const container = document.createElement('div');
            container.className = 'faq-accordion-container';
            
            const textBlock = document.createElement('div');
            textBlock.className = 'faq-accordion-text-block';
            
            const titleBlock = document.createElement('div');
            titleBlock.className = 'faq-accordion-title-block';
            
            const category = document.createElement('div');
            category.className = 'faq-accordion-category liora-body-3';
            category.textContent = faq.categoryLabel;
            
            const question = document.createElement('div');
            question.className = 'faq-accordion-question liora-body-2-emphasized';
            question.textContent = faq.question;
            
            titleBlock.appendChild(category);
            titleBlock.appendChild(question);
            
            textBlock.appendChild(titleBlock);
            
            if (faq.answer) {
                const answer = document.createElement('div');
                answer.className = 'faq-accordion-answer liora-body-3-light';
                answer.textContent = faq.answer;
                textBlock.appendChild(answer);
            }
            container.appendChild(textBlock);
            
            const button = document.createElement('button');
            button.className = 'faq-accordion-button';
            button.innerHTML = `
                <svg class="faq-accordion-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            `;
            
            button.addEventListener('click', () => {
                accordion.classList.toggle('active');
            });
            
            container.appendChild(button);
            accordion.appendChild(container);
            accordionList.appendChild(accordion);
        });
    }
    
    // 필터링 및 표시
    function filterAndDisplay() {
        // 카테고리 필터링
        if (currentCategory === 'all') {
            filteredFaqs = faqData.faqs;
        } else {
            filteredFaqs = faqData.faqs.filter(faq => faq.category === currentCategory);
        }
        
        // 검색 필터링
        const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
        if (searchTerm) {
            filteredFaqs = filteredFaqs.filter(faq => {
                return faq.question.toLowerCase().includes(searchTerm) ||
                       (faq.answer && faq.answer.toLowerCase().includes(searchTerm));
            });
        }
        
        // 페이지 계산
        totalPages = Math.ceil(filteredFaqs.length / itemsPerPage);
        
        // 현재 페이지의 FAQ만 표시
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const pageFaqs = filteredFaqs.slice(startIndex, endIndex);
        
        createAccordions(pageFaqs);
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
    
    // 초기화
    createTabs();
    filterAndDisplay();
});

