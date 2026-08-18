export const partShell = `
  <!-- 1. 상단 헤더 -->
  <header class="header">
    <div class="header-inner">
      <a class="logo" href="#">
        <svg class="logo-mark" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="8 6 2 12 8 18"></polyline>
          <polyline points="16 6 22 12 16 18"></polyline>
        </svg>
        <span class="logo-text">CODE LAB</span>
      </a>

      <nav class="main-nav">
        <a href="#" class="nav-link active">Home</a>
        <a href="#" class="nav-link">Builder</a>
        <a href="#" class="nav-link">Guide</a>
        <a href="#" class="nav-link">Challenges</a>
        <a href="#" class="nav-link">UI Inspiration</a>
        <a href="#" class="nav-link">About</a>
      </nav>

      <div class="header-actions">
        <button type="button" class="icon-btn" title="알림" aria-label="알림">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.7 21a2 2 0 0 1-3.4 0"></path>
          </svg>
        </button>
        <button type="button" class="icon-btn" title="도움말" aria-label="도움말">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="9"></circle>
            <path d="M9.1 9a3 3 0 1 1 4.7 2.5c-1 .7-1.8 1.2-1.8 2.5"></path>
            <line x1="12" y1="17" x2="12" y2="17.1"></line>
          </svg>
        </button>
        <a class="avatar" href="#" title="내 정보" aria-label="내 정보"></a>
        <svg class="avatar-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    </div>
  </header>

  <!-- 페이지 전체 콘텐츠를 담는 컨테이너: 최대 너비를 제한해 가운데 정렬하고,앞으로 다른 섹션을 추가할 때도 이 안에 넣으면 동일한 여백/정렬을 유지하려고 넣음 -->


  <!-- 2. 히어로(제목/소개) 영역 -->
  <section class="hero">
    <div class="container">
      <span class="badge">치트키 사전</span>
      <h1>HTML / CSS <span class="accent">치트키 사전</span></h1>
      <p>자주 사용하는 HTML 태그와 CSS 속성을 예제와 함께 한눈에 확인하세요.<br>
        필요한 코드를 빠르게 찾아 복사하고 활용해보세요.</p>
    </div>
  </section>

  <div class="container">
    <!-- 3. 검색 바: 입력하는 즉시 태그명, 설명, 예시 코드 전체에서 검색됨 -->
    <nav class="search-bar">
      <div class="search-wrap">
        <button type="button" class="search-icon-btn" id="searchIconBtn" onclick="handleSearch()" title="검색"
          aria-label="검색">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"
            stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="7"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
        <input class="search-box" id="searchInput" placeholder="태그, 속성, 설명, 예시 코드까지 검색" autocomplete="off" spellcheck="false"
          oninput="handleSearchInput()" onkeydown="handleSearchKeydown(event)">
        <span class="search-count" id="searchCount"></span>
        <button type="button" class="search-clear" id="searchClear" onclick="clearSearch()" title="지우기"
          aria-label="지우기">&times;</button>
      </div>
    </nav>


    <!-- 4. 본문: 좌측 카테고리 + 우측 콘텐츠 -->
    <div class="content">

      <!-- 좌측 사이드바 -->
      <aside class="sidebar">
        <h3>카테고리</h3>
        <!-- 즐겨찾기 전용 카테고리: 클릭하면 모든 패널을 통틀어 즐겨찾기한 항목만 모아 보여줌 -->
        <div class="cat-item fav-cat" data-category="favorites" onclick="showCategory(this)">
          <svg class="cat-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon
              points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
            </polygon>
          </svg>
          <span class="cat-label">즐겨찾기</span>
          <span class="fav-count" id="favCount">0</span>
        </div>
        <div class="cat-divider"></div>
        <!-- 각 항목에 data-category를 지정하고, 클릭 시 showCategory() 실행 -->
        <div class="cat-item cat-item--primary active" data-category="html" onclick="showCategory(this)">
          <svg class="cat-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
          <span class="cat-label">HTML 태그</span>
        </div>
        <div class="cat-item cat-item--primary" data-category="css" onclick="showCategory(this)">
          <svg class="cat-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M8 3H5a2 2 0 0 0-2 2v3a2 2 0 0 1-2 2 2 2 0 0 1 2 2v3a2 2 0 0 0 2 2h3"></path>
            <path d="M16 3h3a2 2 0 0 1 2 2v3a2 2 0 0 0 2 2 2 2 0 0 0-2 2v3a2 2 0 0 1-2 2h-3"></path>
          </svg>
          <span class="cat-label">CSS 속성</span>
        </div>
        <div class="cat-subnav" aria-label="CSS 세부 카테고리">
        <div class="cat-item" data-category="layout" onclick="showCategory(this)">
          <svg class="cat-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="3" width="7" height="7" rx="1"></rect>
            <rect x="14" y="3" width="7" height="7" rx="1"></rect>
            <rect x="3" y="14" width="7" height="7" rx="1"></rect>
            <rect x="14" y="14" width="7" height="7" rx="1"></rect>
          </svg>
          <span class="cat-label">레이아웃</span>
        </div>
        <div class="cat-item" data-category="typography" onclick="showCategory(this)">
          <svg class="cat-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="4 7 4 4 20 4 20 7"></polyline>
            <line x1="9" y1="20" x2="15" y2="20"></line>
            <line x1="12" y1="4" x2="12" y2="20"></line>
          </svg>
          <span class="cat-label">타이포그래피</span>
        </div>
        <div class="cat-item" data-category="color" onclick="showCategory(this)">
          <svg class="cat-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="9"></circle>
            <path d="M12 3a9 9 0 0 0 0 18 4.5 4.5 0 0 0 0-9 2 2 0 0 1 0-4"></path>
          </svg>
          <span class="cat-label">색상</span>
        </div>
        <div class="cat-item" data-category="responsive" onclick="showCategory(this)">
          <svg class="cat-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="7" y="2" width="10" height="20" rx="2"></rect>
            <line x1="11" y1="18" x2="13" y2="18"></line>
          </svg>
          <span class="cat-label">반응형</span>
        </div>
        <div class="cat-item" data-category="animation" onclick="showCategory(this)">
          <svg class="cat-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M2 12c2 0 2-6 4-6s2 12 4 12 2-12 4-12 2 6 4 6 2-6 4-6"></path>
          </svg>
          <span class="cat-label">애니메이션</span>
        </div>
        </div>
      </aside>

      <!-- 우측 메인 콘텐츠 -->
      <main class="main">

        <!-- [패널1] HTML 태그: 처음에 보여줄 패널이라 active 클래스 부여 -->`;
