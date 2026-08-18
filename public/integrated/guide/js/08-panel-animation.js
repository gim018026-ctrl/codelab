export const partAnimation = `        <div class="panel" id="panel-animation">
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
        </div>`;
