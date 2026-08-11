/* =========================================================
       메타데이터: 사용빈도(1~5)
       - 카드/표 각 항목에 매칭되는 키(태그명 또는 속성명)로 조회
       - HTML을 일일이 수정하지 않고 JS에서 배지를 주입한다
    ========================================================= */
    var META = {
      // HTML 태그
      'div': { f: 5 }, 'span': { f: 5 }, 'a': { f: 5 }, 'img': { f: 5 },
      'button': { f: 5 }, 'input': { f: 5 }, 'ul/li': { f: 5 }, 'table': { f: 3 },
      'h1': { f: 5 }, 'p': { f: 5 }, 'header': { f: 4 }, 'nav': { f: 4 },
      'main': { f: 4 }, 'article': { f: 3 }, 'aside': { f: 3 }, 'footer': { f: 4 },
      'form': { f: 4 }, 'label': { f: 4 }, 'textarea': { f: 3 }, 'select': { f: 3 },
      'option': { f: 3 }, 'video': { f: 2 }, 'audio': { f: 2 }, 'iframe': { f: 3 },
      'figure': { f: 2 }, 'figcaption': { f: 2 }, 'strong': { f: 4 }, 'em': { f: 3 },
      'mark': { f: 2 }, 'small': { f: 2 }, 'code': { f: 3 }, 'blockquote': { f: 2 },
      'pre': { f: 3 }, 'details': { f: 2 }, 'progress': { f: 1 }, 'summary': { f: 2 },
      'meter': { f: 1 }, 'time': { f: 2 }, 'abbr': { f: 1 },
      // CSS / 레이아웃 / 타이포그래피 / 색상 / 반응형 / 애니메이션 속성
      'display': { f: 5 }, 'margin': { f: 5 }, 'padding': { f: 5 }, 'color': { f: 5 },
      'background-color': { f: 5 }, 'border': { f: 4 }, 'border-radius': { f: 4 },
      'font-size': { f: 5 }, 'opacity': { f: 3 }, 'cursor': { f: 3 },
      'flex': { f: 5 }, 'grid-template-columns': { f: 4 }, 'position': { f: 4 },
      'top / left': { f: 3 }, 'width / height': { f: 5 }, 'gap': { f: 4 },
      'justify-content': { f: 4 }, 'align-items': { f: 4 },
      'font-weight': { f: 4 }, 'line-height': { f: 4 }, 'letter-spacing': { f: 2 },
      'text-align': { f: 4 }, 'text-decoration': { f: 3 }, 'font-family': { f: 4 },
      'white-space': { f: 2 },
      'border-color': { f: 2 }, 'rgba()': { f: 3 }, 'linear-gradient()': { f: 3 },
      '@media': { f: 4 }, 'max-width': { f: 4 }, 'flex-wrap': { f: 3 },
      'vw / vh': { f: 2 }, 'min-width': { f: 2 },
      'transition': { f: 4 }, '@keyframes': { f: 3 }, 'animation': { f: 3 },
      'transform': { f: 4 }, 'animation-delay': { f: 1 }, 'ease-in-out': { f: 2 }
    };

    /* 초보자가 바로 이해할 수 있도록 자주 쓰는 항목을 일상적인 말로 설명한다. */
    var SIMPLE_DESCRIPTIONS = {
      'div': '여러 요소를 하나의 영역으로 묶을 때 사용해요. 카드나 섹션을 만들 때 가장 자주 써요.',
      'span': '문장 안의 일부 글자만 따로 꾸밀 때 사용해요.',
      'a': '링크를 걸 때 사용해요. 글자를 누르면 다른 페이지나 원하는 위치로 이동하게 만들 수 있어요.',
      'img': '페이지에 사진이나 그림을 보여줄 때 사용해요. src에는 이미지 주소를 넣어요.',
      'button': '사용자가 클릭할 수 있는 버튼을 만들 때 사용해요.',
      'input': '이름, 이메일, 비밀번호처럼 한 줄짜리 값을 입력받을 때 사용해요.',
      'ul/li': '순서가 중요하지 않은 목록을 만들 때 사용해요. ul 안에 li를 여러 개 넣어요.',
      'table': '시간표나 가격표처럼 행과 열로 된 정보를 보여줄 때 사용해요.',
      'h1': '페이지에서 가장 중요한 큰 제목을 적을 때 사용해요. 보통 한 페이지에 하나만 써요.',
      'p': '여러 문장으로 된 문단을 적을 때 사용해요.',
      'header': '로고나 메뉴처럼 페이지 위쪽 내용을 묶을 때 사용해요.',
      'nav': '홈, 소개, 문의처럼 이동 메뉴를 묶을 때 사용해요.',
      'main': '페이지에서 가장 중요한 본문 내용을 감쌀 때 사용해요.',
      'article': '게시글이나 뉴스처럼 따로 떼어 읽어도 되는 내용을 묶을 때 사용해요.',
      'aside': '사이드바나 관련 글처럼 본문을 보충하는 내용을 넣을 때 사용해요.',
      'footer': '저작권이나 연락처처럼 페이지 아래쪽 정보를 넣을 때 사용해요.',
      'form': '로그인이나 회원가입처럼 사용자가 입력한 내용을 제출할 때 사용해요.',
      'label': '입력칸이 무엇을 적는 곳인지 알려줄 때 사용해요. label을 누르면 연결된 입력칸이 선택돼요.',
      'textarea': '문의 내용처럼 여러 줄의 긴 글을 입력받을 때 사용해요.',
      'select': '여러 선택지 중 하나를 고르는 드롭다운 메뉴를 만들 때 사용해요.',
      'option': 'select 안에 들어갈 각각의 선택 항목을 만들 때 사용해요.',
      'video': '페이지에서 동영상을 재생할 때 사용해요.',
      'audio': '페이지에서 음악이나 음성을 재생할 때 사용해요.',
      'iframe': '지도나 영상처럼 다른 웹페이지의 내용을 현재 페이지 안에 넣을 때 사용해요.',
      'figure': '이미지와 그 이미지 설명을 한 묶음으로 다룰 때 사용해요.',
      'figcaption': 'figure 안의 이미지나 그래프에 설명을 붙일 때 사용해요.',
      'strong': '내용상 정말 중요한 글자를 강조할 때 사용해요. 보통 굵게 보여요.',
      'em': '문장에서 말투나 의미를 강조할 때 사용해요. 보통 기울임꼴로 보여요.',
      'mark': '중요한 글자에 형광펜을 칠한 것처럼 표시할 때 사용해요.',
      'small': '저작권이나 주의 문구처럼 덜 중요한 보조 글자를 작게 표시할 때 사용해요.',
      'code': '문장 속에 짧은 코드나 명령어를 표시할 때 사용해요.',
      'blockquote': '다른 사람이나 문서에서 가져온 긴 인용문을 표시할 때 사용해요.',
      'pre': '띄어쓰기와 줄바꿈을 작성한 그대로 보여줄 때 사용해요. 긴 코드 예시에 자주 써요.',
      'details': '눌렀을 때 내용을 펼치거나 접는 영역을 만들 때 사용해요.',
      'progress': '다운로드나 작업이 얼마나 진행됐는지 막대로 보여줄 때 사용해요.',
      'summary': 'details에서 사용자가 누르게 되는 제목 부분을 만들 때 사용해요.',
      'meter': '점수나 디스크 사용량처럼 정해진 범위 안의 현재 값을 보여줄 때 사용해요.',
      'time': '날짜와 시간을 사람과 컴퓨터가 모두 이해할 수 있게 표시할 때 사용해요.',
      'abbr': 'HTML처럼 줄여 쓴 말에 전체 뜻을 알려줄 때 사용해요.',
      'display': '요소가 화면에 놓이는 방식을 정할 때 사용해요. 숨기거나 Flex, Grid 배치로 바꿀 수 있어요.',
      'margin': '요소 바깥쪽에 여백을 만들 때 사용해요. 다른 요소와 거리를 벌려줘요.',
      'padding': '요소 안쪽에 여백을 만들 때 사용해요. 내용과 테두리 사이를 벌려줘요.',
      'color': '글자 색상을 바꿀 때 사용해요.',
      'background-color': '요소의 배경 색상을 바꿀 때 사용해요.',
      'border': '요소 둘레에 테두리를 만들 때 사용해요.',
      'border-radius': '버튼이나 카드의 모서리를 둥글게 만들 때 사용해요.',
      'font-size': '글자 크기를 바꿀 때 사용해요.',
      'font-weight': '글자를 얇게 또는 굵게 만들 때 사용해요.',
      'font-family': '글꼴을 바꿀 때 사용해요.',
      'line-height': '글 줄 사이의 간격을 조절할 때 사용해요.',
      'letter-spacing': '글자와 글자 사이의 간격을 조절할 때 사용해요.',
      'text-align': '글자를 왼쪽, 가운데, 오른쪽으로 정렬할 때 사용해요.',
      'text-decoration': '링크 밑줄을 넣거나 없앨 때 사용해요.',
      'opacity': '요소를 반투명하게 만들 때 사용해요. 0이면 안 보이고 1이면 완전히 보여요.',
      'cursor': '요소 위에 마우스를 올렸을 때 커서 모양을 바꿔요.',
      'width': '요소의 가로 크기를 정할 때 사용해요.',
      'height': '요소의 세로 크기를 정할 때 사용해요.',
      'width / height': '요소의 가로와 세로 크기를 정할 때 사용해요.',
      'max-width': '요소가 일정 너비보다 더 커지지 않게 막을 때 사용해요.',
      'min-width': '요소가 일정 너비보다 더 작아지지 않게 막을 때 사용해요.',
      'position': '요소를 원하는 위치에 놓거나 화면에 고정할 때 사용해요.',
      'top': '위쪽을 기준으로 요소를 얼마나 움직일지 정할 때 사용해요.',
      'left': '왼쪽을 기준으로 요소를 얼마나 움직일지 정할 때 사용해요.',
      'top / left': '위쪽과 왼쪽을 기준으로 요소 위치를 정할 때 사용해요.',
      'z-index': '요소가 겹쳤을 때 무엇을 앞에 보여줄지 정해요. 숫자가 클수록 앞에 보여요.',
      'overflow': '내용이 상자 밖으로 넘쳤을 때 자르거나 스크롤되게 만들어요.',
      'box-sizing': 'padding과 border를 요소 크기에 포함할지 정할 때 사용해요.',
      'flex': '요소들을 한 줄로 정렬하고 남는 공간을 편하게 나눌 때 사용해요.',
      'flex-direction': 'Flex 요소를 가로로 놓을지 세로로 놓을지 정해요.',
      'flex-wrap': '한 줄에 공간이 부족하면 다음 줄로 넘길 때 사용해요.',
      'grid-template-columns': 'Grid에서 열의 개수와 너비를 정할 때 사용해요.',
      'gap': 'Flex나 Grid로 배치한 요소 사이의 간격을 정할 때 사용해요.',
      'justify-content': 'Flex나 Grid 요소들을 주 방향에서 어떻게 정렬할지 정해요.',
      'align-items': 'Flex나 Grid 요소들을 반대 방향에서 어떻게 정렬할지 정해요.',
      'background-image': '요소의 배경에 이미지를 넣을 때 사용해요.',
      'background-size': '배경 이미지가 영역을 채우는 크기를 정할 때 사용해요.',
      'background-position': '배경 이미지에서 어느 부분을 보여줄지 정할 때 사용해요.',
      'background-repeat': '작은 배경 이미지를 반복해서 보여줄지 정할 때 사용해요.',
      'box-shadow': '카드나 버튼 뒤에 그림자를 넣어 입체감을 줄 때 사용해요.',
      'transition': '색상이나 크기가 갑자기 바뀌지 않고 부드럽게 변하게 만들어요.',
      'transform': '요소를 이동하거나 돌리고, 크기를 키우거나 줄일 때 사용해요.',
      '@keyframes': '애니메이션이 시작부터 끝까지 어떻게 움직일지 단계별로 만들어요.',
      'animation': '만들어 둔 keyframes 애니메이션을 요소에 실행할 때 사용해요.',
      '@media': '화면 크기에 따라 다른 CSS를 적용할 때 사용해요.',
      'object-fit': '이미지가 정해진 상자 안에 어떻게 맞춰질지 정해요.',
      'aspect-ratio': '요소의 가로세로 비율을 일정하게 유지할 때 사용해요.'
    };

    var PANEL_GUIDES = {
      'panel-html': ['HTML은 웹페이지의 내용과 구조를 만들어요.', '태그 이름을 보고 언제 쓰는지 확인한 뒤, 아래 예시 코드를 그대로 따라 해보세요.'],
      'panel-css': ['CSS는 HTML로 만든 요소의 색상과 크기, 모양을 꾸며요.', '속성의 역할을 먼저 읽고 예시 코드와 오른쪽 결과를 함께 비교해보세요.'],
      'panel-layout': ['레이아웃은 요소를 원하는 위치에 정렬하는 방법이에요.', '처음에는 Flex로 한 줄 정렬부터 연습하고, 여러 행과 열이 필요할 때 Grid를 사용해보세요.'],
      'panel-typography': ['타이포그래피는 글꼴, 크기, 굵기와 줄 간격을 다뤄요.', '예시 값을 바꿔보면서 글자가 어떻게 달라지는지 확인해보세요.'],
      'panel-color': ['색상 속성은 글자, 배경, 테두리와 그림자의 색을 바꿔요.', 'HEX 색상부터 익힌 뒤 투명도와 그라데이션을 사용하면 쉬워요.'],
      'panel-responsive': ['반응형은 휴대폰과 PC에서 화면이 알맞게 보이도록 만들어요.', '화면 너비 조건과 max-width부터 익히면 대부분의 반응형 화면을 만들 수 있어요.'],
      'panel-animation': ['애니메이션은 요소가 움직이거나 부드럽게 변하도록 만들어요.', '간단한 변화는 transition, 반복되는 움직임은 keyframes와 animation을 사용해요.']
    };
    var activeFrequency = 'all';

    function metaKeyFromCard(card) {
      var tagEl = card.querySelector('.tag');
      if (!tagEl) return null;
      return tagEl.textContent.trim().replace(/[<>]/g, '');
    }

    function metaKeyFromRow(row) {
      var firstTd = row.children[0];
      if (!firstTd) return null;
      var codeEl = firstTd.querySelector('code');
      return (codeEl ? codeEl.textContent : firstTd.textContent).trim();
    }

    function buildMetaHTML(meta) {
      if (!meta) return '';
      var group = frequencyGroup(meta.f);
      var label = group === 'often' ? '자주 사용' : group === 'normal' ? '보통 사용' : '가끔 사용';
      return '<div class="meta-row">' +
        '<span class="frequency-badge frequency-badge--' + group + '" title="사용 빈도: ' + label + '">' + label + '</span>' +
        '</div>';
    }

    function frequencyGroup(frequency) {
      if (frequency >= 4) return 'often';
      if (frequency === 3) return 'normal';
      return 'sometimes';
    }

    function matchesFrequency(item) {
      return activeFrequency === 'all' || item.dataset.frequency === activeFrequency;
    }

    function setFrequencyFilter(filter) {
      activeFrequency = filter;
      document.querySelectorAll('.frequency-tab').forEach(function (button) {
        var selected = button.dataset.frequency === filter;
        button.classList.toggle('active', selected);
        button.setAttribute('aria-selected', selected ? 'true' : 'false');
      });
      Object.keys(panelState).forEach(function (panelId) {
        panelState[panelId].visibleCount = PAGE_SIZE;
      });
      document.querySelectorAll('.card, table tr:not(:first-child)').forEach(function (item) {
        item.classList.toggle('hidden-by-frequency', !matchesFrequency(item));
      });
      document.querySelectorAll('.panel').forEach(renderLoadMore);
      if (document.querySelector('.main').classList.contains('searching')) handleSearch();
    }

    function injectFrequencyTabs() {
      var main = document.querySelector('.main');
      if (!main || main.querySelector('.frequency-filter')) return;
      var filter = document.createElement('div');
      filter.className = 'frequency-filter';
      filter.innerHTML =
        '<div class="frequency-filter__copy"><strong>사용 빈도로 보기</strong><span>필요한 항목만 골라보세요.</span></div>' +
        '<div class="frequency-tabs" role="tablist" aria-label="사용 빈도 분류">' +
          '<button type="button" class="frequency-tab active" role="tab" aria-selected="true" data-frequency="all">전체</button>' +
          '<button type="button" class="frequency-tab" role="tab" aria-selected="false" data-frequency="often">자주 쓰는 것</button>' +
          '<button type="button" class="frequency-tab" role="tab" aria-selected="false" data-frequency="normal">보통 쓰는 것</button>' +
          '<button type="button" class="frequency-tab" role="tab" aria-selected="false" data-frequency="sometimes">가끔 쓰는 것</button>' +
        '</div>';
      main.insertBefore(filter, main.firstChild);
      filter.querySelectorAll('.frequency-tab').forEach(function (button) {
        button.onclick = function () { setFrequencyFilter(button.dataset.frequency); };
      });
    }

    // 카드(HTML 태그)에 사용빈도/브라우저 지원 배지 + 즐겨찾기 버튼 삽입
    function injectCardMeta(card) {
      if (card.dataset.metaInjected) return;
      var key = metaKeyFromCard(card);
      var meta = META[key];
      var head = card.querySelector('.card-head');
      var pEl = card.querySelector('p');
      var preEl = card.querySelector('pre');
      card.dataset.frequency = frequencyGroup(meta?.f || 3);

      if (pEl) {
        pEl.classList.add('simple-description');
        pEl.innerHTML = '<span class="simple-label">언제 써요?</span>' +
          (SIMPLE_DESCRIPTIONS[key] || pEl.textContent.trim());
      }
      if (preEl && !preEl.previousElementSibling?.classList.contains('example-label')) {
        var exampleLabel = document.createElement('span');
        exampleLabel.className = 'example-label';
        exampleLabel.textContent = '예시 코드';
        preEl.insertAdjacentElement('beforebegin', exampleLabel);
      }

      // 즐겨찾기 별 버튼을 복사 버튼 앞에 삽입
      var favBtn = document.createElement('button');
      favBtn.type = 'button';
      favBtn.className = 'fav-btn';
      favBtn.title = '즐겨찾기';
      favBtn.setAttribute('aria-label', '즐겨찾기');
      favBtn.setAttribute('data-fav-key', key || '');
      favBtn.onclick = function () { toggleFavorite(key, favBtn); };
      favBtn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>';
      var copyBtn = head.querySelector('.copy-btn');
      head.insertBefore(favBtn, copyBtn);

      if (meta && pEl) {
        var wrap = document.createElement('div');
        wrap.innerHTML = buildMetaHTML(meta);
        pEl.insertAdjacentElement('afterend', wrap.firstChild);
      }
      card.dataset.metaInjected = '1';
    }

    // 표 행(CSS 속성 등)에 사용빈도/브라우저 지원 배지 + 즐겨찾기 버튼을 담을 열 추가
    function injectTableMeta(panel) {
      var table = panel.querySelector('table');
      if (!table || table.dataset.metaInjected) return;
      var headerRow = table.querySelector('tr');
      var friendlyHeaders = ['기능', '쉽게 설명', '예시 코드', '실행 결과'];
      Array.prototype.slice.call(headerRow.querySelectorAll('th')).forEach(function (th, index) {
        if (friendlyHeaders[index]) th.textContent = friendlyHeaders[index];
      });
      var favTh = document.createElement('th');
      favTh.className = 'fav-th';
      favTh.textContent = '';
      headerRow.appendChild(favTh);
      var metaTh = document.createElement('th');
      metaTh.textContent = '메타정보';
      headerRow.appendChild(metaTh);

      Array.prototype.slice.call(table.querySelectorAll('tr')).forEach(function (row) {
        if (row.querySelector('th')) return;
        var key = metaKeyFromRow(row);
        var meta = META[key];
        row.dataset.frequency = frequencyGroup(meta?.f || 3);
        var descriptionCell = row.children[1];
        if (descriptionCell) {
          descriptionCell.classList.add('simple-table-description');
          if (SIMPLE_DESCRIPTIONS[key]) descriptionCell.textContent = SIMPLE_DESCRIPTIONS[key];
        }

        var favTd = document.createElement('td');
        favTd.className = 'fav-td';
        var favBtn = document.createElement('button');
        favBtn.type = 'button';
        favBtn.className = 'fav-btn';
        favBtn.title = '즐겨찾기';
        favBtn.setAttribute('aria-label', '즐겨찾기');
        favBtn.setAttribute('data-fav-key', key || '');
        favBtn.onclick = function () { toggleFavorite(key, favBtn); };
        favBtn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>';
        favTd.appendChild(favBtn);
        row.appendChild(favTd);

        var metaTd = document.createElement('td');
        metaTd.className = 'meta-td';
        metaTd.innerHTML = meta ? buildMetaHTML(meta) : '';
        row.appendChild(metaTd);
      });
      table.dataset.metaInjected = '1';
    }

    function injectAllMeta() {
      document.querySelectorAll('.panel').forEach(function (panel) {
        var guide = PANEL_GUIDES[panel.id];
        if (guide && !panel.querySelector('.beginner-guide')) {
          var guideBox = document.createElement('div');
          guideBox.className = 'beginner-guide';
          guideBox.innerHTML = '<strong>' + guide[0] + '</strong><span>' + guide[1] + '</span>';
          var panelDescription = panel.querySelector('.desc');
          if (panelDescription) panelDescription.insertAdjacentElement('afterend', guideBox);
          else panel.insertBefore(guideBox, panel.firstChild);
        }
        panel.querySelectorAll('.card').forEach(injectCardMeta);
        injectTableMeta(panel);
      });
    }

    /* =========================================================
       즐겨찾기: window.storage(아티팩트 저장소)를 사용해 즐겨찾기 목록을
       기억한다. 저장소를 사용할 수 없는 환경(예: 파일을 직접 열었을 때)에서는
       현재 세션 동안만 메모리에 즐겨찾기를 보관한다.
    ========================================================= */
    var favorites = {};      // { key: true }
    var favStorageReady = false;

    function hasStorage() {
      return typeof window.storage !== 'undefined' && window.storage !== null;
    }

    function loadFavorites() {
      if (!hasStorage()) { renderFavButtons(); return; }
      window.storage.get('favorites-list', false).then(function (res) {
        if (res && res.value) {
          try {
            var arr = JSON.parse(res.value);
            arr.forEach(function (k) { favorites[k] = true; });
          } catch (e) { /* 무시 */ }
        }
        favStorageReady = true;
        renderFavButtons();
      }).catch(function () {
        favStorageReady = true;
        renderFavButtons();
      });
    }

    function saveFavorites() {
      var arr = Object.keys(favorites);
      if (!hasStorage()) return;
      window.storage.set('favorites-list', JSON.stringify(arr), false).catch(function () { /* 무시 */ });
    }

    // 즐겨찾기 추가/삭제 + 토스트 안내 메시지 표시
    function toggleFavorite(key, btnEl) {
      if (!key) return;
      var justAdded;
      if (favorites[key]) {
        delete favorites[key];
        justAdded = false;
      } else {
        favorites[key] = true;
        justAdded = true;
      }
      saveFavorites();
      renderFavButtons();

      // 요청사항: 즐겨찾기를 누르면 "즐겨찾기에 추가되었습니다"가 1초 정도 노출
      showToast(justAdded ? '즐겨찾기에 추가되었습니다' : '즐겨찾기에서 제거되었습니다');

      // 즐겨찾기 화면을 보고 있는 도중 해제하면 즉시 목록에서 제거
      if (document.querySelector('.cat-item.fav-cat.active')) {
        applyFavoriteFilter();
      }
    }

    function renderFavButtons() {
      document.querySelectorAll('.fav-btn').forEach(function (btn) {
        var key = btn.getAttribute('data-fav-key');
        btn.classList.toggle('active', !!favorites[key]);
      });
      var count = Object.keys(favorites).length;
      var countEl = document.getElementById('favCount');
      if (countEl) countEl.textContent = count;
    }

    /* =========================================================
       카테고리 전환
    ========================================================= */
    function showCategory(clickedItem) {
      // 1) 모든 카테고리 항목에서 active 클래스 제거 후, 클릭한 항목에만 추가
      document.querySelectorAll('.cat-item').forEach(function (item) {
        item.classList.remove('active');
      });
      clickedItem.classList.add('active');

      var category = clickedItem.getAttribute('data-category');
      var cssRoot = document.querySelector('.cat-item[data-category="css"]');
      if (cssRoot) {
        cssRoot.classList.toggle('branch-active', ['css', 'layout', 'typography', 'color', 'responsive', 'animation'].includes(category));
      }

      if (category === 'favorites') {
        applyFavoriteFilter();
        clearSearch();
        return;
      }

      // 즐겨찾기 모드에서 벗어날 때 관련 클래스 정리
      document.querySelector('.main').classList.remove('fav-mode');
      document.querySelectorAll('.hidden-by-fav').forEach(function (el) {
        el.classList.remove('hidden-by-fav');
      });

      // 2) 모든 패널을 숨기고, 클릭한 카테고리에 해당하는 패널만 표시
      document.querySelectorAll('.panel').forEach(function (panel) {
        panel.classList.remove('active');
      });
      document.getElementById('panel-' + category).classList.add('active');

      // 3) 카테고리를 바꾸면 검색창도 초기화
      clearSearch();
      document.querySelectorAll('.panel').forEach(renderLoadMore);
    }

    // 즐겨찾기 카테고리: 모든 패널을 통틀어 즐겨찾기된 항목만 남기고 나머지는 숨김
    function applyFavoriteFilter() {
      var mainEl = document.querySelector('.main');
      mainEl.classList.add('fav-mode');

      document.querySelectorAll('.hidden-by-page').forEach(function (el) {
        el.classList.remove('hidden-by-page');
      });
      document.querySelectorAll('.ghost-item').forEach(function (el) { el.remove(); });
      document.querySelectorAll('.pagination').forEach(function (el) { el.innerHTML = ''; });

      var totalFav = 0;
      document.querySelectorAll('.panel').forEach(function (panel) {
        var visible = 0;
        panel.querySelectorAll('.card').forEach(function (card) {
          var key = metaKeyFromCard(card);
          var isFav = !!favorites[key];
          card.classList.toggle('hidden-by-fav', !isFav);
          if (isFav) visible++;
        });
        panel.querySelectorAll('table tr').forEach(function (row) {
          if (row.querySelector('th')) return;
          var key = metaKeyFromRow(row);
          var isFav = !!favorites[key];
          row.classList.toggle('hidden-by-fav', !isFav);
          if (isFav) visible++;
        });
        panel.classList.toggle('active', visible > 0);
        totalFav += visible;
      });

      var noResultEl = document.getElementById('noResult');
      var noFavEl = document.getElementById('noFav');
      if (totalFav === 0) {
        noFavEl.style.display = 'block';
      } else {
        noFavEl.style.display = 'none';
      }
      noResultEl.style.display = 'none';
    }

    /* =========================================================
       검색: 입력하는 즉시 필터링 + 일치하는 단어 하이라이트 + 개수 배지
    ========================================================= */
    // 하이라이트 대상 요소의 원본 텍스트를 최초 1회만 캐싱해 둔다 (반복 하이라이트 시 원문 보존용)
    function cacheOriginalText(el) {
      if (el.dataset.orig === undefined) {
        el.dataset.orig = el.textContent;
      }
    }

    function escapeRegExp(str) {
      return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    function escapeHtml(str) {
      return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    // 카드의 태그명/설명, 표의 속성명/설명/결과 칸에서 검색어와 일치하는 부분을 <mark>로 강조
    function getHighlightTargets(panel) {
      var targets = [];
      panel.querySelectorAll('.card .tag, .card > p').forEach(function (el) { targets.push(el); });
      panel.querySelectorAll('table td').forEach(function (td) {
        if (td.classList.contains('fav-td') || td.classList.contains('meta-td')) return;
        // 이전 검색에서 mark가 들어간 일반 설명 셀도 반드시 다시 원문으로 복원한다.
        if (td.dataset.orig !== undefined) {
          targets.push(td);
          return;
        }
        var onlyCode = td.children.length === 1 && td.querySelector('code') && !td.querySelector('.code-cell');
        var plain = td.children.length === 0;
        if (onlyCode) targets.push(td.querySelector('code'));
        else if (plain) targets.push(td);
      });
      return targets;
    }

    function applyHighlight(el, query) {
      cacheOriginalText(el);
      var orig = el.dataset.orig;
      if (!query) {
        el.textContent = orig;
        return false;
      }
      var words = query.split(/\s+/).filter(Boolean);
      var pattern = words.map(escapeRegExp).join('|');
      var re = new RegExp(pattern, 'ig');
      if (!re.test(orig)) {
        el.textContent = orig;
        return false;
      }
      el.innerHTML = escapeHtml(orig).replace(new RegExp(pattern, 'ig'), function (m) {
        return '<mark>' + m + '</mark>';
      });
      return true;
    }

    function clearAllHighlights() {
      document.querySelectorAll('.panel').forEach(function (panel) {
        getHighlightTargets(panel).forEach(function (el) {
          if (el.dataset.orig !== undefined) el.textContent = el.dataset.orig;
        });
      });
    }

    function updateSearchUI(query) {
      var countEl = document.getElementById('searchCount');
      var clearEl = document.getElementById('searchClear');
      if (query) {
        clearEl.style.display = 'flex';
      } else {
        clearEl.style.display = 'none';
        countEl.style.display = 'none';
        countEl.textContent = '';
      }
    }

    function clearSearch() {
      window.clearTimeout(searchTimer);
      var input = document.getElementById('searchInput');
      input.value = '';
      var url = new URL(window.location.href);
      url.searchParams.delete('q');
      window.history.replaceState(null, '', url);
      handleSearch();
      input.focus();
    }

    var searchTimer;
    function handleSearchInput() {
      window.clearTimeout(searchTimer);
      var url = new URL(window.location.href);
      url.searchParams.delete('q');
      window.history.replaceState(null, '', url);
      handleSearch();
    }

    // Enter는 즉시 검색하고, Escape는 검색어를 빠르게 지운다.
    function handleSearchKeydown(event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        window.clearTimeout(searchTimer);
        handleSearch();
      } else if (event.key === 'Escape') {
        clearSearch();
      }
    }

    function getSearchText(item) {
      var key = item.classList.contains('card') ? metaKeyFromCard(item) : metaKeyFromRow(item);
      var simpleDescription = SIMPLE_DESCRIPTIONS[key] || '';
      return (key + ' ' + simpleDescription + ' ' + item.textContent).toLowerCase();
    }

    var SEARCH_ALIASES = {
      '사진': ['사진', '이미지', 'img', 'background-image'],
      '이미지': ['이미지', '사진', 'img', 'background-image'],
      '링크': ['링크', '이동', '연결', 'href'],
      '가운데': ['가운데', '중앙', 'center', 'justify-content', 'align-items', 'text-align'],
      '중앙': ['중앙', '가운데', 'center', 'justify-content', 'align-items', 'text-align'],
      '입력창': ['입력창', '입력', 'input', 'textarea', 'select', 'form'],
      '여백': ['여백', 'margin', 'padding', 'gap'],
      '둥글게': ['둥글게', '모서리', 'border-radius'],
      '반응형': ['반응형', '화면 크기', '@media', 'max-width', 'min-width', 'vw', 'vh'],
      '움직임': ['움직임', '애니메이션', 'animation', 'transition', 'transform', '@keyframes']
    };

    function getSearchGroups(query) {
      return query.split(/\s+/).filter(Boolean).map(function (term) {
        return SEARCH_ALIASES[term] || [term];
      });
    }

    function matchesSearch(item, groups) {
      var text = getSearchText(item);
      return groups.every(function (terms) {
        return terms.some(function (term) { return text.indexOf(term) !== -1; });
      });
    }

    function updateSearchStatus(query, count) {
      var main = document.querySelector('.main');
      var status = document.getElementById('searchStatus');
      if (!status && main) {
        status = document.createElement('div');
        status.id = 'searchStatus';
        status.className = 'search-status';
        status.innerHTML = '<strong></strong><span></span>';
        var filter = main.querySelector('.frequency-filter');
        if (filter) filter.insertAdjacentElement('afterend', status);
      }
      if (!status) return;
      status.hidden = !query;
      if (!query) return;
      status.querySelector('strong').textContent = '“' + query + '” 검색 결과';
      status.querySelector('span').textContent = count + '개의 관련 카드만 표시하고 있어요.';
    }

    function resetPreviousSearch() {
      clearAllHighlights();
      document.querySelectorAll('.card, table tr').forEach(function (item) {
        item.classList.remove('hidden-by-search');
      });
      document.querySelectorAll('.panel').forEach(function (panel) {
        panel.classList.remove('hidden-by-search');
      });
      var noResult = document.getElementById('noResult');
      if (noResult) noResult.style.display = 'none';
      updateSearchStatus('', 0);
    }

    // 엔터(또는 돋보기 버튼 클릭) 시 실행되는 검색 함수
    function handleSearch() {
      var rawQuery = document.getElementById('searchInput').value.trim();
      var query = rawQuery.toLowerCase();
      var mainEl = document.querySelector('.main');
      var noResultEl = document.getElementById('noResult');
      var countEl = document.getElementById('searchCount');
      var totalVisible = 0;
      var searchGroups = getSearchGroups(query);

      // 매 입력마다 이전 검색 상태를 먼저 완전히 비운 뒤 새 결과를 계산한다.
      resetPreviousSearch();
      updateSearchUI(rawQuery);

      // 검색할 때는 빈도 필터 때문에 결과가 빠지지 않도록 전체 항목을 대상으로 한다.
      if (query !== '' && activeFrequency !== 'all') {
        activeFrequency = 'all';
        document.querySelectorAll('.frequency-tab').forEach(function (button) {
          var selected = button.dataset.frequency === 'all';
          button.classList.toggle('active', selected);
          button.setAttribute('aria-selected', selected ? 'true' : 'false');
        });
      }

      // 검색을 시작하면 즐겨찾기 전용 보기는 해제
      if (query !== '' && mainEl.classList.contains('fav-mode')) {
        mainEl.classList.remove('fav-mode');
        document.querySelectorAll('.hidden-by-fav').forEach(function (el) { el.classList.remove('hidden-by-fav'); });
        document.getElementById('noFav').style.display = 'none';
        document.querySelectorAll('.cat-item').forEach(function (item) { item.classList.remove('active'); });
        document.querySelector('.cat-item[data-category="html"]').classList.add('active');
        document.querySelectorAll('.panel').forEach(function (panel) { panel.classList.remove('active'); });
        document.getElementById('panel-html').classList.add('active');
      }

      if (query === '') {
        // 검색어가 없으면: 검색 모드 해제하고 원래 선택된 카테고리 화면으로 복귀
        mainEl.classList.remove('searching');
        noResultEl.style.display = 'none';
        // 검색을 벗어나면 페이지네이션을 다시 원래대로 표시
        document.querySelectorAll('.panel').forEach(renderLoadMore);
        return;
      }

      // 검색어가 있으면: 카테고리 구분 없이 전체 패널을 대상으로 검색
      mainEl.classList.add('searching');

      // 검색 중에는 페이지 단위로 숨기지 않고 전체 매칭 항목을 보여줌
      document.querySelectorAll('.hidden-by-page').forEach(function (el) {
        el.classList.remove('hidden-by-page');
      });
      document.querySelectorAll('.hidden-by-frequency').forEach(function (el) {
        el.classList.remove('hidden-by-frequency');
      });
      document.querySelectorAll('.ghost-item').forEach(function (el) {
        el.remove();
      });
      document.querySelectorAll('.pagination').forEach(function (el) {
        el.innerHTML = '';
      });

      var seenSearchKeys = {};
      document.querySelectorAll('.panel').forEach(function (panel) {
        var visibleInPanel = 0;

        // 카드형 콘텐츠(HTML 태그) 검사
        panel.querySelectorAll('.card').forEach(function (card) {
          var match = matchesSearch(card, searchGroups);
          var key = metaKeyFromCard(card) || getSearchText(card);
          if (match && seenSearchKeys[key]) match = false;
          if (match) seenSearchKeys[key] = true;
          card.classList.toggle('hidden-by-search', !match);
          if (match) visibleInPanel++;
        });

        // 표 형태 콘텐츠(CSS 속성 등) 검사, 제목 행(th 포함)은 항상 유지
        panel.querySelectorAll('table tr').forEach(function (row) {
          if (row.querySelector('th')) return; // 헤더 행은 건너뜀
          var match = matchesSearch(row, searchGroups);
          var key = metaKeyFromRow(row) || getSearchText(row);
          if (match && seenSearchKeys[key]) match = false;
          if (match) seenSearchKeys[key] = true;
          row.classList.toggle('hidden-by-search', !match);
          if (match) visibleInPanel++;
        });

        // 패널 안에 매칭되는 항목이 하나도 없으면 패널 자체를 숨김
        panel.classList.toggle('hidden-by-search', visibleInPanel === 0);
        totalVisible += visibleInPanel;

        // 일치하는 단어를 노란색으로 하이라이트
        getHighlightTargets(panel).forEach(function (el) {
          applyHighlight(el, query);
        });
      });

      // 검색창 옆에 일치 개수 배지 표시
      countEl.style.display = 'inline-flex';
      countEl.textContent = totalVisible + '개';
      updateSearchStatus(rawQuery, totalVisible);

      // 전체에서 하나도 안 걸리면 '검색 결과 없음' 문구 표시
      noResultEl.style.display = totalVisible === 0 ? 'block' : 'none';
    }

    /* =========================================================
       코드 복사 (카드 &amp; 표의 "사용 예제" 열)
    ========================================================= */
    var toastTimer = null;
    function showToast(message) {
      var toast = document.getElementById('copyToast');
      if (!toast) return;
      toast.textContent = message || '복사되었습니다';
      toast.classList.add('show');
      clearTimeout(toastTimer);
      toastTimer = setTimeout(function () {
        toast.classList.remove('show');
      }, 1000);
    }

    function copyText(text, btn) {
      function done() { showCopied(btn); showToast('복사되었습니다'); }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done).catch(function () {
          fallbackCopy(text);
          done();
        });
      } else {
        fallbackCopy(text);
        done();
      }
    }

    function fallbackCopy(text) {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); } catch (e) { /* 무시 */ }
      document.body.removeChild(ta);
    }

    function showCopied(btn) {
      btn.classList.add('copied');
      clearTimeout(btn._copyTimer);
      btn._copyTimer = setTimeout(function () {
        btn.classList.remove('copied');
      }, 1200);
    }

    // 카드(HTML 태그)의 pre 안 코드를 복사
    function copyCode(btn) {
      var card = btn.closest('.card');
      var pre = card.querySelector('pre');
      copyText(pre.innerText, btn);
    }

    // 표의 "사용 예제" 열 코드를 복사
    function copyInlineCode(btn) {
      var codeEl = btn.parentElement.querySelector('code');
      copyText(codeEl.innerText, btn);
    }

    /* 예시 코드를 누르면 코드와 실행 결과를 한 화면에서 비교한다. */
    var activeExampleCode = '';
    function exampleDocument(code) {
      return '<!doctype html><html lang="ko"><head><meta charset="UTF-8"><style>' +
        '*{box-sizing:border-box}body{min-height:100vh;margin:0;padding:28px;display:flex;align-items:center;justify-content:center;text-align:center;font-family:Pretendard,Arial,sans-serif;color:#252238;background:#fff}' +
        'body>*{max-width:100%}' +
        'a{color:#6a4bff;font-weight:700}button,input,select,textarea{font:inherit}button{padding:9px 16px;border:0;border-radius:9px;background:#6a4bff;color:#fff}' +
        'img,video,iframe{max-width:100%}table{border-collapse:collapse}td,th{padding:8px 12px;border:1px solid #ddd}mark{padding:2px 4px}' +
        '</style></head><body>' + code + '</body></html>';
    }
    function cssExampleDocument(code, title) {
      var hasRuleBlock = /[{}]/.test(code);
      var appliedCss = hasRuleBlock ? code : '.demo-target{' + code + '}';
      return '<!doctype html><html lang="ko"><head><meta charset="UTF-8"><style>' +
        '*{box-sizing:border-box}body{min-height:100vh;margin:0;padding:24px;display:flex;align-items:center;justify-content:center;font-family:Pretendard,Arial,sans-serif;color:#29263b;background:#faf9ff}' +
        '.demo-stage{position:relative;min-height:230px;display:flex;align-items:center;justify-content:center;gap:10px;padding:28px;border:2px dashed #d9d2fa;border-radius:14px;background:#fff;overflow:auto}' +
        '.demo-target{min-width:110px;min-height:72px;display:flex;align-items:center;justify-content:center;padding:16px;border:2px solid #8069ef;border-radius:10px;background:#eeeaff;color:#3d327a;font-weight:800;text-align:center}' +
        '.demo-target span{display:inline-block;margin:3px;padding:6px;border-radius:5px;background:rgba(106,75,255,.12)}' +
        appliedCss + '</style></head><body><div class="demo-stage"><div class="demo-target">예시 요소<span>1</span><span>2</span></div></div></body></html>';
    }
    function openExampleModal(source) {
      var card = source.closest('.card');
      var row = source.closest('tr');
      var pre = card?.querySelector('pre');
      var codeCell = row?.children[2];
      var code = pre?.innerText || codeCell?.querySelector('code')?.innerText || codeCell?.innerText || '';
      var title = card?.querySelector('.tag')?.textContent.trim() || row?.children[0]?.textContent.trim() || '예시';
      var modal = document.getElementById('exampleModal');
      var frame = document.getElementById('exampleModalFrame');
      var result = document.getElementById('exampleModalResult');
      var description = document.getElementById('exampleModalDescription');
      if (!modal || !frame || !result || !description) return;
      activeExampleCode = code.trim();
      document.getElementById('exampleModalTitle').textContent = title + ' 예시';
      document.getElementById('exampleModalCode').textContent = activeExampleCode;
      var key = card ? metaKeyFromCard(card) : metaKeyFromRow(row);
      var fallbackDescription = card?.querySelector('.simple-description')?.textContent || row?.children[1]?.textContent || '';
      description.textContent = SIMPLE_DESCRIPTIONS[key] || fallbackDescription.replace(/^언제 써요\?\s*/, '').trim() || title + '의 실제 표시 결과예요.';

      frame.hidden = false;
      result.hidden = true;
      frame.srcdoc = card
        ? exampleDocument(activeExampleCode)
        : cssExampleDocument(activeExampleCode, title);

      modal.hidden = false;
      document.body.classList.add('example-modal-open');
      document.getElementById('closeExampleModal').focus();
    }
    function closeExampleModal() {
      var modal = document.getElementById('exampleModal');
      modal.hidden = true;
      document.getElementById('exampleModalFrame').srcdoc = '';
      document.body.classList.remove('example-modal-open');
    }
    function prepareExampleLaunchers() {
      document.querySelectorAll('.card pre, table .code-cell').forEach(function (source) {
        source.classList.add('example-launcher');
        source.setAttribute('role', 'button');
        source.setAttribute('tabindex', '0');
        source.setAttribute('aria-label', '코드와 실행 결과 미리보기');
        if (!source.parentElement.querySelector(':scope > .example-open-btn')) {
          var openButton = document.createElement('button');
          openButton.type = 'button';
          openButton.className = 'example-open-btn';
          openButton.innerHTML = '<span>&#9654;</span> 코드 예시 확인하기';
          openButton.onclick = function (event) {
            event.stopPropagation();
            openExampleModal(source);
          };
          source.insertAdjacentElement('afterend', openButton);
        }
      });
    }
    document.addEventListener('click', function (event) {
      if (event.target.closest('.copy-btn')) return;
      var launcher = event.target.closest('.example-launcher');
      if (launcher) openExampleModal(launcher);
    });
    document.addEventListener('keydown', function (event) {
      var launcher = event.target.closest?.('.example-launcher');
      if (launcher && (event.key === 'Enter' || event.key === ' ')) {
        event.preventDefault();
        openExampleModal(launcher);
      }
      if (event.key === 'Escape' && !document.getElementById('exampleModal')?.hidden) closeExampleModal();
    });
    var closeExampleButton = document.getElementById('closeExampleModal');
    var exampleModalElement = document.getElementById('exampleModal');
    var copyExampleButton = document.getElementById('copyExampleCode');
    if (closeExampleButton) closeExampleButton.onclick = closeExampleModal;
    if (exampleModalElement) exampleModalElement.onclick = function (event) {
      if (event.target === event.currentTarget) closeExampleModal();
    };
    if (copyExampleButton) copyExampleButton.onclick = function (event) {
      copyText(activeExampleCode, event.currentTarget);
    };

    /* =========================================================
       일반 목록은 처음에 PAGE_SIZE개만 보이고,
       검색할 때는 제한 없이 모든 항목을 보여준다.
    ========================================================= */
    var PAGE_SIZE = 16;
    var panelState = {};

    // 패널 안의 "항목들"을 가져옴: 카드형 패널이면 카드, 표 패널이면 헤더를 제외한 행
    function getPanelItems(panel) {
      var grid = panel.querySelector('.card-grid');
      if (grid) {
        return Array.prototype.slice.call(grid.children).filter(function (el) {
          return !el.classList.contains('ghost-item');
        });
      }
      var table = panel.querySelector('table');
      if (table) {
        return Array.prototype.slice.call(table.querySelectorAll('tr')).filter(function (tr) {
          return !tr.querySelector('th') && !tr.classList.contains('ghost-item');
        });
      }
      return [];
    }

    function renderLoadMore(panel) {
      if (document.querySelector('.main').classList.contains('fav-mode')) return;
      var items = getPanelItems(panel);
      var filteredItems = items.filter(matchesFrequency);
      if (!panelState[panel.id]) panelState[panel.id] = { visibleCount: PAGE_SIZE };
      var state = panelState[panel.id];
      if (state.visibleCount > filteredItems.length) state.visibleCount = Math.max(PAGE_SIZE, filteredItems.length);

      items.forEach(function (item) {
        item.classList.toggle('hidden-by-frequency', !matchesFrequency(item));
        item.classList.remove('hidden-by-page');
      });
      filteredItems.forEach(function (item, idx) {
        item.classList.toggle('hidden-by-page', idx >= state.visibleCount);
      });

      var loadMoreEl = panel.querySelector('.load-more');
      if (!loadMoreEl) return;

      var remaining = filteredItems.length - state.visibleCount;
      if (remaining <= 0) {
        loadMoreEl.innerHTML = '';
        return;
      }

      loadMoreEl.innerHTML =
        '<button type="button" class="load-more-btn" onclick="loadMore(\'' + panel.id + '\')">' +
        '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
        '<polyline points="6 9 12 15 18 9"></polyline></svg></button>';
    }

    function loadMore(panelId) {
      var panel = document.getElementById(panelId);
      if (!panelState[panelId]) panelState[panelId] = { visibleCount: PAGE_SIZE };
      panelState[panelId].visibleCount += PAGE_SIZE;
      renderLoadMore(panel);
    }

    function initLoadMore() {
      document.querySelectorAll('.panel').forEach(function (panel) {
        panelState[panel.id] = { visibleCount: PAGE_SIZE };
        renderLoadMore(panel);
      });
    }

    /* =========================================================
       처음부터 알파벳(ABCD)/가나다순으로 정렬
    ========================================================= */
    function getSortKey(item) {
      var tagEl = item.querySelector('.tag');
      if (tagEl) return tagEl.textContent.trim().toLowerCase();
      var firstCode = item.querySelector('td code');
      if (firstCode) return firstCode.textContent.trim().toLowerCase();
      var firstTd = item.querySelector('td');
      if (firstTd) return firstTd.textContent.trim().toLowerCase();
      return '';
    }

    function initAlphabeticalSort() {
      document.querySelectorAll('.panel').forEach(function (panel) {
        var grid = panel.querySelector('.card-grid');
        var table = panel.querySelector('table');
        // 표 행을 table 바로 아래로 옮기면 브라우저가 다시 표 레이아웃으로 처리한다.
        // tbody 안에서 정렬해야 CSS 카드 그리드가 모든 카테고리에 유지된다.
        var container = grid || table?.tBodies[0] || table;
        if (!container) return;

        var items = getPanelItems(panel);
        items.sort(function (a, b) {
          return getSortKey(a).localeCompare(getSortKey(b), 'en');
        });
        items.forEach(function (item) { container.appendChild(item); });
      });
    }

    /* =========================================================
       초기화
    ========================================================= */
    window.initCheatsheet = function () {
      if (window.__cheatsheetInitialized) return;
      window.__cheatsheetInitialized = true;
      initAlphabeticalSort();
      injectAllMeta();
      prepareExampleLaunchers();
      injectFrequencyTabs();
      initLoadMore();
      loadFavorites();

      // 주소의 category 값으로 특정 카드 카테고리를 바로 확인할 수 있다.
      var requestedCategory = new URLSearchParams(window.location.search).get('category');
      var requestedItem = requestedCategory && document.querySelector('.cat-item[data-category="' + requestedCategory + '"]');
      if (requestedItem) showCategory(requestedItem);
      var requestedQuery = new URLSearchParams(window.location.search).get('q');
      if (requestedQuery) {
        document.getElementById('searchInput').value = requestedQuery;
        handleSearch();
      } else {
        document.getElementById('searchInput').value = '';
        resetPreviousSearch();
      }

      var main = document.querySelector('.main');
      if (main && !document.getElementById('noFav')) {
        var noFav = document.createElement('p');
        noFav.className = 'no-fav';
        noFav.id = 'noFav';
        noFav.innerHTML = '아직 즐겨찾기한 항목이 없습니다.<br><span>카드나 표 옆의 별 아이콘을 눌러 즐겨찾기에 추가해보세요.</span>';
        main.appendChild(noFav);
      }
    };
