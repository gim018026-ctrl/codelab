export const partResponsive = `        <div class="panel" id="panel-responsive">
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

        <!-- [패널7] 애니메이션 -->`;
