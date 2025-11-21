// Notice Detail 페이지 동적 생성 및 기능 구현

// Notice Detail 데이터
const noticeDetailDataList = {
    1: {
        "id": 1,
        "category": "공지",
        "title": "리오라의원 리뉴얼 오픈 안내",
        "date": "2025.10.01",
        "description": `안녕하세요. 리오라의원입니다.

더 나은 의료 서비스 제공을 위해 리오라의원이 리뉴얼 오픈을 진행합니다.

• 새로운 시설과 최신 의료 장비로 업그레이드
• 더욱 쾌적하고 안전한 진료 환경 제공
• 전문 의료진의 맞춤형 상담 서비스 강화

리뉴얼 오픈 기념으로 다양한 이벤트와 혜택을 준비했습니다.
자세한 내용은 병원으로 문의해 주시기 바랍니다.

감사합니다.`,
        "attachment": {
            "filename": "리오라의원 리뉴얼 오픈 안내",
            "size": "[pdf, 245KB]",
            "url": "#"
        },
        "prevNotice": null,
        "nextNotice": {
            "id": 2,
            "title": "주차장 이용 안내",
            "url": "notice-detail.html?id=2"
        }
    },
    2: {
        "id": 2,
        "category": "공지",
        "title": "주차장 이용 안내",
        "date": "2025.10.01",
        "description": `리오라의원을 방문해 주시는 고객님께 주차장 이용 안내를 드립니다.

• 주차장 위치: 지하 1층, 지하 2층
• 주차 가능 대수: 총 50대
• 주차 요금: 진료 고객 2시간 무료 (초과 시 10분당 1,000원)
• 주차장 운영 시간: 평일 09:00 - 20:00, 토요일 09:00 - 15:00

주차 공간이 협소하오니 가급적 대중교통을 이용해 주시기 바랍니다.
주차 관련 문의는 02-1234-5678로 연락 주시기 바랍니다.`,
        "attachment": {
            "filename": "주차장 이용 안내",
            "size": "[pdf, 156KB]",
            "url": "#"
        },
        "prevNotice": {
            "id": 1,
            "title": "리오라의원 리뉴얼 오픈 안내",
            "url": "notice-detail.html?id=1"
        },
        "nextNotice": {
            "id": 3,
            "title": "리오라의원 리뉴얼 오픈 안내",
            "url": "notice-detail.html?id=3"
        }
    },
    3: {
        "id": 3,
        "category": "공지",
        "title": "리오라의원 리뉴얼 오픈 안내",
        "date": "2025.10.01",
        "description": `안녕하세요. 리오라의원입니다.

더 나은 의료 서비스 제공을 위해 리오라의원이 리뉴얼 오픈을 진행합니다.

• 새로운 시설과 최신 의료 장비로 업그레이드
• 더욱 쾌적하고 안전한 진료 환경 제공
• 전문 의료진의 맞춤형 상담 서비스 강화

리뉴얼 오픈 기념으로 다양한 이벤트와 혜택을 준비했습니다.
자세한 내용은 병원으로 문의해 주시기 바랍니다.

감사합니다.`,
        "attachment": {
            "filename": "리오라의원 리뉴얼 오픈 안내",
            "size": "[pdf, 245KB]",
            "url": "#"
        },
        "prevNotice": {
            "id": 2,
            "title": "주차장 이용 안내",
            "url": "notice-detail.html?id=2"
        },
        "nextNotice": {
            "id": 4,
            "title": "원장님 학회 참석으로 인한 11월 8일 휴진 안내",
            "url": "notice-detail.html?id=4"
        }
    },
    4: {
        "id": 4,
        "category": "공지",
        "title": "원장님 학회 참석으로 인한 11월 8일 휴진 안내",
        "date": "2025.10.01",
        "description": `안녕하세요. 리오라의원입니다.

원장님의 학회 참석으로 인해 2025년 11월 8일(토요일)은 휴진합니다.

• 휴진 일자: 2025년 11월 8일 (토요일)
• 정상 진료: 2025년 11월 10일 (월요일)부터

불편을 드려 죄송합니다.
긴급한 상담이 필요하신 경우 전화로 문의해 주시기 바랍니다.

감사합니다.`,
        "attachment": {
            "filename": "휴진 안내",
            "size": "[pdf, 128KB]",
            "url": "#"
        },
        "prevNotice": {
            "id": 3,
            "title": "리오라의원 리뉴얼 오픈 안내",
            "url": "notice-detail.html?id=3"
        },
        "nextNotice": {
            "id": 5,
            "title": "시술 전후 주의사항 안내",
            "url": "notice-detail.html?id=5"
        }
    },
    5: {
        "id": 5,
        "category": "공지",
        "title": "시술 전후 주의사항 안내",
        "date": "2025.10.01",
        "description": `리오라의원을 방문해 주시는 고객님께 시술 전후 주의사항을 안내드립니다.

[시술 전 주의사항]
• 시술 1주일 전부터 레이저, 필링 등 자극적인 시술 금지
• 시술 당일 화장은 가볍게 하시기 바랍니다
• 항응고제 복용 시 사전에 의료진에게 알려주세요

[시술 후 주의사항]
• 시술 후 24시간 동안 세안 금지
• 자외선 차단제 필수 사용 (SPF 50+)
• 사우나, 찜질방, 과도한 운동 금지
• 시술 부위 자극 및 긁기 금지

시술 후 이상 증상이 있으시면 즉시 병원으로 연락 주시기 바랍니다.`,
        "attachment": {
            "filename": "시술 전후 주의사항 안내",
            "size": "[pdf, 289KB]",
            "url": "#"
        },
        "prevNotice": {
            "id": 4,
            "title": "원장님 학회 참석으로 인한 11월 8일 휴진 안내",
            "url": "notice-detail.html?id=4"
        },
        "nextNotice": {
            "id": 6,
            "title": "개인정보처리방침 개정",
            "url": "notice-detail.html?id=6"
        }
    },
    6: {
        "id": 6,
        "category": "공지",
        "title": "개인정보처리방침 개정",
        "date": "2025.11.05",
        "description": `Liora 의원을 사랑해주시는 고객님께 감사드립니다.
더 안전하고 개인정보 보호를 위해 개인정보처리방침 내용이 일부 개정되어 안내드립니다.

• ○○항 내 수집 항목 세부 내용 업데이트
• 위탁 처리 업무 관련 협력 기관 항목 보완
• 보유 및 이용 기간 조정 명시
• 고객 문의 대응 프로세스 관련 내용 추가

개정된 개인정보처리방침은 2025년 11월 06일부터 적용됩니다.
보다 안전한 개인정보 관리를 위해 앞으로도 지속적인 개선과 보완을 진행하겠습니다.`,
        "attachment": {
            "filename": "2024 Liora 개인정보처리방침",
            "size": "[pdf, 328KB]",
            "url": "#"
        },
        "prevNotice": {
            "id": 5,
            "title": "시술 전후 주의사항 안내",
            "url": "notice-detail.html?id=5"
        },
        "nextNotice": {
            "id": 7,
            "title": "신규 패키지 출시 안내",
            "url": "notice-detail.html?id=7"
        }
    },
    7: {
        "id": 7,
        "category": "공지",
        "title": "신규 패키지 출시 안내",
        "date": "2025.10.01",
        "description": `리오라의원의 새로운 패키지가 출시되었습니다.

[신규 패키지 소개]
• 안티에이징 스페셜 패키지: 탄력 개선 + 주름 개선 통합 시술
• 색소 개선 프리미엄 패키지: 기미, 잡티, 주근깨 동시 관리
• 트러블 케어 패키지: 여드름 및 모공 관리 전문 프로그램

각 패키지는 개인 맞춤형 상담을 통해 최적의 시술 계획을 수립합니다.
자세한 내용은 병원으로 문의해 주시기 바랍니다.`,
        "attachment": {
            "filename": "신규 패키지 출시 안내",
            "size": "[pdf, 312KB]",
            "url": "#"
        },
        "prevNotice": {
            "id": 6,
            "title": "개인정보처리방침 개정",
            "url": "notice-detail.html?id=6"
        },
        "nextNotice": {
            "id": 8,
            "title": "상담 예약 시스템 업데이트",
            "url": "notice-detail.html?id=8"
        }
    },
    8: {
        "id": 8,
        "category": "공지",
        "title": "상담 예약 시스템 업데이트",
        "date": "2025.10.01",
        "description": `리오라의원의 상담 예약 시스템이 업데이트되었습니다.

[주요 변경사항]
• 온라인 예약 시스템 개선으로 더욱 편리한 예약 서비스 제공
• 실시간 예약 가능 시간 확인 기능 추가
• 예약 변경 및 취소 기능 강화
• SMS 예약 알림 서비스 신설

새로운 예약 시스템을 통해 더욱 편리하게 상담을 예약하실 수 있습니다.
예약 관련 문의는 02-1234-5678로 연락 주시기 바랍니다.`,
        "attachment": {
            "filename": "상담 예약 시스템 업데이트",
            "size": "[pdf, 267KB]",
            "url": "#"
        },
        "prevNotice": {
            "id": 7,
            "title": "신규 패키지 출시 안내",
            "url": "notice-detail.html?id=7"
        },
        "nextNotice": {
            "id": 9,
            "title": "멤버십 혜택 조정 안내",
            "url": "notice-detail.html?id=9"
        }
    },
    9: {
        "id": 9,
        "category": "공지",
        "title": "멤버십 혜택 조정 안내",
        "date": "2025.10.01",
        "description": `리오라의원 멤버십 고객님께 혜택 조정 안내를 드립니다.

[변경된 혜택]
• 일반 멤버십: 시술 금액의 5% 할인 (기존 3%)
• 프리미엄 멤버십: 시술 금액의 10% 할인 + 연 1회 무료 상담
• VIP 멤버십: 시술 금액의 15% 할인 + 연 2회 무료 상담 + 생일 케어 서비스

기존 멤버십 고객님께는 기존 혜택이 유지되며, 신규 가입 시 변경된 혜택이 적용됩니다.
자세한 내용은 병원으로 문의해 주시기 바랍니다.`,
        "attachment": {
            "filename": "멤버십 혜택 조정 안내",
            "size": "[pdf, 198KB]",
            "url": "#"
        },
        "prevNotice": {
            "id": 8,
            "title": "상담 예약 시스템 업데이트",
            "url": "notice-detail.html?id=8"
        },
        "nextNotice": {
            "id": 10,
            "title": "VAT 적용 관련 정책 안내",
            "url": "notice-detail.html?id=10"
        }
    },
    10: {
        "id": 10,
        "category": "공지",
        "title": "VAT 적용 관련 정책 안내",
        "date": "2025.10.01",
        "description": `리오라의원을 이용해 주시는 고객님께 VAT 적용 관련 안내를 드립니다.

[VAT 적용 안내]
• 모든 시술 및 상담 비용에 부가가치세(VAT)가 포함되어 있습니다
• 영수증 발급 시 별도로 요청해 주시면 발급해 드립니다
• 세금계산서 발급이 필요한 경우 접수 시 말씀해 주시기 바랍니다

VAT 관련 문의는 병원으로 연락 주시기 바랍니다.
감사합니다.`,
        "attachment": {
            "filename": "VAT 적용 관련 정책 안내",
            "size": "[pdf, 175KB]",
            "url": "#"
        },
        "prevNotice": {
            "id": 9,
            "title": "멤버십 혜택 조정 안내",
            "url": "notice-detail.html?id=9"
        },
        "nextNotice": null
    }
};

document.addEventListener('DOMContentLoaded', function() {
    // URL 파라미터에서 ID 가져오기
    const urlParams = new URLSearchParams(window.location.search);
    const noticeId = parseInt(urlParams.get('id')) || 1;
    
    // ID에 따라 데이터 로드
    const noticeDetailData = noticeDetailDataList[noticeId] || noticeDetailDataList[1];
    
    // 제목과 날짜 업데이트
    const titleElement = document.querySelector('.notice-detail-title-main');
    const dateElement = document.querySelector('.notice-detail-title-date');
    const descriptionElement = document.querySelector('.notice-detail-description');
    
    if (titleElement) {
        titleElement.textContent = noticeDetailData.title;
    }
    
    if (dateElement) {
        dateElement.textContent = noticeDetailData.date;
    }
    
    if (descriptionElement) {
        descriptionElement.textContent = noticeDetailData.description;
    }
    
    // 첨부파일 섹션 처리
    const downloadSection = document.querySelector('.notice-detail-download');
    if (downloadSection) {
        if (noticeDetailData.attachment) {
            downloadSection.style.display = 'flex';
            const filenameElement = document.querySelector('.notice-detail-download-filename');
            const sizeElement = document.querySelector('.notice-detail-download-size');
            if (filenameElement) {
                filenameElement.textContent = noticeDetailData.attachment.filename;
            }
            if (sizeElement) {
                sizeElement.textContent = noticeDetailData.attachment.size;
            }
        } else {
            downloadSection.style.display = 'none';
        }
    }
    
    // 이전 글 링크 업데이트
    const prevRow = document.querySelector('.notice-detail-nav-up');
    const prevLink = prevRow ? prevRow.querySelector('.notice-detail-nav-text') : null;
    const prevButton = prevRow ? prevRow.querySelector('.notice-detail-nav-button') : null;
    
    if (prevRow && noticeDetailData.prevNotice) {
        if (prevLink) {
            prevLink.href = noticeDetailData.prevNotice.url;
            prevLink.textContent = noticeDetailData.prevNotice.title;
            prevLink.classList.remove('notice-detail-nav-disabled');
        }
        if (prevButton) {
            prevButton.disabled = false;
            // 버튼 클릭 이벤트 추가
            prevButton.addEventListener('click', (e) => {
                e.preventDefault();
                window.location.href = noticeDetailData.prevNotice.url;
            });
        }
    } else {
        if (prevLink) {
            prevLink.textContent = '이전글이 없습니다.';
            prevLink.classList.add('notice-detail-nav-disabled');
            prevLink.href = '#';
        }
        if (prevButton) {
            prevButton.disabled = true;
        }
    }
    
    // 다음 글 처리
    const nextRow = document.querySelector('.notice-detail-nav-down');
    let nextLink = nextRow ? nextRow.querySelector('.notice-detail-nav-text') : null;
    const nextButton = nextRow ? nextRow.querySelector('.notice-detail-nav-button') : null;
    
    if (nextRow && noticeDetailData.nextNotice) {
        // span 태그를 a 태그로 변경
        if (nextLink && nextLink.tagName === 'SPAN') {
            const newLink = document.createElement('a');
            newLink.className = nextLink.className;
            newLink.classList.remove('notice-detail-nav-disabled');
            newLink.href = noticeDetailData.nextNotice.url;
            newLink.textContent = noticeDetailData.nextNotice.title;
            newLink.classList.add('liora-body-3');
            nextLink.replaceWith(newLink);
            nextLink = newLink;
        } else if (nextLink) {
            nextLink.href = noticeDetailData.nextNotice.url;
            nextLink.textContent = noticeDetailData.nextNotice.title;
            nextLink.classList.remove('notice-detail-nav-disabled');
        }
        if (nextButton) {
            nextButton.disabled = false;
            // 버튼 클릭 이벤트 추가
            nextButton.addEventListener('click', (e) => {
                e.preventDefault();
                window.location.href = noticeDetailData.nextNotice.url;
            });
        }
    } else {
        if (nextLink) {
            // span 태그로 유지하되 비활성화 상태 표시
            if (nextLink.tagName === 'A') {
                const newSpan = document.createElement('span');
                newSpan.className = nextLink.className;
                newSpan.classList.add('notice-detail-nav-disabled');
                newSpan.textContent = '다음글이 없습니다.';
                newSpan.classList.add('liora-body-3');
                nextLink.replaceWith(newSpan);
            } else {
                nextLink.textContent = '다음글이 없습니다.';
                nextLink.classList.add('notice-detail-nav-disabled');
            }
        }
        if (nextButton) {
            nextButton.disabled = true;
        }
    }
    
    // 다운로드 버튼 이벤트
    const downloadBtn = document.querySelector('.notice-detail-download-btn');
    if (downloadBtn && noticeDetailData.attachment) {
        downloadBtn.addEventListener('click', () => {
            if (noticeDetailData.attachment.url && noticeDetailData.attachment.url !== '#') {
                window.open(noticeDetailData.attachment.url, '_blank');
            } else {
                console.log('다운로드 파일이 없습니다.');
            }
        });
    }
});

