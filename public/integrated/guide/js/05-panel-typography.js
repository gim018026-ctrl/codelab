export const partTypography = `        <div class="panel" id="panel-typography">
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

        <!-- [패널5] 색상 -->`;
