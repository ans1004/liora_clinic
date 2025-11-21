// 푸터 컴포넌트 동적 생성

async function loadFooter() {
    try {
        const basePath = window.location.pathname.includes('/liora_clinic/') ? '/liora_clinic/' : './';
        
        // JSON 파일에서 데이터 로드
        const response = await fetch(`${basePath}data/footer.json`);
        if (!response.ok) {
            throw new Error('푸터 데이터를 불러올 수 없습니다.');
        }
        const data = await response.json();
        
        // 푸터 컨테이너 찾기
        const footer = document.querySelector('.footer');
        if (!footer) return;
        
        // 기존 푸터 내용 제거
        footer.innerHTML = '';
        
        // 푸터 라인
        const footerLine = document.createElement('div');
        footerLine.className = 'footer-line';
        footer.appendChild(footerLine);
        
        // Privacy, SNS, Menu 영역
        const footerPrivacySnsMenu = document.createElement('div');
        footerPrivacySnsMenu.className = 'footer-privacy-sns-menu';
        
        // Privacy & SNS 영역
        const footerPrivacySns = document.createElement('div');
        footerPrivacySns.className = 'footer-privacy-sns';
        
        // Privacy 링크
        const footerPrivacy = document.createElement('div');
        footerPrivacy.className = 'footer-privacy';
        data.privacy.forEach(item => {
            const privacyLink = document.createElement('a');
            privacyLink.href = item.href;
            privacyLink.className = 'liora-body-2';
            privacyLink.textContent = item.text;
            footerPrivacy.appendChild(privacyLink);
        });
        footerPrivacySns.appendChild(footerPrivacy);
        
        // SNS 아이콘
        const footerSns = document.createElement('div');
        footerSns.className = 'footer-sns';
        data.sns.forEach(item => {
            const snsLink = document.createElement('a');
            snsLink.href = item.href;
            snsLink.className = 'sns-icon';
            snsLink.setAttribute('data-sns', item.type);
            footerSns.appendChild(snsLink);
        });
        footerPrivacySns.appendChild(footerSns);
        
        footerPrivacySnsMenu.appendChild(footerPrivacySns);
        
        // Footer Menu
        const footerMenu = document.createElement('div');
        footerMenu.className = 'footer-menu';
        
        data.menu.forEach((menuGroup, index) => {
            const menuDiv = document.createElement('div');
            menuDiv.className = `menu-${index + 1}`;
            
            const menuTitle = document.createElement('p');
            menuTitle.className = 'nav-menu liora-body-2';
            menuTitle.textContent = menuGroup.title;
            menuDiv.appendChild(menuTitle);
            
            const subMenu = document.createElement('div');
            subMenu.className = 'sub-menu';
            menuGroup.items.forEach(item => {
                const subMenuLink = document.createElement('a');
                // href가 #이 아니면 basePath 추가
                subMenuLink.href = item.href === '#' ? '#' : `${basePath}${item.href}`;
                subMenuLink.className = 'liora-body-3';
                subMenuLink.textContent = item.text;
                subMenu.appendChild(subMenuLink);
            });
            menuDiv.appendChild(subMenu);
            footerMenu.appendChild(menuDiv);
        });
        
        footerPrivacySnsMenu.appendChild(footerMenu);
        footer.appendChild(footerPrivacySnsMenu);
        
        // Footer Logo & Copyright
        const footerLogoCopyright = document.createElement('div');
        footerLogoCopyright.className = 'footer-logo-copyright';
        
        const logo = document.createElement('div');
        logo.className = 'logo';
        const logoImg = document.createElement('img');
        logoImg.src = `${basePath}public/logo/logo.svg`;
        logoImg.alt = 'Liora Clinic';
        logo.appendChild(logoImg);
        footerLogoCopyright.appendChild(logo);
        
        const copyright = document.createElement('div');
        copyright.className = 'copyright';
        data.copyright.forEach(text => {
            const copyrightP = document.createElement('p');
            copyrightP.className = 'liora-title-2';
            copyrightP.textContent = text;
            copyright.appendChild(copyrightP);
        });
        footerLogoCopyright.appendChild(copyright);
        
        footer.appendChild(footerLogoCopyright);
    } catch (error) {
        console.error('푸터 로드 실패:', error);
    }
}

// DOM 로드 시 푸터 생성
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadFooter);
} else {
    loadFooter();
}

