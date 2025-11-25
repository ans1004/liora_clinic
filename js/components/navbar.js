// Navbar 스크롤 및 모바일 메뉴 제어
(function() {
    'use strict';
    
    // 스크롤 이벤트 로직
    const navbar = document.querySelector('.navbar');
    let lastScrollY = window.pageYOffset || window.scrollY || 0;
    let ticking = false;
    
    function handleScroll() {
        if (!navbar) return;
        
        const currentScrollY = window.pageYOffset || window.scrollY || 0;
        
        if (currentScrollY === 0) {
            navbar.classList.remove('scrolled');
        } else {
            if (currentScrollY > lastScrollY) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
        
        lastScrollY = currentScrollY;
        ticking = false;
    }
    
    function onScroll() {
        if (!ticking) {
            window.requestAnimationFrame(handleScroll);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', onScroll, { passive: true });
    
    // 초기 로드 시 스크롤 상태 확인
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', handleScroll);
    } else {
        handleScroll();
    }
})();

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
        mobileMenuButton.id = 'mobile-menu-open';
        mobileMenuButton.className = 'mobile-menu-button';
        mobileMenuButton.setAttribute('aria-label', '메뉴 열기');
        mobileMenuButton.innerHTML = `
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
        `;
        navbarTop.appendChild(mobileMenuButton);
        
        // 모바일 메뉴 오버레이 (피그마 디자인: 전체 화면)
        const mobileMenuOverlay = document.createElement('div');
        mobileMenuOverlay.id = 'mobile-menu'; // ID 추가
        mobileMenuOverlay.className = 'mobile-menu-overlay';
        
        const mobileMenuContent = document.createElement('div');
        mobileMenuContent.className = 'mobile-menu-content';
        
        // 모바일 메뉴 헤더 (로고 + 닫기 버튼)
        const mobileMenuHeader = document.createElement('div');
        mobileMenuHeader.className = 'mobile-menu-header';
        
        // 로고 (일반 navbar와 동일하게)
        const mobileMenuLogo = document.createElement('div');
        mobileMenuLogo.className = 'logo'; // mobile-menu-logo 대신 logo 클래스 사용
        const mobileMenuLogoLink = document.createElement('a');
        mobileMenuLogoLink.href = `${basePath}index.html`;
        const mobileMenuLogoImg = document.createElement('img');
        mobileMenuLogoImg.src = `${basePath}public/logo/logo.svg`; // 일반 navbar와 동일한 로고
        mobileMenuLogoImg.alt = 'Liora Clinic';
        mobileMenuLogoLink.appendChild(mobileMenuLogoImg);
        mobileMenuLogo.appendChild(mobileMenuLogoLink);
        mobileMenuHeader.appendChild(mobileMenuLogo);
        
        // 닫기 버튼
        const mobileMenuClose = document.createElement('button');
        mobileMenuClose.id = 'mobile-menu-close';
        mobileMenuClose.className = 'mobile-menu-close';
        mobileMenuClose.setAttribute('aria-label', '메뉴 닫기');
        mobileMenuClose.innerHTML = `
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `;
        mobileMenuClose.type = 'button';
        mobileMenuHeader.appendChild(mobileMenuClose);
        
        mobileMenuContent.appendChild(mobileMenuHeader);
        
        // nav-content 영역 (피그마 디자인 구조)
        const navContent = document.createElement('div');
        navContent.className = 'nav-content';
        
        // nav-main 영역
        const navMain = document.createElement('div');
        navMain.className = 'nav-main';
        
        // 모바일 메뉴 아이템들 (피그마 디자인 구조)
        data.menuItems.forEach((menuItem, index) => {
            const mobileMenuItem = document.createElement('div');
            mobileMenuItem.className = 'nav-menu-mobile-only';
            
            // mainmenu 영역
            const mainMenu = document.createElement('div');
            mainMenu.className = 'mainmenu';
            
            const menuText = document.createElement('div');
            menuText.className = 'menu liora-mobile-body-1';
            menuText.textContent = menuItem.label;
            mainMenu.appendChild(menuText);
            
            // 아이콘 (+/- 아이콘)
            const menuIcon = document.createElement('div');
            menuIcon.className = 'icon';
            menuIcon.innerHTML = `
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" class="icon-plus">
                    <path d="M12 5V19M5 12H19" stroke="currentColor" stroke-width="1" stroke-linecap="round"/>
                </svg>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" class="icon-minus">
                    <path d="M5 12H19" stroke="currentColor" stroke-width="1" stroke-linecap="round"/>
                </svg>
            `;
            mainMenu.appendChild(menuIcon);
            
            // 서브메뉴 영역
            const subMenu = document.createElement('div');
            subMenu.className = 'submenu';
            
            menuItem.subMenu.forEach((subItem, subIndex) => {
                const subMenuItem = document.createElement('a');
                subMenuItem.href = subItem.href === '#' ? '#' : `${basePath}${subItem.href}`;
                subMenuItem.className = 'nav-menu-sub';
                
                const subMenuEn = document.createElement('div');
                subMenuEn.className = 'sub-menu-en liora-mobile-title-2';
                subMenuEn.textContent = subItem.en;
                
                const subMenuKr = document.createElement('div');
                subMenuKr.className = 'sub-menu-kr liora-mobile-body-3';
                subMenuKr.textContent = subItem.kr;
                
                subMenuItem.appendChild(subMenuEn);
                subMenuItem.appendChild(subMenuKr);
                
                // 서브메뉴 아이템 클릭 시 메뉴 닫기
                subMenuItem.addEventListener('click', () => {
                    const menu = document.getElementById('mobile-menu');
                    const openBtn = document.getElementById('mobile-menu-open');
                    const navbar = document.querySelector('.navbar');
                    if (menu) menu.classList.remove('active');
                    if (openBtn) openBtn.classList.remove('active');
                    if (navbar) navbar.classList.remove('mobile-menu-open');
                    document.body.style.overflow = '';
                    document.documentElement.style.overflow = '';
                });
                
                subMenu.appendChild(subMenuItem);
            });
            
            mobileMenuItem.appendChild(mainMenu);
            mobileMenuItem.appendChild(subMenu);
            
            // 메뉴 클릭 시 서브메뉴 토글 (생성 시점에 바로 등록)
            mainMenu.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                const isActive = mobileMenuItem.classList.contains('active');
                
                // 다른 메뉴 아이템의 active 클래스 제거
                document.querySelectorAll('.nav-menu-mobile-only').forEach(item => {
                    if (item !== mobileMenuItem) {
                        item.classList.remove('active');
                    }
                });
                
                // 현재 메뉴 아이템 토글
                if (!isActive) {
                    mobileMenuItem.classList.add('active');
                } else {
                    mobileMenuItem.classList.remove('active');
                }
            });
            
            navMain.appendChild(mobileMenuItem);
        });
        
        navContent.appendChild(navMain);
        
        // nav-menu-footer-mobile 영역 (언어 선택기)
        const navMenuFooterMobile = document.createElement('div');
        navMenuFooterMobile.className = 'nav-menu-footer-mobile';
        
        const languageMobile = document.createElement('div');
        languageMobile.className = 'language-mobile';
        
        data.languages.forEach((lang, langIndex) => {
            const langFrame = document.createElement('div');
            langFrame.className = 'language-frame-mobile';
            
            const langText = document.createElement('div');
            langText.className = 'text';
            langText.textContent = lang;
            
            // 현재 언어는 활성화 스타일
            if (lang === data.currentLanguage) {
                langFrame.classList.add('active');
            }
            
            langFrame.appendChild(langText);
            languageMobile.appendChild(langFrame);
        });
        
        navMenuFooterMobile.appendChild(languageMobile);
        navContent.appendChild(navMenuFooterMobile);
        
        mobileMenuContent.appendChild(navContent);
        mobileMenuOverlay.appendChild(mobileMenuContent);
        document.body.appendChild(mobileMenuOverlay);
        
        // 모바일 메뉴 이벤트 등록 (DOM 완전히 렌더링 후)
        // requestAnimationFrame을 사용하여 다음 프레임에서 실행
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                setupMobileMenu();
            });
        });
        
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
    document.addEventListener('DOMContentLoaded', () => {
        loadNavigation();
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
    });
} else {
    loadNavigation();
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
}

// 모바일 메뉴 제어 로직 (제너럴 버전)
function setupMobileMenu() {
    // 요소 선택
    const openBtn = document.getElementById('mobile-menu-open');
    const closeBtn = document.getElementById('mobile-menu-close');
    const menu = document.getElementById('mobile-menu');
    const navbar = document.querySelector('.navbar');
    
    if (!openBtn || !closeBtn || !menu) {
        console.error('모바일 메뉴 요소를 찾을 수 없습니다.');
        return;
    }
    
    // 메뉴 열기
    function openMenu() {
        menu.classList.add('active');
        if (openBtn) openBtn.classList.add('active');
        if (navbar) navbar.classList.add('mobile-menu-open');
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
    }
    
    // 메뉴 닫기
    function closeMenu() {
        menu.classList.remove('active');
        if (openBtn) openBtn.classList.remove('active');
        if (navbar) navbar.classList.remove('mobile-menu-open');
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
        // 모든 서브메뉴 닫기
        document.querySelectorAll('.nav-menu-mobile-only').forEach(item => {
            item.classList.remove('active');
        });
    }
    
    // 이벤트 리스너 등록
    openBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openMenu();
    });
    
    closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        closeMenu();
    });
    
    // 오버레이 배경 클릭 시 닫기
    menu.addEventListener('click', (e) => {
        if (e.target === menu) {
            closeMenu();
        }
    });
    
    // 아코디언 메뉴는 이미 loadNavigation()에서 생성 시점에 이벤트 리스너가 등록됨
    // 여기서는 추가 작업 불필요
}

// 페이지 로드 시 스크롤 상태 초기화 (혹시 모를 버그 방지)
window.addEventListener('load', () => {
    // 페이지 로드 시 무조건 스크롤 복원
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
});

// 페이지 언로드 시에도 스크롤 복원 (페이지 이동 시)
window.addEventListener('beforeunload', () => {
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
});

