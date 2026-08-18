export const partHtml = `        <div class="panel active" id="panel-html">
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

        <!-- [패널2] CSS 속성 -->`;
