export const partColor = `        <div class="panel" id="panel-color">
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

        <!-- [패널6] 반응형 -->`;
