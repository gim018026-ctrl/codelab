// 3. 요소 카탈로그: 왼쪽 패널의 항목을 데이터에서 생성합니다.
// componentCatalog 데이터를 읽어 왼쪽 패널의 그룹과 요소 버튼을 다시 만듭니다.
function buildCatalog() {
  const groups = Object.entries(componentCatalog)
    .map(
      ([group, items], index) =>
        `<div class="group catalog-group collapsed" data-catalog-group="${group}"><button class="group-toggle"><span>${group === "고급효과" ? "고급 효과" : group}</span><span class="tutorial-link" data-tutorial-area="${group}" data-tooltip="튜토리얼 보러가기" aria-label="${group} 튜토리얼 보러가기">?</span>${group === "고급효과" ? '<small class="member-only-badge">🔒 회원 전용</small>' : `<small>${items.length}</small>`}<i>⌄</i></button><div class="component-grid">${catalogItems(group, items)}</div></div>`,
    )
    .join("");
  $$(".sidebar > .group").forEach((g) => g.remove());
  $(".search").insertAdjacentHTML(
    "afterend",
    `<div id="componentCatalog">${groups}</div>`,
  );
  $$(".group-toggle").forEach((button) => {
    button.onclick = (event) => {
      const tutorial = event.target.closest("[data-tutorial-area]");
      if (tutorial) {
        openTutorial(tutorial.dataset.tutorialArea);
        return;
      }
      const selectedGroup = button.parentElement;
      // 비회원에게는 고급 효과 편집기 대신 회원가입 혜택을 먼저 안내합니다.
      if (
        selectedGroup.dataset.catalogGroup === "고급효과" &&
        !isMember
      ) {
        $$(".catalog-group").forEach((group) => group.classList.add("collapsed"));
        workspace.classList.remove("effect-edit-mode");
        openSignup();
        return;
      }
      const shouldOpen = selectedGroup.classList.contains("collapsed");
      $$(".catalog-group").forEach((group) => group.classList.add("collapsed"));
      if (shouldOpen) selectedGroup.classList.remove("collapsed");
      const effectMode =
        shouldOpen && selectedGroup.dataset.catalogGroup === "고급효과";
      workspace.classList.toggle("effect-edit-mode", effectMode);
      const inspectorTitle = $(".inspector-head h2");
      if (inspectorTitle)
        inspectorTitle.textContent = effectMode ? "고급 효과" : "요소 꾸미기";
      if (selected) drawInspector();
    };
  });
  setupAreaBuilderGuides();
  setupAdvancedEffectPanel();
  $('[data-catalog-group="고급효과"]')?.classList.add("collapsed");
}

// 캔버스 선택값과 왼쪽 고급효과 입력값이 서로 다르지 않도록 동기화합니다.
function syncAdvancedEffectPanel() {
  const effect = $("#catalogEffect");
  if (!effect) return;
  const node = nodes.find((item) => item.id === selected);
  const disabled = !isMember || !node;
  const controls = [effect, $("#catalogEffectIntensity"), $("#catalogEffectSpeed")];
  controls.forEach((control) => (control.disabled = disabled));
  effect.value = node?.effect || "none";
  $("#catalogEffectIntensity").value = node?.effectIntensity || "normal";
  $("#catalogEffectSpeed").value = node?.effectSpeed || "normal";
  const status = $("#catalogEffectStatus");
  if (status)
    status.textContent = !isMember
      ? "회원가입하면 선택한 요소에 효과를 적용할 수 있어요."
      : node
        ? `${node.label}에 적용할 효과를 설정하세요.`
        : "먼저 캔버스에서 요소를 선택해 주세요.";
}

function setupAdvancedEffectPanel() {
  const fields = {
    catalogEffect: "effect",
    catalogEffectIntensity: "effectIntensity",
    catalogEffectSpeed: "effectSpeed",
  };
  Object.entries(fields).forEach(([id, key]) => {
    const control = $("#" + id);
    if (!control) return;
    control.onchange = () => {
      const node = nodes.find((item) => item.id === selected);
      if (!isMember) return openSignup();
      if (!node) return showToast("효과를 적용할 요소를 먼저 선택해 주세요");
      node[key] = control.value;
      render();
      drawInspector();
      syncAdvancedEffectPanel();
      commit();
      showToast(node.effect && node.effect !== "none" ? "고급 효과를 적용했어요" : "효과를 해제했어요");
    };
  });
  syncAdvancedEffectPanel();
}

function setupAreaBuilderGuides() {
  const areaInfo = {
    헤더: {
      type: "header",
      title: "헤더 영역부터 만들어볼까요?",
      description: "영역을 만든 다음 필요한 요소를 추가할 수 있어요.",
    },
    배너: {
      type: "section",
      title: "배너 영역부터 만들어볼까요?",
      description: "영역을 만든 다음 배너 요소를 추가할 수 있어요.",
    },
    콘텐츠: {
      type: "section",
      title: "콘텐츠 영역부터 만들어볼까요?",
      description: "영역을 만든 다음 콘텐츠 요소를 추가할 수 있어요.",
    },
    푸터: {
      type: "footer",
      title: "푸터 영역부터 만들어볼까요?",
      description: "영역을 만든 다음 푸터 요소를 추가할 수 있어요.",
    },
  };

  Object.entries(areaInfo).forEach(([label, info]) => {
    const areaTile = $(`.component[data-label="${label}"]`);
    if (!areaTile) return;
    const group = areaTile.closest(".catalog-group");
    const childCount = group.querySelectorAll(".component").length - 1;
    group.classList.add("guided-catalog");
    group.dataset.area = label;
    group.querySelector(".group-toggle small").textContent = childCount;
    areaTile.hidden = true;
    group.querySelector(".component-grid").insertAdjacentHTML(
      "beforebegin",
      `<div class="header-builder-guide">
        <span class="builder-icon">&lt;/&gt;</span>
        <strong>${info.title}</strong>
        <p>${info.description}</p>
        <button class="create-area-button" data-area="${label}" data-type="${info.type}">＋ ${label} 만들기</button>
      </div>`,
    );
  });

  $$(".create-area-button").forEach((button) => {
    button.onclick = () => {
      const label = button.dataset.area;
      if (!nodes.some((node) => node.label === label)) {
        addNode(button.dataset.type, 0, 0, true, label);
        showToast(`${label} 영역을 만들었어요`);
      }
      refreshAreaBuilders();
    };
  });
  refreshAreaBuilders();
}

function refreshAreaBuilders() {
  $$(".guided-catalog").forEach((group) => {
    const ready = nodes.some((node) => node.label === group.dataset.area);
    const count = +group.querySelector(".group-toggle small").textContent;
    group.classList.toggle("ready", ready);
    group.classList.toggle("has-elements", ready && count > 0);
  });
  updateSearchAvailability();
}

function updateSearchAvailability() {
  const search = $("#search");
  if (!search) return;
  const enabled = nodes.some((node) =>
    ["헤더", "배너", "콘텐츠", "푸터"].includes(node.label),
  );
  search.disabled = !enabled;
  search.placeholder = enabled
    ? "추가할 요소 검색..."
    : "영역을 만들면 검색할 수 있어요";
  if (!enabled && search.value) {
    search.value = "";
    search.dispatchEvent(new Event("input"));
  }
}

buildCatalog();
function markupFor(label, type) {
  const L = label || "";
  const bannerMarkup = {
    "배경 이미지": '<section class="banner-preset banner-image-bg"><span>EXPLORE</span><h2>새로운 장면을 만나보세요</h2></section>',
    "버튼 2개": '<section class="banner-preset banner-cta"><small>BUILD BETTER</small><h2>당신의 다음 프로젝트</h2><p>필요한 기능을 자유롭게 조합하세요.</p><div class="banner-buttons"><button>무료로 시작</button><button class="outline">자세히 보기</button></div></section>',
    "중앙형": '<section class="banner-preset banner-centered"><small>WELCOME</small><h2>중앙에 집중되는 메시지</h2><p>가장 중요한 콘텐츠에 시선을 모읍니다.</p><button>더 알아보기</button></section>',
    "페이드인": '<section class="banner-preset banner-gradient effect-fade"><div><small>FADE IN</small><h2>부드럽게 나타나는 콘텐츠</h2><p>첫 진입 시 자연스러운 모션을 제공합니다.</p></div></section>',
  };
  const contentMarkup = {
    "기능 소개": '<section class="content-block feature-grid"><article><b>01</b><h3>빠른 제작</h3><p>원하는 요소를 골라 바로 배치합니다.</p></article><article><b>02</b><h3>쉬운 편집</h3><p>속성 패널에서 디자인을 조절합니다.</p></article><article><b>03</b><h3>코드 생성</h3><p>완성 결과를 코드로 확인합니다.</p></article></section>',
    "이용 순서": '<ol class="content-block steps"><li><b>01</b><span>요소 선택</span></li><li><b>02</b><span>디자인 편집</span></li><li><b>03</b><span>미리보기</span></li></ol>',
    "서비스 카드": '<article class="content-card"><span class="card-icon">✦</span><h3>웹 디자인 서비스</h3><p>아이디어를 실제 웹 화면으로 빠르게 완성합니다.</p><button type="button" data-demo-action="message">서비스 보기</button></article>',
    "이미지 갤러리": '<div class="content-block gallery-grid"><button type="button" data-gallery-item="1">01</button><button type="button" data-gallery-item="2">02</button><button type="button" data-gallery-item="3">03</button><button type="button" data-gallery-item="4">04</button></div>',
    "영상": '<div class="content-block media-demo"><button type="button" data-demo-action="media" aria-pressed="false"><span>▶</span><b>소개 영상 재생</b></button></div>',
  };
  const footerMarkup = {
    "푸터 로고": '<div class="footer-brand"><b>&lt;/&gt; CODE LAB</b><span>Build your idea.</span></div>',
    "저작권": '<small class="copyright">© 2026 CODE LAB. All rights reserved.</small>',
    "푸터 메뉴": '<nav class="footer-links"><a href="#home">홈</a><a href="#service">서비스</a><a href="#about">소개</a><a href="#contact">문의</a></nav>',
    "개인정보처리방침": '<button class="footer-policy" type="button" data-demo-action="policy" data-policy-title="개인정보처리방침">개인정보처리방침</button>',
  };
  if (bannerMarkup[L]) {
    return bannerMarkup[L]
      .replace(/<button(?![^>]*data-demo-action)/g, '<button type="button" data-demo-action="message"')
      .replace(/<a href="#"/g, '<a href="#" data-demo-action="message"');
  }
  if (contentMarkup[L]) return contentMarkup[L];
  if (footerMarkup[L]) return footerMarkup[L];
  if (L === "사이트명") return '<strong class="site-name">사이트 이름</strong>';
  if (["헤더", "배너", "콘텐츠", "푸터"].includes(L))
    return `<section class="structure-placeholder structure-${type}"><span>${L}</span></section>`;
  if (/로그인/.test(L))
    return '<div class="auth-actions"><button>로그인</button><button class="filled">회원가입</button></div>';
  if (/메인 메뉴/.test(L))
    return '<nav class="real-menu"><a href="#">홈</a><div class="nav-dropdown"><button type="button" class="menu-trigger" data-menu-toggle aria-expanded="false">서비스 <i>⌄</i></button><div class="submenu"><a href="#">서비스 소개</a><a href="#">주요 기능</a><a href="#">요금 안내</a></div></div><a href="#">소개</a><a href="#">문의</a></nav>';
  if (/마이페이지/.test(L))
    return '<button class="icon-action">👤 <span>마이페이지</span></button>';
  if (/햄버거/.test(L))
    return '<div class="mobile-menu"><button class="hamburger" type="button" data-menu-toggle aria-label="메뉴" aria-expanded="false"><i></i><i></i><i></i></button><div class="mobile-submenu"><a href="#">홈</a><a href="#">서비스</a><a href="#">소개</a><a href="#">문의</a></div></div>';
  if (/이미지 슬라이드/.test(L))
    return '<div class="real-slider"><button>‹</button><div><b>SLIDE 01</b><span>새로운 경험을 만나보세요</span></div><button>›</button></div>';
  if (/페이지 인디케이터/.test(L))
    return '<div class="page-dots"><button class="active"></button><button></button><button></button><button></button></div>';
  if (/스크롤 유도/.test(L))
    return '<div class="scroll-guide"><span>SCROLL</span><i>⌄</i></div>';
  if (/평점/.test(L))
    return '<div class="rating"><span>★★★★★</span><b>4.9</b><small>(128)</small></div>';
  if (/가격 범위/.test(L))
    return '<div class="range-widget"><input type="range" min="0" max="100" value="65"><span>₩0 — ₩100,000</span></div>';
  if (/체크박스/.test(L))
    return '<label class="check-widget"><input type="checkbox"> 선택 항목</label>';
  if (/날짜 선택/.test(L)) return '<input class="real-input" type="date">';
  if (/드롭다운|카테고리 선택|정렬/.test(L))
    return `<select class="real-select"><option>${L}</option><option>옵션 1</option><option>옵션 2</option><option>옵션 3</option></select>`;
  if (/FAQ/.test(L))
    return '<details class="faq-item" open><summary>자주 묻는 질문입니다</summary><p>질문에 대한 답변 내용을 이곳에 작성합니다.</p></details>';
  if (/페이지네이션/.test(L))
    return '<div class="pagination"><button>‹</button><button class="active">1</button><button>2</button><button>3</button><button>›</button></div>';
  if (/문의 폼/.test(L)) return templates.form.html;
  if (/후기/.test(L))
    return '<blockquote class="review"><span>★★★★★</span><p>정말 편리하고 만족스러운 서비스입니다.</p><footer>— 사용자 후기</footer></blockquote>';
  if (/이용 순서|이용 방법/.test(L))
    return '<ol class="steps"><li><b>01</b><span>서비스 선택</span></li><li><b>02</b><span>정보 입력</span></li><li><b>03</b><span>완료</span></li></ol>';
  if (/상품 카드/.test(L))
    return '<article class="product-card"><div class="card-thumb">PRODUCT</div><small>NEW</small><h3>프리미엄 상품</h3><p>상품에 대한 간단한 설명입니다.</p><b>₩29,000</b><button>장바구니 담기</button></article>';
  if (/게임 카드/.test(L))
    return '<article class="game-card"><div class="card-thumb">GAME</div><span>Adventure</span><h3>새로운 게임</h3><div>★ 4.8 · 무료</div></article>';
  if (/게시글 카드|뉴스/.test(L))
    return '<article class="post-card"><small>2026. 07. 28</small><h3>새로운 소식을 알려드립니다</h3><p>게시글의 내용을 간단하게 소개하는 설명입니다.</p><a href="#">읽어보기 →</a></article>';
  if (/포트폴리오 카드/.test(L))
    return '<article class="portfolio-card"><div class="card-thumb">PROJECT</div><h3>Creative Project</h3><span>Branding · Web Design</span></article>';
  if (/카드/.test(L))
    return (
      '<article class="real-card"><div class="card-icon">✦</div><h3>' +
      L +
      '</h3><p>콘텐츠에 대한 설명을 입력해 주세요.</p><a href="#">자세히 보기 →</a></article>'
    );
  if (/갤러리/.test(L))
    return '<div class="gallery-grid"><i>01</i><i>02</i><i>03</i><i>04</i></div>';
  if (/태그/.test(L))
    return '<div class="tags"><button>#디자인</button><button>#개발</button><button>#서비스</button></div>';
  if (/맨 위/.test(L))
    return '<button class="top-button" data-action="top">↑ TOP</button>';
  if (/뉴스레터/.test(L))
    return '<form class="newsletter"><input type="email" placeholder="이메일 주소"><button>구독하기</button></form>';
  if (/저작권/.test(L))
    return '<small class="copyright">© 2026 CODE LAB. All rights reserved.</small>';
  if (/로고/.test(L))
    return '<div class="real-logo"><div class="logo-image-area" data-editor-only="true"><span><b>＋</b><small>이미지</small></span></div><span class="logo-text">CODE LAB</span></div>';
  if (type === "footer") return templates.footer.html;
  if (type === "list") return templates.list.html;
  if (type === "section")
    return `<section class="real-section"><small>OUR SERVICE</small><h2>${L}</h2><p>${L}에 대한 자세한 설명을 입력해 주세요. 사용자가 이해하기 쉽도록 핵심 내용을 전달합니다.</p><button>더 알아보기</button></section>`;
  return templates[type]?.html || `<div>${L}</div>`;
}
function defaultSizeFor(label, fallback) {
  const sizes = {
    로고: [240, 64],
    사이트명: [200, 48],
    "메인 메뉴": [460, 52],
    "로그인 / 회원가입": [190, 44],
    마이페이지: [150, 44],
    "모바일 햄버거 메뉴": [44, 44],
    "기능 소개": [900, 260], "이용 순서": [780, 150],
    "서비스 카드": [300, 300],
    "이미지 갤러리": [720, 360], 영상: [620, 350],
    "푸터 로고": [260, 90], 저작권: [360, 44], "푸터 메뉴": [460, 52], 개인정보처리방침: [180, 42],
  };
  if (componentCatalog.배너.includes(label) && label !== "배너")
    return { w: sizes[label]?.[0] || 1100, h: sizes[label]?.[1] || 320 };
  const [w, h] = sizes[label] || [fallback.w, fallback.h];
  return { w, h };
}

function codeClassFor(label) {
  const bannerNames = {
    "배경 이미지": "background-image-banner",
    "버튼 2개": "double-cta-banner",
    "중앙형": "centered-banner",
    "페이드인": "fade-banner",
  };
  if (bannerNames[label]) return bannerNames[label];
  const names = {
    헤더: "header",
    로고: "logo",
    사이트명: "site-title",
    "메인 메뉴": "main-menu",
    "로그인 / 회원가입": "auth-buttons",
    마이페이지: "mypage-button",
    "모바일 햄버거 메뉴": "mobile-menu-button",
    배너: "banner",
    콘텐츠: "content",
    푸터: "footer",
  };
  if (names[label]) return names[label];
  return String(label || "component")
    .replace(/\s*\+\s*/g, "-")
    .replace(/\s+/g, "-")
    .replace(/[^\w가-힣-]/g, "") || "component";
}

// 새 영역은 웹 문서의 읽기 순서대로 배치하고, 자식은 항상 부모 경계 안으로 보정합니다.
const areaOrder = ["헤더", "배너", "콘텐츠", "푸터"];
function containNodeInParent(node) {
  const parent = node.parentId
    ? nodes.find((item) => item.id === node.parentId)
    : null;
  if (!parent) return;
  node.w = Math.min(node.w, parent.w);
  node.h = Math.min(node.h, parent.h);
  node.x = Math.max(parent.x, Math.min(node.x, parent.x + parent.w - node.w));
  node.y = Math.max(parent.y, Math.min(node.y, parent.y + parent.h - node.h));
}
function normalizeAreaLayout() {
  let nextY = 0;
  areaOrder.forEach((label) => {
    const area = nodes.find((node) => node.label === label);
    if (!area) return;
    const dx = -area.x;
    const dy = nextY - area.y;
    area.x = 0;
    area.y = nextY;
    area.w = canvasSize.w;
    area.fluidWidth = true;
    nodes
      .filter((node) => node.parentId === area.id)
      .forEach((child) => {
        child.x += dx;
        child.y += dy;
      });
    nextY += area.h;
  });
  // 긴 페이지에서는 푸터가 잘리지 않도록 문서 높이를 콘텐츠에 맞춥니다.
  if (nextY > canvasSize.h) canvasSize.h = Math.min(3000, nextY);
  nodes.forEach(containNodeInParent);
  syncCanvasFrame();
}
function syncCanvasFrame() {
  canvas.style.width = `${canvasSize.w}px`;
  canvas.style.height = `${canvasSize.h}px`;
  shell.style.width = `${canvasSize.w}px`;
  shell.style.height = `${canvasSize.h}px`;
  if ($("#canvasW")) $("#canvasW").value = canvasSize.w;
  if ($("#canvasH")) $("#canvasH").value = canvasSize.h;
}

