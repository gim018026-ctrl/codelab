export const partLayout = `        <div class="panel" id="panel-layout">
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

        <!-- [패널4] 타이포그래피 -->`;
