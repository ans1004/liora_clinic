// About 페이지 JavaScript

// 아코디언 기능
document.addEventListener('DOMContentLoaded', () => {
    const accordionItems = document.querySelectorAll('.accordion-item');
    const brandEssenceImage = document.getElementById('brand-essence-image');
    
    // 각 아코디언 항목에 맞는 이미지 매핑
    const imageMap = {
        'accordion-clarity': 'public/images/About/BrandEssence_image-clarity.png',
        'accordion-elegance': 'public/images/About/BrandEssence_image-Elegance.png',
        'accordion-resilience': 'public/images/About/BrandEssence_image-Resilience.png',
        'default': 'public/images/About/BrandEssence_image-area.png'
    };
    
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        
        header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // 모든 아코디언 닫기
            accordionItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });
            
            // 클릭한 항목이 활성화되어 있지 않았다면 열기
            if (!isActive) {
                item.classList.add('active');
                
                // 이미지 변경
                if (brandEssenceImage) {
                    // 클래스명으로 이미지 찾기
                    let imagePath = imageMap.default;
                    if (item.classList.contains('accordion-clarity')) {
                        imagePath = imageMap['accordion-clarity'];
                    } else if (item.classList.contains('accordion-elegance')) {
                        imagePath = imageMap['accordion-elegance'];
                    } else if (item.classList.contains('accordion-resilience')) {
                        imagePath = imageMap['accordion-resilience'];
                    }
                    
                    brandEssenceImage.src = imagePath;
                }
            } else {
                // 아코디언이 닫혔을 때 기본 이미지로 복귀
                if (brandEssenceImage) {
                    brandEssenceImage.src = imageMap.default;
                }
            }
        });
    });
    
    // 스크롤 다운 버튼
    const scrollButton = document.querySelector('.about-hero-scroll .arrow-button-solo');
    if (scrollButton) {
        scrollButton.addEventListener('click', () => {
            const missionSection = document.querySelector('.our-mission');
            if (missionSection) {
                missionSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});

