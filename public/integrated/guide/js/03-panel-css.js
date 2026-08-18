export const partCss = `        <div class="panel" id="panel-css">
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

        <!-- [패널3] 레이아웃 -->`;
