export const pageMarkup = `

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

        <!-- [패널1] HTML 태그: 처음에 보여줄 패널이라 active 클래스 부여 -->
        <div class="panel active" id="panel-html">
          <h2>HTML 태그</h2>
          <p class="desc">자주 사용하는 HTML 태그와 기본 사용법을 확인하세요.</p>
          <div class="card-grid">
            <div class="card">
              <div class="card-head">

                <div class="tag">&lt;div&gt;</div>

                <button class="copy-btn" onclick="copyCode(this)" title="코드 복사" aria-label="코드 복사">

                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>

                </button>

              </div>
              <p>블록 레벨의 구분을 위한 컨테이너 요소</p>
              <pre>&lt;div class="box"&gt;
  내용
&lt;/div&gt;</pre>
            </div>
            <div class="card">
              <div class="card-head">

                <div class="tag">&lt;span&gt;</div>

                <button class="copy-btn" onclick="copyCode(this)" title="코드 복사" aria-label="코드 복사">

                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>

                </button>

              </div>
              <p>인라인 요소로 텍스트 일부를 감싸기 위한 요소</p>
              <pre>&lt;span class="text"&gt;
  텍스트
&lt;/span&gt;</pre>
            </div>
            <div class="card">
              <div class="card-head">

                <div class="tag">&lt;a&gt;</div>

                <button class="copy-btn" onclick="copyCode(this)" title="코드 복사" aria-label="코드 복사">

                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>

                </button>

              </div>
              <p>하이퍼링크를 생성하기 위한 요소</p>
              <pre>&lt;a href="https://example.com"&gt;
  링크 텍스트
&lt;/a&gt;</pre>
            </div>
            <div class="card">
              <div class="card-head">

                <div class="tag">&lt;img&gt;</div>

                <button class="copy-btn" onclick="copyCode(this)" title="코드 복사" aria-label="코드 복사">

                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>

                </button>

              </div>
              <p>이미지를 삽입하기 위한 요소</p>
              <pre>&lt;img src="image.jpg"
  alt="이미지 설명"&gt;</pre>
            </div>
            <div class="card">
              <div class="card-head">

                <div class="tag">&lt;button&gt;</div>

                <button class="copy-btn" onclick="copyCode(this)" title="코드 복사" aria-label="코드 복사">

                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>

                </button>

              </div>
              <p>클릭 가능한 버튼을 만들기 위한 요소</p>
              <pre>&lt;button&gt;
  확인
&lt;/button&gt;</pre>
            </div>
            <div class="card">
              <div class="card-head">

                <div class="tag">&lt;input&gt;</div>

                <button class="copy-btn" onclick="copyCode(this)" title="코드 복사" aria-label="코드 복사">

                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>

                </button>

              </div>
              <p>사용자 입력을 받기 위한 요소</p>
              <pre>&lt;input type="text"
  placeholder="입력"&gt;</pre>
            </div>
            <div class="card">
              <div class="card-head">

                <div class="tag">&lt;ul&gt;/&lt;li&gt;</div>

                <button class="copy-btn" onclick="copyCode(this)" title="코드 복사" aria-label="코드 복사">

                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>

                </button>

              </div>
              <p>순서 없는 목록을 만들기 위한 요소</p>
              <pre>&lt;ul&gt;
  &lt;li&gt;항목1&lt;/li&gt;
&lt;/ul&gt;</pre>
            </div>
            <div class="card">
              <div class="card-head">

                <div class="tag">&lt;table&gt;</div>

                <button class="copy-btn" onclick="copyCode(this)" title="코드 복사" aria-label="코드 복사">

                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>

                </button>

              </div>
              <p>표 형태의 데이터를 표시하기 위한 요소</p>
              <pre>&lt;table&gt;
  &lt;tr&gt;&lt;td&gt;내용&lt;/td&gt;&lt;/tr&gt;
&lt;/table&gt;</pre>
            </div>
            <div class="card">
              <div class="card-head">

                <div class="tag">&lt;h1&gt;</div>

                <button class="copy-btn" onclick="copyCode(this)" title="코드 복사" aria-label="코드 복사">

                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>

                </button>

              </div>
              <p>가장 큰 제목(헤딩)을 표시하기 위한 요소</p>
              <pre>&lt;h1&gt;
  제목
&lt;/h1&gt;</pre>
            </div>
            <div class="card">
              <div class="card-head">

                <div class="tag">&lt;p&gt;</div>

                <button class="copy-btn" onclick="copyCode(this)" title="코드 복사" aria-label="코드 복사">

                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>

                </button>

              </div>
              <p>문단을 표시하기 위한 요소</p>
              <pre>&lt;p&gt;
  내용
&lt;/p&gt;</pre>
            </div>
            <div class="card">
              <div class="card-head">

                <div class="tag">&lt;header&gt;</div>

                <button class="copy-btn" onclick="copyCode(this)" title="코드 복사" aria-label="코드 복사">

                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>

                </button>

              </div>
              <p>웹페이지의 상단 영역을 구성하는 요소</p>
              <pre>&lt;header&gt;
    내용
&lt;/header&gt;</pre>
            </div>
            <div class="card">
              <div class="card-head">

                <div class="tag">&lt;nav&gt;</div>

                <button class="copy-btn" onclick="copyCode(this)" title="코드 복사" aria-label="코드 복사">

                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>

                </button>

              </div>
              <p>메뉴나 네비게이션을 만드는 요소</p>
              <pre>&lt;nav&gt;
  &lt;a href="#"&gt;
    Home
  &lt;/a&gt;
  &lt;a href="#"&gt;
    Guide
  &lt;/a&gt;
  &lt;a href="#"&gt;
    About
  &lt;/a&gt;
&lt;/nav&gt;</pre>
            </div>
            <div class="card">
              <div class="card-head">

                <div class="tag">&lt;main&gt;</div>

                <button class="copy-btn" onclick="copyCode(this)" title="코드 복사" aria-label="코드 복사">

                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>

                </button>

              </div>
              <p>문서의 핵심 콘텐츠를 감싸는 요소</p>
              <pre>&lt;main&gt;
  &lt;section&gt;
    콘텐츠
  &lt;/section&gt;
&lt;/main&gt;</pre>
            </div>
            <div class="card">
              <div class="card-head">

                <div class="tag">&lt;article&gt;</div>

                <button class="copy-btn" onclick="copyCode(this)" title="코드 복사" aria-label="코드 복사">

                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>

                </button>

              </div>
              <p>독립적으로 사용할 수 있는 콘텐츠를 나타내는 요소</p>
              <pre>&lt;article&gt;
  &lt;h3&gt;
   HTML 소개
  &lt;/h3&gt;
  &lt;p&gt;
   HTML은 웹페이지의 구조를 만듭니다.
  &lt;/p&gt;
&lt;/article&gt;</pre>
            </div>
            <div class="card">
              <div class="card-head">

                <div class="tag">&lt;aside&gt;</div>

                <button class="copy-btn" onclick="copyCode(this)" title="코드 복사" aria-label="코드 복사">

                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>

                </button>

              </div>
              <p>사이드바나 추가 정보를 표시하는 요소</p>
              <pre>&lt;aside&gt;
  내용
&lt;/aside&gt;</pre>
            </div>
            <div class="card">
              <div class="card-head">

                <div class="tag">&lt;footer&gt;</div>

                <button class="copy-btn" onclick="copyCode(this)" title="코드 복사" aria-label="코드 복사">

                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>

                </button>

              </div>
              <p>웹페이지 하단 정보를 표시하는 요소</p>
              <pre>&lt;footer&gt;
  내용
&lt;/footer&gt;</pre>
            </div>
            <div class="card">
              <div class="card-head">

                <div class="tag">&lt;form&gt;</div>

                <button class="copy-btn" onclick="copyCode(this)" title="코드 복사" aria-label="코드 복사">

                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>

                </button>

              </div>
              <p>사용자 입력을 서버로 전송하는 영역</p>
              <pre>&lt;form&gt;
  &lt;input type="text"&gt;
  &lt;button&gt; 전송 &lt;/button&gt;
&lt;/form&gt;</pre>
            </div>
            <div class="card">
              <div class="card-head">

                <div class="tag">&lt;label&gt;</div>

                <button class="copy-btn" onclick="copyCode(this)" title="코드 복사" aria-label="코드 복사">

                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>

                </button>

              </div>
              <p>문단을 표시하기 위한 요소</p>
              <pre>&lt;label for="email"&gt;
  이메일
&lt;/label&gt;
&lt;input id="email"&gt;</pre>
            </div>
            <div class="card">
              <div class="card-head">

                <div class="tag">&lt;textarea&gt;</div>

                <button class="copy-btn" onclick="copyCode(this)" title="코드 복사" aria-label="코드 복사">

                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>

                </button>

              </div>
              <p>여러 줄의 텍스트를 입력받는 요소</p>
              <pre>&lt;textarea
placeholder="내용을 입력하세요"&gt;
  내용
&lt;/textarea&gt;</pre>
            </div>
            <div class="card">
              <div class="card-head">

                <div class="tag">&lt;select&gt;</div>

                <button class="copy-btn" onclick="copyCode(this)" title="코드 복사" aria-label="코드 복사">

                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>

                </button>

              </div>
              <p>드롭다운 목록을 만드는 요소</p>
              <pre>&lt;select&gt;
  &lt;option&gt; HTML &lt;/option&gt;
  &lt;option&gt; CSS &lt;/option&gt;
&lt;/select&gt;</pre>
            </div>
            <div class="card">
              <div class="card-head">

                <div class="tag">&lt;option&gt;</div>

                <button class="copy-btn" onclick="copyCode(this)" title="코드 복사" aria-label="코드 복사">

                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>

                </button>

              </div>
              <p>드롭다운의 선택 항목</p>
              <pre>&lt;option&gt;
  JavaScript
&lt;/option&gt;</pre>
            </div>
            <div class="card">
              <div class="card-head">

                <div class="tag">&lt;video&gt;</div>

                <button class="copy-btn" onclick="copyCode(this)" title="코드 복사" aria-label="코드 복사">

                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>

                </button>

              </div>
              <p>동영상을 삽입하는 요소</p>
              <pre>&lt;video&gt;
  &lt;source src="movie.mp4"&gt;
&lt;/video&gt;</pre>
            </div>
            <div class="card">
              <div class="card-head">

                <div class="tag">&lt;audio&gt;</div>

                <button class="copy-btn" onclick="copyCode(this)" title="코드 복사" aria-label="코드 복사">

                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>

                </button>

              </div>
              <p>오디오를 삽입하는 요소</p>
              <pre>&lt;audio&gt;
  &lt;source src="music.mp3"&gt;
&lt;/audio&gt;</pre>
            </div>
            <div class="card">
              <div class="card-head">

                <div class="tag">&lt;iframe&gt;</div>

                <button class="copy-btn" onclick="copyCode(this)" title="코드 복사" aria-label="코드 복사">

                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>

                </button>

              </div>
              <p>외부 웹페이지를 삽입하는 요소</p>
              <pre>&lt;iframe src="https://example.com"&gt;
&lt;/iframe&gt;</pre>
            </div>
            <div class="card">
              <div class="card-head">

                <div class="tag">&lt;figure&gt;</div>

                <button class="copy-btn" onclick="copyCode(this)" title="코드 복사" aria-label="코드 복사">

                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>

                </button>

              </div>
              <p>이미지나 그래프를 그룹화하는 요소</p>
              <pre>&lt;figure&gt;
  &lt;img src="cat.jpg"&gt;
&lt;/figure&gt;</pre>
            </div>
            <div class="card">
              <div class="card-head">

                <div class="tag">&lt;figcaption&gt;</div>

                <button class="copy-btn" onclick="copyCode(this)" title="코드 복사" aria-label="코드 복사">

                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>

                </button>

              </div>
              <p>이미지 설명을 표시하는 요소</p>
              <pre>&lt;figure&gt;
  &lt;img src="cat.jpg"&gt;
  &lt;figcaption&gt; 고양이 사진 &lt;/figcaption&gt;
&lt;/figure&gt;</pre>
            </div>
            <div class="card">
              <div class="card-head">

                <div class="tag">&lt;strong&gt;</div>

                <button class="copy-btn" onclick="copyCode(this)" title="코드 복사" aria-label="코드 복사">

                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>

                </button>

              </div>
              <p>중요한 텍스트를 강조하는 요소</p>
              <pre>&lt;strong&gt;
  중요한 내용
&lt;/strong&gt;</pre>
            </div>
            <div class="card">
              <div class="card-head">

                <div class="tag">&lt;em&gt;</div>

                <button class="copy-btn" onclick="copyCode(this)" title="코드 복사" aria-label="코드 복사">

                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>

                </button>

              </div>
              <p>텍스트를 강조하여 표현하는 요소</p>
              <pre>&lt;em&gt;
  강조
&lt;/em&gt;</pre>
            </div>
            <div class="card">
              <div class="card-head">

                <div class="tag">&lt;mark&gt;</div>

                <button class="copy-btn" onclick="copyCode(this)" title="코드 복사" aria-label="코드 복사">

                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>

                </button>

              </div>
              <p>형광펜 효과를 주는 요소</p>
              <pre>&lt;mark&gt;
  HTML
&lt;/mark&gt;</pre>
            </div>
            <div class="card">
              <div class="card-head">

                <div class="tag">&lt;small&gt;</div>

                <button class="copy-btn" onclick="copyCode(this)" title="코드 복사" aria-label="코드 복사">

                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>

                </button>

              </div>
              <p>작은 글씨를 표시하는 요소</p>
              <pre>&lt;small&gt;
  Copyright
&lt;/small&gt;</pre>
            </div>
            <div class="card">
              <div class="card-head">

                <div class="tag">&lt;code&gt;</div>

                <button class="copy-btn" onclick="copyCode(this)" title="코드 복사" aria-label="코드 복사">

                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>

                </button>

              </div>
              <p>코드 조각을 표현하는 요소</p>
              <pre>&lt;code&gt;
  console.log()
&lt;/code&gt;</pre>
            </div>
            <div class="card">
              <div class="card-head">

                <div class="tag">&lt;blockquote&gt;</div>

                <button class="copy-btn" onclick="copyCode(this)" title="코드 복사" aria-label="코드 복사">

                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>

                </button>

              </div>
              <p>긴 인용문을 표시하는 요소</p>
              <pre>&lt;blockquote&gt;
  HTML은 웹의 시작입니다.
&lt;/blockquote&gt;</pre>
            </div>
            <div class="card">
              <div class="card-head">

                <div class="tag">&lt;pre&gt;</div>

                <button class="copy-btn" onclick="copyCode(this)" title="코드 복사" aria-label="코드 복사">

                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>

                </button>

              </div>
              <p>공백과 줄바꿈을 그대로 출력하는 요소</p>
              <pre>&lt;pre&gt;
  Hello 
  World
&lt;/pre&gt;</pre>
            </div>
            <div class="card">
              <div class="card-head">

                <div class="tag">&lt;details&gt;</div>

                <button class="copy-btn" onclick="copyCode(this)" title="코드 복사" aria-label="코드 복사">

                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>

                </button>

              </div>
              <p>접었다 펼칠 수 있는 영역</p>
              <pre>&lt;details&gt;
  &lt;summary&gt;
    더보기
  &lt;/summary&gt;
  내용              
&lt;/details&gt;</pre>
            </div>
            <div class="card">
              <div class="card-head">

                <div class="tag">&lt;progress&gt;</div>

                <button class="copy-btn" onclick="copyCode(this)" title="코드 복사" aria-label="코드 복사">

                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>

                </button>

              </div>
              <p>진행률을 표시하는 요소</p>
              <pre>&lt;progress value="70"
max="100"&gt;
&lt;/progress&gt;</pre>
            </div>
            <div class="card">
              <div class="card-head">

                <div class="tag">&lt;summary&gt;</div>

                <button class="copy-btn" onclick="copyCode(this)" title="코드 복사" aria-label="코드 복사">

                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>

                </button>

              </div>
              <p>details의 제목을 표시하는 요소</p>
              <pre>&lt;summary&gt;
  클릭하세요
&lt;/summary&gt;</pre>
            </div>
            <div class="card">
              <div class="card-head">

                <div class="tag">&lt;meter&gt;</div>

                <button class="copy-btn" onclick="copyCode(this)" title="코드 복사" aria-label="코드 복사">

                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>

                </button>

              </div>
              <p>현재 수치를 나타내는 요소</p>
              <pre>&lt;meter
  value="80"
  max="100"&gt;
&lt;/meter&gt;</pre>
            </div>
            <div class="card">
              <div class="card-head">

                <div class="tag">&lt;time&gt;</div>

                <button class="copy-btn" onclick="copyCode(this)" title="코드 복사" aria-label="코드 복사">

                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>

                </button>

              </div>
              <p>날짜와 시간을 표현하는 요소</p>
              <pre>&lt;time datetime="2026-07-29"&gt;
  2026.07.29
&lt;/time&gt;</pre>
            </div>
            <div class="card">
              <div class="card-head">

                <div class="tag">&lt;abbr&gt;</div>

                <button class="copy-btn" onclick="copyCode(this)" title="코드 복사" aria-label="코드 복사">

                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>

                </button>

              </div>
              <p>약어를 표현하는 요소</p>
              <pre>&lt;abbr&gt;
  HTML
&lt;/abbr&gt;</pre>
            </div>
          </div>
          <div class="load-more"></div>
        </div>

        <!-- [패널2] CSS 속성 -->
        <div class="panel" id="panel-css">
          <h2>CSS 속성</h2>
          <p class="desc">자주 사용하는 CSS 속성과 사용 예제를 확인하세요.</p>
          <table>
            <tr>
              <th>속성</th>
              <th>설명</th>
              <th>사용 예제</th>
              <th>결과</th>
            </tr>
            <tr>
              <td><code>display</code></td>
              <td>요소의 표시 방식을 지정</td>
              <td>
                <div class="code-cell"><code>display: flex;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>플렉스 컨테이너로 지정</td>
            </tr>
            <tr>
              <td><code>margin</code></td>
              <td>요소 외부 여백 지정</td>
              <td>
                <div class="code-cell"><code>margin: 10px 20px;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>상하 10px, 좌우 20px 여백</td>
            </tr>
            <tr>
              <td><code>padding</code></td>
              <td>요소 내부 여백 지정</td>
              <td>
                <div class="code-cell"><code>padding: 16px;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>모든 방향에 16px 패딩</td>
            </tr>
            <tr>
              <td><code>color</code></td>
              <td>텍스트 색상 지정</td>
              <td>
                <div class="code-cell"><code>color: #333;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>텍스트 색상을 지정</td>
            </tr>
            <tr>
              <td><code>background-color</code></td>
              <td>배경 색상 지정</td>
              <td>
                <div class="code-cell"><code>background-color: #fff;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>흰색 배경 적용</td>
            </tr>
            <tr>
              <td><code>border</code></td>
              <td>테두리 지정</td>
              <td>
                <div class="code-cell"><code>border: 1px solid #ddd;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>1px 실선 테두리 적용</td>
            </tr>
            <tr>
              <td><code>border-radius</code></td>
              <td>테두리 모서리를 둥글게 지정</td>
              <td>
                <div class="code-cell"><code>border-radius: 8px;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>모서리를 8px 둥글게 처리</td>
            </tr>
            <tr>
              <td><code>font-size</code></td>
              <td>글자 크기 지정</td>
              <td>
                <div class="code-cell"><code>font-size: 16px;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>16px 크기의 글자로 표시</td>
            </tr>
            <tr>
              <td><code>opacity</code></td>
              <td>요소의 투명도 지정</td>
              <td>
                <div class="code-cell"><code>opacity: 0.8;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>80% 불투명하게 표시</td>
            </tr>
            <tr>
              <td><code>cursor</code></td>
              <td>마우스 커서 모양 지정</td>
              <td>
                <div class="code-cell"><code>cursor: pointer;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>클릭 가능한 손모양 커서</td>
            </tr>
            <tr>
              <td><code>width</code></td>
              <td>요소의 너비를 지정</td>
              <td>
                <div class="code-cell">
                  <code>width: 300px;</code>
                  <button class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  </button>
                </div>
              </td>
              <td>요소 너비를 300px로 지정</td>
            </tr>

            <tr>
              <td><code>height</code></td>
              <td>요소의 높이를 지정</td>
              <td>
                <div class="code-cell">
                  <code>height: 200px;</code>
                  <button class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  </button>
                </div>
              </td>
              <td>요소 높이를 200px로 지정</td>
            </tr>

            <tr>
              <td><code>max-width</code></td>
              <td>요소가 가질 수 있는 최대 너비 지정</td>
              <td>
                <div class="code-cell">
                  <code>max-width: 1200px;</code>
                  <button class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  </button>
                </div>
              </td>
              <td>너비가 최대 1200px까지 확장</td>
            </tr>

            <tr>
              <td><code>min-height</code></td>
              <td>요소가 가질 수 있는 최소 높이 지정</td>
              <td>
                <div class="code-cell">
                  <code>min-height: 100vh;</code>
                  <button class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  </button>
                </div>
              </td>
              <td>최소 높이를 화면 전체 높이로 지정</td>
            </tr>

            <tr>
              <td><code>position</code></td>
              <td>요소의 위치 지정 방식을 설정</td>
              <td>
                <div class="code-cell">
                  <code>position: relative;</code>
                  <button class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  </button>
                </div>
              </td>
              <td>현재 위치를 기준으로 배치</td>
            </tr>

            <tr>
              <td><code>top</code></td>
              <td>위쪽을 기준으로 요소 위치 지정</td>
              <td>
                <div class="code-cell">
                  <code>top: 20px;</code>
                  <button class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  </button>
                </div>
              </td>
              <td>기준 위치에서 아래로 20px 이동</td>
            </tr>

            <tr>
              <td><code>left</code></td>
              <td>왼쪽을 기준으로 요소 위치 지정</td>
              <td>
                <div class="code-cell">
                  <code>left: 20px;</code>
                  <button class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  </button>
                </div>
              </td>
              <td>기준 위치에서 오른쪽으로 20px 이동</td>
            </tr>

            <tr>
              <td><code>z-index</code></td>
              <td>요소가 겹칠 때 쌓이는 순서 지정</td>
              <td>
                <div class="code-cell">
                  <code>z-index: 10;</code>
                  <button class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  </button>
                </div>
              </td>
              <td>값이 낮은 요소보다 위에 표시</td>
            </tr>

            <tr>
              <td><code>overflow</code></td>
              <td>요소를 벗어난 콘텐츠 처리 방식을 지정</td>
              <td>
                <div class="code-cell">
                  <code>overflow: hidden;</code>
                  <button class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  </button>
                </div>
              </td>
              <td>영역을 벗어난 콘텐츠를 숨김</td>
            </tr>

            <tr>
              <td><code>box-sizing</code></td>
              <td>요소 크기를 계산하는 방식을 지정</td>
              <td>
                <div class="code-cell">
                  <code>box-sizing: border-box;</code>
                  <button class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  </button>
                </div>
              </td>
              <td>패딩과 테두리를 크기에 포함</td>
            </tr>

            <tr>
              <td><code>gap</code></td>
              <td>Flex 또는 Grid 자식 요소 사이 간격 지정</td>
              <td>
                <div class="code-cell">
                  <code>gap: 20px;</code>
                  <button class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  </button>
                </div>
              </td>
              <td>자식 요소 사이에 20px 간격 생성</td>
            </tr>

            <tr>
              <td><code>justify-content</code></td>
              <td>Flex 또는 Grid 요소를 주축 방향으로 정렬</td>
              <td>
                <div class="code-cell">
                  <code>justify-content: center;</code>
                  <button class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  </button>
                </div>
              </td>
              <td>자식 요소를 가로 가운데 정렬</td>
            </tr>

            <tr>
              <td><code>align-items</code></td>
              <td>Flex 또는 Grid 요소를 교차축 방향으로 정렬</td>
              <td>
                <div class="code-cell">
                  <code>align-items: center;</code>
                  <button class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  </button>
                </div>
              </td>
              <td>자식 요소를 세로 가운데 정렬</td>
            </tr>

            <tr>
              <td><code>flex-direction</code></td>
              <td>Flex 자식 요소가 배치되는 방향 지정</td>
              <td>
                <div class="code-cell">
                  <code>flex-direction: column;</code>
                  <button class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  </button>
                </div>
              </td>
              <td>자식 요소를 세로 방향으로 배치</td>
            </tr>

            <tr>
              <td><code>flex-wrap</code></td>
              <td>Flex 자식 요소의 줄바꿈 여부 지정</td>
              <td>
                <div class="code-cell">
                  <code>flex-wrap: wrap;</code>
                  <button class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  </button>
                </div>
              </td>
              <td>공간이 부족하면 다음 줄로 배치</td>
            </tr>

            <tr>
              <td><code>grid-template-columns</code></td>
              <td>Grid 레이아웃의 열 구조를 지정</td>
              <td>
                <div class="code-cell">
                  <code>grid-template-columns: repeat(3, 1fr);</code>
                  <button class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  </button>
                </div>
              </td>
              <td>같은 너비를 가진 3개의 열 생성</td>
            </tr>

            <tr>
              <td><code>font-family</code></td>
              <td>텍스트에 사용할 글꼴을 지정</td>
              <td>
                <div class="code-cell">
                  <code>font-family: "Pretendard", sans-serif;</code>
                  <button class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  </button>
                </div>
              </td>
              <td>Pretendard 글꼴 우선 적용</td>
            </tr>

            <tr>
              <td><code>font-weight</code></td>
              <td>글자의 굵기를 지정</td>
              <td>
                <div class="code-cell">
                  <code>font-weight: 700;</code>
                  <button class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  </button>
                </div>
              </td>
              <td>글자를 굵게 표시</td>
            </tr>

            <tr>
              <td><code>line-height</code></td>
              <td>텍스트 줄 높이를 지정</td>
              <td>
                <div class="code-cell">
                  <code>line-height: 1.6;</code>
                  <button class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  </button>
                </div>
              </td>
              <td>글자 크기의 1.6배 줄 간격 적용</td>
            </tr>

            <tr>
              <td><code>letter-spacing</code></td>
              <td>글자 사이의 간격을 지정</td>
              <td>
                <div class="code-cell">
                  <code>letter-spacing: -0.5px;</code>
                  <button class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  </button>
                </div>
              </td>
              <td>글자 사이 간격을 0.5px 좁힘</td>
            </tr>

            <tr>
              <td><code>text-align</code></td>
              <td>텍스트의 가로 정렬 방식 지정</td>
              <td>
                <div class="code-cell">
                  <code>text-align: center;</code>
                  <button class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  </button>
                </div>
              </td>
              <td>텍스트를 가운데 정렬</td>
            </tr>

            <tr>
              <td><code>text-decoration</code></td>
              <td>텍스트에 밑줄 등의 장식을 지정</td>
              <td>
                <div class="code-cell">
                  <code>text-decoration: none;</code>
                  <button class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  </button>
                </div>
              </td>
              <td>링크 등의 밑줄을 제거</td>
            </tr>

            <tr>
              <td><code>white-space</code></td>
              <td>텍스트의 줄바꿈 처리 방식을 지정</td>
              <td>
                <div class="code-cell">
                  <code>white-space: nowrap;</code>
                  <button class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  </button>
                </div>
              </td>
              <td>텍스트가 한 줄로 표시됨</td>
            </tr>

            <tr>
              <td><code>text-overflow</code></td>
              <td>넘친 텍스트의 표시 방식을 지정</td>
              <td>
                <div class="code-cell">
                  <code>text-overflow: ellipsis;</code>
                  <button class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  </button>
                </div>
              </td>
              <td>넘친 텍스트를 말줄임표로 표시</td>
            </tr>

            <tr>
              <td><code>background-image</code></td>
              <td>요소에 배경 이미지를 지정</td>
              <td>
                <div class="code-cell">
                  <code>background-image: url("//img/bg.jpg");</code>
                  <button class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  </button>
                </div>
              </td>
              <td>지정된 이미지를 배경으로 표시</td>
            </tr>

            <tr>
              <td><code>background-size</code></td>
              <td>배경 이미지의 크기를 지정</td>
              <td>
                <div class="code-cell">
                  <code>background-size: cover;</code>
                  <button class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  </button>
                </div>
              </td>
              <td>영역을 빈틈없이 채우도록 확대</td>
            </tr>

            <tr>
              <td><code>background-position</code></td>
              <td>배경 이미지의 표시 위치를 지정</td>
              <td>
                <div class="code-cell">
                  <code>background-position: center;</code>
                  <button class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  </button>
                </div>
              </td>
              <td>배경 이미지를 가운데에 배치</td>
            </tr>

            <tr>
              <td><code>background-repeat</code></td>
              <td>배경 이미지의 반복 여부를 지정</td>
              <td>
                <div class="code-cell">
                  <code>background-repeat: no-repeat;</code>
                  <button class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  </button>
                </div>
              </td>
              <td>배경 이미지 반복을 제거</td>
            </tr>

            <tr>
              <td><code>box-shadow</code></td>
              <td>요소 주위에 그림자 효과를 지정</td>
              <td>
                <div class="code-cell">
                  <code>box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);</code>
                  <button class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  </button>
                </div>
              </td>
              <td>요소 아래에 부드러운 그림자 생성</td>
            </tr>

            <tr>
              <td><code>transition</code></td>
              <td>속성값 변화를 부드럽게 처리</td>
              <td>
                <div class="code-cell">
                  <code>transition: all 0.3s ease;</code>
                  <button class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  </button>
                </div>
              </td>
              <td>모든 속성이 0.3초 동안 부드럽게 변경</td>
            </tr>

            <tr>
              <td><code>transform</code></td>
              <td>요소의 크기, 위치, 회전 등을 변형</td>
              <td>
                <div class="code-cell">
                  <code>transform: translateY(-4px);</code>
                  <button class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  </button>
                </div>
              </td>
              <td>요소를 위쪽으로 4px 이동</td>
            </tr>

            <tr>
              <td><code>object-fit</code></td>
              <td>이미지나 영상이 영역에 맞춰지는 방식을 지정</td>
              <td>
                <div class="code-cell">
                  <code>object-fit: cover;</code>
                  <button class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  </button>
                </div>
              </td>
              <td>비율을 유지하며 영역을 가득 채움</td>
            </tr>

            <tr>
              <td><code>aspect-ratio</code></td>
              <td>요소의 가로세로 비율을 지정</td>
              <td>
                <div class="code-cell">
                  <code>aspect-ratio: 16 / 9;</code>
                  <button class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  </button>
                </div>
              </td>
              <td>요소의 비율을 16:9로 유지</td>
            </tr>

            <tr>
              <td><code>pointer-events</code></td>
              <td>마우스 클릭 이벤트 허용 여부 지정</td>
              <td>
                <div class="code-cell">
                  <code>pointer-events: none;</code>
                  <button class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  </button>
                </div>
              </td>
              <td>요소의 클릭과 마우스 이벤트 차단</td>
            </tr>

            <tr>
              <td><code>user-select</code></td>
              <td>텍스트 드래그 선택 가능 여부 지정</td>
              <td>
                <div class="code-cell">
                  <code>user-select: none;</code>
                  <button class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  </button>
                </div>
              </td>
              <td>텍스트가 드래그되지 않도록 설정</td>
            </tr>



          </table>
          <div class="load-more"></div>
        </div>

        <!-- [패널3] 레이아웃 -->
        <div class="panel" id="panel-layout">
          <h2>레이아웃</h2>
          <p class="desc">요소 배치를 위한 레이아웃 속성을 확인하세요.</p>
          <table>
            <tr>
              <th>속성</th>
              <th>설명</th>
              <th>사용 예제</th>
              <th>결과</th>
            </tr>
            <tr>
              <td><code>flex</code></td>
              <td>플렉스 아이템의 크기 비율 지정</td>
              <td>
                <div class="code-cell"><code>flex: 1;</code><button class="copy-btn-sm" onclick="copyInlineCode(this)"
                    title="복사" aria-label="복사"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>남은 공간을 균등하게 차지</td>
            </tr>
            <tr>
              <td><code>grid-template-columns</code></td>
              <td>그리드의 열 구조 지정</td>
              <td>
                <div class="code-cell"><code>grid-template-columns: repeat(4, 1fr);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>동일한 너비의 4개 열 생성</td>
            </tr>
            <tr>
              <td><code>position</code></td>
              <td>요소의 위치 지정 방식</td>
              <td>
                <div class="code-cell"><code>position: absolute;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>부모 기준으로 위치 지정</td>
            </tr>
            <tr>
              <td><code>top / left</code></td>
              <td>위치 좌표 지정</td>
              <td>
                <div class="code-cell"><code>top: 10px; left: 20px;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>상단 10px, 좌측 20px 이동</td>
            </tr>
            <tr>
              <td><code>width / height</code></td>
              <td>요소의 크기 지정</td>
              <td>
                <div class="code-cell"><code>width: 100px; height: 50px;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>가로 100px, 세로 50px 지정</td>
            </tr>
            <tr>
              <td><code>gap</code></td>
              <td>요소 사이의 간격 지정</td>
              <td>
                <div class="code-cell"><code>gap: 16px;</code><button class="copy-btn-sm" onclick="copyInlineCode(this)"
                    title="복사" aria-label="복사"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>아이템 사이 16px 간격</td>
            </tr>
            <tr>
              <td><code>justify-content</code></td>
              <td>가로 방향 정렬 방식 지정</td>
              <td>
                <div class="code-cell"><code>justify-content: center;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>가로 가운데 정렬</td>
            </tr>
            <tr>
              <td><code>align-items</code></td>
              <td>세로 방향 정렬 방식 지정</td>
              <td>
                <div class="code-cell"><code>align-items: center;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>세로 가운데 정렬</td>
            </tr>
            <tr>
              <td><code>display</code></td>
              <td>요소의 표시 방식을 지정</td>
              <td>
                <div class="code-cell"><code>display: block;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>블록 요소로 표시</td>
            </tr>
            <tr>
              <td><code>display: inline</code></td>
              <td>요소를 인라인 형식으로 표시</td>
              <td>
                <div class="code-cell"><code>display: inline;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>내용 크기만큼 가로로 배치</td>
            </tr>
            <tr>
              <td><code>display: inline-block</code></td>
              <td>인라인 배치와 크기 지정을 함께 적용</td>
              <td>
                <div class="code-cell"><code>display: inline-block;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>가로 배치하면서 너비와 높이 지정 가능</td>
            </tr>
            <tr>
              <td><code>display: none</code></td>
              <td>요소를 화면과 문서 흐름에서 제거</td>
              <td>
                <div class="code-cell"><code>display: none;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>요소와 차지하던 공간이 사라짐</td>
            </tr>
            <tr>
              <td><code>display: flex</code></td>
              <td>요소를 플렉스 컨테이너로 지정</td>
              <td>
                <div class="code-cell"><code>display: flex;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>자식 요소를 플렉스 방식으로 배치</td>
            </tr>
            <tr>
              <td><code>display: inline-flex</code></td>
              <td>요소를 인라인 플렉스 컨테이너로 지정</td>
              <td>
                <div class="code-cell"><code>display: inline-flex;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>내용 크기의 플렉스 영역 생성</td>
            </tr>
            <tr>
              <td><code>display: grid</code></td>
              <td>요소를 그리드 컨테이너로 지정</td>
              <td>
                <div class="code-cell"><code>display: grid;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>행과 열을 기준으로 자식 요소 배치</td>
            </tr>
            <tr>
              <td><code>display: inline-grid</code></td>
              <td>요소를 인라인 그리드 컨테이너로 지정</td>
              <td>
                <div class="code-cell"><code>display: inline-grid;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>내용 크기의 그리드 영역 생성</td>
            </tr>
            <tr>
              <td><code>display: contents</code></td>
              <td>부모 박스 없이 자식 요소만 배치</td>
              <td>
                <div class="code-cell"><code>display: contents;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>자식이 상위 레이아웃에 직접 참여</td>
            </tr>
            <tr>
              <td><code>box-sizing</code></td>
              <td>요소 크기의 계산 방식을 지정</td>
              <td>
                <div class="code-cell"><code>box-sizing: border-box;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>패딩과 테두리를 크기에 포함</td>
            </tr>
            <tr>
              <td><code>position</code></td>
              <td>요소의 위치 지정 방식을 설정</td>
              <td>
                <div class="code-cell"><code>position: relative;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>현재 위치를 기준으로 배치</td>
            </tr>
            <tr>
              <td><code>position: static</code></td>
              <td>기본 문서 흐름에 따라 요소 배치</td>
              <td>
                <div class="code-cell"><code>position: static;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>별도의 좌표 지정 없이 기본 위치 표시</td>
            </tr>
            <tr>
              <td><code>position: relative</code></td>
              <td>원래 위치를 기준으로 상대 배치</td>
              <td>
                <div class="code-cell"><code>position: relative;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>absolute 자식 요소의 기준이 됨</td>
            </tr>
            <tr>
              <td><code>position: absolute</code></td>
              <td>가까운 위치 지정 부모를 기준으로 배치</td>
              <td>
                <div class="code-cell"><code>position: absolute;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>일반 문서 흐름에서 빠져 배치</td>
            </tr>
            <tr>
              <td><code>position: fixed</code></td>
              <td>브라우저 화면을 기준으로 요소 고정</td>
              <td>
                <div class="code-cell"><code>position: fixed;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>스크롤해도 같은 위치 유지</td>
            </tr>
            <tr>
              <td><code>position: sticky</code></td>
              <td>스크롤 위치에 따라 요소를 고정</td>
              <td>
                <div class="code-cell"><code>position: sticky;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>지정 지점부터 화면에 고정</td>
            </tr>
            <tr>
              <td><code>top</code></td>
              <td>위쪽 기준 위치를 지정</td>
              <td>
                <div class="code-cell"><code>top: 20px;</code><button class="copy-btn-sm" onclick="copyInlineCode(this)"
                    title="복사" aria-label="복사"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>기준 위치에서 아래로 20px 이동</td>
            </tr>
            <tr>
              <td><code>right</code></td>
              <td>오른쪽 기준 위치를 지정</td>
              <td>
                <div class="code-cell"><code>right: 0;</code><button class="copy-btn-sm" onclick="copyInlineCode(this)"
                    title="복사" aria-label="복사"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>기준 영역의 오른쪽 끝에 배치</td>
            </tr>
            <tr>
              <td><code>bottom</code></td>
              <td>아래쪽 기준 위치를 지정</td>
              <td>
                <div class="code-cell"><code>bottom: 20px;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>아래쪽에서 20px 떨어져 배치</td>
            </tr>
            <tr>
              <td><code>left</code></td>
              <td>왼쪽 기준 위치를 지정</td>
              <td>
                <div class="code-cell"><code>left: 0;</code><button class="copy-btn-sm" onclick="copyInlineCode(this)"
                    title="복사" aria-label="복사"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>기준 영역의 왼쪽 끝에 배치</td>
            </tr>
            <tr>
              <td><code>inset</code></td>
              <td>상하좌우 위치를 한 번에 지정</td>
              <td>
                <div class="code-cell"><code>inset: 0;</code><button class="copy-btn-sm" onclick="copyInlineCode(this)"
                    title="복사" aria-label="복사"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>부모 영역에 빈틈없이 배치</td>
            </tr>
            <tr>
              <td><code>inset-inline</code></td>
              <td>글쓰기 방향 기준 좌우 위치를 지정</td>
              <td>
                <div class="code-cell"><code>inset-inline: 20px;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>좌우에 20px 간격 적용</td>
            </tr>
            <tr>
              <td><code>inset-block</code></td>
              <td>글쓰기 방향 기준 상하 위치를 지정</td>
              <td>
                <div class="code-cell"><code>inset-block: 10px;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>위아래에 10px 간격 적용</td>
            </tr>
            <tr>
              <td><code>z-index</code></td>
              <td>겹치는 요소의 쌓임 순서를 지정</td>
              <td>
                <div class="code-cell"><code>z-index: 100;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>낮은 값의 요소보다 위에 표시</td>
            </tr>
            <tr>
              <td><code>width</code></td>
              <td>요소의 너비를 지정</td>
              <td>
                <div class="code-cell"><code>width: 300px;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>요소 너비를 300px로 설정</td>
            </tr>
            <tr>
              <td><code>height</code></td>
              <td>요소의 높이를 지정</td>
              <td>
                <div class="code-cell"><code>height: 200px;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>요소 높이를 200px로 설정</td>
            </tr>
            <tr>
              <td><code>min-width</code></td>
              <td>요소의 최소 너비를 지정</td>
              <td>
                <div class="code-cell"><code>min-width: 280px;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>너비가 280px보다 작아지지 않음</td>
            </tr>
            <tr>
              <td><code>max-width</code></td>
              <td>요소의 최대 너비를 지정</td>
              <td>
                <div class="code-cell"><code>max-width: 1200px;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>너비가 1200px를 넘지 않음</td>
            </tr>
            <tr>
              <td><code>min-height</code></td>
              <td>요소의 최소 높이를 지정</td>
              <td>
                <div class="code-cell"><code>min-height: 100vh;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>최소 높이를 화면 전체 높이로 유지</td>
            </tr>
            <tr>
              <td><code>max-height</code></td>
              <td>요소의 최대 높이를 지정</td>
              <td>
                <div class="code-cell"><code>max-height: 500px;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>높이가 500px를 넘지 않음</td>
            </tr>
            <tr>
              <td><code>inline-size</code></td>
              <td>글쓰기 방향 기준 가로 크기를 지정</td>
              <td>
                <div class="code-cell"><code>inline-size: 300px;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>일반 가로쓰기에서 너비 300px 적용</td>
            </tr>
            <tr>
              <td><code>block-size</code></td>
              <td>글쓰기 방향 기준 세로 크기를 지정</td>
              <td>
                <div class="code-cell"><code>block-size: 200px;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>일반 가로쓰기에서 높이 200px 적용</td>
            </tr>
            <tr>
              <td><code>aspect-ratio</code></td>
              <td>요소의 가로세로 비율을 지정</td>
              <td>
                <div class="code-cell"><code>aspect-ratio: 16 / 9;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>요소 비율을 16대 9로 유지</td>
            </tr>
            <tr>
              <td><code>overflow</code></td>
              <td>영역을 벗어난 콘텐츠 처리 방식을 지정</td>
              <td>
                <div class="code-cell"><code>overflow: hidden;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>영역 밖 콘텐츠를 숨김</td>
            </tr>
            <tr>
              <td><code>overflow-x</code></td>
              <td>가로 방향 넘침 처리 방식을 지정</td>
              <td>
                <div class="code-cell"><code>overflow-x: auto;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>필요할 때 가로 스크롤 생성</td>
            </tr>
            <tr>
              <td><code>overflow-y</code></td>
              <td>세로 방향 넘침 처리 방식을 지정</td>
              <td>
                <div class="code-cell"><code>overflow-y: scroll;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>세로 스크롤 영역 생성</td>
            </tr>
            <tr>
              <td><code>margin</code></td>
              <td>요소의 외부 여백을 지정</td>
              <td>
                <div class="code-cell"><code>margin: 20px;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>모든 방향에 20px 외부 여백 적용</td>
            </tr>
            <tr>
              <td><code>margin-top</code></td>
              <td>요소의 위쪽 외부 여백을 지정</td>
              <td>
                <div class="code-cell"><code>margin-top: 40px;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>위쪽에 40px 간격 생성</td>
            </tr>
            <tr>
              <td><code>margin-right</code></td>
              <td>요소의 오른쪽 외부 여백을 지정</td>
              <td>
                <div class="code-cell"><code>margin-right: 20px;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>오른쪽에 20px 간격 생성</td>
            </tr>
            <tr>
              <td><code>margin-bottom</code></td>
              <td>요소의 아래쪽 외부 여백을 지정</td>
              <td>
                <div class="code-cell"><code>margin-bottom: 40px;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>아래쪽에 40px 간격 생성</td>
            </tr>
            <tr>
              <td><code>margin-left</code></td>
              <td>요소의 왼쪽 외부 여백을 지정</td>
              <td>
                <div class="code-cell"><code>margin-left: auto;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>남은 공간만큼 왼쪽 여백 생성</td>
            </tr>
            <tr>
              <td><code>margin-inline</code></td>
              <td>좌우 외부 여백을 한 번에 지정</td>
              <td>
                <div class="code-cell"><code>margin-inline: auto;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>블록 요소를 가로 가운데 정렬</td>
            </tr>
            <tr>
              <td><code>margin-block</code></td>
              <td>상하 외부 여백을 한 번에 지정</td>
              <td>
                <div class="code-cell"><code>margin-block: 40px;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>위아래에 40px 여백 적용</td>
            </tr>
            <tr>
              <td><code>padding</code></td>
              <td>요소의 내부 여백을 지정</td>
              <td>
                <div class="code-cell"><code>padding: 24px;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>모든 방향에 24px 내부 여백 적용</td>
            </tr>
            <tr>
              <td><code>padding-top</code></td>
              <td>요소의 위쪽 내부 여백을 지정</td>
              <td>
                <div class="code-cell"><code>padding-top: 20px;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>위쪽 내부에 20px 여백 적용</td>
            </tr>
            <tr>
              <td><code>padding-right</code></td>
              <td>요소의 오른쪽 내부 여백을 지정</td>
              <td>
                <div class="code-cell"><code>padding-right: 20px;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>오른쪽 내부에 20px 여백 적용</td>
            </tr>
            <tr>
              <td><code>padding-bottom</code></td>
              <td>요소의 아래쪽 내부 여백을 지정</td>
              <td>
                <div class="code-cell"><code>padding-bottom: 20px;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>아래쪽 내부에 20px 여백 적용</td>
            </tr>
            <tr>
              <td><code>padding-left</code></td>
              <td>요소의 왼쪽 내부 여백을 지정</td>
              <td>
                <div class="code-cell"><code>padding-left: 20px;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>왼쪽 내부에 20px 여백 적용</td>
            </tr>
            <tr>
              <td><code>padding-inline</code></td>
              <td>좌우 내부 여백을 한 번에 지정</td>
              <td>
                <div class="code-cell"><code>padding-inline: 32px;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>좌우에 32px 패딩 적용</td>
            </tr>
            <tr>
              <td><code>padding-block</code></td>
              <td>상하 내부 여백을 한 번에 지정</td>
              <td>
                <div class="code-cell"><code>padding-block: 20px;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>위아래에 20px 패딩 적용</td>
            </tr>
            <tr>
              <td><code>gap</code></td>
              <td>플렉스 또는 그리드 항목 사이 간격 지정</td>
              <td>
                <div class="code-cell"><code>gap: 16px;</code><button class="copy-btn-sm" onclick="copyInlineCode(this)"
                    title="복사" aria-label="복사"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>모든 아이템 사이에 16px 간격 생성</td>
            </tr>
            <tr>
              <td><code>row-gap</code></td>
              <td>행 사이의 간격을 지정</td>
              <td>
                <div class="code-cell"><code>row-gap: 24px;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>세로 방향 행 사이에 24px 간격 생성</td>
            </tr>
            <tr>
              <td><code>column-gap</code></td>
              <td>열 사이의 간격을 지정</td>
              <td>
                <div class="code-cell"><code>column-gap: 16px;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>가로 방향 열 사이에 16px 간격 생성</td>
            </tr>
            <tr>
              <td><code>flex-direction</code></td>
              <td>플렉스 아이템의 배치 방향을 지정</td>
              <td>
                <div class="code-cell"><code>flex-direction: column;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>자식 요소를 세로 방향으로 배치</td>
            </tr>
            <tr>
              <td><code>flex-wrap</code></td>
              <td>플렉스 아이템의 줄바꿈 여부를 지정</td>
              <td>
                <div class="code-cell"><code>flex-wrap: wrap;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>공간이 부족하면 다음 줄로 이동</td>
            </tr>
            <tr>
              <td><code>flex-flow</code></td>
              <td>플렉스 방향과 줄바꿈을 함께 지정</td>
              <td>
                <div class="code-cell"><code>flex-flow: row wrap;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>가로 배치 후 자동 줄바꿈</td>
            </tr>
            <tr>
              <td><code>justify-content</code></td>
              <td>주축 방향의 정렬 방식을 지정</td>
              <td>
                <div class="code-cell"><code>justify-content: center;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>아이템을 주축 가운데에 정렬</td>
            </tr>
            <tr>
              <td><code>justify-content: flex-start</code></td>
              <td>아이템을 주축 시작점에 정렬</td>
              <td>
                <div class="code-cell"><code>justify-content: flex-start;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>아이템을 왼쪽 또는 위쪽부터 배치</td>
            </tr>
            <tr>
              <td><code>justify-content: flex-end</code></td>
              <td>아이템을 주축 끝점에 정렬</td>
              <td>
                <div class="code-cell"><code>justify-content: flex-end;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>아이템을 오른쪽 또는 아래쪽에 배치</td>
            </tr>
            <tr>
              <td><code>justify-content: space-between</code></td>
              <td>첫 항목과 마지막 항목을 양끝에 배치</td>
              <td>
                <div class="code-cell"><code>justify-content: space-between;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>아이템 사이에 동일한 간격 생성</td>
            </tr>
            <tr>
              <td><code>justify-content: space-around</code></td>
              <td>각 아이템 양쪽에 여백을 배치</td>
              <td>
                <div class="code-cell"><code>justify-content: space-around;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>바깥쪽은 아이템 사이 간격의 절반 적용</td>
            </tr>
            <tr>
              <td><code>justify-content: space-evenly</code></td>
              <td>모든 여백을 동일하게 배치</td>
              <td>
                <div class="code-cell"><code>justify-content: space-evenly;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>바깥과 아이템 사이 간격이 모두 같음</td>
            </tr>
            <tr>
              <td><code>align-items</code></td>
              <td>교차축 방향의 정렬 방식을 지정</td>
              <td>
                <div class="code-cell"><code>align-items: center;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>아이템을 교차축 가운데에 정렬</td>
            </tr>
            <tr>
              <td><code>align-items: flex-start</code></td>
              <td>아이템을 교차축 시작점에 정렬</td>
              <td>
                <div class="code-cell"><code>align-items: flex-start;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>아이템을 위쪽 또는 왼쪽에 정렬</td>
            </tr>
            <tr>
              <td><code>align-items: flex-end</code></td>
              <td>아이템을 교차축 끝점에 정렬</td>
              <td>
                <div class="code-cell"><code>align-items: flex-end;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>아이템을 아래쪽 또는 오른쪽에 정렬</td>
            </tr>
            <tr>
              <td><code>align-items: stretch</code></td>
              <td>아이템을 교차축 방향으로 늘림</td>
              <td>
                <div class="code-cell"><code>align-items: stretch;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>아이템이 컨테이너 크기에 맞게 확장</td>
            </tr>
            <tr>
              <td><code>align-content</code></td>
              <td>여러 줄 전체의 교차축 정렬을 지정</td>
              <td>
                <div class="code-cell"><code>align-content: center;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>여러 줄을 교차축 가운데에 배치</td>
            </tr>
            <tr>
              <td><code>place-content</code></td>
              <td>전체 콘텐츠의 가로·세로 정렬을 함께 지정</td>
              <td>
                <div class="code-cell"><code>place-content: center;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>여러 줄 콘텐츠를 중앙에 배치</td>
            </tr>
            <tr>
              <td><code>flex</code></td>
              <td>플렉스 아이템의 크기 비율을 지정</td>
              <td>
                <div class="code-cell"><code>flex: 1;</code><button class="copy-btn-sm" onclick="copyInlineCode(this)"
                    title="복사" aria-label="복사"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>남은 공간을 균등하게 차지</td>
            </tr>
            <tr>
              <td><code>flex-grow</code></td>
              <td>플렉스 아이템이 늘어나는 비율을 지정</td>
              <td>
                <div class="code-cell"><code>flex-grow: 1;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>남은 공간만큼 아이템이 확장</td>
            </tr>
            <tr>
              <td><code>flex-shrink</code></td>
              <td>플렉스 아이템이 줄어드는 비율을 지정</td>
              <td>
                <div class="code-cell"><code>flex-shrink: 0;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>공간이 부족해도 아이템 크기 유지</td>
            </tr>
            <tr>
              <td><code>flex-basis</code></td>
              <td>플렉스 아이템의 기본 크기를 지정</td>
              <td>
                <div class="code-cell"><code>flex-basis: 250px;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>아이템 기본 너비를 250px로 설정</td>
            </tr>
            <tr>
              <td><code>align-self</code></td>
              <td>특정 플렉스 아이템의 정렬을 개별 지정</td>
              <td>
                <div class="code-cell"><code>align-self: flex-end;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>해당 아이템만 교차축 끝에 정렬</td>
            </tr>
            <tr>
              <td><code>order</code></td>
              <td>플렉스 또는 그리드 아이템의 순서를 지정</td>
              <td>
                <div class="code-cell"><code>order: 2;</code><button class="copy-btn-sm" onclick="copyInlineCode(this)"
                    title="복사" aria-label="복사"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>낮은 order 값의 요소 뒤에 배치</td>
            </tr>
            <tr>
              <td><code>grid-template-columns</code></td>
              <td>그리드의 열 구조를 지정</td>
              <td>
                <div class="code-cell"><code>grid-template-columns: repeat(4, 1fr);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>동일한 너비의 4개 열 생성</td>
            </tr>
            <tr>
              <td><code>grid-template-rows</code></td>
              <td>그리드의 행 구조를 지정</td>
              <td>
                <div class="code-cell"><code>grid-template-rows: 100px auto;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>첫 행은 100px, 다음 행은 자동 높이</td>
            </tr>
            <tr>
              <td><code>grid-template-areas</code></td>
              <td>이름을 사용해 그리드 영역을 지정</td>
              <td>
                <div class="code-cell"><code>grid-template-areas: &quot;side main&quot;;</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>side와 main 영역을 가로로 배치</td>
            </tr>
            <tr>
              <td><code>grid-auto-columns</code></td>
              <td>자동 생성되는 그리드 열 크기를 지정</td>
              <td>
                <div class="code-cell"><code>grid-auto-columns: 200px;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>추가 열의 너비를 200px로 설정</td>
            </tr>
            <tr>
              <td><code>grid-auto-rows</code></td>
              <td>자동 생성되는 그리드 행 크기를 지정</td>
              <td>
                <div class="code-cell"><code>grid-auto-rows: minmax(100px, auto);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>추가 행의 최소 높이를 100px로 설정</td>
            </tr>
            <tr>
              <td><code>grid-auto-flow</code></td>
              <td>그리드 아이템의 자동 배치 방향을 지정</td>
              <td>
                <div class="code-cell"><code>grid-auto-flow: column;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>아이템을 열 방향으로 자동 배치</td>
            </tr>
            <tr>
              <td><code>justify-items</code></td>
              <td>각 그리드 아이템의 가로 정렬을 지정</td>
              <td>
                <div class="code-cell"><code>justify-items: center;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>각 셀 안에서 아이템을 가로 가운데 정렬</td>
            </tr>
            <tr>
              <td><code>place-items</code></td>
              <td>그리드 아이템의 가로·세로 정렬을 함께 지정</td>
              <td>
                <div class="code-cell"><code>place-items: center;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>모든 아이템을 각 셀의 중앙에 배치</td>
            </tr>
            <tr>
              <td><code>grid-column</code></td>
              <td>그리드 아이템이 차지할 열 범위를 지정</td>
              <td>
                <div class="code-cell"><code>grid-column: span 2;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>아이템이 두 개의 열을 차지</td>
            </tr>
            <tr>
              <td><code>grid-row</code></td>
              <td>그리드 아이템이 차지할 행 범위를 지정</td>
              <td>
                <div class="code-cell"><code>grid-row: span 2;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>아이템이 두 개의 행을 차지</td>
            </tr>
            <tr>
              <td><code>grid-column-start</code></td>
              <td>아이템이 시작할 열 선을 지정</td>
              <td>
                <div class="code-cell"><code>grid-column-start: 1;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>첫 번째 열 선에서 시작</td>
            </tr>
            <tr>
              <td><code>grid-column-end</code></td>
              <td>아이템이 끝날 열 선을 지정</td>
              <td>
                <div class="code-cell"><code>grid-column-end: 4;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>네 번째 열 선에서 종료</td>
            </tr>
            <tr>
              <td><code>grid-row-start</code></td>
              <td>아이템이 시작할 행 선을 지정</td>
              <td>
                <div class="code-cell"><code>grid-row-start: 1;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>첫 번째 행 선에서 시작</td>
            </tr>
            <tr>
              <td><code>grid-row-end</code></td>
              <td>아이템이 끝날 행 선을 지정</td>
              <td>
                <div class="code-cell"><code>grid-row-end: 3;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>세 번째 행 선에서 종료</td>
            </tr>
            <tr>
              <td><code>grid-area</code></td>
              <td>아이템의 그리드 위치 또는 영역 이름을 지정</td>
              <td>
                <div class="code-cell"><code>grid-area: sidebar;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>sidebar로 지정한 영역에 배치</td>
            </tr>
            <tr>
              <td><code>justify-self</code></td>
              <td>특정 그리드 아이템의 가로 정렬을 지정</td>
              <td>
                <div class="code-cell"><code>justify-self: end;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>해당 아이템만 셀 오른쪽에 정렬</td>
            </tr>
            <tr>
              <td><code>place-self</code></td>
              <td>특정 그리드 아이템의 가로·세로 정렬을 지정</td>
              <td>
                <div class="code-cell"><code>place-self: center;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>해당 아이템만 셀 중앙에 배치</td>
            </tr>
            <tr>
              <td><code>repeat()</code></td>
              <td>그리드 열이나 행 패턴을 반복</td>
              <td>
                <div class="code-cell"><code>grid-template-columns: repeat(3, 1fr);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>같은 크기의 열을 3개 생성</td>
            </tr>
            <tr>
              <td><code>minmax()</code></td>
              <td>그리드 트랙의 최소·최대 크기를 지정</td>
              <td>
                <div class="code-cell"><code>grid-template-columns: minmax(240px, 1fr);</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>최소 240px 이상으로 유연하게 확장</td>
            </tr>
            <tr>
              <td><code>auto-fit</code></td>
              <td>가능한 만큼 열을 만들고 빈 열을 제거</td>
              <td>
                <div class="code-cell"><code>grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>화면에 맞춰 카드 열 개수가 자동 변경</td>
            </tr>
            <tr>
              <td><code>auto-fill</code></td>
              <td>가능한 만큼 열을 만들고 빈 열도 유지</td>
              <td>
                <div class="code-cell"><code>grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>남는 빈 그리드 열까지 유지</td>
            </tr>
            <tr>
              <td><code>fr</code></td>
              <td>그리드의 남은 공간을 비율로 나누는 단위</td>
              <td>
                <div class="code-cell"><code>grid-template-columns: 1fr 2fr;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>남은 공간을 1대 2 비율로 분배</td>
            </tr>
            <tr>
              <td><code>calc()</code></td>
              <td>서로 다른 단위를 계산해 크기를 지정</td>
              <td>
                <div class="code-cell"><code>width: calc(100% - 240px);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>전체 너비에서 240px를 제외</td>
            </tr>
            <tr>
              <td><code>clamp()</code></td>
              <td>최솟값·반응형 값·최댓값을 함께 지정</td>
              <td>
                <div class="code-cell"><code>width: clamp(280px, 80vw, 1200px);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>화면 크기에 따라 너비를 자동 조절</td>
            </tr>
            <tr>
              <td><code>container-type</code></td>
              <td>요소를 컨테이너 쿼리 기준으로 지정</td>
              <td>
                <div class="code-cell"><code>container-type: inline-size;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>부모 너비를 기준으로 반응형 스타일 적용 가능</td>
            </tr>
            <tr>
              <td><code>@container</code></td>
              <td>컨테이너 크기에 따라 스타일을 변경</td>
              <td>
                <div class="code-cell"><code>@container (max-width: 600px) { }</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>컨테이너가 600px 이하일 때 스타일 변경</td>
            </tr>
          </table>
          <div class="load-more"></div>
        </div>

        <!-- [패널4] 타이포그래피 -->
        <div class="panel" id="panel-typography">
          <h2>타이포그래피</h2>
          <p class="desc">텍스트 스타일과 관련된 속성을 확인하세요.</p>
          <table>
            <tr>
              <th>속성</th>
              <th>설명</th>
              <th>사용 예제</th>
              <th>결과</th>
            </tr>
            <tr>
              <td><code>font-size</code></td>
              <td>글자 크기 지정</td>
              <td>
                <div class="code-cell"><code>font-size: 16px;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>글자 크기를 16px로 지정</td>
            </tr>
            <tr>
              <td><code>font-weight</code></td>
              <td>글자 굵기 지정</td>
              <td>
                <div class="code-cell"><code>font-weight: 700;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>굵은 글씨로 표시</td>
            </tr>
            <tr>
              <td><code>line-height</code></td>
              <td>줄 간격 지정</td>
              <td>
                <div class="code-cell"><code>line-height: 1.6;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>글자 높이의 1.6배 줄 간격</td>
            </tr>
            <tr>
              <td><code>letter-spacing</code></td>
              <td>자간(글자 사이 간격) 지정</td>
              <td>
                <div class="code-cell"><code>letter-spacing: 1px;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>글자 사이에 1px 간격 추가</td>
            </tr>
            <tr>
              <td><code>text-align</code></td>
              <td>텍스트 정렬 방식 지정</td>
              <td>
                <div class="code-cell"><code>text-align: center;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>텍스트를 가운데 정렬</td>
            </tr>
            <tr>
              <td><code>text-decoration</code></td>
              <td>텍스트 장식 지정</td>
              <td>
                <div class="code-cell"><code>text-decoration: underline;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>텍스트에 밑줄 표시</td>
            </tr>
            <tr>
              <td><code>font-family</code></td>
              <td>사용할 글꼴 지정</td>
              <td>
                <div class="code-cell"><code>font-family: "Pretendard", sans-serif;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>지정한 폰트로 텍스트 표시</td>
            </tr>
            <tr>
              <td><code>white-space</code></td>
              <td>줄바꿈 처리 방식 지정</td>
              <td>
                <div class="code-cell"><code>white-space: nowrap;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>줄바꿈 없이 한 줄로 표시</td>
            </tr>
            <tr>
              <td><code>font-family</code></td>
              <td>사용할 글꼴을 지정</td>
              <td>
                <div class="code-cell"><code>font-family: &quot;Pretendard&quot;, sans-serif;</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>Pretendard 글꼴을 우선 적용</td>
            </tr>
            <tr>
              <td><code>font-size</code></td>
              <td>글자 크기를 지정</td>
              <td>
                <div class="code-cell"><code>font-size: 16px;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>글자 크기를 16px로 지정</td>
            </tr>
            <tr>
              <td><code>font-weight</code></td>
              <td>글자의 굵기를 지정</td>
              <td>
                <div class="code-cell"><code>font-weight: 700;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>글자를 굵게 표시</td>
            </tr>
            <tr>
              <td><code>font-style</code></td>
              <td>글자의 기울임 스타일을 지정</td>
              <td>
                <div class="code-cell"><code>font-style: italic;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>글자를 기울여 표시</td>
            </tr>
            <tr>
              <td><code>font-variant</code></td>
              <td>글꼴의 변형 형태를 지정</td>
              <td>
                <div class="code-cell"><code>font-variant: small-caps;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>소문자를 작은 대문자로 표시</td>
            </tr>
            <tr>
              <td><code>font-stretch</code></td>
              <td>글꼴의 가로 폭을 지정</td>
              <td>
                <div class="code-cell"><code>font-stretch: condensed;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>글자를 좁은 형태로 표시</td>
            </tr>
            <tr>
              <td><code>font</code></td>
              <td>글꼴 관련 속성을 한 번에 지정</td>
              <td>
                <div class="code-cell"><code>font: 700 16px/1.5 &quot;Pretendard&quot;;</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>굵기, 크기, 줄간격, 글꼴을 함께 적용</td>
            </tr>
            <tr>
              <td><code>font-size-adjust</code></td>
              <td>대체 글꼴의 체감 크기를 보정</td>
              <td>
                <div class="code-cell"><code>font-size-adjust: 0.5;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>글꼴이 바뀌어도 소문자 크기를 비슷하게 유지</td>
            </tr>
            <tr>
              <td><code>font-synthesis</code></td>
              <td>가짜 굵기와 기울임 생성 여부를 지정</td>
              <td>
                <div class="code-cell"><code>font-synthesis: none;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>브라우저가 인조 스타일을 만들지 않음</td>
            </tr>
            <tr>
              <td><code>font-optical-sizing</code></td>
              <td>가변 글꼴의 크기별 최적화를 지정</td>
              <td>
                <div class="code-cell"><code>font-optical-sizing: auto;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>글자 크기에 맞게 형태를 자동 보정</td>
            </tr>
            <tr>
              <td><code>font-kerning</code></td>
              <td>글자 쌍 사이 간격 조정을 지정</td>
              <td>
                <div class="code-cell"><code>font-kerning: normal;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>글꼴의 커닝 정보를 적용</td>
            </tr>
            <tr>
              <td><code>font-feature-settings</code></td>
              <td>OpenType 기능을 직접 지정</td>
              <td>
                <div class="code-cell"><code>font-feature-settings: &quot;liga&quot; 1;</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>합자 기능을 활성화</td>
            </tr>
            <tr>
              <td><code>font-variation-settings</code></td>
              <td>가변 글꼴의 축 값을 지정</td>
              <td>
                <div class="code-cell"><code>font-variation-settings: &quot;wght&quot; 650;</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>글꼴 굵기를 650으로 세밀하게 설정</td>
            </tr>
            <tr>
              <td><code>font-palette</code></td>
              <td>컬러 글꼴의 색상 팔레트를 지정</td>
              <td>
                <div class="code-cell"><code>font-palette: normal;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>기본 색상 팔레트를 사용</td>
            </tr>
            <tr>
              <td><code>font-language-override</code></td>
              <td>언어별 글리프 사용 방식을 지정</td>
              <td>
                <div class="code-cell"><code>font-language-override: normal;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>문서 언어에 맞는 글리프를 사용</td>
            </tr>
            <tr>
              <td><code>font-variant-ligatures</code></td>
              <td>합자 사용 여부를 지정</td>
              <td>
                <div class="code-cell"><code>font-variant-ligatures: none;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>글자 합자를 사용하지 않음</td>
            </tr>
            <tr>
              <td><code>font-variant-caps</code></td>
              <td>대문자 변형 방식을 지정</td>
              <td>
                <div class="code-cell"><code>font-variant-caps: small-caps;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>소문자를 작은 대문자로 표시</td>
            </tr>
            <tr>
              <td><code>font-variant-numeric</code></td>
              <td>숫자의 표시 스타일을 지정</td>
              <td>
                <div class="code-cell"><code>font-variant-numeric: tabular-nums;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>숫자의 폭을 동일하게 표시</td>
            </tr>
            <tr>
              <td><code>font-variant-east-asian</code></td>
              <td>동아시아 문자 표현 방식을 지정</td>
              <td>
                <div class="code-cell"><code>font-variant-east-asian: full-width;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>문자를 전각 형태로 표시</td>
            </tr>
            <tr>
              <td><code>font-variant-position</code></td>
              <td>위첨자 또는 아래첨자 글리프를 지정</td>
              <td>
                <div class="code-cell"><code>font-variant-position: super;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>지원 글꼴에서 위첨자로 표시</td>
            </tr>
            <tr>
              <td><code>font-weight: normal</code></td>
              <td>일반 굵기를 적용</td>
              <td>
                <div class="code-cell"><code>font-weight: normal;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>기본 굵기로 표시</td>
            </tr>
            <tr>
              <td><code>font-weight: bold</code></td>
              <td>굵은 글자를 적용</td>
              <td>
                <div class="code-cell"><code>font-weight: bold;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>텍스트를 굵게 표시</td>
            </tr>
            <tr>
              <td><code>font-weight: 100</code></td>
              <td>매우 얇은 굵기를 지정</td>
              <td>
                <div class="code-cell"><code>font-weight: 100;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>Thin 굵기를 적용</td>
            </tr>
            <tr>
              <td><code>font-weight: 300</code></td>
              <td>가벼운 굵기를 지정</td>
              <td>
                <div class="code-cell"><code>font-weight: 300;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>Light 굵기를 적용</td>
            </tr>
            <tr>
              <td><code>font-weight: 400</code></td>
              <td>기본 굵기를 지정</td>
              <td>
                <div class="code-cell"><code>font-weight: 400;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>Regular 굵기를 적용</td>
            </tr>
            <tr>
              <td><code>font-weight: 500</code></td>
              <td>중간 굵기를 지정</td>
              <td>
                <div class="code-cell"><code>font-weight: 500;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>Medium 굵기를 적용</td>
            </tr>
            <tr>
              <td><code>font-weight: 600</code></td>
              <td>준굵은 굵기를 지정</td>
              <td>
                <div class="code-cell"><code>font-weight: 600;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>SemiBold 굵기를 적용</td>
            </tr>
            <tr>
              <td><code>font-weight: 700</code></td>
              <td>굵은 글자를 지정</td>
              <td>
                <div class="code-cell"><code>font-weight: 700;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>Bold 굵기를 적용</td>
            </tr>
            <tr>
              <td><code>font-weight: 900</code></td>
              <td>매우 굵은 글자를 지정</td>
              <td>
                <div class="code-cell"><code>font-weight: 900;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>Black 굵기를 적용</td>
            </tr>
            <tr>
              <td><code>font-style: normal</code></td>
              <td>기본 글꼴 스타일을 적용</td>
              <td>
                <div class="code-cell"><code>font-style: normal;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>기울임 없는 글자로 표시</td>
            </tr>
            <tr>
              <td><code>font-style: italic</code></td>
              <td>이탤릭 글꼴을 적용</td>
              <td>
                <div class="code-cell"><code>font-style: italic;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>글꼴이 제공하는 이탤릭체로 표시</td>
            </tr>
            <tr>
              <td><code>font-style: oblique</code></td>
              <td>글자를 기울여 표시</td>
              <td>
                <div class="code-cell"><code>font-style: oblique;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>글자를 비스듬하게 표시</td>
            </tr>
            <tr>
              <td><code>font-style: oblique 10deg</code></td>
              <td>글자의 기울기 각도를 지정</td>
              <td>
                <div class="code-cell"><code>font-style: oblique 10deg;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>글자를 10도 기울여 표시</td>
            </tr>
            <tr>
              <td><code>small-caps</code></td>
              <td>소문자를 작은 대문자로 변경</td>
              <td>
                <div class="code-cell"><code>font-variant-caps: small-caps;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>영문 소문자를 작은 대문자로 표시</td>
            </tr>
            <tr>
              <td><code>line-height</code></td>
              <td>텍스트의 줄 높이를 지정</td>
              <td>
                <div class="code-cell"><code>line-height: 1.6;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>글자 크기의 1.6배 줄간격을 적용</td>
            </tr>
            <tr>
              <td><code>line-height: normal</code></td>
              <td>브라우저 기본 줄 높이를 사용</td>
              <td>
                <div class="code-cell"><code>line-height: normal;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>글꼴에 맞는 기본 줄간격을 적용</td>
            </tr>
            <tr>
              <td><code>letter-spacing</code></td>
              <td>글자 사이 간격을 지정</td>
              <td>
                <div class="code-cell"><code>letter-spacing: -0.3px;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>글자 간격을 0.3px 좁힘</td>
            </tr>
            <tr>
              <td><code>letter-spacing: normal</code></td>
              <td>글꼴의 기본 자간을 사용</td>
              <td>
                <div class="code-cell"><code>letter-spacing: normal;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>기본 글자 간격을 적용</td>
            </tr>
            <tr>
              <td><code>word-spacing</code></td>
              <td>단어 사이 간격을 지정</td>
              <td>
                <div class="code-cell"><code>word-spacing: 4px;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>단어 사이에 4px 간격을 추가</td>
            </tr>
            <tr>
              <td><code>tab-size</code></td>
              <td>탭 문자의 너비를 지정</td>
              <td>
                <div class="code-cell"><code>tab-size: 4;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>탭을 공백 4칸 너비로 표시</td>
            </tr>
            <tr>
              <td><code>text-indent</code></td>
              <td>문단 첫 줄의 들여쓰기를 지정</td>
              <td>
                <div class="code-cell"><code>text-indent: 2em;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>첫 줄을 글자 두 칸만큼 들여쓰기</td>
            </tr>
            <tr>
              <td><code>hanging-punctuation</code></td>
              <td>문장부호를 텍스트 영역 밖으로 배치</td>
              <td>
                <div class="code-cell"><code>hanging-punctuation: first;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>첫 문장부호가 영역 바깥에 걸쳐 표시</td>
            </tr>
            <tr>
              <td><code>text-align</code></td>
              <td>텍스트의 가로 정렬을 지정</td>
              <td>
                <div class="code-cell"><code>text-align: center;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>텍스트를 가운데 정렬</td>
            </tr>
            <tr>
              <td><code>text-align: left</code></td>
              <td>텍스트를 왼쪽에 정렬</td>
              <td>
                <div class="code-cell"><code>text-align: left;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>텍스트를 왼쪽 기준으로 정렬</td>
            </tr>
            <tr>
              <td><code>text-align: right</code></td>
              <td>텍스트를 오른쪽에 정렬</td>
              <td>
                <div class="code-cell"><code>text-align: right;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>텍스트를 오른쪽 기준으로 정렬</td>
            </tr>
            <tr>
              <td><code>text-align: center</code></td>
              <td>텍스트를 가운데에 정렬</td>
              <td>
                <div class="code-cell"><code>text-align: center;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>텍스트를 중앙에 배치</td>
            </tr>
            <tr>
              <td><code>text-align: justify</code></td>
              <td>텍스트를 양쪽 끝에 맞춰 정렬</td>
              <td>
                <div class="code-cell"><code>text-align: justify;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>문단 양쪽 끝을 균일하게 맞춤</td>
            </tr>
            <tr>
              <td><code>text-align-last</code></td>
              <td>문단 마지막 줄의 정렬을 지정</td>
              <td>
                <div class="code-cell"><code>text-align-last: center;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>마지막 줄만 가운데 정렬</td>
            </tr>
            <tr>
              <td><code>vertical-align</code></td>
              <td>인라인 요소의 세로 정렬을 지정</td>
              <td>
                <div class="code-cell"><code>vertical-align: middle;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>주변 텍스트의 중앙에 맞춤</td>
            </tr>
            <tr>
              <td><code>vertical-align: baseline</code></td>
              <td>텍스트 기준선에 맞춰 정렬</td>
              <td>
                <div class="code-cell"><code>vertical-align: baseline;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>주변 글자의 기준선에 맞춤</td>
            </tr>
            <tr>
              <td><code>vertical-align: top</code></td>
              <td>요소를 줄 상단에 정렬</td>
              <td>
                <div class="code-cell"><code>vertical-align: top;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>인라인 요소를 위쪽에 배치</td>
            </tr>
            <tr>
              <td><code>vertical-align: middle</code></td>
              <td>요소를 줄 중앙에 정렬</td>
              <td>
                <div class="code-cell"><code>vertical-align: middle;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>아이콘과 텍스트를 중앙 정렬</td>
            </tr>
            <tr>
              <td><code>vertical-align: bottom</code></td>
              <td>요소를 줄 하단에 정렬</td>
              <td>
                <div class="code-cell"><code>vertical-align: bottom;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>인라인 요소를 아래쪽에 배치</td>
            </tr>
            <tr>
              <td><code>text-transform</code></td>
              <td>영문 대소문자 표시 방식을 지정</td>
              <td>
                <div class="code-cell"><code>text-transform: uppercase;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>영문을 대문자로 표시</td>
            </tr>
            <tr>
              <td><code>text-transform: uppercase</code></td>
              <td>영문을 모두 대문자로 변경</td>
              <td>
                <div class="code-cell"><code>text-transform: uppercase;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>code lab을 CODE LAB으로 표시</td>
            </tr>
            <tr>
              <td><code>text-transform: lowercase</code></td>
              <td>영문을 모두 소문자로 변경</td>
              <td>
                <div class="code-cell"><code>text-transform: lowercase;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>CODE LAB을 code lab으로 표시</td>
            </tr>
            <tr>
              <td><code>text-transform: capitalize</code></td>
              <td>각 단어 첫 글자를 대문자로 변경</td>
              <td>
                <div class="code-cell"><code>text-transform: capitalize;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>영문 단어의 첫 글자를 대문자로 표시</td>
            </tr>
            <tr>
              <td><code>direction</code></td>
              <td>텍스트 진행 방향을 지정</td>
              <td>
                <div class="code-cell"><code>direction: rtl;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>텍스트를 오른쪽에서 왼쪽으로 표시</td>
            </tr>
            <tr>
              <td><code>unicode-bidi</code></td>
              <td>양방향 텍스트 처리 방식을 지정</td>
              <td>
                <div class="code-cell"><code>unicode-bidi: bidi-override;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>지정한 방향으로 텍스트 순서를 재정의</td>
            </tr>
            <tr>
              <td><code>writing-mode</code></td>
              <td>텍스트의 가로 또는 세로 쓰기 방향을 지정</td>
              <td>
                <div class="code-cell"><code>writing-mode: vertical-rl;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>텍스트를 세로로 표시</td>
            </tr>
            <tr>
              <td><code>writing-mode: horizontal-tb</code></td>
              <td>텍스트를 가로 방향으로 표시</td>
              <td>
                <div class="code-cell"><code>writing-mode: horizontal-tb;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>일반적인 가로쓰기를 적용</td>
            </tr>
            <tr>
              <td><code>writing-mode: vertical-rl</code></td>
              <td>세로쓰기 줄을 오른쪽부터 배치</td>
              <td>
                <div class="code-cell"><code>writing-mode: vertical-rl;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>세로 텍스트가 오른쪽에서 왼쪽으로 진행</td>
            </tr>
            <tr>
              <td><code>writing-mode: vertical-lr</code></td>
              <td>세로쓰기 줄을 왼쪽부터 배치</td>
              <td>
                <div class="code-cell"><code>writing-mode: vertical-lr;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>세로 텍스트가 왼쪽에서 오른쪽으로 진행</td>
            </tr>
            <tr>
              <td><code>text-orientation</code></td>
              <td>세로쓰기에서 글자 방향을 지정</td>
              <td>
                <div class="code-cell"><code>text-orientation: upright;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>영문도 세워서 표시</td>
            </tr>
            <tr>
              <td><code>text-combine-upright</code></td>
              <td>세로쓰기에서 여러 문자를 한 칸에 배치</td>
              <td>
                <div class="code-cell"><code>text-combine-upright: all;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>숫자 등을 가로 묶음으로 표시</td>
            </tr>
            <tr>
              <td><code>white-space</code></td>
              <td>공백과 줄바꿈 처리 방식을 지정</td>
              <td>
                <div class="code-cell"><code>white-space: nowrap;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>텍스트를 한 줄로 표시</td>
            </tr>
            <tr>
              <td><code>white-space: normal</code></td>
              <td>공백을 합치고 자동 줄바꿈을 적용</td>
              <td>
                <div class="code-cell"><code>white-space: normal;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>일반 문단처럼 표시</td>
            </tr>
            <tr>
              <td><code>white-space: nowrap</code></td>
              <td>자동 줄바꿈을 막음</td>
              <td>
                <div class="code-cell"><code>white-space: nowrap;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>텍스트를 한 줄로 유지</td>
            </tr>
            <tr>
              <td><code>white-space: pre</code></td>
              <td>공백과 줄바꿈을 작성한 그대로 표시</td>
              <td>
                <div class="code-cell"><code>white-space: pre;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>코드와 같은 입력 형식을 유지</td>
            </tr>
            <tr>
              <td><code>white-space: pre-wrap</code></td>
              <td>공백을 유지하면서 자동 줄바꿈 적용</td>
              <td>
                <div class="code-cell"><code>white-space: pre-wrap;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>입력 형식을 유지하며 영역에 맞게 줄바꿈</td>
            </tr>
            <tr>
              <td><code>white-space: pre-line</code></td>
              <td>줄바꿈은 유지하고 연속 공백은 합침</td>
              <td>
                <div class="code-cell"><code>white-space: pre-line;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>작성된 줄바꿈만 유지</td>
            </tr>
            <tr>
              <td><code>overflow-wrap</code></td>
              <td>긴 단어의 강제 줄바꿈 여부를 지정</td>
              <td>
                <div class="code-cell"><code>overflow-wrap: break-word;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>영역보다 긴 단어를 다음 줄로 분리</td>
            </tr>
            <tr>
              <td><code>word-wrap</code></td>
              <td>긴 단어의 줄바꿈을 지정</td>
              <td>
                <div class="code-cell"><code>word-wrap: break-word;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>긴 URL이나 단어를 줄바꿈</td>
            </tr>
            <tr>
              <td><code>word-break</code></td>
              <td>단어 단위의 줄바꿈 규칙을 지정</td>
              <td>
                <div class="code-cell"><code>word-break: keep-all;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>한글 단어 중간 줄바꿈을 방지</td>
            </tr>
            <tr>
              <td><code>word-break: break-all</code></td>
              <td>글자 단위로 줄바꿈을 허용</td>
              <td>
                <div class="code-cell"><code>word-break: break-all;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>긴 영문도 영역에 맞춰 분리</td>
            </tr>
            <tr>
              <td><code>word-break: keep-all</code></td>
              <td>단어 중간 줄바꿈을 방지</td>
              <td>
                <div class="code-cell"><code>word-break: keep-all;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>한글 문장을 단어 단위로 줄바꿈</td>
            </tr>
            <tr>
              <td><code>line-break</code></td>
              <td>동아시아 언어의 줄바꿈 규칙을 지정</td>
              <td>
                <div class="code-cell"><code>line-break: strict;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>엄격한 줄바꿈 규칙을 적용</td>
            </tr>
            <tr>
              <td><code>hyphens</code></td>
              <td>영문 단어의 하이픈 줄바꿈을 설정</td>
              <td>
                <div class="code-cell"><code>hyphens: auto;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>긴 영단어를 하이픈으로 분리</td>
            </tr>
            <tr>
              <td><code>text-wrap</code></td>
              <td>텍스트 줄바꿈 방식을 지정</td>
              <td>
                <div class="code-cell"><code>text-wrap: balance;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>여러 줄의 길이를 균형 있게 조절</td>
            </tr>
            <tr>
              <td><code>text-wrap: balance</code></td>
              <td>제목의 각 줄 길이를 균형 있게 배치</td>
              <td>
                <div class="code-cell"><code>text-wrap: balance;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>제목 줄 길이가 비슷하게 표시</td>
            </tr>
            <tr>
              <td><code>text-wrap: pretty</code></td>
              <td>문단의 어색한 마지막 줄을 줄임</td>
              <td>
                <div class="code-cell"><code>text-wrap: pretty;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>한 단어만 남는 마지막 줄을 완화</td>
            </tr>
            <tr>
              <td><code>text-overflow</code></td>
              <td>넘친 텍스트의 표시 방식을 지정</td>
              <td>
                <div class="code-cell"><code>text-overflow: ellipsis;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>넘친 부분을 말줄임표로 표시</td>
            </tr>
            <tr>
              <td><code>text-overflow: clip</code></td>
              <td>넘친 텍스트를 잘라냄</td>
              <td>
                <div class="code-cell"><code>text-overflow: clip;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>말줄임표 없이 텍스트가 잘림</td>
            </tr>
            <tr>
              <td><code>text-overflow: ellipsis</code></td>
              <td>넘친 텍스트를 말줄임표로 표시</td>
              <td>
                <div class="code-cell"><code>text-overflow: ellipsis;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>끝부분을 ...으로 표시</td>
            </tr>
            <tr>
              <td><code>line-clamp</code></td>
              <td>표시할 텍스트 줄 수를 제한</td>
              <td>
                <div class="code-cell"><code>line-clamp: 3;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>텍스트를 최대 3줄까지 표시</td>
            </tr>
            <tr>
              <td><code>-webkit-line-clamp</code></td>
              <td>여러 줄 말줄임 줄 수를 지정</td>
              <td>
                <div class="code-cell"><code>-webkit-line-clamp: 2;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>두 줄 이후 텍스트를 숨김</td>
            </tr>
            <tr>
              <td><code>-webkit-box-orient</code></td>
              <td>말줄임 박스의 배치 방향을 지정</td>
              <td>
                <div class="code-cell"><code>-webkit-box-orient: vertical;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>여러 줄 말줄임을 세로 방향으로 처리</td>
            </tr>
            <tr>
              <td><code>text-decoration</code></td>
              <td>텍스트 장식을 한 번에 지정</td>
              <td>
                <div class="code-cell"><code>text-decoration: underline;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>텍스트 아래에 선을 표시</td>
            </tr>
            <tr>
              <td><code>text-decoration-line</code></td>
              <td>장식선의 종류를 지정</td>
              <td>
                <div class="code-cell"><code>text-decoration-line: underline;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>텍스트에 밑줄을 적용</td>
            </tr>
            <tr>
              <td><code>text-decoration-color</code></td>
              <td>장식선의 색상을 지정</td>
              <td>
                <div class="code-cell"><code>text-decoration-color: #7c3aed;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>보라색 밑줄을 적용</td>
            </tr>
            <tr>
              <td><code>text-decoration-style</code></td>
              <td>장식선의 모양을 지정</td>
              <td>
                <div class="code-cell"><code>text-decoration-style: wavy;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>물결 형태의 밑줄을 표시</td>
            </tr>
            <tr>
              <td><code>text-decoration-thickness</code></td>
              <td>장식선의 두께를 지정</td>
              <td>
                <div class="code-cell"><code>text-decoration-thickness: 2px;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>2px 두께의 밑줄을 적용</td>
            </tr>
            <tr>
              <td><code>text-underline-offset</code></td>
              <td>글자와 밑줄 사이 거리를 지정</td>
              <td>
                <div class="code-cell"><code>text-underline-offset: 4px;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>밑줄을 글자에서 4px 떨어뜨림</td>
            </tr>
            <tr>
              <td><code>text-underline-position</code></td>
              <td>밑줄이 표시되는 위치를 지정</td>
              <td>
                <div class="code-cell"><code>text-underline-position: under;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>글자 아래쪽에 안정적으로 배치</td>
            </tr>
            <tr>
              <td><code>text-decoration-skip-ink</code></td>
              <td>밑줄과 글자 획의 겹침 처리를 지정</td>
              <td>
                <div class="code-cell"><code>text-decoration-skip-ink: auto;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>글자 획 부분에서 밑줄을 자연스럽게 건너뜀</td>
            </tr>
            <tr>
              <td><code>text-shadow</code></td>
              <td>텍스트에 그림자 효과를 적용</td>
              <td>
                <div class="code-cell"><code>text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>글자 뒤에 부드러운 그림자를 표시</td>
            </tr>
            <tr>
              <td><code>text-emphasis</code></td>
              <td>동아시아 문자에 강조 기호를 지정</td>
              <td>
                <div class="code-cell"><code>text-emphasis: filled dot;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>글자 위나 옆에 강조점을 표시</td>
            </tr>
            <tr>
              <td><code>text-emphasis-color</code></td>
              <td>강조 기호의 색상을 지정</td>
              <td>
                <div class="code-cell"><code>text-emphasis-color: red;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>강조점을 빨간색으로 표시</td>
            </tr>
            <tr>
              <td><code>text-emphasis-position</code></td>
              <td>강조 기호의 위치를 지정</td>
              <td>
                <div class="code-cell"><code>text-emphasis-position: over right;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>글자의 위쪽 또는 오른쪽에 표시</td>
            </tr>
            <tr>
              <td><code>caret-color</code></td>
              <td>입력창 커서의 색상을 지정</td>
              <td>
                <div class="code-cell"><code>caret-color: #7c3aed;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>입력 커서를 보라색으로 표시</td>
            </tr>
          </table>
          <div class="load-more"></div>
        </div>

        <!-- [패널5] 색상 -->
        <div class="panel" id="panel-color">
          <h2>색상</h2>
          <p class="desc">배경과 텍스트에 사용하는 색상 관련 속성을 확인하세요.</p>
          <table>
            <tr>
              <th>속성</th>
              <th>설명</th>
              <th>사용 예제</th>
              <th>결과</th>
            </tr>
            <tr>
              <td><code>background-color</code></td>
              <td>배경 색상 지정</td>
              <td>
                <div class="code-cell"><code>background-color: #6a4bff;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>보라색 배경 적용</td>
            </tr>
            <tr>
              <td><code>opacity</code></td>
              <td>요소의 투명도 지정</td>
              <td>
                <div class="code-cell"><code>opacity: 0.5;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>50% 투명하게 표시</td>
            </tr>
            <tr>
              <td><code>border-color</code></td>
              <td>테두리 색상 지정</td>
              <td>
                <div class="code-cell"><code>border-color: #ddd;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>연한 회색 테두리 적용</td>
            </tr>
            <tr>
              <td><code>rgba()</code></td>
              <td>투명도를 포함한 색상 지정</td>
              <td>
                <div class="code-cell"><code>color: rgba(0,0,0,0.6);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>60% 불투명한 검정 텍스트</td>
            </tr>
            <tr>
              <td><code>linear-gradient()</code></td>
              <td>그라데이션 배경 지정</td>
              <td>
                <div class="code-cell"><code>background: linear-gradient(90deg, #eef, #fef);</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>좌우 방향 그라데이션 배경</td>
            </tr>
            <tr>
              <td><code>color</code></td>
              <td>텍스트 색상 지정</td>
              <td>
                <div class="code-cell"><code>color: #333;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>진한 회색 텍스트 적용</td>
            </tr>
            <tr>
              <td><code>background-color</code></td>
              <td>배경 색상 지정</td>
              <td>
                <div class="code-cell"><code>background-color: #6a4bff;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>보라색 배경 적용</td>
            </tr>
            <tr>
              <td><code>border-color</code></td>
              <td>테두리 색상 지정</td>
              <td>
                <div class="code-cell"><code>border-color: #ddd;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>연한 회색 테두리 적용</td>
            </tr>
            <tr>
              <td><code>outline-color</code></td>
              <td>외곽선 색상 지정</td>
              <td>
                <div class="code-cell"><code>outline-color: #6a4bff;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>보라색 외곽선 적용</td>
            </tr>
            <tr>
              <td><code>text-decoration-color</code></td>
              <td>밑줄·취소선 색상 지정</td>
              <td>
                <div class="code-cell"><code>text-decoration-color: #ff7ab8;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>분홍색 장식선 적용</td>
            </tr>
            <tr>
              <td><code>caret-color</code></td>
              <td>입력 커서 색상 지정</td>
              <td>
                <div class="code-cell"><code>caret-color: #6a4bff;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>보라색 입력 커서 적용</td>
            </tr>
            <tr>
              <td><code>accent-color</code></td>
              <td>체크박스·라디오 강조 색상 지정</td>
              <td>
                <div class="code-cell"><code>accent-color: #6a4bff;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>선택 요소에 보라색 적용</td>
            </tr>
            <tr>
              <td><code>column-rule-color</code></td>
              <td>다단 구분선 색상 지정</td>
              <td>
                <div class="code-cell"><code>column-rule-color: #ddd;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>회색 단 구분선 적용</td>
            </tr>
            <tr>
              <td><code>text-emphasis-color</code></td>
              <td>강조 기호 색상 지정</td>
              <td>
                <div class="code-cell"><code>text-emphasis-color: #ff4d6d;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>빨간 강조 기호 적용</td>
            </tr>
            <tr>
              <td><code>scrollbar-color</code></td>
              <td>스크롤바 색상 지정</td>
              <td>
                <div class="code-cell"><code>scrollbar-color: #6a4bff #eee;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>보라색 스크롤바 적용</td>
            </tr>
            <tr>
              <td><code>fill</code></td>
              <td>SVG 내부 색상 지정</td>
              <td>
                <div class="code-cell"><code>fill: #6a4bff;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>SVG 내부에 보라색 적용</td>
            </tr>
            <tr>
              <td><code>stroke</code></td>
              <td>SVG 선 색상 지정</td>
              <td>
                <div class="code-cell"><code>stroke: #1c1b2e;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>SVG 선에 진한 색상 적용</td>
            </tr>
            <tr>
              <td><code>stop-color</code></td>
              <td>SVG 그라데이션 색상 지정</td>
              <td>
                <div class="code-cell"><code>stop-color: #ff7ab8;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>분홍색 그라데이션 지점 적용</td>
            </tr>
            <tr>
              <td><code>flood-color</code></td>
              <td>SVG 필터 색상 지정</td>
              <td>
                <div class="code-cell"><code>flood-color: #6a4bff;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>필터 영역에 보라색 적용</td>
            </tr>
            <tr>
              <td><code>lighting-color</code></td>
              <td>SVG 조명 색상 지정</td>
              <td>
                <div class="code-cell"><code>lighting-color: #fff;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>흰색 조명 효과 적용</td>
            </tr>
            <tr>
              <td><code>fill-opacity</code></td>
              <td>SVG 채움 투명도 지정</td>
              <td>
                <div class="code-cell"><code>fill-opacity: 0.5;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>SVG 내부를 50% 투명하게 표시</td>
            </tr>
            <tr>
              <td><code>stroke-opacity</code></td>
              <td>SVG 선 투명도 지정</td>
              <td>
                <div class="code-cell"><code>stroke-opacity: 0.5;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>SVG 선을 50% 투명하게 표시</td>
            </tr>
            <tr>
              <td><code>stop-opacity</code></td>
              <td>SVG 그라데이션 투명도 지정</td>
              <td>
                <div class="code-cell"><code>stop-opacity: 0.6;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>그라데이션 색상을 60% 표시</td>
            </tr>
            <tr>
              <td><code>flood-opacity</code></td>
              <td>SVG 필터 투명도 지정</td>
              <td>
                <div class="code-cell"><code>flood-opacity: 0.4;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>필터 색상을 40% 표시</td>
            </tr>
            <tr>
              <td><code>currentColor</code></td>
              <td>현재 글자색 재사용</td>
              <td>
                <div class="code-cell"><code>border-color: currentColor;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>글자색과 같은 테두리 적용</td>
            </tr>
            <tr>
              <td><code>transparent</code></td>
              <td>완전 투명 색상 지정</td>
              <td>
                <div class="code-cell"><code>background: transparent;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>배경을 투명하게 표시</td>
            </tr>
            <tr>
              <td><code>색상 이름</code></td>
              <td>색상명을 직접 사용</td>
              <td>
                <div class="code-cell"><code>color: royalblue;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>로열블루 텍스트 적용</td>
            </tr>
            <tr>
              <td><code>HEX 3자리</code></td>
              <td>축약 HEX 색상 사용</td>
              <td>
                <div class="code-cell"><code>color: #fff;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>흰색 텍스트 적용</td>
            </tr>
            <tr>
              <td><code>HEX 4자리</code></td>
              <td>투명도 포함 축약 HEX 사용</td>
              <td>
                <div class="code-cell"><code>color: #0008;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>반투명 검정 적용</td>
            </tr>
            <tr>
              <td><code>HEX 6자리</code></td>
              <td>일반 HEX 색상 사용</td>
              <td>
                <div class="code-cell"><code>color: #6a4bff;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>보라색 텍스트 적용</td>
            </tr>
            <tr>
              <td><code>HEX 8자리</code></td>
              <td>투명도 포함 HEX 사용</td>
              <td>
                <div class="code-cell"><code>color: #6a4bff80;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>50% 투명 보라색 적용</td>
            </tr>
            <tr>
              <td><code>rgb()</code></td>
              <td>RGB 값으로 색상 지정</td>
              <td>
                <div class="code-cell"><code>color: rgb(106, 75, 255);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>보라색 텍스트 적용</td>
            </tr>
            <tr>
              <td><code>rgb() 최신 문법</code></td>
              <td>공백과 슬래시로 RGB 지정</td>
              <td>
                <div class="code-cell"><code>color: rgb(106 75 255 / 50%);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>50% 투명 보라색 적용</td>
            </tr>
            <tr>
              <td><code>rgba()</code></td>
              <td>RGB와 알파값 사용</td>
              <td>
                <div class="code-cell"><code>color: rgba(0,0,0,.6);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>60% 검정 텍스트 적용</td>
            </tr>
            <tr>
              <td><code>rgb() 퍼센트</code></td>
              <td>RGB 채널을 퍼센트로 지정</td>
              <td>
                <div class="code-cell"><code>color: rgb(42% 29% 100%);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>보라색 텍스트 적용</td>
            </tr>
            <tr>
              <td><code>hsl()</code></td>
              <td>색상각·채도·명도로 지정</td>
              <td>
                <div class="code-cell"><code>color: hsl(252 100% 65%);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>선명한 보라색 적용</td>
            </tr>
            <tr>
              <td><code>hsla()</code></td>
              <td>HSL과 알파값 사용</td>
              <td>
                <div class="code-cell"><code>color: hsla(252,100%,65%,.5);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>반투명 보라색 적용</td>
            </tr>
            <tr>
              <td><code>hsl() 최신 문법</code></td>
              <td>슬래시로 HSL 투명도 지정</td>
              <td>
                <div class="code-cell"><code>color: hsl(252 100% 65% / 50%);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>50% 투명 보라색 적용</td>
            </tr>
            <tr>
              <td><code>hwb()</code></td>
              <td>색상각·흰색·검정 비율 사용</td>
              <td>
                <div class="code-cell"><code>color: hwb(252 20% 0%);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>밝은 보라색 적용</td>
            </tr>
            <tr>
              <td><code>lab()</code></td>
              <td>Lab 색상 공간 사용</td>
              <td>
                <div class="code-cell"><code>color: lab(55% 60 -70);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>지각적으로 균일한 색상 적용</td>
            </tr>
            <tr>
              <td><code>lch()</code></td>
              <td>명도·채도·색상각 사용</td>
              <td>
                <div class="code-cell"><code>color: lch(55% 90 300);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>선명한 보라 계열 적용</td>
            </tr>
            <tr>
              <td><code>oklab()</code></td>
              <td>Oklab 색상 공간 사용</td>
              <td>
                <div class="code-cell"><code>color: oklab(60% .15 -.2);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>자연스러운 보라색 적용</td>
            </tr>
            <tr>
              <td><code>oklch()</code></td>
              <td>Oklch 색상 공간 사용</td>
              <td>
                <div class="code-cell"><code>color: oklch(65% .22 290);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>균형 잡힌 보라색 적용</td>
            </tr>
            <tr>
              <td><code>color()</code></td>
              <td>특정 색상 공간 지정</td>
              <td>
                <div class="code-cell"><code>color: color(display-p3 .4 .2 1);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>광색역 보라색 적용</td>
            </tr>
            <tr>
              <td><code>inherit</code></td>
              <td>부모 색상 상속</td>
              <td>
                <div class="code-cell"><code>color: inherit;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>부모와 같은 텍스트색 적용</td>
            </tr>
            <tr>
              <td><code>initial</code></td>
              <td>초기 색상값 적용</td>
              <td>
                <div class="code-cell"><code>color: initial;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>기본 텍스트색으로 복귀</td>
            </tr>
            <tr>
              <td><code>unset</code></td>
              <td>상속 여부에 따라 초기화</td>
              <td>
                <div class="code-cell"><code>color: unset;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>상속 가능한 색상은 부모값 사용</td>
            </tr>
            <tr>
              <td><code>revert</code></td>
              <td>브라우저 기본값으로 복귀</td>
              <td>
                <div class="code-cell"><code>color: revert;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>기본 스타일 색상 적용</td>
            </tr>
            <tr>
              <td><code>revert-layer</code></td>
              <td>이전 레이어 값으로 복귀</td>
              <td>
                <div class="code-cell"><code>color: revert-layer;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>이전 레이어 색상 적용</td>
            </tr>
            <tr>
              <td><code>Canvas</code></td>
              <td>시스템 배경색 사용</td>
              <td>
                <div class="code-cell"><code>background: Canvas;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>시스템 기본 배경색 적용</td>
            </tr>
            <tr>
              <td><code>CanvasText</code></td>
              <td>시스템 글자색 사용</td>
              <td>
                <div class="code-cell"><code>color: CanvasText;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>시스템 기본 글자색 적용</td>
            </tr>
            <tr>
              <td><code>LinkText</code></td>
              <td>시스템 링크 색상 사용</td>
              <td>
                <div class="code-cell"><code>color: LinkText;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>시스템 링크색 적용</td>
            </tr>
            <tr>
              <td><code>VisitedText</code></td>
              <td>시스템 방문 링크색 사용</td>
              <td>
                <div class="code-cell"><code>color: VisitedText;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>방문 링크색 적용</td>
            </tr>
            <tr>
              <td><code>Highlight</code></td>
              <td>시스템 선택 배경색 사용</td>
              <td>
                <div class="code-cell"><code>background: Highlight;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>선택 영역 배경색 적용</td>
            </tr>
            <tr>
              <td><code>HighlightText</code></td>
              <td>시스템 선택 글자색 사용</td>
              <td>
                <div class="code-cell"><code>color: HighlightText;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>선택된 글자색 적용</td>
            </tr>
            <tr>
              <td><code>linear-gradient()</code></td>
              <td>직선형 그라데이션 지정</td>
              <td>
                <div class="code-cell"><code>background: linear-gradient(#6a4bff,#ff7ab8);</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>보라색에서 분홍색으로 전환</td>
            </tr>
            <tr>
              <td><code>linear-gradient(to right)</code></td>
              <td>가로 방향 그라데이션</td>
              <td>
                <div class="code-cell"><code>background: linear-gradient(to right,#6a4bff,#ff7ab8);</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>왼쪽에서 오른쪽으로 전환</td>
            </tr>
            <tr>
              <td><code>linear-gradient(to left)</code></td>
              <td>반대 가로 방향 그라데이션</td>
              <td>
                <div class="code-cell"><code>background: linear-gradient(to left,#6a4bff,#ff7ab8);</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>오른쪽에서 왼쪽으로 전환</td>
            </tr>
            <tr>
              <td><code>linear-gradient(to bottom)</code></td>
              <td>세로 방향 그라데이션</td>
              <td>
                <div class="code-cell"><code>background: linear-gradient(to bottom,#fff,#eee);</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>위에서 아래로 전환</td>
            </tr>
            <tr>
              <td><code>linear-gradient(to top)</code></td>
              <td>위쪽 방향 그라데이션</td>
              <td>
                <div class="code-cell"><code>background: linear-gradient(to top,#fff,#eee);</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>아래에서 위로 전환</td>
            </tr>
            <tr>
              <td><code>linear-gradient(45deg)</code></td>
              <td>각도로 방향 지정</td>
              <td>
                <div class="code-cell"><code>background: linear-gradient(45deg,#6a4bff,#ff7ab8);</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>대각선 그라데이션 적용</td>
            </tr>
            <tr>
              <td><code>다중 색상 그라데이션</code></td>
              <td>여러 색상을 연결</td>
              <td>
                <div class="code-cell"><code>background: linear-gradient(90deg,red,yellow,blue);</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>3색 그라데이션 적용</td>
            </tr>
            <tr>
              <td><code>색상 정지점</code></td>
              <td>색상 전환 위치 지정</td>
              <td>
                <div class="code-cell"><code>background: linear-gradient(90deg,red 30%,blue 70%);</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>지정 위치에서 색상 전환</td>
            </tr>
            <tr>
              <td><code>단단한 색상 경계</code></td>
              <td>같은 위치에 다른 색상 지정</td>
              <td>
                <div class="code-cell"><code>background: linear-gradient(90deg,red 50%,blue 50%);</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>빨강과 파랑을 반으로 분할</td>
            </tr>
            <tr>
              <td><code>repeating-linear-gradient()</code></td>
              <td>선형 패턴 반복</td>
              <td>
                <div class="code-cell">
                  <code>background: repeating-linear-gradient(45deg,#fff 0 10px,#eee 10px 20px);</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>대각선 줄무늬 적용</td>
            </tr>
            <tr>
              <td><code>radial-gradient()</code></td>
              <td>중심에서 퍼지는 그라데이션</td>
              <td>
                <div class="code-cell"><code>background: radial-gradient(#fff,#6a4bff);</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>중앙에서 보라색으로 퍼짐</td>
            </tr>
            <tr>
              <td><code>radial-gradient(circle)</code></td>
              <td>원형 방사형 그라데이션</td>
              <td>
                <div class="code-cell"><code>background: radial-gradient(circle,#fff,#6a4bff);</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>원형 그라데이션 적용</td>
            </tr>
            <tr>
              <td><code>radial-gradient(ellipse)</code></td>
              <td>타원형 방사형 그라데이션</td>
              <td>
                <div class="code-cell"><code>background: radial-gradient(ellipse,#fff,#6a4bff);</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>타원형 그라데이션 적용</td>
            </tr>
            <tr>
              <td><code>radial-gradient(at top left)</code></td>
              <td>방사형 중심 위치 지정</td>
              <td>
                <div class="code-cell"><code>background: radial-gradient(circle at top left,#fff,#6a4bff);</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>왼쪽 위에서 퍼짐</td>
            </tr>
            <tr>
              <td><code>closest-side</code></td>
              <td>가까운 면까지 확장</td>
              <td>
                <div class="code-cell"><code>background: radial-gradient(closest-side,#fff,#6a4bff);</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>가까운 가장자리에 맞춤</td>
            </tr>
            <tr>
              <td><code>farthest-corner</code></td>
              <td>먼 모서리까지 확장</td>
              <td>
                <div class="code-cell"><code>background: radial-gradient(farthest-corner,#fff,#6a4bff);</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>영역 전체를 채움</td>
            </tr>
            <tr>
              <td><code>repeating-radial-gradient()</code></td>
              <td>방사형 패턴 반복</td>
              <td>
                <div class="code-cell">
                  <code>background: repeating-radial-gradient(circle,#fff 0 10px,#ddd 10px 20px);</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>동심원 패턴 적용</td>
            </tr>
            <tr>
              <td><code>conic-gradient()</code></td>
              <td>회전형 그라데이션 지정</td>
              <td>
                <div class="code-cell"><code>background: conic-gradient(red,yellow,blue,red);</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>색상환 형태 적용</td>
            </tr>
            <tr>
              <td><code>conic-gradient(from 90deg)</code></td>
              <td>시작 각도 지정</td>
              <td>
                <div class="code-cell"><code>background: conic-gradient(from 90deg,red,blue);</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>90도에서 회전 시작</td>
            </tr>
            <tr>
              <td><code>repeating-conic-gradient()</code></td>
              <td>회전형 패턴 반복</td>
              <td>
                <div class="code-cell">
                  <code>background: repeating-conic-gradient(#6a4bff 0 10deg,#fff 10deg 20deg);</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>회전 줄무늬 적용</td>
            </tr>
            <tr>
              <td><code>color-mix()</code></td>
              <td>두 색상 혼합</td>
              <td>
                <div class="code-cell"><code>color: color-mix(in srgb,#6a4bff 70%,white);</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>밝은 보라색 적용</td>
            </tr>
            <tr>
              <td><code>color-mix(in oklch)</code></td>
              <td>Oklch 공간에서 혼합</td>
              <td>
                <div class="code-cell"><code>color: color-mix(in oklch,#6a4bff,#ff7ab8);</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>자연스러운 중간색 적용</td>
            </tr>
            <tr>
              <td><code>상대 rgb()</code></td>
              <td>기존 RGB 색상 수정</td>
              <td>
                <div class="code-cell"><code>color: rgb(from #6a4bff r g b / 50%);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>투명도만 50%로 변경</td>
            </tr>
            <tr>
              <td><code>상대 hsl()</code></td>
              <td>기존 HSL 색상 수정</td>
              <td>
                <div class="code-cell"><code>color: hsl(from #6a4bff h s 80%);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>명도를 높인 보라색 적용</td>
            </tr>
            <tr>
              <td><code>상대 oklch()</code></td>
              <td>기존 Oklch 색상 수정</td>
              <td>
                <div class="code-cell"><code>color: oklch(from #6a4bff 80% c h);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>더 밝은 보라색 적용</td>
            </tr>
            <tr>
              <td><code>light-dark()</code></td>
              <td>모드별 색상 지정</td>
              <td>
                <div class="code-cell"><code>color: light-dark(#222,#fff);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>라이트·다크 모드에 따라 변경</td>
            </tr>
            <tr>
              <td><code>CSS 색상 변수</code></td>
              <td>재사용 색상 저장</td>
              <td>
                <div class="code-cell"><code>--primary: #6a4bff;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>포인트 색상을 변수로 저장</td>
            </tr>
            <tr>
              <td><code>var()</code></td>
              <td>저장된 색상 변수 사용</td>
              <td>
                <div class="code-cell"><code>color: var(--primary);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>등록된 포인트 색상 적용</td>
            </tr>
            <tr>
              <td><code>var() 대체값</code></td>
              <td>변수 미정의 시 기본색 사용</td>
              <td>
                <div class="code-cell"><code>color: var(--primary, blue);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>변수가 없으면 파란색 적용</td>
            </tr>
            <tr>
              <td><code>opacity</code></td>
              <td>요소 전체 투명도 지정</td>
              <td>
                <div class="code-cell"><code>opacity: 0.5;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>요소 전체를 50% 투명하게 표시</td>
            </tr>
            <tr>
              <td><code>rgb 알파값</code></td>
              <td>RGB 색상 투명도 지정</td>
              <td>
                <div class="code-cell"><code>background: rgb(0 0 0 / 50%);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>반투명 검정 배경 적용</td>
            </tr>
            <tr>
              <td><code>rgba 알파값</code></td>
              <td>RGBA 색상 투명도 지정</td>
              <td>
                <div class="code-cell"><code>background: rgba(0,0,0,.5);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>50% 검정 배경 적용</td>
            </tr>
            <tr>
              <td><code>HEX 알파값</code></td>
              <td>HEX로 투명도 지정</td>
              <td>
                <div class="code-cell"><code>background: #00000080;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>50% 검정 배경 적용</td>
            </tr>
            <tr>
              <td><code>HSL 알파값</code></td>
              <td>HSL로 투명도 지정</td>
              <td>
                <div class="code-cell"><code>color: hsl(252 100% 65% / 50%);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>반투명 보라색 적용</td>
            </tr>
            <tr>
              <td><code>box-shadow</code></td>
              <td>박스 그림자 색상 지정</td>
              <td>
                <div class="code-cell"><code>box-shadow: 0 8px 24px rgba(0,0,0,.12);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>부드러운 검정 그림자 적용</td>
            </tr>
            <tr>
              <td><code>다중 box-shadow</code></td>
              <td>여러 그림자 색상 적용</td>
              <td>
                <div class="code-cell"><code>box-shadow: 0 4px 10px #0002,0 10px 30px #6a4bff22;</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>검정·보라 그림자 적용</td>
            </tr>
            <tr>
              <td><code>inset 그림자</code></td>
              <td>내부 그림자 색상 지정</td>
              <td>
                <div class="code-cell"><code>box-shadow: inset 0 0 20px #0002;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>안쪽 검정 그림자 적용</td>
            </tr>
            <tr>
              <td><code>text-shadow</code></td>
              <td>텍스트 그림자 색상 지정</td>
              <td>
                <div class="code-cell"><code>text-shadow: 0 2px 8px rgba(0,0,0,.2);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>글자 뒤 그림자 적용</td>
            </tr>
            <tr>
              <td><code>네온 그림자</code></td>
              <td>발광 색상 효과 지정</td>
              <td>
                <div class="code-cell"><code>box-shadow: 0 0 10px #6a4bff,0 0 30px #6a4bff;</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>보라색 네온 효과 적용</td>
            </tr>
            <tr>
              <td><code>brightness()</code></td>
              <td>밝기 조절</td>
              <td>
                <div class="code-cell"><code>filter: brightness(1.2);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>요소를 20% 밝게 표시</td>
            </tr>
            <tr>
              <td><code>contrast()</code></td>
              <td>명암 대비 조절</td>
              <td>
                <div class="code-cell"><code>filter: contrast(1.3);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>색상 대비를 강하게 표시</td>
            </tr>
            <tr>
              <td><code>saturate()</code></td>
              <td>채도 조절</td>
              <td>
                <div class="code-cell"><code>filter: saturate(1.5);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>색상을 더 선명하게 표시</td>
            </tr>
            <tr>
              <td><code>grayscale()</code></td>
              <td>흑백 효과 적용</td>
              <td>
                <div class="code-cell"><code>filter: grayscale(1);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>완전한 흑백으로 표시</td>
            </tr>
            <tr>
              <td><code>sepia()</code></td>
              <td>세피아 효과 적용</td>
              <td>
                <div class="code-cell"><code>filter: sepia(1);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>갈색 빈티지 느낌 적용</td>
            </tr>
            <tr>
              <td><code>hue-rotate()</code></td>
              <td>색상각 회전</td>
              <td>
                <div class="code-cell"><code>filter: hue-rotate(90deg);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>색상을 다른 계열로 변경</td>
            </tr>
            <tr>
              <td><code>invert()</code></td>
              <td>색상 반전</td>
              <td>
                <div class="code-cell"><code>filter: invert(1);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>밝고 어두운 색상 반전</td>
            </tr>
            <tr>
              <td><code>filter: opacity()</code></td>
              <td>필터 방식 투명도 조절</td>
              <td>
                <div class="code-cell"><code>filter: opacity(.6);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>요소를 60% 표시</td>
            </tr>
            <tr>
              <td><code>drop-shadow()</code></td>
              <td>이미지 형태 그림자 적용</td>
              <td>
                <div class="code-cell"><code>filter: drop-shadow(0 8px 12px #6a4bff66);</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>보라색 외곽 그림자 적용</td>
            </tr>
            <tr>
              <td><code>backdrop-filter</code></td>
              <td>뒤 배경 색상 효과 적용</td>
              <td>
                <div class="code-cell"><code>backdrop-filter: blur(10px) saturate(150%);</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>유리 같은 배경 효과 적용</td>
            </tr>
            <tr>
              <td><code>mix-blend-mode</code></td>
              <td>요소와 배경 혼합</td>
              <td>
                <div class="code-cell"><code>mix-blend-mode: multiply;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>배경과 어둡게 혼합</td>
            </tr>
            <tr>
              <td><code>mix-blend-mode: screen</code></td>
              <td>밝게 혼합</td>
              <td>
                <div class="code-cell"><code>mix-blend-mode: screen;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>빛이 겹친 듯 밝게 표시</td>
            </tr>
            <tr>
              <td><code>mix-blend-mode: overlay</code></td>
              <td>명암에 따라 혼합</td>
              <td>
                <div class="code-cell"><code>mix-blend-mode: overlay;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>대비가 강한 혼합 적용</td>
            </tr>
            <tr>
              <td><code>mix-blend-mode: darken</code></td>
              <td>더 어두운 색 선택</td>
              <td>
                <div class="code-cell"><code>mix-blend-mode: darken;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>어두운 부분 유지</td>
            </tr>
            <tr>
              <td><code>mix-blend-mode: lighten</code></td>
              <td>더 밝은 색 선택</td>
              <td>
                <div class="code-cell"><code>mix-blend-mode: lighten;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>밝은 부분 유지</td>
            </tr>
            <tr>
              <td><code>mix-blend-mode: difference</code></td>
              <td>색상 차이 계산</td>
              <td>
                <div class="code-cell"><code>mix-blend-mode: difference;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>배경에 따라 반전 효과</td>
            </tr>
            <tr>
              <td><code>mix-blend-mode: color</code></td>
              <td>색조와 채도 혼합</td>
              <td>
                <div class="code-cell"><code>mix-blend-mode: color;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>흑백 이미지 색상화 효과</td>
            </tr>
            <tr>
              <td><code>mix-blend-mode: luminosity</code></td>
              <td>밝기만 혼합</td>
              <td>
                <div class="code-cell"><code>mix-blend-mode: luminosity;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>밝기 정보만 적용</td>
            </tr>
            <tr>
              <td><code>background-blend-mode</code></td>
              <td>배경 이미지와 색상 혼합</td>
              <td>
                <div class="code-cell"><code>background-blend-mode: multiply;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>배경을 어둡게 혼합</td>
            </tr>
            <tr>
              <td><code>isolation</code></td>
              <td>혼합 범위 제한</td>
              <td>
                <div class="code-cell"><code>isolation: isolate;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>부모 밖과 혼합되지 않음</td>
            </tr>
            <tr>
              <td><code>mask-image</code></td>
              <td>그라데이션으로 마스킹</td>
              <td>
                <div class="code-cell"><code>mask-image: linear-gradient(#000,transparent);</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>아래쪽이 점차 투명해짐</td>
            </tr>
            <tr>
              <td><code>-webkit-mask-image</code></td>
              <td>웹킷용 마스크 지정</td>
              <td>
                <div class="code-cell"><code>-webkit-mask-image: linear-gradient(#000,transparent);</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>크롬·사파리에서 마스크 적용</td>
            </tr>
            <tr>
              <td><code>background-clip</code></td>
              <td>배경 표시 범위 지정</td>
              <td>
                <div class="code-cell"><code>background-clip: padding-box;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>패딩 영역까지만 배경 표시</td>
            </tr>
            <tr>
              <td><code>background-clip: text</code></td>
              <td>배경을 글자 모양으로 자름</td>
              <td>
                <div class="code-cell"><code>background-clip: text; color: transparent;</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>그라데이션 텍스트 표현</td>
            </tr>
            <tr>
              <td><code>-webkit-text-fill-color</code></td>
              <td>텍스트 내부 색상 지정</td>
              <td>
                <div class="code-cell"><code>-webkit-text-fill-color: transparent;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>텍스트 내부를 투명하게 표시</td>
            </tr>
            <tr>
              <td><code>-webkit-text-stroke</code></td>
              <td>텍스트 외곽선 색상 지정</td>
              <td>
                <div class="code-cell"><code>-webkit-text-stroke: 1px #6a4bff;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>보라색 글자 외곽선 적용</td>
            </tr>
            <tr>
              <td><code>color-scheme</code></td>
              <td>지원 색상 모드 지정</td>
              <td>
                <div class="code-cell"><code>color-scheme: light dark;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>브라우저 UI가 모드에 맞게 변경</td>
            </tr>
            <tr>
              <td><code>prefers-color-scheme</code></td>
              <td>사용자 색상 모드 감지</td>
              <td>
                <div class="code-cell"><code>@media (prefers-color-scheme: dark) { }</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>다크 모드 색상 적용</td>
            </tr>
            <tr>
              <td><code>prefers-contrast</code></td>
              <td>사용자 고대비 설정 감지</td>
              <td>
                <div class="code-cell"><code>@media (prefers-contrast: more) { }</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>고대비 색상 적용</td>
            </tr>
            <tr>
              <td><code>forced-colors</code></td>
              <td>강제 색상 모드 감지</td>
              <td>
                <div class="code-cell"><code>@media (forced-colors: active) { }</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>고대비 환경 대응</td>
            </tr>
            <tr>
              <td><code>::selection</code></td>
              <td>선택 영역 색상 지정</td>
              <td>
                <div class="code-cell"><code>::selection { background:#6a4bff; color:#fff; }</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>보라색 선택 영역 적용</td>
            </tr>
            <tr>
              <td><code>::placeholder</code></td>
              <td>입력 안내 글자색 지정</td>
              <td>
                <div class="code-cell"><code>::placeholder { color:#aaa; }</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>연한 회색 안내 문구 적용</td>
            </tr>
            <tr>
              <td><code>:hover 색상</code></td>
              <td>마우스 오버 색상 변경</td>
              <td>
                <div class="code-cell"><code>button:hover { background:#5637ee; }</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>버튼을 진한 보라색으로 변경</td>
            </tr>
            <tr>
              <td><code>:focus 색상</code></td>
              <td>포커스 색상 변경</td>
              <td>
                <div class="code-cell"><code>input:focus { border-color:#6a4bff; }</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>포커스 테두리를 보라색으로 변경</td>
            </tr>
            <tr>
              <td><code>:disabled 색상</code></td>
              <td>비활성 상태 색상 지정</td>
              <td>
                <div class="code-cell"><code>button:disabled { color:#aaa; }</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>비활성 버튼을 회색으로 표시</td>
            </tr>
            <tr>
              <td><code>:valid 색상</code></td>
              <td>정상 입력 상태 색상 지정</td>
              <td>
                <div class="code-cell"><code>input:valid { border-color:#22b06b; }</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>정상 입력에 초록색 적용</td>
            </tr>
            <tr>
              <td><code>:invalid 색상</code></td>
              <td>오류 입력 상태 색상 지정</td>
              <td>
                <div class="code-cell"><code>input:invalid { border-color:#e5484d; }</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>오류 입력에 빨간색 적용</td>
            </tr>
            <tr>
              <td><code>:visited 색상</code></td>
              <td>방문 링크 색상 지정</td>
              <td>
                <div class="code-cell"><code>a:visited { color:#8b5cf6; }</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>방문 링크를 보라색으로 표시</td>
            </tr>
            <tr>
              <td><code>그라데이션 텍스트</code></td>
              <td>텍스트에 그라데이션 적용</td>
              <td>
                <div class="code-cell"><code>background: linear-gradient(90deg,#6a4bff,#ff7ab8);</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>보라·분홍 그라데이션 텍스트</td>
            </tr>
            <tr>
              <td><code>반투명 오버레이</code></td>
              <td>이미지 위에 색상 레이어 적용</td>
              <td>
                <div class="code-cell"><code>background: linear-gradient(#0008,#0008),url(bg.jpg);</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>이미지를 어둡게 덮는 효과</td>
            </tr>
          </table>
          <div class="load-more"></div>
        </div>

        <!-- [패널6] 반응형 -->
        <div class="panel" id="panel-responsive">
          <h2>반응형</h2>
          <p class="desc">화면 크기에 따라 스타일을 다르게 적용하는 방법을 확인하세요.</p>
          <table>
            <tr>
              <th>속성</th>
              <th>설명</th>
              <th>사용 예제</th>
              <th>결과</th>
            </tr>
            <tr>
              <td><code>@media</code></td>
              <td>특정 화면 너비에서만 스타일 적용</td>
              <td>
                <div class="code-cell"><code>@media (max-width: 768px) { ... }</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>768px 이하 화면에서만 적용</td>
            </tr>
            <tr>
              <td><code>max-width</code></td>
              <td>요소의 최대 너비 지정</td>
              <td>
                <div class="code-cell"><code>max-width: 100%;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>부모 너비를 넘지 않게 제한</td>
            </tr>
            <tr>
              <td><code>flex-wrap</code></td>
              <td>플렉스 아이템 줄바꿈 지정</td>
              <td>
                <div class="code-cell"><code>flex-wrap: wrap;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>넘치는 아이템을 다음 줄로 배치</td>
            </tr>
            <tr>
              <td><code>vw / vh</code></td>
              <td>화면 크기 비율 단위 지정</td>
              <td>
                <div class="code-cell"><code>width: 50vw;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>화면 너비의 50%로 지정</td>
            </tr>
            <tr>
              <td><code>min-width</code></td>
              <td>요소의 최소 너비 지정</td>
              <td>
                <div class="code-cell"><code>min-width: 320px;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>320px보다 작아지지 않게 유지</td>
            </tr>
            <tr>
              <td><code>@media</code></td>
              <td>특정 화면 조건에서만 스타일 적용</td>
              <td>
                <div class="code-cell"><code>@media (max-width: 768px) { .box { width: 100%; } }</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>768px 이하 화면에서 너비 100% 적용</td>
            </tr>
            <tr>
              <td><code>max-width</code></td>
              <td>요소의 최대 너비 지정</td>
              <td>
                <div class="code-cell"><code>max-width: 100%;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>부모 너비를 넘지 않도록 제한</td>
            </tr>
            <tr>
              <td><code>min-width</code></td>
              <td>요소의 최소 너비 지정</td>
              <td>
                <div class="code-cell"><code>min-width: 320px;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>320px보다 작아지지 않도록 유지</td>
            </tr>
            <tr>
              <td><code>width: 100%</code></td>
              <td>부모 요소의 전체 너비 사용</td>
              <td>
                <div class="code-cell"><code>width: 100%;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>부모 너비에 맞춰 확장</td>
            </tr>
            <tr>
              <td><code>height: auto</code></td>
              <td>비율을 유지하며 높이 자동 조절</td>
              <td>
                <div class="code-cell"><code>height: auto;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>이미지 비율을 유지하며 높이 계산</td>
            </tr>
            <tr>
              <td><code>flex-wrap</code></td>
              <td>플렉스 아이템 줄바꿈 지정</td>
              <td>
                <div class="code-cell"><code>flex-wrap: wrap;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>공간이 부족하면 다음 줄로 이동</td>
            </tr>
            <tr>
              <td><code>vw</code></td>
              <td>화면 너비 비율 단위 사용</td>
              <td>
                <div class="code-cell"><code>width: 50vw;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>화면 너비의 50% 적용</td>
            </tr>
            <tr>
              <td><code>vh</code></td>
              <td>화면 높이 비율 단위 사용</td>
              <td>
                <div class="code-cell"><code>height: 100vh;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>화면 높이 전체 사용</td>
            </tr>
            <tr>
              <td><code>dvw</code></td>
              <td>동적 화면 너비 단위 사용</td>
              <td>
                <div class="code-cell"><code>width: 100dvw;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>실제 표시 영역 너비 전체 사용</td>
            </tr>
            <tr>
              <td><code>dvh</code></td>
              <td>동적 화면 높이 단위 사용</td>
              <td>
                <div class="code-cell"><code>min-height: 100dvh;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>모바일 주소창 변화를 반영한 높이 적용</td>
            </tr>
            <tr>
              <td><code>svw</code></td>
              <td>작은 뷰포트 너비 단위 사용</td>
              <td>
                <div class="code-cell"><code>width: 100svw;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>최소 화면 너비 기준으로 계산</td>
            </tr>
            <tr>
              <td><code>svh</code></td>
              <td>작은 뷰포트 높이 단위 사용</td>
              <td>
                <div class="code-cell"><code>height: 100svh;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>최소 화면 높이 기준으로 계산</td>
            </tr>
            <tr>
              <td><code>lvw</code></td>
              <td>큰 뷰포트 너비 단위 사용</td>
              <td>
                <div class="code-cell"><code>width: 100lvw;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>최대 화면 너비 기준으로 계산</td>
            </tr>
            <tr>
              <td><code>lvh</code></td>
              <td>큰 뷰포트 높이 단위 사용</td>
              <td>
                <div class="code-cell"><code>height: 100lvh;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>최대 화면 높이 기준으로 계산</td>
            </tr>
            <tr>
              <td><code>vmin</code></td>
              <td>화면 너비와 높이 중 작은 값 기준</td>
              <td>
                <div class="code-cell"><code>font-size: 4vmin;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>작은 화면 축에 맞춰 글자 크기 조절</td>
            </tr>
            <tr>
              <td><code>vmax</code></td>
              <td>화면 너비와 높이 중 큰 값 기준</td>
              <td>
                <div class="code-cell"><code>font-size: 4vmax;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>큰 화면 축에 맞춰 글자 크기 조절</td>
            </tr>
            <tr>
              <td><code>clamp()</code></td>
              <td>최소·유동·최대값을 함께 지정</td>
              <td>
                <div class="code-cell"><code>font-size: clamp(16px, 2vw, 32px);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>화면에 따라 16px에서 32px 사이로 조절</td>
            </tr>
            <tr>
              <td><code>min()</code></td>
              <td>여러 값 중 가장 작은 값 사용</td>
              <td>
                <div class="code-cell"><code>width: min(100%, 1200px);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>부모 너비와 1200px 중 작은 값 적용</td>
            </tr>
            <tr>
              <td><code>max()</code></td>
              <td>여러 값 중 가장 큰 값 사용</td>
              <td>
                <div class="code-cell"><code>padding: max(16px, 3vw);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>최소 16px 이상의 패딩 유지</td>
            </tr>
            <tr>
              <td><code>calc()</code></td>
              <td>서로 다른 단위를 계산해 사용</td>
              <td>
                <div class="code-cell"><code>width: calc(100% - 240px);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>전체 너비에서 240px를 제외</td>
            </tr>
            <tr>
              <td><code>aspect-ratio</code></td>
              <td>가로세로 비율 유지</td>
              <td>
                <div class="code-cell"><code>aspect-ratio: 16 / 9;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>16대 9 비율로 크기 유지</td>
            </tr>
            <tr>
              <td><code>object-fit</code></td>
              <td>이미지가 영역에 맞춰지는 방식 지정</td>
              <td>
                <div class="code-cell"><code>object-fit: cover;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>비율을 유지하며 영역을 가득 채움</td>
            </tr>
            <tr>
              <td><code>object-position</code></td>
              <td>이미지 표시 위치 지정</td>
              <td>
                <div class="code-cell"><code>object-position: center;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>이미지 중심 부분을 기준으로 표시</td>
            </tr>
            <tr>
              <td><code>overflow-x</code></td>
              <td>가로 넘침 처리 방식 지정</td>
              <td>
                <div class="code-cell"><code>overflow-x: auto;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>필요할 때 가로 스크롤 생성</td>
            </tr>
            <tr>
              <td><code>overflow-y</code></td>
              <td>세로 넘침 처리 방식 지정</td>
              <td>
                <div class="code-cell"><code>overflow-y: auto;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>필요할 때 세로 스크롤 생성</td>
            </tr>
            <tr>
              <td><code>overflow-wrap</code></td>
              <td>긴 문자열 줄바꿈 지정</td>
              <td>
                <div class="code-cell"><code>overflow-wrap: break-word;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>긴 단어나 URL을 영역 안에서 줄바꿈</td>
            </tr>
            <tr>
              <td><code>word-break</code></td>
              <td>단어 줄바꿈 방식 지정</td>
              <td>
                <div class="code-cell"><code>word-break: keep-all;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>한글을 단어 단위로 줄바꿈</td>
            </tr>
            <tr>
              <td><code>white-space</code></td>
              <td>공백과 줄바꿈 처리 방식 지정</td>
              <td>
                <div class="code-cell"><code>white-space: nowrap;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>텍스트를 한 줄로 유지</td>
            </tr>
            <tr>
              <td><code>text-overflow</code></td>
              <td>넘친 텍스트 표시 방식 지정</td>
              <td>
                <div class="code-cell"><code>text-overflow: ellipsis;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>넘친 내용을 말줄임표로 표시</td>
            </tr>
            <tr>
              <td><code>line-clamp</code></td>
              <td>표시할 최대 줄 수 지정</td>
              <td>
                <div class="code-cell"><code>line-clamp: 2;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>텍스트를 최대 2줄까지 표시</td>
            </tr>
            <tr>
              <td><code>-webkit-line-clamp</code></td>
              <td>여러 줄 말줄임 줄 수 지정</td>
              <td>
                <div class="code-cell"><code>-webkit-line-clamp: 2;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>두 줄 이후 내용을 숨김</td>
            </tr>
            <tr>
              <td><code>container-type</code></td>
              <td>컨테이너 쿼리 기준 요소 지정</td>
              <td>
                <div class="code-cell"><code>container-type: inline-size;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>부모 너비를 기준으로 반응형 스타일 적용</td>
            </tr>
            <tr>
              <td><code>@container</code></td>
              <td>컨테이너 크기에 따라 스타일 변경</td>
              <td>
                <div class="code-cell"><code>@container (max-width: 600px) { .card { padding: 12px; } }</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>컨테이너가 600px 이하일 때 패딩 축소</td>
            </tr>
            <tr>
              <td><code>container-name</code></td>
              <td>컨테이너 이름 지정</td>
              <td>
                <div class="code-cell"><code>container-name: card;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>특정 컨테이너를 이름으로 선택 가능</td>
            </tr>
            <tr>
              <td><code>container</code></td>
              <td>컨테이너 이름과 유형을 한 번에 지정</td>
              <td>
                <div class="code-cell"><code>container: card / inline-size;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>card 이름의 인라인 크기 컨테이너 생성</td>
            </tr>
            <tr>
              <td><code>@media (max-width)</code></td>
              <td>최대 화면 너비 기준 미디어쿼리</td>
              <td>
                <div class="code-cell"><code>@media (max-width: 768px) { }</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>768px 이하 화면에 스타일 적용</td>
            </tr>
            <tr>
              <td><code>@media (min-width)</code></td>
              <td>최소 화면 너비 기준 미디어쿼리</td>
              <td>
                <div class="code-cell"><code>@media (min-width: 1024px) { }</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>1024px 이상 화면에 스타일 적용</td>
            </tr>
            <tr>
              <td><code>@media (orientation: portrait)</code></td>
              <td>세로 화면 방향 감지</td>
              <td>
                <div class="code-cell"><code>@media (orientation: portrait) { }</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>세로 방향 화면에서 스타일 적용</td>
            </tr>
            <tr>
              <td><code>@media (orientation: landscape)</code></td>
              <td>가로 화면 방향 감지</td>
              <td>
                <div class="code-cell"><code>@media (orientation: landscape) { }</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>가로 방향 화면에서 스타일 적용</td>
            </tr>
            <tr>
              <td><code>@media (hover: hover)</code></td>
              <td>마우스 호버 가능 여부 감지</td>
              <td>
                <div class="code-cell">
                  <code>@media (hover: hover) { .btn:hover { transform: translateY(-2px); } }</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>호버 가능한 기기에서만 효과 적용</td>
            </tr>
            <tr>
              <td><code>@media (hover: none)</code></td>
              <td>호버 불가능한 기기 감지</td>
              <td>
                <div class="code-cell"><code>@media (hover: none) { .btn { min-height: 44px; } }</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>터치 기기에서 버튼 높이 확대</td>
            </tr>
            <tr>
              <td><code>@media (pointer: fine)</code></td>
              <td>정밀 포인터 사용 기기 감지</td>
              <td>
                <div class="code-cell"><code>@media (pointer: fine) { }</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>마우스 사용 환경에 스타일 적용</td>
            </tr>
            <tr>
              <td><code>@media (pointer: coarse)</code></td>
              <td>거친 포인터 사용 기기 감지</td>
              <td>
                <div class="code-cell"><code>@media (pointer: coarse) { .btn { padding: 14px 20px; } }</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>터치 환경에서 클릭 영역 확대</td>
            </tr>
            <tr>
              <td><code>@media (prefers-reduced-motion)</code></td>
              <td>모션 감소 설정 감지</td>
              <td>
                <div class="code-cell">
                  <code>@media (prefers-reduced-motion: reduce) { * { animation: none; } }</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>애니메이션과 전환 효과 최소화</td>
            </tr>
            <tr>
              <td><code>@media (prefers-color-scheme)</code></td>
              <td>사용자의 색상 모드 감지</td>
              <td>
                <div class="code-cell">
                  <code>@media (prefers-color-scheme: dark) { body { background: #111; } }</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>다크 모드에서 어두운 배경 적용</td>
            </tr>
            <tr>
              <td><code>@media (prefers-contrast)</code></td>
              <td>사용자의 대비 설정 감지</td>
              <td>
                <div class="code-cell"><code>@media (prefers-contrast: more) { .text { color: #000; } }</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>고대비 환경에서 글자 대비 강화</td>
            </tr>
            <tr>
              <td><code>@media (forced-colors)</code></td>
              <td>강제 색상 모드 감지</td>
              <td>
                <div class="code-cell"><code>@media (forced-colors: active) { }</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>고대비 모드에 맞게 스타일 조절</td>
            </tr>
            <tr>
              <td><code>@media (resolution)</code></td>
              <td>화면 해상도 기준 스타일 적용</td>
              <td>
                <div class="code-cell"><code>@media (min-resolution: 2dppx) { }</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>고해상도 화면에 별도 스타일 적용</td>
            </tr>
            <tr>
              <td><code>@media (any-hover)</code></td>
              <td>입력 장치 중 하나라도 호버 가능한지 감지</td>
              <td>
                <div class="code-cell"><code>@media (any-hover: hover) { }</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>호버 가능한 장치가 있으면 스타일 적용</td>
            </tr>
            <tr>
              <td><code>@media (any-pointer)</code></td>
              <td>입력 장치의 포인터 정밀도 감지</td>
              <td>
                <div class="code-cell"><code>@media (any-pointer: coarse) { }</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>터치 입력 장치가 있으면 스타일 적용</td>
            </tr>
            <tr>
              <td><code>@supports</code></td>
              <td>브라우저 기능 지원 여부 확인</td>
              <td>
                <div class="code-cell"><code>@supports (display: grid) { .list { display: grid; } }</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>Grid 지원 브라우저에만 스타일 적용</td>
            </tr>
            <tr>
              <td><code>@supports not</code></td>
              <td>기능 미지원 브라우저 감지</td>
              <td>
                <div class="code-cell"><code>@supports not (display: grid) { .list { display: flex; } }</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>Grid 미지원 시 Flex 레이아웃 적용</td>
            </tr>
            <tr>
              <td><code>grid-template-columns</code></td>
              <td>반응형 그리드 열 구조 지정</td>
              <td>
                <div class="code-cell"><code>grid-template-columns: repeat(3, 1fr);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>동일한 너비의 3개 열 생성</td>
            </tr>
            <tr>
              <td><code>repeat()</code></td>
              <td>그리드 패턴 반복</td>
              <td>
                <div class="code-cell"><code>grid-template-columns: repeat(4, 1fr);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>동일한 열 4개 생성</td>
            </tr>
            <tr>
              <td><code>auto-fit</code></td>
              <td>빈 열을 제거하며 자동 열 생성</td>
              <td>
                <div class="code-cell"><code>grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>화면에 맞춰 카드 열 개수 자동 변경</td>
            </tr>
            <tr>
              <td><code>auto-fill</code></td>
              <td>빈 열을 유지하며 자동 열 생성</td>
              <td>
                <div class="code-cell"><code>grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>가능한 만큼 열을 생성하고 빈 칸 유지</td>
            </tr>
            <tr>
              <td><code>minmax()</code></td>
              <td>그리드 열의 최소·최대 크기 지정</td>
              <td>
                <div class="code-cell"><code>grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>최소 220px 크기의 반응형 열 생성</td>
            </tr>
            <tr>
              <td><code>grid-auto-flow</code></td>
              <td>그리드 자동 배치 방향 지정</td>
              <td>
                <div class="code-cell"><code>grid-auto-flow: dense;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>빈 공간을 채우며 아이템 자동 배치</td>
            </tr>
            <tr>
              <td><code>grid-column</code></td>
              <td>그리드 항목이 차지할 열 수 지정</td>
              <td>
                <div class="code-cell"><code>grid-column: span 2;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>아이템이 두 개 열을 차지</td>
            </tr>
            <tr>
              <td><code>grid-row</code></td>
              <td>그리드 항목이 차지할 행 수 지정</td>
              <td>
                <div class="code-cell"><code>grid-row: span 2;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>아이템이 두 개 행을 차지</td>
            </tr>
            <tr>
              <td><code>gap</code></td>
              <td>반응형 요소 사이 간격 지정</td>
              <td>
                <div class="code-cell"><code>gap: clamp(12px, 2vw, 24px);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>화면 크기에 따라 간격 자동 조절</td>
            </tr>
            <tr>
              <td><code>row-gap</code></td>
              <td>세로 간격 지정</td>
              <td>
                <div class="code-cell"><code>row-gap: 24px;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>행 사이에 24px 간격 적용</td>
            </tr>
            <tr>
              <td><code>column-gap</code></td>
              <td>가로 간격 지정</td>
              <td>
                <div class="code-cell"><code>column-gap: 16px;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>열 사이에 16px 간격 적용</td>
            </tr>
            <tr>
              <td><code>flex-direction</code></td>
              <td>플렉스 배치 방향 지정</td>
              <td>
                <div class="code-cell"><code>flex-direction: column;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>아이템을 세로 방향으로 배치</td>
            </tr>
            <tr>
              <td><code>justify-content</code></td>
              <td>주축 방향 정렬 지정</td>
              <td>
                <div class="code-cell"><code>justify-content: space-between;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>아이템을 양끝에 배치</td>
            </tr>
            <tr>
              <td><code>align-items</code></td>
              <td>교차축 방향 정렬 지정</td>
              <td>
                <div class="code-cell"><code>align-items: center;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>아이템을 세로 가운데 정렬</td>
            </tr>
            <tr>
              <td><code>align-content</code></td>
              <td>여러 줄 전체 정렬 지정</td>
              <td>
                <div class="code-cell"><code>align-content: flex-start;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>여러 줄을 시작점에 정렬</td>
            </tr>
            <tr>
              <td><code>flex-grow</code></td>
              <td>남은 공간 확장 비율 지정</td>
              <td>
                <div class="code-cell"><code>flex-grow: 1;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>남은 공간만큼 요소 확장</td>
            </tr>
            <tr>
              <td><code>flex-shrink</code></td>
              <td>공간 부족 시 축소 비율 지정</td>
              <td>
                <div class="code-cell"><code>flex-shrink: 0;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>요소가 줄어들지 않도록 유지</td>
            </tr>
            <tr>
              <td><code>flex-basis</code></td>
              <td>플렉스 아이템 기본 크기 지정</td>
              <td>
                <div class="code-cell"><code>flex-basis: 280px;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>아이템 기본 너비를 280px로 설정</td>
            </tr>
            <tr>
              <td><code>order</code></td>
              <td>반응형 환경에서 시각적 순서 변경</td>
              <td>
                <div class="code-cell"><code>order: 2;</code><button class="copy-btn-sm" onclick="copyInlineCode(this)"
                    title="복사" aria-label="복사"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>낮은 order 값 요소 뒤에 배치</td>
            </tr>
            <tr>
              <td><code>display: none</code></td>
              <td>특정 화면에서 요소 숨김</td>
              <td>
                <div class="code-cell"><code>display: none;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>요소와 차지하던 공간을 제거</td>
            </tr>
            <tr>
              <td><code>visibility: hidden</code></td>
              <td>요소를 숨기고 공간 유지</td>
              <td>
                <div class="code-cell"><code>visibility: hidden;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>공간은 유지한 채 요소만 숨김</td>
            </tr>
            <tr>
              <td><code>content-visibility</code></td>
              <td>화면 밖 콘텐츠 렌더링 최적화</td>
              <td>
                <div class="code-cell"><code>content-visibility: auto;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>보이지 않는 콘텐츠 렌더링 지연</td>
            </tr>
            <tr>
              <td><code>contain</code></td>
              <td>요소의 레이아웃 영향 범위 제한</td>
              <td>
                <div class="code-cell"><code>contain: layout paint;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>레이아웃과 페인트 계산 범위 제한</td>
            </tr>
            <tr>
              <td><code>contain-intrinsic-size</code></td>
              <td>렌더링 전 예상 크기 지정</td>
              <td>
                <div class="code-cell"><code>contain-intrinsic-size: 500px;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>화면 밖 콘텐츠의 예상 높이 확보</td>
            </tr>
            <tr>
              <td><code>position: sticky</code></td>
              <td>스크롤 시 특정 위치에 고정</td>
              <td>
                <div class="code-cell"><code>position: sticky; top: 80px;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>스크롤 중 상단 80px 위치에 고정</td>
            </tr>
            <tr>
              <td><code>position: fixed</code></td>
              <td>화면 기준으로 요소 고정</td>
              <td>
                <div class="code-cell"><code>position: fixed; bottom: 20px;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>화면 아래쪽에 계속 표시</td>
            </tr>
            <tr>
              <td><code>inset</code></td>
              <td>상하좌우 위치를 한 번에 지정</td>
              <td>
                <div class="code-cell"><code>inset: 0;</code><button class="copy-btn-sm" onclick="copyInlineCode(this)"
                    title="복사" aria-label="복사"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>부모 영역 전체에 맞춰 배치</td>
            </tr>
            <tr>
              <td><code>margin-inline</code></td>
              <td>논리적 좌우 외부 여백 지정</td>
              <td>
                <div class="code-cell"><code>margin-inline: auto;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>요소를 가로 가운데 정렬</td>
            </tr>
            <tr>
              <td><code>padding-inline</code></td>
              <td>논리적 좌우 내부 여백 지정</td>
              <td>
                <div class="code-cell"><code>padding-inline: clamp(16px, 4vw, 64px);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>화면에 따라 좌우 패딩 자동 조절</td>
            </tr>
            <tr>
              <td><code>margin-block</code></td>
              <td>논리적 상하 외부 여백 지정</td>
              <td>
                <div class="code-cell"><code>margin-block: 32px;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>위아래에 32px 여백 적용</td>
            </tr>
            <tr>
              <td><code>padding-block</code></td>
              <td>논리적 상하 내부 여백 지정</td>
              <td>
                <div class="code-cell"><code>padding-block: 24px;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>위아래에 24px 패딩 적용</td>
            </tr>
            <tr>
              <td><code>inline-size</code></td>
              <td>글쓰기 방향 기준 가로 크기 지정</td>
              <td>
                <div class="code-cell"><code>inline-size: 100%;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>일반 가로쓰기에서 너비 100% 적용</td>
            </tr>
            <tr>
              <td><code>block-size</code></td>
              <td>글쓰기 방향 기준 세로 크기 지정</td>
              <td>
                <div class="code-cell"><code>block-size: auto;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>내용에 따라 높이 자동 계산</td>
            </tr>
            <tr>
              <td><code>max-inline-size</code></td>
              <td>논리적 최대 가로 크기 지정</td>
              <td>
                <div class="code-cell"><code>max-inline-size: 1200px;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>가로 크기를 최대 1200px로 제한</td>
            </tr>
            <tr>
              <td><code>min-inline-size</code></td>
              <td>논리적 최소 가로 크기 지정</td>
              <td>
                <div class="code-cell"><code>min-inline-size: 0;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>플렉스·그리드 내부 넘침 방지</td>
            </tr>
            <tr>
              <td><code>safe-area-inset-top</code></td>
              <td>노치 영역 위쪽 안전 여백 사용</td>
              <td>
                <div class="code-cell"><code>padding-top: env(safe-area-inset-top);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>모바일 노치와 겹치지 않도록 여백 적용</td>
            </tr>
            <tr>
              <td><code>safe-area-inset-bottom</code></td>
              <td>홈 인디케이터 아래 안전 여백 사용</td>
              <td>
                <div class="code-cell"><code>padding-bottom: env(safe-area-inset-bottom);</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>하단 시스템 UI와 겹치지 않도록 여백 적용</td>
            </tr>
            <tr>
              <td><code>env()</code></td>
              <td>기기 환경 변수 사용</td>
              <td>
                <div class="code-cell">
                  <code>padding-inline: env(safe-area-inset-left) env(safe-area-inset-right);</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>기기 안전 영역에 맞춰 좌우 여백 적용</td>
            </tr>
            <tr>
              <td><code>scroll-snap-type</code></td>
              <td>스크롤 스냅 방향 지정</td>
              <td>
                <div class="code-cell"><code>scroll-snap-type: x mandatory;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>가로 스크롤 시 항목 위치에 맞춰 정지</td>
            </tr>
            <tr>
              <td><code>scroll-snap-align</code></td>
              <td>스크롤 항목 정렬 위치 지정</td>
              <td>
                <div class="code-cell"><code>scroll-snap-align: start;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>스크롤 시 항목 시작점에 맞춰 정렬</td>
            </tr>
            <tr>
              <td><code>overscroll-behavior</code></td>
              <td>스크롤 경계 동작 제어</td>
              <td>
                <div class="code-cell"><code>overscroll-behavior: contain;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>부모 페이지로 스크롤이 전달되지 않음</td>
            </tr>
            <tr>
              <td><code>touch-action</code></td>
              <td>터치 제스처 허용 방식 지정</td>
              <td>
                <div class="code-cell"><code>touch-action: pan-y;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>세로 스크롤 제스처만 허용</td>
            </tr>
            <tr>
              <td><code>pointer-events</code></td>
              <td>마우스·터치 이벤트 허용 여부 지정</td>
              <td>
                <div class="code-cell"><code>pointer-events: none;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>요소가 클릭 이벤트를 받지 않음</td>
            </tr>
            <tr>
              <td><code>user-select</code></td>
              <td>텍스트 선택 가능 여부 지정</td>
              <td>
                <div class="code-cell"><code>user-select: none;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>텍스트 드래그 선택 방지</td>
            </tr>
            <tr>
              <td><code>font-size: clamp()</code></td>
              <td>반응형 글자 크기 지정</td>
              <td>
                <div class="code-cell"><code>font-size: clamp(18px, 3vw, 40px);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>화면에 따라 글자 크기 자동 조절</td>
            </tr>
            <tr>
              <td><code>line-height</code></td>
              <td>반응형 줄 간격 지정</td>
              <td>
                <div class="code-cell"><code>line-height: 1.6;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>텍스트 줄 간격을 읽기 좋게 유지</td>
            </tr>
            <tr>
              <td><code>text-wrap: balance</code></td>
              <td>제목 줄 길이를 균형 있게 조절</td>
              <td>
                <div class="code-cell"><code>text-wrap: balance;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>여러 줄 제목의 길이를 비슷하게 표시</td>
            </tr>
            <tr>
              <td><code>image-set()</code></td>
              <td>해상도별 배경 이미지 지정</td>
              <td>
                <div class="code-cell">
                  <code>background-image: image-set(url(bg@1x.jpg) 1x, url(bg@2x.jpg) 2x);</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>고해상도 화면에서 선명한 이미지 사용</td>
            </tr>
          </table>
          <div class="load-more"></div>
        </div>

        <!-- [패널7] 애니메이션 -->
        <div class="panel" id="panel-animation">
          <h2>애니메이션</h2>
          <p class="desc">움직임 효과를 만드는 속성을 확인하세요.</p>
          <table>
            <tr>
              <th>속성</th>
              <th>설명</th>
              <th>사용 예제</th>
              <th>결과</th>
            </tr>
            <tr>
              <td><code>transition</code></td>
              <td>속성 변화에 부드러운 효과 적용</td>
              <td>
                <div class="code-cell"><code>transition: all 0.3s;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>0.3초에 걸쳐 부드럽게 변화</td>
            </tr>
            <tr>
              <td><code>@keyframes</code></td>
              <td>애니메이션 동작 단계 정의</td>
              <td>
                <div class="code-cell"><code>@keyframes fade { ... }</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>정의한 이름으로 애니메이션 실행</td>
            </tr>
            <tr>
              <td><code>animation</code></td>
              <td>정의된 애니메이션을 요소에 적용</td>
              <td>
                <div class="code-cell"><code>animation: fade 1s ease;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>fade 애니메이션을 1초간 실행</td>
            </tr>
            <tr>
              <td><code>transform</code></td>
              <td>요소의 이동/회전/확대 등 변형 지정</td>
              <td>
                <div class="code-cell"><code>transform: rotate(45deg);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>요소를 45도 회전</td>
            </tr>
            <tr>
              <td><code>animation-delay</code></td>
              <td>애니메이션 시작 지연 시간 지정</td>
              <td>
                <div class="code-cell"><code>animation-delay: 0.5s;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>0.5초 후에 애니메이션 시작</td>
            </tr>
            <tr>
              <td><code>ease-in-out</code></td>
              <td>애니메이션 속도 곡선 지정</td>
              <td>
                <div class="code-cell"><code>transition-timing-function: ease-in-out;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>부드럽게 시작하고 끝나는 속도</td>
            </tr>
            <tr>
              <td><code>@keyframes</code></td>
              <td>애니메이션 동작 단계를 정의</td>
              <td>
                <div class="code-cell"><code>@keyframes fade { from { opacity: 0; } to { opacity: 1; } }</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>fade 이름의 애니메이션 정의</td>
            </tr>
            <tr>
              <td><code>animation</code></td>
              <td>애니메이션 속성을 한 번에 지정</td>
              <td>
                <div class="code-cell"><code>animation: fade 1s ease;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>fade 애니메이션을 1초 동안 실행</td>
            </tr>
            <tr>
              <td><code>animation-name</code></td>
              <td>실행할 애니메이션 이름 지정</td>
              <td>
                <div class="code-cell"><code>animation-name: fade;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>fade 키프레임을 실행</td>
            </tr>
            <tr>
              <td><code>animation-duration</code></td>
              <td>애니메이션 재생 시간 지정</td>
              <td>
                <div class="code-cell"><code>animation-duration: 1s;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>1초 동안 애니메이션 실행</td>
            </tr>
            <tr>
              <td><code>animation-delay</code></td>
              <td>애니메이션 시작 지연 시간 지정</td>
              <td>
                <div class="code-cell"><code>animation-delay: 0.5s;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>0.5초 후 애니메이션 시작</td>
            </tr>
            <tr>
              <td><code>animation-timing-function</code></td>
              <td>애니메이션 속도 곡선 지정</td>
              <td>
                <div class="code-cell"><code>animation-timing-function: ease-in-out;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>부드럽게 시작하고 끝남</td>
            </tr>
            <tr>
              <td><code>animation-iteration-count</code></td>
              <td>애니메이션 반복 횟수 지정</td>
              <td>
                <div class="code-cell"><code>animation-iteration-count: infinite;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>애니메이션 무한 반복</td>
            </tr>
            <tr>
              <td><code>animation-direction</code></td>
              <td>애니메이션 재생 방향 지정</td>
              <td>
                <div class="code-cell"><code>animation-direction: alternate;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>정방향과 역방향을 번갈아 실행</td>
            </tr>
            <tr>
              <td><code>animation-fill-mode</code></td>
              <td>애니메이션 전후 스타일 유지 방식 지정</td>
              <td>
                <div class="code-cell"><code>animation-fill-mode: forwards;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>마지막 프레임 스타일 유지</td>
            </tr>
            <tr>
              <td><code>animation-play-state</code></td>
              <td>애니메이션 재생·정지 상태 지정</td>
              <td>
                <div class="code-cell"><code>animation-play-state: paused;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>애니메이션 일시 정지</td>
            </tr>
            <tr>
              <td><code>animation-composition</code></td>
              <td>여러 애니메이션 효과 합성 방식 지정</td>
              <td>
                <div class="code-cell"><code>animation-composition: add;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>기존 변형에 새 애니메이션 효과 추가</td>
            </tr>
            <tr>
              <td><code>animation-timeline</code></td>
              <td>애니메이션 진행 기준 타임라인 지정</td>
              <td>
                <div class="code-cell"><code>animation-timeline: scroll();</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>스크롤에 따라 애니메이션 진행</td>
            </tr>
            <tr>
              <td><code>animation-range</code></td>
              <td>스크롤 애니메이션 실행 범위 지정</td>
              <td>
                <div class="code-cell"><code>animation-range: entry 0% cover 50%;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>요소 진입부터 절반 노출까지 실행</td>
            </tr>
            <tr>
              <td><code>animation-range-start</code></td>
              <td>애니메이션 시작 범위 지정</td>
              <td>
                <div class="code-cell"><code>animation-range-start: entry 0%;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>요소가 진입할 때 시작</td>
            </tr>
            <tr>
              <td><code>animation-range-end</code></td>
              <td>애니메이션 종료 범위 지정</td>
              <td>
                <div class="code-cell"><code>animation-range-end: cover 50%;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>요소가 절반 노출될 때 종료</td>
            </tr>
            <tr>
              <td><code>transition</code></td>
              <td>속성 변화를 부드럽게 처리</td>
              <td>
                <div class="code-cell"><code>transition: all 0.3s ease;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>모든 속성이 0.3초 동안 부드럽게 변경</td>
            </tr>
            <tr>
              <td><code>transition-property</code></td>
              <td>전환 효과를 적용할 속성 지정</td>
              <td>
                <div class="code-cell"><code>transition-property: transform;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>transform 변화에만 전환 적용</td>
            </tr>
            <tr>
              <td><code>transition-duration</code></td>
              <td>전환 효과 지속 시간 지정</td>
              <td>
                <div class="code-cell"><code>transition-duration: 0.3s;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>0.3초 동안 속성 변화</td>
            </tr>
            <tr>
              <td><code>transition-delay</code></td>
              <td>전환 효과 시작 지연 시간 지정</td>
              <td>
                <div class="code-cell"><code>transition-delay: 0.2s;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>0.2초 후 전환 시작</td>
            </tr>
            <tr>
              <td><code>transition-timing-function</code></td>
              <td>전환 효과 속도 곡선 지정</td>
              <td>
                <div class="code-cell"><code>transition-timing-function: ease-out;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>빠르게 시작하고 부드럽게 종료</td>
            </tr>
            <tr>
              <td><code>transition-behavior</code></td>
              <td>비연속 속성의 전환 허용 여부 지정</td>
              <td>
                <div class="code-cell"><code>transition-behavior: allow-discrete;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>display 같은 속성 전환 허용</td>
            </tr>
            <tr>
              <td><code>ease</code></td>
              <td>기본 부드러운 속도 곡선</td>
              <td>
                <div class="code-cell"><code>animation-timing-function: ease;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>천천히 시작해 빨라졌다가 느리게 종료</td>
            </tr>
            <tr>
              <td><code>linear</code></td>
              <td>일정한 속도 곡선</td>
              <td>
                <div class="code-cell"><code>animation-timing-function: linear;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>처음부터 끝까지 같은 속도 유지</td>
            </tr>
            <tr>
              <td><code>ease-in</code></td>
              <td>천천히 시작하는 속도 곡선</td>
              <td>
                <div class="code-cell"><code>animation-timing-function: ease-in;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>점점 빨라지며 진행</td>
            </tr>
            <tr>
              <td><code>ease-out</code></td>
              <td>천천히 끝나는 속도 곡선</td>
              <td>
                <div class="code-cell"><code>animation-timing-function: ease-out;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>빠르게 시작해 점점 느려짐</td>
            </tr>
            <tr>
              <td><code>ease-in-out</code></td>
              <td>천천히 시작하고 끝나는 속도 곡선</td>
              <td>
                <div class="code-cell"><code>animation-timing-function: ease-in-out;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>시작과 끝이 부드럽게 진행</td>
            </tr>
            <tr>
              <td><code>cubic-bezier()</code></td>
              <td>사용자 정의 속도 곡선 지정</td>
              <td>
                <div class="code-cell"><code>animation-timing-function: cubic-bezier(.22,1,.36,1);</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>탄력 있는 부드러운 움직임 적용</td>
            </tr>
            <tr>
              <td><code>steps()</code></td>
              <td>애니메이션을 단계별로 재생</td>
              <td>
                <div class="code-cell"><code>animation-timing-function: steps(5);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>5단계로 끊어서 재생</td>
            </tr>
            <tr>
              <td><code>step-start</code></td>
              <td>첫 단계에서 즉시 변화</td>
              <td>
                <div class="code-cell"><code>animation-timing-function: step-start;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>시작하자마자 다음 상태로 변경</td>
            </tr>
            <tr>
              <td><code>step-end</code></td>
              <td>마지막 단계에서 변화</td>
              <td>
                <div class="code-cell"><code>animation-timing-function: step-end;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>구간 끝에서 상태 변경</td>
            </tr>
            <tr>
              <td><code>transform</code></td>
              <td>요소의 위치·크기·회전 등을 변형</td>
              <td>
                <div class="code-cell"><code>transform: translateY(-10px);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>요소를 위로 10px 이동</td>
            </tr>
            <tr>
              <td><code>translate()</code></td>
              <td>요소를 가로·세로로 이동</td>
              <td>
                <div class="code-cell"><code>transform: translate(20px, 10px);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>오른쪽 20px, 아래 10px 이동</td>
            </tr>
            <tr>
              <td><code>translateX()</code></td>
              <td>요소를 가로 방향으로 이동</td>
              <td>
                <div class="code-cell"><code>transform: translateX(30px);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>오른쪽으로 30px 이동</td>
            </tr>
            <tr>
              <td><code>translateY()</code></td>
              <td>요소를 세로 방향으로 이동</td>
              <td>
                <div class="code-cell"><code>transform: translateY(-20px);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>위로 20px 이동</td>
            </tr>
            <tr>
              <td><code>translateZ()</code></td>
              <td>요소를 Z축 방향으로 이동</td>
              <td>
                <div class="code-cell"><code>transform: translateZ(50px);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>화면 앞으로 50px 이동</td>
            </tr>
            <tr>
              <td><code>translate3d()</code></td>
              <td>요소를 3차원 좌표로 이동</td>
              <td>
                <div class="code-cell"><code>transform: translate3d(20px, 10px, 0);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>가로·세로·깊이 방향으로 이동</td>
            </tr>
            <tr>
              <td><code>scale()</code></td>
              <td>요소의 크기를 확대·축소</td>
              <td>
                <div class="code-cell"><code>transform: scale(1.1);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>요소를 110% 크기로 확대</td>
            </tr>
            <tr>
              <td><code>scaleX()</code></td>
              <td>요소의 가로 크기 변경</td>
              <td>
                <div class="code-cell"><code>transform: scaleX(1.2);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>가로 크기를 120% 확대</td>
            </tr>
            <tr>
              <td><code>scaleY()</code></td>
              <td>요소의 세로 크기 변경</td>
              <td>
                <div class="code-cell"><code>transform: scaleY(0.8);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>세로 크기를 80%로 축소</td>
            </tr>
            <tr>
              <td><code>scaleZ()</code></td>
              <td>요소의 깊이 크기 변경</td>
              <td>
                <div class="code-cell"><code>transform: scaleZ(1.5);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>Z축 크기를 150% 확대</td>
            </tr>
            <tr>
              <td><code>scale3d()</code></td>
              <td>요소의 3축 크기 변경</td>
              <td>
                <div class="code-cell"><code>transform: scale3d(1.1, 1.1, 1);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>가로·세로 크기를 110% 확대</td>
            </tr>
            <tr>
              <td><code>rotate()</code></td>
              <td>요소를 회전</td>
              <td>
                <div class="code-cell"><code>transform: rotate(45deg);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>요소를 45도 회전</td>
            </tr>
            <tr>
              <td><code>rotateX()</code></td>
              <td>요소를 X축 기준 회전</td>
              <td>
                <div class="code-cell"><code>transform: rotateX(180deg);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>요소를 위아래로 뒤집음</td>
            </tr>
            <tr>
              <td><code>rotateY()</code></td>
              <td>요소를 Y축 기준 회전</td>
              <td>
                <div class="code-cell"><code>transform: rotateY(180deg);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>요소를 좌우로 뒤집음</td>
            </tr>
            <tr>
              <td><code>rotateZ()</code></td>
              <td>요소를 Z축 기준 회전</td>
              <td>
                <div class="code-cell"><code>transform: rotateZ(90deg);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>평면에서 90도 회전</td>
            </tr>
            <tr>
              <td><code>rotate3d()</code></td>
              <td>사용자 정의 3D축 기준 회전</td>
              <td>
                <div class="code-cell"><code>transform: rotate3d(1, 1, 0, 45deg);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>대각선 축으로 45도 회전</td>
            </tr>
            <tr>
              <td><code>skew()</code></td>
              <td>요소를 기울임</td>
              <td>
                <div class="code-cell"><code>transform: skew(10deg, 5deg);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>가로·세로 방향으로 기울임</td>
            </tr>
            <tr>
              <td><code>skewX()</code></td>
              <td>요소를 가로 방향으로 기울임</td>
              <td>
                <div class="code-cell"><code>transform: skewX(15deg);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>가로축 기준 15도 기울임</td>
            </tr>
            <tr>
              <td><code>skewY()</code></td>
              <td>요소를 세로 방향으로 기울임</td>
              <td>
                <div class="code-cell"><code>transform: skewY(10deg);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>세로축 기준 10도 기울임</td>
            </tr>
            <tr>
              <td><code>matrix()</code></td>
              <td>2D 변형 행렬 직접 지정</td>
              <td>
                <div class="code-cell"><code>transform: matrix(1, 0, 0, 1, 20, 10);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>요소를 오른쪽 20px, 아래 10px 이동</td>
            </tr>
            <tr>
              <td><code>matrix3d()</code></td>
              <td>3D 변형 행렬 직접 지정</td>
              <td>
                <div class="code-cell"><code>transform: matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>기본 3D 변형 상태 적용</td>
            </tr>
            <tr>
              <td><code>transform-origin</code></td>
              <td>변형 기준점 지정</td>
              <td>
                <div class="code-cell"><code>transform-origin: center bottom;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>요소 하단 중앙을 기준으로 변형</td>
            </tr>
            <tr>
              <td><code>transform-style</code></td>
              <td>자식 요소의 3D 공간 유지 여부 지정</td>
              <td>
                <div class="code-cell"><code>transform-style: preserve-3d;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>자식 요소의 3D 변형 유지</td>
            </tr>
            <tr>
              <td><code>perspective</code></td>
              <td>3D 원근감 거리 지정</td>
              <td>
                <div class="code-cell"><code>perspective: 800px;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>3D 요소에 원근감 적용</td>
            </tr>
            <tr>
              <td><code>perspective-origin</code></td>
              <td>원근감 기준점 지정</td>
              <td>
                <div class="code-cell"><code>perspective-origin: center;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>중앙 시점으로 3D 표현</td>
            </tr>
            <tr>
              <td><code>backface-visibility</code></td>
              <td>회전한 요소 뒷면 표시 여부 지정</td>
              <td>
                <div class="code-cell"><code>backface-visibility: hidden;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>뒤집힌 요소의 뒷면 숨김</td>
            </tr>
            <tr>
              <td><code>opacity</code></td>
              <td>요소 투명도 변경</td>
              <td>
                <div class="code-cell"><code>opacity: 0;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>요소를 완전히 투명하게 표시</td>
            </tr>
            <tr>
              <td><code>filter: blur()</code></td>
              <td>요소에 흐림 효과 적용</td>
              <td>
                <div class="code-cell"><code>filter: blur(6px);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>요소를 6px만큼 흐리게 표시</td>
            </tr>
            <tr>
              <td><code>filter: brightness()</code></td>
              <td>요소 밝기 변경</td>
              <td>
                <div class="code-cell"><code>filter: brightness(1.2);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>요소를 20% 밝게 표시</td>
            </tr>
            <tr>
              <td><code>filter: contrast()</code></td>
              <td>요소 대비 변경</td>
              <td>
                <div class="code-cell"><code>filter: contrast(1.3);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>명암 대비를 높여 표시</td>
            </tr>
            <tr>
              <td><code>filter: grayscale()</code></td>
              <td>요소를 흑백으로 변경</td>
              <td>
                <div class="code-cell"><code>filter: grayscale(1);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>완전한 흑백으로 표시</td>
            </tr>
            <tr>
              <td><code>filter: saturate()</code></td>
              <td>요소 채도 변경</td>
              <td>
                <div class="code-cell"><code>filter: saturate(1.5);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>색상을 더 선명하게 표시</td>
            </tr>
            <tr>
              <td><code>filter: hue-rotate()</code></td>
              <td>요소 색상각 변경</td>
              <td>
                <div class="code-cell"><code>filter: hue-rotate(90deg);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>색상을 다른 계열로 변경</td>
            </tr>
            <tr>
              <td><code>filter: drop-shadow()</code></td>
              <td>요소 외곽에 그림자 적용</td>
              <td>
                <div class="code-cell"><code>filter: drop-shadow(0 8px 16px rgba(0,0,0,.2));</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>요소 형태를 따라 그림자 적용</td>
            </tr>
            <tr>
              <td><code>clip-path</code></td>
              <td>요소 노출 영역을 잘라 애니메이션 적용</td>
              <td>
                <div class="code-cell"><code>clip-path: inset(0 100% 0 0);</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>오른쪽부터 요소를 숨김</td>
            </tr>
            <tr>
              <td><code>mask-position</code></td>
              <td>마스크 위치 변경</td>
              <td>
                <div class="code-cell"><code>mask-position: 100% 0;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>마스크를 오른쪽으로 이동</td>
            </tr>
            <tr>
              <td><code>background-position</code></td>
              <td>배경 이미지 위치 변경</td>
              <td>
                <div class="code-cell"><code>background-position: 100% 50%;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>배경을 오른쪽 중앙으로 이동</td>
            </tr>
            <tr>
              <td><code>background-size</code></td>
              <td>배경 이미지 크기 변경</td>
              <td>
                <div class="code-cell"><code>background-size: 200% 100%;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>배경을 가로 2배로 확대</td>
            </tr>
            <tr>
              <td><code>box-shadow</code></td>
              <td>그림자 변화 애니메이션 적용</td>
              <td>
                <div class="code-cell"><code>box-shadow: 0 12px 30px rgba(106,75,255,.3);</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>보라색 그림자를 크게 표시</td>
            </tr>
            <tr>
              <td><code>text-shadow</code></td>
              <td>텍스트 그림자 변화 적용</td>
              <td>
                <div class="code-cell"><code>text-shadow: 0 0 20px #6a4bff;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>텍스트에 보라색 발광 효과 적용</td>
            </tr>
            <tr>
              <td><code>border-radius</code></td>
              <td>모서리 형태를 부드럽게 변경</td>
              <td>
                <div class="code-cell"><code>border-radius: 50%;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>요소를 원형으로 변경</td>
            </tr>
            <tr>
              <td><code>color</code></td>
              <td>텍스트 색상을 애니메이션으로 변경</td>
              <td>
                <div class="code-cell"><code>color: #6a4bff;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>텍스트를 보라색으로 변경</td>
            </tr>
            <tr>
              <td><code>background-color</code></td>
              <td>배경색을 애니메이션으로 변경</td>
              <td>
                <div class="code-cell"><code>background-color: #6a4bff;</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>배경을 보라색으로 변경</td>
            </tr>
            <tr>
              <td><code>fade-in</code></td>
              <td>요소가 서서히 나타나는 효과</td>
              <td>
                <div class="code-cell"><code>@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>투명 상태에서 선명하게 나타남</td>
            </tr>
            <tr>
              <td><code>fade-out</code></td>
              <td>요소가 서서히 사라지는 효과</td>
              <td>
                <div class="code-cell">
                  <code>@keyframes fadeOut { from { opacity: 1; } to { opacity: 0; } }</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>선명한 상태에서 투명하게 사라짐</td>
            </tr>
            <tr>
              <td><code>slide-up</code></td>
              <td>요소가 아래에서 위로 등장</td>
              <td>
                <div class="code-cell">
                  <code>@keyframes slideUp { from { transform: translateY(30px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>아래에서 위로 이동하며 나타남</td>
            </tr>
            <tr>
              <td><code>slide-down</code></td>
              <td>요소가 위에서 아래로 등장</td>
              <td>
                <div class="code-cell">
                  <code>@keyframes slideDown { from { transform: translateY(-30px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>위에서 아래로 이동하며 나타남</td>
            </tr>
            <tr>
              <td><code>slide-left</code></td>
              <td>요소가 오른쪽에서 왼쪽으로 등장</td>
              <td>
                <div class="code-cell">
                  <code>@keyframes slideLeft { from { transform: translateX(30px); } to { transform: translateX(0); } }</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>오른쪽에서 왼쪽으로 이동</td>
            </tr>
            <tr>
              <td><code>slide-right</code></td>
              <td>요소가 왼쪽에서 오른쪽으로 등장</td>
              <td>
                <div class="code-cell">
                  <code>@keyframes slideRight { from { transform: translateX(-30px); } to { transform: translateX(0); } }</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>왼쪽에서 오른쪽으로 이동</td>
            </tr>
            <tr>
              <td><code>zoom-in</code></td>
              <td>요소가 확대되며 등장</td>
              <td>
                <div class="code-cell">
                  <code>@keyframes zoomIn { from { transform: scale(.8); opacity: 0; } to { transform: scale(1); opacity: 1; } }</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>작은 크기에서 원래 크기로 확대</td>
            </tr>
            <tr>
              <td><code>zoom-out</code></td>
              <td>요소가 축소되며 사라짐</td>
              <td>
                <div class="code-cell">
                  <code>@keyframes zoomOut { from { transform: scale(1); opacity: 1; } to { transform: scale(.8); opacity: 0; } }</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>원래 크기에서 축소되며 사라짐</td>
            </tr>
            <tr>
              <td><code>bounce</code></td>
              <td>요소가 위아래로 튀는 효과</td>
              <td>
                <div class="code-cell"><code>@keyframes bounce { 50% { transform: translateY(-20px); } }</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>요소가 위로 튀었다 돌아옴</td>
            </tr>
            <tr>
              <td><code>pulse</code></td>
              <td>요소가 반복적으로 커졌다 작아짐</td>
              <td>
                <div class="code-cell"><code>@keyframes pulse { 50% { transform: scale(1.08); } }</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>요소가 맥박처럼 확대·축소</td>
            </tr>
            <tr>
              <td><code>shake</code></td>
              <td>요소가 좌우로 흔들리는 효과</td>
              <td>
                <div class="code-cell">
                  <code>@keyframes shake { 25% { transform: translateX(-6px); } 75% { transform: translateX(6px); } }</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>요소가 좌우로 빠르게 흔들림</td>
            </tr>
            <tr>
              <td><code>wiggle</code></td>
              <td>요소가 좌우로 기울어지는 효과</td>
              <td>
                <div class="code-cell">
                  <code>@keyframes wiggle { 25% { transform: rotate(-3deg); } 75% { transform: rotate(3deg); } }</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>요소가 좌우로 살짝 흔들림</td>
            </tr>
            <tr>
              <td><code>spin</code></td>
              <td>요소가 회전하는 효과</td>
              <td>
                <div class="code-cell"><code>@keyframes spin { to { transform: rotate(360deg); } }</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>요소가 한 바퀴 회전</td>
            </tr>
            <tr>
              <td><code>flip</code></td>
              <td>요소가 뒤집히는 효과</td>
              <td>
                <div class="code-cell"><code>@keyframes flip { to { transform: rotateY(180deg); } }</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>요소가 좌우로 뒤집힘</td>
            </tr>
            <tr>
              <td><code>float</code></td>
              <td>요소가 위아래로 떠다니는 효과</td>
              <td>
                <div class="code-cell"><code>@keyframes float { 50% { transform: translateY(-12px); } }</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>요소가 부드럽게 위아래로 이동</td>
            </tr>
            <tr>
              <td><code>swing</code></td>
              <td>요소가 좌우로 흔들리는 효과</td>
              <td>
                <div class="code-cell">
                  <code>@keyframes swing { 25% { transform: rotate(8deg); } 75% { transform: rotate(-8deg); } }</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>기준점을 중심으로 좌우 흔들림</td>
            </tr>
            <tr>
              <td><code>rubber-band</code></td>
              <td>요소가 탄력적으로 늘어나는 효과</td>
              <td>
                <div class="code-cell">
                  <code>@keyframes rubberBand { 50% { transform: scaleX(1.2) scaleY(.8); } }</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>요소가 고무처럼 늘어났다 복귀</td>
            </tr>
            <tr>
              <td><code>heartbeat</code></td>
              <td>심장 박동처럼 두 번 확대되는 효과</td>
              <td>
                <div class="code-cell">
                  <code>@keyframes heartbeat { 14% { transform: scale(1.15); } 28% { transform: scale(1); } }</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>요소가 심장 박동처럼 움직임</td>
            </tr>
            <tr>
              <td><code>blink</code></td>
              <td>요소가 깜빡이는 효과</td>
              <td>
                <div class="code-cell"><code>@keyframes blink { 50% { opacity: 0; } }</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>요소가 반복적으로 보였다 사라짐</td>
            </tr>
            <tr>
              <td><code>typing</code></td>
              <td>텍스트가 입력되는 듯한 효과</td>
              <td>
                <div class="code-cell"><code>@keyframes typing { from { width: 0; } to { width: 100%; } }</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>텍스트 영역이 점차 넓어짐</td>
            </tr>
            <tr>
              <td><code>marquee</code></td>
              <td>텍스트가 가로로 흐르는 효과</td>
              <td>
                <div class="code-cell"><code>@keyframes marquee { to { transform: translateX(-100%); } }</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>텍스트가 오른쪽에서 왼쪽으로 흐름</td>
            </tr>
            <tr>
              <td><code>gradient-move</code></td>
              <td>그라데이션 배경이 이동하는 효과</td>
              <td>
                <div class="code-cell">
                  <code>@keyframes gradientMove { to { background-position: 200% center; } }</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>그라데이션이 가로로 움직임</td>
            </tr>
            <tr>
              <td><code>shimmer</code></td>
              <td>빛이 스쳐 지나가는 효과</td>
              <td>
                <div class="code-cell"><code>@keyframes shimmer { to { background-position: -200% 0; } }</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>반짝이는 빛이 요소 위를 통과</td>
            </tr>
            <tr>
              <td><code>reveal</code></td>
              <td>클리핑 영역이 열리며 나타나는 효과</td>
              <td>
                <div class="code-cell">
                  <code>@keyframes reveal { from { clip-path: inset(0 100% 0 0); } to { clip-path: inset(0); } }</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>왼쪽부터 요소가 드러남</td>
            </tr>
            <tr>
              <td><code>rotate-in</code></td>
              <td>회전하며 나타나는 효과</td>
              <td>
                <div class="code-cell">
                  <code>@keyframes rotateIn { from { transform: rotate(-15deg); opacity: 0; } to { transform: rotate(0); opacity: 1; } }</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>기울어진 상태에서 회전하며 등장</td>
            </tr>
            <tr>
              <td><code>blur-in</code></td>
              <td>흐린 상태에서 선명하게 나타나는 효과</td>
              <td>
                <div class="code-cell">
                  <code>@keyframes blurIn { from { filter: blur(10px); opacity: 0; } to { filter: blur(0); opacity: 1; } }</code><button
                    class="copy-btn-sm" onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14"
                      height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>흐림이 사라지며 요소 등장</td>
            </tr>
            <tr>
              <td><code>scroll()</code></td>
              <td>스크롤 진행률을 타임라인으로 사용</td>
              <td>
                <div class="code-cell"><code>animation-timeline: scroll();</code><button class="copy-btn-sm"
                    onclick="copyInlineCode(this)" title="복사" aria-label="복사"><svg width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg></button></div>
              </td>
              <td>페이지 스크롤에 따라 애니메이션 실행</td>
            </tr>
          </table>
          <div class="load-more"></div>
        </div>

        <!-- 검색 결과가 하나도 없을 때만 보여지는 안내 문구 -->
        <p class="no-result" id="noResult">검색 결과가 없습니다.</p>

      </main>
    </div>

  </div><!-- /.container -->

  <!-- 복사 완료 토스트: 복사 버튼을 누르면 잠깐 나타났다 사라짐 -->
  <div class="toast" id="copyToast">복사되었습니다</div>
  <!-- ---------- 카테고리 전환 스크립트 ---------- -->
  


`;
