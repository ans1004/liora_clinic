// Event Detail 페이지 동적 생성 및 기능 구현

// Event Detail 데이터
const eventDetailDataList = {
    1: {
        "id": 1,
        "title": "개업 10주년 특별 이벤트",
        "date": "2025.05.03 - 2025.12.31",
        "image": "public/images/Event:Promotion/image-area-1.png",
        "description": `고객님의 많은 관심과 성원에 힙입어 Liora가 개업 10주년을 맞이했습니다. 이번 10주년 이벤트를 통해 Liora 만의 섬세한 케어를 가장 먼저 경험해보세요.

◾️ SPECIAL 1. Liora 시그니처 패키지 체험 혜택
Liora의 대표 프로그램 3종 중 1가지를 특별가로 경험하세요. (Anti-aging / Skin Brightening / Trouble Care)

◾️ SPECIAL 2. 첫 방문 고객 맞춤 진단 + 1:1 케어 플랜 제공
전문 의료진이 직접 피부 타입과 생활 패턴을 분석하여 개인 맞춤 솔루션을 제안드립니다.

◾️ SPECIAL 3. 시술 후 홈케어 키트 증정
시술 효과를 오래도록 유지할 수 있도록, 리오라의 진정·보습 라인 샘플 키트를 함께 드립니다.

이벤트 기간 : 2025.05.03 ~ 2025.12.31

당신의 피부가 다시 빛을 되찾는 순간, 그 여정의 시작점은 Liora 입니다. '당신만의 빛'을 발견하는 첫 걸음, 지금 함께하세요.`,
        "attachment": {
            "filename": "개업 10주년 특별 이벤트",
            "size": "[pdf, 312KB]",
            "url": "#"
        },
        "prevEvent": null,
        "nextEvent": {
            "id": 2,
            "title": "리오라 압구정점 리모델링 이벤트",
            "url": "event-detail.html?id=2"
        }
    },
    2: {
        "id": 2,
            "title": "리오라 압구정점 리모델링 이벤트",
            "date": "2025.05.03 - 2025.12.31",
            "image": "public/images/Event:Promotion/image-area-2.png",
            "description": `리오라 압구정점이 새롭게 리모델링되어 더욱 쾌적하고 프리미엄한 공간으로 재탄생했습니다.

리모델링 오픈 기념 특별 이벤트를 진행합니다.

◾️ 리모델링 오픈 기념 특가 혜택
• 모든 시술 20% 할인
• 첫 방문 고객 추가 10% 할인
• 프리미엄 상담 서비스 무료 제공

◾️ 신규 고객 웰컴 패키지
• 진단 상담 + 맞춤 시술 계획 수립
• 홈케어 제품 샘플 키트 증정
• 멤버십 가입 시 추가 혜택

이벤트 기간 : 2025.05.03 ~ 2025.12.31

새롭게 단장한 리오라 압구정점에서 더욱 특별한 경험을 만나보세요.`,
            "attachment": {
                "filename": "리오라 압구정점 리모델링 이벤트",
                "size": "[pdf, 289KB]",
                "url": "#"
            },
            "prevEvent": {
                "id": 1,
                "title": "개업 10주년 특별 이벤트",
                "url": "event-detail.html?id=1"
            },
            "nextEvent": {
                "id": 3,
                "title": "당신의 시간을 위한 안티에이징 위크",
                "url": "event-detail.html?id=3"
            }
    },
    3: {
        "id": 3,
        "title": "당신의 시간을 위한 안티에이징 위크",
        "date": "2025.05.03 - 2025.12.31",
        "image": "public/images/Event:Promotion/image-area-3.png",
        "description": `시간이 흘러도 변하지 않는 아름다움을 추구하는 당신을 위한 특별한 안티에이징 위크를 준비했습니다.

◾️ 안티에이징 시그니처 프로그램 특가
• 탄력 개선 프로그램 30% 할인
• 주름 개선 프로그램 30% 할인
• 통합 안티에이징 패키지 35% 할인

◾️ 전문 의료진 1:1 맞춤 상담
• 피부 노화 진단 및 분석
• 개인별 맞춤 시술 계획 수립
• 홈케어 루틴 제안

◾️ 프리미엄 홈케어 세트 증정
• 안티에이징 전용 스킨케어 세트
• 시술 효과 극대화 가이드 제공

이벤트 기간 : 2025.05.03 ~ 2025.12.31

시간을 거슬러 올라가는 특별한 경험, 지금 시작하세요.`,
        "attachment": {
            "filename": "안티에이징 위크 이벤트",
            "size": "[pdf, 267KB]",
            "url": "#"
        },
        "prevEvent": {
            "id": 2,
            "title": "리오라 압구정점 리모델링 이벤트",
            "url": "event-detail.html?id=2"
        },
        "nextEvent": {
            "id": 4,
            "title": "리오라 프리미엄 프라이싱",
            "url": "event-detail.html?id=4"
        }
    },
    4: {
        "id": 4,
        "title": "리오라 프리미엄 프라이싱",
        "date": "2025.05.03 - 2025.12.31",
        "image": "public/images/Event:Promotion/image-area-4.png",
        "description": `리오라의 프리미엄 시술을 더욱 합리적인 가격으로 경험하실 수 있는 특별한 기회입니다.

◾️ 프리미엄 시술 특가 혜택
• 시그니처 패키지 최대 40% 할인
• 단품 시술 25% 할인
• 패키지 구매 시 추가 할인

◾️ VIP 멤버십 혜택
• 프리미엄 멤버십 가입 시 추가 10% 할인
• 연간 무료 상담 2회 제공
• 생일 케어 서비스 무료 제공

◾️ 추가 혜택
• 시술 후 관리 제품 세트 증정
• 전문 의료진 맞춤 상담 서비스

이벤트 기간 : 2025.05.03 ~ 2025.12.31

프리미엄한 경험을 합리적인 가격으로, 지금 바로 만나보세요.`,
        "attachment": {
            "filename": "프리미엄 프라이싱 이벤트",
            "size": "[pdf, 245KB]",
            "url": "#"
        },
        "prevEvent": {
            "id": 3,
            "title": "당신의 시간을 위한 안티에이징 위크",
            "url": "event-detail.html?id=3"
        },
        "nextEvent": {
            "id": 5,
            "title": "리오라 강남 오프닝 이벤트",
            "url": "event-detail.html?id=5"
        }
    },
    5: {
        "id": 5,
        "title": "리오라 강남 오프닝 이벤트",
        "date": "2025.05.03 - 2025.12.31",
        "image": "public/images/Event:Promotion/image-area-5.png",
        "description": `리오라 강남점이 새롭게 오픈했습니다. 오픈 기념 특별 이벤트로 더욱 특별한 경험을 선사합니다.

◾️ 오프닝 기념 특별 혜택
• 오픈 첫 달 모든 시술 30% 할인
• 신규 고객 추가 10% 할인
• 프리미엄 상담 서비스 무료 제공

◾️ 오픈 기념 웰컴 패키지
• 진단 상담 + 맞춤 시술 계획
• 홈케어 제품 샘플 키트 증정
• 멤버십 가입 시 추가 혜택

◾️ 오픈 이벤트 특별 선물
• 첫 방문 고객 전원 기념품 증정
• 시술 고객 전원 홈케어 세트 증정

이벤트 기간 : 2025.05.03 ~ 2025.12.31

리오라 강남점에서 새로운 시작을 함께하세요.`,
        "attachment": {
            "filename": "강남 오프닝 이벤트",
            "size": "[pdf, 298KB]",
            "url": "#"
        },
        "prevEvent": {
            "id": 4,
            "title": "리오라 프리미엄 프라이싱",
            "url": "event-detail.html?id=4"
        },
        "nextEvent": {
            "id": 6,
            "title": "리오라 멤버십 프리 패스 데이",
            "url": "event-detail.html?id=6"
        }
    },
    6: {
        "id": 6,
        "title": "리오라 멤버십 프리 패스 데이",
        "date": "2025.05.03 - 2025.12.31",
        "image": "public/images/Event:Promotion/image-area-6.png",
        "description": `리오라 멤버십 고객님을 위한 특별한 날, 프리 패스 데이를 진행합니다.

◾️ 멤버십 전용 특별 혜택
• 멤버십 고객 전원 시술 50% 할인
• 추가 시술 시 20% 추가 할인
• 상담 서비스 무료 제공

◾️ 프리미엄 멤버십 혜택
• VIP 멤버십 고객 전원 무료 시술 1회
• 프리미엄 홈케어 세트 증정
• 연간 무료 상담 4회 제공

◾️ 신규 멤버십 가입 혜택
• 프리미엄 멤버십 가입 시 오픈 기념 선물
• 첫 시술 40% 할인
• 홈케어 제품 세트 증정

이벤트 기간 : 2025.05.03 ~ 2025.12.31

멤버십 고객님께 드리는 특별한 감사 이벤트입니다.`,
        "attachment": {
            "filename": "멤버십 프리 패스 데이",
            "size": "[pdf, 234KB]",
            "url": "#"
        },
        "prevEvent": {
            "id": 5,
            "title": "리오라 강남 오프닝 이벤트",
            "url": "event-detail.html?id=5"
        },
        "nextEvent": {
            "id": 7,
            "title": "리오라 한가위 특별 이벤트",
            "url": "event-detail.html?id=7"
        }
    },
    7: {
        "id": 7,
        "title": "리오라 한가위 특별 이벤트",
        "date": "2025.05.03 - 2025.12.31",
        "image": "public/images/Event:Promotion/image-area-7.png",
        "description": `추석 한가위를 맞아 가족과 함께 아름다워질 수 있는 특별한 이벤트를 준비했습니다.

◾️ 한가위 특별 할인 혜택
• 모든 시술 25% 할인
• 가족 동반 방문 시 추가 10% 할인
• 패키지 구매 시 최대 40% 할인

◾️ 한가위 기념 선물
• 시술 고객 전원 한가위 기념 선물 증정
• 홈케어 제품 세트 증정
• 가족 패키지 구매 시 추가 혜택

◾️ 특별 상담 서비스
• 가족 단위 맞춤 상담 서비스
• 연령대별 맞춤 시술 계획 제안

이벤트 기간 : 2025.05.03 ~ 2025.12.31

가족과 함께 아름다워지는 특별한 한가위를 보내세요.`,
        "attachment": {
            "filename": "한가위 특별 이벤트",
            "size": "[pdf, 278KB]",
            "url": "#"
        },
        "prevEvent": {
            "id": 6,
            "title": "리오라 멤버십 프리 패스 데이",
            "url": "event-detail.html?id=6"
        },
        "nextEvent": {
            "id": 8,
            "title": "리오라 블랙프라이데이",
            "url": "event-detail.html?id=8"
        }
    },
    8: {
        "id": 8,
        "title": "리오라 블랙프라이데이",
        "date": "2025.05.03 - 2025.12.31",
        "image": "public/images/Event:Promotion/image-area-8.png",
        "description": `올해 최대 할인 이벤트, 리오라 블랙프라이데이가 시작됩니다.

◾️ 블랙프라이데이 특가
• 모든 시술 최대 50% 할인
• 패키지 구매 시 추가 10% 할인
• 멤버십 고객 추가 5% 할인

◾️ 특별 패키지 혜택
• 시그니처 패키지 통합 할인
• 연간 패키지 구매 시 최대 혜택
• 홈케어 제품 세트 무료 증정

◾️ 블랙프라이데이 전용 선물
• 시술 고객 전원 프리미엄 선물 증정
• 첫 방문 고객 추가 혜택
• 멤버십 가입 시 오픈 기념 선물

이벤트 기간 : 2025.05.03 ~ 2025.12.31

올해 최고의 할인 기회를 놓치지 마세요.`,
        "attachment": {
            "filename": "블랙프라이데이 이벤트",
            "size": "[pdf, 301KB]",
            "url": "#"
        },
        "prevEvent": {
            "id": 7,
            "title": "리오라 한가위 특별 이벤트",
            "url": "event-detail.html?id=7"
        },
        "nextEvent": {
            "id": 9,
            "title": "신환 대상 스페셜 웰컴 이벤트",
            "url": "event-detail.html?id=9"
        }
    },
    9: {
        "id": 9,
        "title": "신환 대상 스페셜 웰컴 이벤트",
        "date": "2025.05.03 - 2025.12.31",
        "image": "public/images/Event:Promotion/image-area.png",
        "description": `리오라를 처음 방문하시는 신규 고객님을 위한 특별한 웰컴 이벤트입니다.

◾️ 신규 고객 웰컴 혜택
• 첫 방문 시술 30% 할인
• 진단 상담 무료 제공
• 맞춤 시술 계획 수립 서비스

◾️ 웰컴 패키지
• 홈케어 제품 샘플 키트 증정
• 시술 후 관리 가이드 제공
• 멤버십 가입 시 추가 혜택

◾️ 특별 상담 서비스
• 전문 의료진 1:1 맞춤 상담
• 피부 타입 분석 및 진단
• 개인별 케어 플랜 제안

이벤트 기간 : 2025.05.03 ~ 2025.12.31

리오라와 함께하는 아름다운 여정의 시작, 지금 바로 시작하세요.`,
        "attachment": {
            "filename": "신환 웰컴 이벤트",
            "size": "[pdf, 256KB]",
            "url": "#"
        },
        "prevEvent": {
            "id": 8,
            "title": "리오라 블랙프라이데이",
            "url": "event-detail.html?id=8"
        },
        "nextEvent": {
            "id": 10,
            "title": "리오라 봄맞이 스페셜 이벤트",
            "url": "event-detail.html?id=10"
        }
    },
    10: {
        "id": 10,
        "title": "리오라 봄맞이 스페셜 이벤트",
        "date": "2025.05.03 - 2025.12.31",
        "image": "public/images/Event:Promotion/image-area-1.png",
        "description": `봄을 맞아 피부도 새롭게 단장하는 특별한 이벤트를 준비했습니다.

◾️ 봄맞이 특별 할인
• 모든 시술 20% 할인
• 봄 시즌 패키지 30% 할인
• 첫 방문 고객 추가 10% 할인

◾️ 봄 시즌 케어 프로그램
• 피부 재생 프로그램 특가
• 색소 개선 프로그램 특가
• 트러블 케어 프로그램 특가

◾️ 봄 시즌 선물
• 시술 고객 전원 봄 시즌 케어 세트 증정
• 홈케어 제품 샘플 키트 제공
• 시술 후 관리 가이드 제공

이벤트 기간 : 2025.05.03 ~ 2025.12.31

봄과 함께 피부도 새롭게 시작하세요.`,
        "attachment": {
            "filename": "봄맞이 스페셜 이벤트",
            "size": "[pdf, 223KB]",
            "url": "#"
        },
        "prevEvent": {
            "id": 9,
            "title": "신환 대상 스페셜 웰컴 이벤트",
            "url": "event-detail.html?id=9"
        },
        "nextEvent": {
            "id": 11,
            "title": "리오라 여름 특가 이벤트",
            "url": "event-detail.html?id=11"
        }
    },
    11: {
        "id": 11,
        "title": "리오라 여름 특가 이벤트",
        "date": "2025.05.03 - 2025.12.31",
        "image": "public/images/Event:Promotion/image-area-2.png",
        "description": `여름을 앞두고 피부를 준비하는 특별한 특가 이벤트입니다.

◾️ 여름 특가 혜택
• 모든 시술 25% 할인
• 여름 시즌 패키지 35% 할인
• 멤버십 고객 추가 5% 할인

◾️ 여름 시즌 케어 프로그램
• 자외선 차단 케어 프로그램
• 색소 개선 프로그램 특가
• 모공 관리 프로그램 특가

◾️ 여름 시즌 선물
• 시술 고객 전원 여름 케어 세트 증정
• 자외선 차단제 샘플 제공
• 시술 후 관리 가이드 제공

이벤트 기간 : 2025.05.03 ~ 2025.12.31

여름을 위한 완벽한 피부 준비, 지금 시작하세요.`,
        "attachment": {
            "filename": "여름 특가 이벤트",
            "size": "[pdf, 245KB]",
            "url": "#"
        },
        "prevEvent": {
            "id": 10,
            "title": "리오라 봄맞이 스페셜 이벤트",
            "url": "event-detail.html?id=10"
        },
        "nextEvent": {
            "id": 12,
            "title": "리오라 가을 프로모션",
            "url": "event-detail.html?id=12"
        }
    },
    12: {
        "id": 12,
        "title": "리오라 가을 프로모션",
        "date": "2025.05.03 - 2025.12.31",
        "image": "public/images/Event:Promotion/image-area-3.png",
        "description": `가을을 맞아 피부를 촉촉하고 건강하게 가꾸는 특별한 프로모션입니다.

◾️ 가을 프로모션 혜택
• 모든 시술 20% 할인
• 가을 시즌 패키지 30% 할인
• 첫 방문 고객 추가 10% 할인

◾️ 가을 시즌 케어 프로그램
• 보습 케어 프로그램 특가
• 탄력 개선 프로그램 특가
• 안티에이징 프로그램 특가

◾️ 가을 시즌 선물
• 시술 고객 전원 가을 케어 세트 증정
• 보습 제품 샘플 키트 제공
• 시술 후 관리 가이드 제공

이벤트 기간 : 2025.05.03 ~ 2025.12.31

가을과 함께 피부도 촉촉하고 건강하게 가꾸세요.`,
        "attachment": {
            "filename": "가을 프로모션",
            "size": "[pdf, 234KB]",
            "url": "#"
        },
        "prevEvent": {
            "id": 11,
            "title": "리오라 여름 특가 이벤트",
            "url": "event-detail.html?id=11"
        },
        "nextEvent": null
    }
};

document.addEventListener('DOMContentLoaded', function() {
    // URL 파라미터에서 ID 가져오기
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = parseInt(urlParams.get('id')) || 1;
    
    // ID에 따라 데이터 로드
    const eventDetailData = eventDetailDataList[eventId] || eventDetailDataList[1];
    
    // 제목과 날짜 업데이트
    const titleElement = document.querySelector('.event-detail-title-main');
    const dateElement = document.querySelector('.event-detail-title-date');
    const descriptionElement = document.querySelector('.event-detail-description');
    const imageArea = document.querySelector('.event-detail-image-area');
    
    if (titleElement) {
        titleElement.textContent = eventDetailData.title;
    }
    
    if (dateElement) {
        dateElement.textContent = eventDetailData.date;
    }
    
    if (descriptionElement) {
        descriptionElement.textContent = eventDetailData.description;
    }
    
    if (imageArea && eventDetailData.image) {
        imageArea.style.backgroundImage = `url(${eventDetailData.image})`;
    }
    
    
    // 이전 이벤트 링크 업데이트
    const prevRow = document.querySelector('.event-detail-nav-up');
    const prevLink = prevRow ? prevRow.querySelector('.event-detail-nav-text') : null;
    const prevButton = prevRow ? prevRow.querySelector('.event-detail-nav-button') : null;
    
    if (prevRow && eventDetailData.prevEvent) {
        if (prevLink) {
            prevLink.href = eventDetailData.prevEvent.url;
            prevLink.textContent = eventDetailData.prevEvent.title;
            prevLink.classList.remove('event-detail-nav-disabled');
        }
        if (prevButton) {
            prevButton.disabled = false;
            // 버튼 클릭 이벤트 추가
            prevButton.addEventListener('click', (e) => {
                e.preventDefault();
                window.location.href = eventDetailData.prevEvent.url;
            });
        }
    } else {
        if (prevLink) {
            prevLink.textContent = '이전글이 없습니다.';
            prevLink.classList.add('event-detail-nav-disabled');
            prevLink.href = '#';
        }
        if (prevButton) {
            prevButton.disabled = true;
        }
    }
    
    // 다음 이벤트 처리
    const nextRow = document.querySelector('.event-detail-nav-down');
    let nextLink = nextRow ? nextRow.querySelector('.event-detail-nav-text') : null;
    const nextButton = nextRow ? nextRow.querySelector('.event-detail-nav-button') : null;
    
    if (nextRow && eventDetailData.nextEvent) {
        // span 태그를 a 태그로 변경
        if (nextLink && nextLink.tagName === 'SPAN') {
            const newLink = document.createElement('a');
            newLink.className = nextLink.className;
            newLink.classList.remove('event-detail-nav-disabled');
            newLink.href = eventDetailData.nextEvent.url;
            newLink.textContent = eventDetailData.nextEvent.title;
            newLink.classList.add('liora-body-3');
            nextLink.replaceWith(newLink);
            nextLink = newLink;
        } else if (nextLink) {
            nextLink.href = eventDetailData.nextEvent.url;
            nextLink.textContent = eventDetailData.nextEvent.title;
            nextLink.classList.remove('event-detail-nav-disabled');
        }
        if (nextButton) {
            nextButton.disabled = false;
            // 버튼 클릭 이벤트 추가
            nextButton.addEventListener('click', (e) => {
                e.preventDefault();
                window.location.href = eventDetailData.nextEvent.url;
            });
        }
    } else {
        if (nextLink) {
            // span 태그로 유지하되 비활성화 상태 표시
            if (nextLink.tagName === 'A') {
                const newSpan = document.createElement('span');
                newSpan.className = nextLink.className;
                newSpan.classList.add('event-detail-nav-disabled');
                newSpan.textContent = '다음글이 없습니다.';
                newSpan.classList.add('liora-body-3');
                nextLink.replaceWith(newSpan);
            } else {
                nextLink.textContent = '다음글이 없습니다.';
                nextLink.classList.add('event-detail-nav-disabled');
            }
        }
        if (nextButton) {
            nextButton.disabled = true;
        }
    }
    
});
