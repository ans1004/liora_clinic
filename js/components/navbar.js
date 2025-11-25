// 네비게이션 컴포넌트 동적 생성

async function loadNavigation() {
    try {
        const basePath = window.location.pathname.includes('/liora_clinic/') ? '/liora_clinic/' : './';
        
        // JSON 파일에서 데이터 로드
        const response = await fetch(`${basePath}data/navigation.json`);
        if (!response.ok) {
            throw new Error('네비게이션 데이터를 불러올 수 없습니다.');
        }
        const data = await response.json();
        
        // 네비게이션 컨테이너 찾기
        const navbarContainer = document.querySelector('.navbar-container');
        if (!navbarContainer) return;
        
        // 기존 네비게이션 제거
        navbarContainer.innerHTML = '';
        
        // 네비게이션 구조 생성
        const navbarTop = document.createElement('div');
        navbarTop.className = 'navbar-top';
        
        // 로고 및 메뉴 영역
        const logoAndMenu = document.createElement('div');
        logoAndMenu.className = 'logo-and-menu';
        
        // 로고
        const logo = document.createElement('div');
        logo.className = 'logo';
        const logoLink = document.createElement('a');
        logoLink.href = `${basePath}index.html`;
        const logoImg = document.createElement('img');
        logoImg.src = `${basePath}public/logo/logo.svg`;
        logoImg.alt = 'Liora Clinic';
        logoLink.appendChild(logoImg);
        logo.appendChild(logoLink);
        logoAndMenu.appendChild(logo);
        
        // 메뉴
        const menu = document.createElement('div');
        menu.className = 'menu';
        
        // 메뉴 아이템 생성
        data.menuItems.forEach(menuItem => {
            const navMenuItem = document.createElement('div');
            navMenuItem.className = 'nav-menu-item';
            
            const menuLink = document.createElement('a');
            menuLink.href = '#';
            menuLink.className = 'nav-menu liora-body-3';
            menuLink.textContent = menuItem.label;
            navMenuItem.appendChild(menuLink);
            
            const navMenuSub = document.createElement('div');
            navMenuSub.className = 'nav-menu-sub';
            
            menuItem.subMenu.forEach(subItem => {
                const subMenuItem = document.createElement('a');
                // href가 #이 아니면 basePath 추가
                subMenuItem.href = subItem.href === '#' ? '#' : `${basePath}${subItem.href}`;
                subMenuItem.className = 'sub-menu-item';
                
                const subMenuEn = document.createElement('span');
                subMenuEn.className = 'sub-menu-en liora-title-2';
                subMenuEn.textContent = subItem.en;
                
                const subMenuKr = document.createElement('span');
                subMenuKr.className = 'sub-menu-kr liora-body-3';
                subMenuKr.textContent = subItem.kr;
                
                subMenuItem.appendChild(subMenuEn);
                subMenuItem.appendChild(subMenuKr);
                navMenuSub.appendChild(subMenuItem);
            });
            
            navMenuItem.appendChild(navMenuSub);
            menu.appendChild(navMenuItem);
        });
        
        logoAndMenu.appendChild(menu);
        navbarTop.appendChild(logoAndMenu);
        
        // 모바일 햄버거 메뉴 버튼
        const mobileMenuButton = document.createElement('button');
        mobileMenuButton.className = 'mobile-menu-button';
        mobileMenuButton.setAttribute('aria-label', '메뉴 열기');
        mobileMenuButton.innerHTML = `
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
        `;
        navbarTop.appendChild(mobileMenuButton);
        
        // 모바일 메뉴 오버레이
        const mobileMenuOverlay = document.createElement('div');
        mobileMenuOverlay.className = 'mobile-menu-overlay';
        
        const mobileMenuContent = document.createElement('div');
        mobileMenuContent.className = 'mobile-menu-content';
        
        // 모바일 메뉴 닫기 버튼
        const mobileMenuClose = document.createElement('button');
        mobileMenuClose.className = 'mobile-menu-close';
        mobileMenuClose.setAttribute('aria-label', '메뉴 닫기');
        mobileMenuClose.innerHTML = '×';
        mobileMenuContent.appendChild(mobileMenuClose);
        
        // 모바일 메뉴 아이템들
        const mobileMenuList = document.createElement('div');
        mobileMenuList.className = 'mobile-menu-list';
        
        data.menuItems.forEach(menuItem => {
            const mobileMenuItem = document.createElement('div');
            mobileMenuItem.className = 'mobile-menu-item';
            
            const mobileMenuLink = document.createElement('a');
            mobileMenuLink.href = '#';
            mobileMenuLink.className = 'mobile-menu-link liora-body-3';
            mobileMenuLink.textContent = menuItem.label;
            // 메뉴 링크 클릭 시 기본 동작 방지
            mobileMenuLink.addEventListener('click', (e) => {
                e.preventDefault();
                // 서브메뉴 토글 기능은 필요시 추가
            });
            mobileMenuItem.appendChild(mobileMenuLink);
            
            // 서브메뉴
            const mobileSubMenu = document.createElement('div');
            mobileSubMenu.className = 'mobile-sub-menu';
            
            menuItem.subMenu.forEach(subItem => {
                const mobileSubMenuItem = document.createElement('a');
                mobileSubMenuItem.href = subItem.href === '#' ? '#' : `${basePath}${subItem.href}`;
                mobileSubMenuItem.className = 'mobile-sub-menu-item';
                
                const mobileSubMenuEn = document.createElement('span');
                mobileSubMenuEn.className = 'mobile-sub-menu-en liora-title-2';
                mobileSubMenuEn.textContent = subItem.en;
                
                const mobileSubMenuKr = document.createElement('span');
                mobileSubMenuKr.className = 'mobile-sub-menu-kr liora-body-3';
                mobileSubMenuKr.textContent = subItem.kr;
                
                mobileSubMenuItem.appendChild(mobileSubMenuEn);
                mobileSubMenuItem.appendChild(mobileSubMenuKr);
                // 서브메뉴 아이템 클릭 시 메뉴 닫기
                mobileSubMenuItem.addEventListener('click', () => {
                    mobileMenuOverlay.classList.remove('active');
                    mobileMenuButton.classList.remove('active');
                    document.body.style.overflow = '';
                });
                mobileSubMenu.appendChild(mobileSubMenuItem);
            });
            
            mobileMenuItem.appendChild(mobileSubMenu);
            mobileMenuList.appendChild(mobileMenuItem);
        });
        
        mobileMenuContent.appendChild(mobileMenuList);
        mobileMenuOverlay.appendChild(mobileMenuContent);
        // 오버레이는 body에 직접 추가 (navbar-container 밖에)
        document.body.appendChild(mobileMenuOverlay);
        
        // 햄버거 메뉴 토글 기능 - 이벤트 위임 사용
        const toggleMobileMenu = (open) => {
            if (open) {
                mobileMenuOverlay.classList.add('active');
                mobileMenuButton.classList.add('active');
                document.body.style.overflow = 'hidden';
            } else {
                mobileMenuOverlay.classList.remove('active');
                mobileMenuButton.classList.remove('active');
                document.body.style.overflow = '';
            }
        };
        
        // 햄버거 버튼 클릭
        mobileMenuButton.onclick = (e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('햄버거 버튼 클릭됨');
            toggleMobileMenu(true);
        };
        
        // 닫기 버튼 클릭
        mobileMenuClose.onclick = (e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleMobileMenu(false);
        };
        
        // 오버레이 배경 클릭
        mobileMenuOverlay.onclick = (e) => {
            if (e.target === mobileMenuOverlay) {
                e.preventDefault();
                toggleMobileMenu(false);
            }
        };
        
        // 언어 선택 영역
        const language = document.createElement('div');
        language.className = 'language';
        
        const languageFrame = document.createElement('div');
        languageFrame.className = 'language-frame';
        const languageText = document.createElement('span');
        languageText.className = 'language-text liora-title-3';
        languageText.textContent = data.currentLanguage;
        languageFrame.appendChild(languageText);
        language.appendChild(languageFrame);
        
        const languageIcon = document.createElement('div');
        languageIcon.className = 'language-icon';
        languageIcon.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2"/>
            </svg>
        `;
        language.appendChild(languageIcon);
        
        const languageMenu = document.createElement('div');
        languageMenu.className = 'language-menu';
        data.languages.forEach(lang => {
            const langItem = document.createElement('a');
            langItem.href = '#';
            langItem.className = 'language-menu-item liora-title-3'; /* Title3 스타일로 변경 */
            langItem.textContent = lang;
            languageMenu.appendChild(langItem);
        });
        language.appendChild(languageMenu);
        
        navbarTop.appendChild(language);
        navbarContainer.appendChild(navbarTop);
        
        // 네비게이션 JavaScript 초기화 (기존 navbar.js 기능)
        if (typeof initNavbar === 'function') {
            initNavbar();
        }
    } catch (error) {
        console.error('네비게이션 로드 실패:', error);
    }
}

// DOM 로드 시 네비게이션 생성
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadNavigation);
} else {
    loadNavigation();
}

