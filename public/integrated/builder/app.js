// 1. 공용 도구: 반복되는 DOM 탐색과 사용자 입력 이스케이프를 짧고 안전하게 처리합니다.
const $ = (s) => document.querySelector(s),
  $$ = (s) => [...document.querySelectorAll(s)];
const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

// 브라우저 기본 title 대신 키보드 포커스에서도 보이는 공용 툴팁을 사용합니다.
let tooltipTimer = null;
let tooltipTarget = null;
function prepareTooltipElement(element) {
  if (!(element instanceof Element)) return;
  if (element.hasAttribute("title")) {
    element.dataset.uiTitle = element.getAttribute("title");
    element.removeAttribute("title");
  }
  element.querySelectorAll?.("[title]").forEach(prepareTooltipElement);
}
function positionUiTooltip(target) {
  const tooltip = $("#uiTooltip");
  const rect = target.getBoundingClientRect();
  const tooltipRect = tooltip.getBoundingClientRect();
  const gap = 8;
  let left = rect.left + rect.width / 2 - tooltipRect.width / 2;
  left = Math.max(8, Math.min(innerWidth - tooltipRect.width - 8, left));
  let top = rect.top - tooltipRect.height - gap;
  if (top < 8) top = rect.bottom + gap;
  tooltip.style.left = `${Math.round(left)}px`;
  tooltip.style.top = `${Math.round(top)}px`;
}
function showUiTooltip(target) {
  const text = target?.dataset.uiTitle?.trim();
  if (!text) return;
  clearTimeout(tooltipTimer);
  tooltipTarget = target;
  tooltipTimer = setTimeout(() => {
    if (tooltipTarget !== target || !target.isConnected) return;
    const tooltip = $("#uiTooltip");
    tooltip.textContent = text;
    tooltip.classList.add("visible");
    positionUiTooltip(target);
  }, 45);
}
function hideUiTooltip() {
  clearTimeout(tooltipTimer);
  tooltipTarget = null;
  $("#uiTooltip")?.classList.remove("visible");
}
prepareTooltipElement(document.body);
new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === "attributes") prepareTooltipElement(mutation.target);
    mutation.addedNodes.forEach(prepareTooltipElement);
  });
}).observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ["title"] });
document.addEventListener("pointerover", (event) => {
  const target = event.target.closest?.("[data-ui-title]");
  if (target) showUiTooltip(target);
});
document.addEventListener("pointerout", (event) => {
  if (tooltipTarget && !tooltipTarget.contains(event.relatedTarget)) hideUiTooltip();
});
document.addEventListener("focusin", (event) => {
  const target = event.target.closest?.("[data-ui-title]");
  if (target) showUiTooltip(target);
});
document.addEventListener("focusout", hideUiTooltip);
window.addEventListener("scroll", hideUiTooltip, true);
window.addEventListener("resize", hideUiTooltip);
let scrollbarAnimationFrame = 0;
let scrollbarBandPosition = -25;
let scrollbarFlowDirection = 1;
document.addEventListener(
  "scroll",
  (event) => {
    const target =
      event.target === document ? document.scrollingElement : event.target;
    if (!target || typeof target.scrollTop !== "number") return;
    const scrollRange = target.scrollHeight - target.clientHeight;
    if (scrollRange <= 0) return;
    const scrollProgress = target.scrollTop / scrollRange;
    scrollbarFlowDirection = scrollProgress >= 0.5 ? -1 : 1;
  },
  true,
);
function animateScrollbarGradient(timestamp) {
  if (!scrollbarAnimationFrame) scrollbarAnimationFrame = timestamp;
  const elapsed = Math.min(50, timestamp - scrollbarAnimationFrame);
  scrollbarAnimationFrame = timestamp;
  scrollbarBandPosition +=
    scrollbarFlowDirection * (elapsed / 4200) * 150;
  if (scrollbarBandPosition > 125) scrollbarBandPosition = -25;
  if (scrollbarBandPosition < -25) scrollbarBandPosition = 125;
  document.documentElement.style.setProperty(
    "--scrollbar-band",
    `${scrollbarBandPosition.toFixed(2)}%`,
  );
  requestAnimationFrame(animateScrollbarGradient);
}
requestAnimationFrame(animateScrollbarGradient);
// 2. 편집기 상태: 화면에 그릴 데이터와 현재 선택·확대 상태를 한곳에서 관리합니다.
const canvas = $("#canvas"),
  shell = $("#shell"),
  viewport = $("#canvasViewport"),
  workspace = $("#workspace"),
  toast = $("#toast");

const sidebarResizer = $("#sidebarResizer");
let sidebarDragOffset = 0;
function setSidebarWidth(width) {
  const max = Math.max(260, Math.min(460, window.innerWidth - 520));
  const next = Math.max(240, Math.min(max, Number(width) || 320));
  workspace.style.setProperty("--sidebar-width", `${next}px`);
  sidebarResizer?.setAttribute("aria-valuenow", String(next));
}
setSidebarWidth(320);
if (sidebarResizer) {
  sidebarResizer.setAttribute("aria-valuemin", "240");
  sidebarResizer.setAttribute("aria-valuemax", "460");
  sidebarResizer.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    const currentWidth = parseInt(
      getComputedStyle(workspace).getPropertyValue("--sidebar-width"),
      10,
    );
    sidebarDragOffset = event.clientX - currentWidth;
    sidebarResizer.setPointerCapture(event.pointerId);
    document.body.classList.add("resizing-sidebar");
  });
  sidebarResizer.addEventListener("pointermove", (event) => {
    if (!sidebarResizer.hasPointerCapture(event.pointerId)) return;
    setSidebarWidth(event.clientX - sidebarDragOffset);
  });
  sidebarResizer.addEventListener("pointerup", (event) => {
    if (!sidebarResizer.hasPointerCapture(event.pointerId)) return;
    sidebarResizer.releasePointerCapture(event.pointerId);
    document.body.classList.remove("resizing-sidebar");
    setSidebarWidth(event.clientX - sidebarDragOffset);
    fitCanvas();
  });
  sidebarResizer.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
    event.preventDefault();
    const current = parseInt(
      getComputedStyle(workspace).getPropertyValue("--sidebar-width"),
      10,
    );
    setSidebarWidth(current + (event.key === "ArrowRight" ? 16 : -16));
    fitCanvas();
  });
}
let nodes = [],
  selected = null,
  selectedPart = null,
  dragging = null,
  history = [],
  historyIndex = -1,
  currentTab = "html",
  preview = false;
let pages = [];
let currentPageId = null;
let selectedIds = new Set();
let focusedNodeId = null;
const autoFocusLabels = ["검색 아이콘", "모바일 햄버거 메뉴"];
let canvasSize = { w: 1120, h: 720 };
let view = { zoom: 1, x: 60, y: 45 },
  spacePressed = false,
  panning = null,
  snapToGrid = true;
let activeGuides = { x: null, y: null };
const deviceSizes = {
  desktop: { w: 1920, h: 1080 },
  laptop: { w: 1024, h: 768 },
  tablet: { w: 768, h: 1024 },
  mobile: { w: 390, h: 844 },
};
const responsiveKeys = [
  "x",
  "y",
  "w",
  "h",
  "fontSize",
  "fontWeight",
  "lineHeight",
  "textAlign",
  "textX",
  "textY",
  "padding",
  "radius",
  "rotate",
  "borderWidth",
];
let currentBreakpoint = "desktop";
const projectStorageKey = "code-lab-project-v1";
const projectArchiveKey = "code-lab-saved-projects-v1";
const guestProjectArchiveKey = "code-lab-guest-saved-projects-v1";
let activeSavedProjectId = null;
const tutorialSeenKey = "code-lab-tutorial-auto-hide-v2";
const appAuthStateKey = "codelab_auth_user";
const signupReturnKey = "codelab_signup_return";
let isMember = Boolean(localStorage.getItem(appAuthStateKey));
const currentArchiveKey = () =>
  isMember ? projectArchiveKey : guestProjectArchiveKey;

function importGuestProjectsForMember() {
  if (!isMember) return;
  try {
    const memberProjects = JSON.parse(localStorage.getItem(projectArchiveKey) || "[]");
    const guestProjects = JSON.parse(localStorage.getItem(guestProjectArchiveKey) || "[]");
    const knownIds = new Set(memberProjects.map((project) => project.id));
    const merged = memberProjects.concat(
      guestProjects.filter((project) => !knownIds.has(project.id)),
    );
    localStorage.setItem(projectArchiveKey, JSON.stringify(merged.slice(0, 20)));
  } catch {
    // 손상된 저장함이 있어도 현재 편집 중인 프로젝트 복원은 계속 진행합니다.
  }
}
importGuestProjectsForMember();
function savedProjectCount() {
  try {
    return JSON.parse(localStorage.getItem(currentArchiveKey()) || "[]").length;
  } catch {
    return 0;
  }
}
function isAutomaticProjectName(name) {
  return /^(?:나의 프로젝트|새\s*프로젝트(?:\s*\d+)?)$/.test(String(name || "").trim());
}
function nextAutomaticProjectName(archive = []) {
  const highest = archive.reduce((max, item) => {
    const match = String(item?.name || "").trim().match(/^새\s*프로젝트(?:\s*(\d+))?$/);
    if (!match) return max;
    return Math.max(max, Number(match[1] || 1));
  }, 0);
  return highest ? `새 프로젝트 ${highest + 1}` : "새 프로젝트";
}
function compactAutomaticProjectNames(archive = []) {
  const currentName = $("#projectName")?.textContent.trim();
  const automaticItems = archive
    .filter((item) => isAutomaticProjectName(item.name))
    .sort((a, b) => (a.savedAt || 0) - (b.savedAt || 0));
  const currentItem = isAutomaticProjectName(currentName)
    ? automaticItems.find((item) => item.id === activeSavedProjectId)
    : null;
  automaticItems.forEach((item, index) => {
    item.name = index === 0 ? "새 프로젝트" : `새 프로젝트 ${index + 1}`;
  });
  if (currentItem && $("#projectName")) {
    $("#projectName").textContent = currentItem.name;
    scheduleAutoSave();
  }
  return archive;
}
function updateSavedCount() {
  const count = savedProjectCount();
  $("#savedProjectsBtn").textContent = isMember
    ? `저장함 (${count})`
    : `저장함 (${count}/1)`;
}
let autoSaveTimer = null;

// 로그인 상태에 따라 회원 전용 버튼의 문구, 잠금 표시, 사용 가능 여부를 한 번에 맞춥니다.
function applyAuthState() {
  const account = $("#account");
  const button = $("#accountButton");
  $("#accountStatus").textContent = isMember ? "회원" : "비회원";
  $("#accountDescription").textContent = isMember
    ? "모든 기능을 사용할 수 있어요."
    : "가입하면 모든 기능이 열려요!";
  $("#authToggleButton").textContent = isMember ? "로그아웃" : "로그인";
  $("#authToggleButton").classList.toggle("logout-button", isMember);
  $("#signupLinkButton").hidden = isMember;
  button.textContent = isMember ? "M" : "G";
  button.title = isMember ? "회원 계정 메뉴" : "비회원 계정 메뉴";
  $("#previewBtn").classList.toggle("feature-locked", !isMember);
  $("#previewBtn").setAttribute("aria-disabled", String(!isMember));
  $("#previewBtn").textContent = isMember ? "미리보기" : "🔒 미리보기 · 회원 전용";
  $$('.component[data-group="고급효과"]').forEach((component) => {
    component.classList.toggle("member-locked", !isMember);
    component.draggable = isMember;
    component.querySelector("span").textContent = `${isMember ? "" : "🔒 "}${component.dataset.label}`;
  });
  $("#addPageTab").classList.toggle("feature-locked", !isMember);
  $("#addPageTab").setAttribute("aria-disabled", String(!isMember));
  $("#addPageTab").textContent = isMember ? "＋" : "🔒";
  $("#addPageTab").title = isMember
    ? "새 페이지 추가"
    : "회원 전용 기능입니다. 비회원은 페이지 1개만 사용할 수 있어요";
  updateSavedCount();
  $$(".live [data-device], .canvas-presets button").forEach((deviceButton) => {
    const device =
      deviceButton.dataset.device ||
      ({
        "1920,1080": "desktop",
        "1024,768": "laptop",
        "768,1024": "tablet",
        "390,844": "mobile",
      })[deviceButton.dataset.size];
    const locked = !isMember && device !== "desktop";
    deviceButton.dataset.baseLabel ||= deviceButton.textContent.trim();
    deviceButton.textContent = locked
      ? `🔒 ${deviceButton.dataset.baseLabel}`
      : deviceButton.dataset.baseLabel;
    deviceButton.disabled = false;
    deviceButton.classList.toggle("member-locked", locked);
    deviceButton.setAttribute("aria-disabled", String(locked));
    deviceButton.title = locked
      ? "회원 전용 기능입니다. 비회원은 데스크탑만 사용할 수 있어요"
      : "";
  });
  account.classList.remove("open");
  button.setAttribute("aria-expanded", "false");
}

$("#accountButton").onclick = (event) => {
  event.stopPropagation();
  const account = $("#account");
  const open = account.classList.toggle("open");
  event.currentTarget.setAttribute("aria-expanded", String(open));
};
$("#authToggleButton").onclick = () => {
  if (!isMember) {
    leaveBuilderFor("/login?from=%2Fbuilder");
    return;
  }
  localStorage.removeItem(appAuthStateKey);
  isMember = false;
  applyAuthState();
  if (currentBreakpoint !== "desktop") switchBreakpoint("desktop");
  showToast("로그아웃되어 비회원 모드로 전환했어요");
};
document.addEventListener("click", (event) => {
  if (event.target.closest("#account")) return;
  $("#account").classList.remove("open");
  $("#accountButton").setAttribute("aria-expanded", "false");
});

function openSignup() {
  $("#account").classList.remove("open");
  $("#signupModal").classList.add("open");
}
function leaveBuilderFor(path) {
  saveProject(false, false);
  localStorage.setItem(signupReturnKey, "/builder");
  window.top.location.href = path;
}
$("#signupLinkButton").onclick = () => leaveBuilderFor("/signup?from=%2Fbuilder");
$("#closeSignup").onclick = () => $("#signupModal").classList.remove("open");
$("#signupModal").onclick = (event) => {
  if (event.target.id === "signupModal") event.currentTarget.classList.remove("open");
};
$("#completeSignup").onclick = () => {
  leaveBuilderFor("/signup?from=%2Fbuilder");
};
$("#closeStorageLimit").onclick = () => {
  $("#storageLimitModal").classList.remove("open");
  renderSavedProjects();
  $("#savedProjectsModal").classList.add("open");
};
$("#signupFromStorageLimit").onclick = () => {
  $("#storageLimitModal").classList.remove("open");
  openSignup();
};
$("#storageLimitModal").onclick = (event) => {
  if (event.target.id === "storageLimitModal")
    event.currentTarget.classList.remove("open");
};
let availableFontFamilies = [
  "Arial",
  "Arial Black",
  "Calibri",
  "Cambria",
  "Comic Sans MS",
  "Consolas",
  "Courier New",
  "Georgia",
  "Impact",
  "Malgun Gothic",
  "Microsoft JhengHei",
  "Microsoft YaHei",
  "Noto Sans KR",
  "Pretendard",
  "Segoe UI",
  "Tahoma",
  "Times New Roman",
  "Trebuchet MS",
  "Verdana",
];
const fontPickerMarkup = (id, value = "", allowInherit = false) => `
  <div class="font-picker">
    <input id="${id}" class="font-search" type="search"
      value="${escapeHtml(value === "inherit" ? "" : value)}"
      placeholder="${allowInherit ? "기본 글꼴 또는 글꼴 이름 검색" : "글꼴 이름 검색"}"
      autocomplete="off">
    <div class="font-results" role="listbox"></div>
    <button type="button" class="load-local-fonts">내 컴퓨터 글꼴 불러오기</button>
    <small class="field-help">이름을 입력하면 설치된 글꼴을 빠르게 찾을 수 있어요.</small>
  </div>`;
document.addEventListener("pointerdown", (event) => {
  $$(".font-picker.open").forEach((picker) => {
    if (!picker.contains(event.target)) picker.classList.remove("open");
  });
});
const fontMoodFor = (font) => {
  const name = font.toLocaleLowerCase("en");
  if (
    /(mono|code|console|courier|consolas|d2coding|fixed|terminal)/.test(name)
  )
    return "coding";
  if (/(serif|myeongjo|명조|batang|바탕|times|georgia|cambria)/.test(name))
    return "serif";
  if (/(round|rounded|soft|cute|comic|jua|주아|dongle|도트|손글씨)/.test(name))
    return "soft";
  if (/(black|impact|display|poster|brush|script|hand|필기|캘리)/.test(name))
    return "display";
  return "clean";
};
const fontMoodLabels = {
  all: "전체",
  clean: "깔끔한",
  soft: "부드러운",
  serif: "명조",
  display: "개성 있는",
  coding: "코딩",
};
const captureResponsive = (n) =>
  Object.fromEntries(responsiveKeys.map((k) => [k, n[k]]));
function saveCurrentBreakpoint() {
  nodes.forEach((n) => {
    if (
      ["메인 메뉴", "모바일 햄버거 메뉴"].includes(n.label) &&
      !String(n.html || "").includes("data-menu-toggle")
    )
      n.html = markupFor(n.label, n.type);
    n.views = n.views || {};
    n.views[currentBreakpoint] = captureResponsive(n);
  });
}
function loadBreakpoint(name) {
  saveCurrentBreakpoint();
  const from = deviceSizes[currentBreakpoint],
    to = deviceSizes[name];
  currentBreakpoint = name;
  nodes.forEach((n) => {
    n.views = n.views || {};
    if (!n.views[name]) {
      const source = n.views.desktop || captureResponsive(n),
        ratio = to.w / (deviceSizes.desktop.w || from.w);
      n.views[name] = {
        ...source,
        x: Math.round(source.x * ratio),
        y: Math.round(source.y * ratio),
        w: Math.min(to.w, Math.round(source.w * ratio)),
        fontSize: Math.max(8, Math.round(source.fontSize * ratio)),
      };
    }
    Object.assign(n, n.views[name]);
  });
}
const templates = {
  button: {
    name: "버튼 (button)",
    html: "<button>시작하기</button>",
    className: "node-button",
    w: 120,
    h: 44,
  },
  text: {
    name: "텍스트 (text)",
    html: "<div>새로운 아이디어</div>",
    className: "node-text",
    w: 270,
    h: 48,
  },
  image: {
    name: "이미지 (image)",
    html: "<div>IMAGE</div>",
    className: "node-image",
    w: 230,
    h: 145,
  },
  icon: {
    name: "아이콘 (icon)",
    html: "<div>✦</div>",
    className: "node-icon",
    w: 52,
    h: 52,
  },
  card: {
    name: "카드 (card)",
    html: "<div><b>빠르게 완성하세요</b><p>드래그 앤 드롭으로 누구나 쉽게 웹사이트를 만들 수 있어요.</p></div>",
    className: "node-card",
    w: 260,
    h: 150,
  },
  input: {
    name: "입력창 (input)",
    html: '<input placeholder="내용을 입력하세요">',
    className: "",
    w: 240,
    h: 42,
  },
  header: {
    name: "헤더 (header)",
    html: "<div><b>&lt;/&gt; CODE LAB</b><nav><span>Home</span><span>About</span><span>Contact</span></nav></div>",
    className: "node-header",
    w: 700,
    h: 66,
  },
  section: {
    name: "섹션 (section)",
    html: "<section><h3>아이디어를 현실로 만드는 공간</h3><p>당신의 첫 번째 섹션을 자유롭게 꾸며보세요.</p></section>",
    className: "node-section",
    w: 700,
    h: 190,
  },
  divider: {
    name: "구분선 (divider)",
    html: "<hr>",
    className: "",
    w: 500,
    h: 10,
  },
};
const componentCatalog = {
  헤더: [
    "헤더",
    "로고",
    "사이트명",
    "메인 메뉴",
    "로그인 / 회원가입",
    "검색창",
    "검색 아이콘",
    "언어 선택",
    "장바구니",
    "마이페이지",
    "모바일 햄버거 메뉴",
    "SNS 링크",
    "상단 공지사항",
    "시작하기 버튼",
    "다운로드 버튼",
    "문의하기 버튼",
  ],
  배너: [
    "배너", "텍스트 배너", "단색 배너", "그라데이션 배너",
    "배경 이미지", "이미지 + 텍스트", "오버레이 배너",
    "버튼 1개", "버튼 2개", "다운로드 배너",
    "중앙형", "좌우 분할형", "이미지 우측형",
    "띠 배너", "이벤트 배너", "공지 배너",
    "기본 슬라이드", "자동 슬라이드", "카드 슬라이드",
    "페이드인", "호버 효과", "스크롤 효과",
  ],
  콘텐츠: [
    "콘텐츠", "제목 + 본문", "이미지 + 텍스트", "기능 소개", "이용 순서",
    "서비스 카드", "상품 카드", "게시글 카드", "사용자 후기",
    "이미지 갤러리", "영상", "지도", "FAQ", "문의 폼", "뉴스레터",
  ],
  푸터: [
    "푸터", "푸터 로고", "회사 소개", "저작권",
    "푸터 메뉴", "사이트맵", "푸터 SNS", "연락처",
    "푸터 뉴스레터", "이용약관", "개인정보처리방침", "맨 위로 버튼",
  ],
  고급효과: [],
};
function kindFor(label, group) {
  if (group === "고급효과") return "card";
  if (label === "헤더") return "header";
  if (label === "배너" || label === "콘텐츠") return "section";
  if (label === "푸터") return "footer";
  if (group === "배너") return "section";
  if (/이미지|로고|캐릭터|갤러리|슬라이드/.test(label)) return "image";
  if (/영상/.test(label)) return "video";
  if (/지도/.test(label)) return "map";
  if (/검색창|입력창|날짜 선택|가격 범위|뉴스레터/.test(label)) return "input";
  if (/버튼|장바구니|마이페이지|햄버거|아이콘/.test(label))
    return "button";
  if (/카드/.test(label)) return "card";
  if (/폼/.test(label)) return "form";
  if (
    /메뉴|사이트맵|링크|선택|정렬|체크박스|페이지네이션|인디케이터|태그/.test(
      label,
    )
  )
    return "list";
  if (group === "헤더") return "header";
  if (group === "푸터") return "footer";
  if (
    /소개|기능|방법|장점|콘텐츠|정보|순서|후기|FAQ|공지|뉴스|이벤트/.test(label)
  )
    return "section";
  return "text";
}
Object.assign(templates, {
  video: {
    name: "영상",
    html: '<div class="media-placeholder">▶<small>VIDEO</small></div>',
    className: "node-media",
    w: 420,
    h: 236,
  },
  map: {
    name: "지도",
    html: '<div class="media-placeholder">⌖<small>MAP</small></div>',
    className: "node-media",
    w: 420,
    h: 240,
  },
  form: {
    name: "문의 폼",
    html: '<div class="mini-form"><b>문의하기</b><input placeholder="이름"><input placeholder="이메일"><textarea placeholder="문의 내용"></textarea><button>보내기</button></div>',
    className: "node-form",
    w: 360,
    h: 285,
  },
  list: {
    name: "목록",
    html: '<div class="node-list"><span>메뉴 1</span><span>메뉴 2</span><span>메뉴 3</span></div>',
    className: "",
    w: 300,
    h: 48,
  },
  footer: {
    name: "푸터",
    html: "<footer><b>CODE LAB</b><p>더 나은 경험을 만드는 서비스입니다.</p><small>© 2026 CODE LAB</small></footer>",
    className: "node-footer",
    w: 700,
    h: 150,
  },
});
const headerCategories = [
  {
    name: "Logo",
    description: "브랜드 아이덴티티",
    items: ["로고", "사이트명"],
  },
  {
    name: "Navigation (GNB)",
    description: "사이트 이동 메뉴",
    items: ["메인 메뉴", "모바일 햄버거 메뉴", "SNS 링크"],
  },
  {
    name: "Search",
    description: "검색 기능",
    items: ["검색창", "검색 아이콘"],
  },
  {
    name: "Utility",
    description: "사용자 기능",
    items: [
      "로그인 / 회원가입",
      "언어 선택",
      "장바구니",
      "마이페이지",
      "상단 공지사항",
    ],
  },
  {
    name: "CTA (Button)",
    description: "사용자 행동을 유도하는 강조 버튼",
    items: ["시작하기 버튼", "다운로드 버튼", "문의하기 버튼"],
  },
];
const bannerCategories = [
  { name: "Basic", description: "기본 배너", items: ["텍스트 배너", "단색 배너", "그라데이션 배너"] },
  { name: "Image", description: "이미지 중심", items: ["배경 이미지", "이미지 + 텍스트", "오버레이 배너"] },
  { name: "CTA", description: "행동 유도", items: ["버튼 1개", "버튼 2개", "다운로드 배너"] },
  { name: "Layout", description: "콘텐츠 배치", items: ["중앙형", "좌우 분할형", "이미지 우측형"] },
  { name: "Notice", description: "알림과 이벤트", items: ["띠 배너", "이벤트 배너", "공지 배너"] },
  { name: "Slide", description: "슬라이드", items: ["기본 슬라이드", "자동 슬라이드", "카드 슬라이드"] },
  { name: "Effect", description: "모션 효과", items: ["페이드인", "호버 효과", "스크롤 효과"] },
];
const contentCategories = [
  { name: "Basic", description: "본문의 기본 구조", items: ["제목 + 본문", "이미지 + 텍스트", "기능 소개", "이용 순서"] },
  { name: "Card", description: "반복해서 배치하는 카드", items: ["서비스 카드", "상품 카드", "게시글 카드", "사용자 후기"] },
  { name: "Media", description: "시각 자료", items: ["이미지 갤러리", "영상", "지도"] },
  { name: "Interactive", description: "입력과 펼침 요소", items: ["FAQ", "문의 폼", "뉴스레터"] },
];
const footerCategories = [
  { name: "Brand", description: "브랜드와 회사 정보", items: ["푸터 로고", "회사 소개", "저작권"] },
  { name: "Navigation", description: "하단 탐색 링크", items: ["푸터 메뉴", "사이트맵", "푸터 SNS"] },
  { name: "Contact", description: "연락과 구독", items: ["연락처", "푸터 뉴스레터"] },
  { name: "Policy", description: "정책과 편의 기능", items: ["이용약관", "개인정보처리방침", "맨 위로 버튼"] },
];
function catalogTile(label, group) {
  const kind = kindFor(label, group);
  const memberOnly = group === "고급효과";
  return `<div class="component${memberOnly && !isMember ? " member-locked" : ""}" draggable="${memberOnly && !isMember ? "false" : "true"}" data-type="${kind}" data-label="${label}" data-group="${group}" title="${memberOnly ? `회원 전용 · ${label}` : label}"><span>${memberOnly && !isMember ? "🔒 " : ""}${label}</span></div>`;
}

function catalogItems(group, items) {
  if (group === "고급효과")
    return `<div class="advanced-effects-panel">
      <div class="advanced-effects-intro"><strong>고급 효과 <span>🔒</span></strong><p id="catalogEffectStatus">먼저 캔버스에서 요소를 선택해 주세요.</p></div>
      <label class="catalog-effect-field"><span>효과 선택</span><select id="catalogEffect"><option value="none">없음</option><option value="fade">Fade</option><option value="slide">Slide</option><option value="zoom">Zoom</option><option value="glow">Glow</option></select></label>
      <div class="catalog-effect-row">
        <label class="catalog-effect-field"><span>강도</span><select id="catalogEffectIntensity"><option value="weak">약하게</option><option value="normal">보통</option><option value="strong">강하게</option></select></label>
        <label class="catalog-effect-field"><span>속도</span><select id="catalogEffectSpeed"><option value="slow">느리게</option><option value="normal">보통</option><option value="fast">빠르게</option></select></label>
      </div>
      <small class="effect-support-list">모든 효과는 요소 전체 Hover를 기준으로 실행됩니다.</small>
    </div>`;
  if (!["헤더", "배너", "콘텐츠", "푸터"].includes(group))
    return items.map((label) => catalogTile(label, group)).join("");
  const categories = {
    헤더: headerCategories,
    배너: bannerCategories,
    콘텐츠: contentCategories,
    푸터: footerCategories,
  }[group];
  return `${catalogTile(group, group)}
    <div class="header-subcategories">
      ${categories
        .map(
          (category) => `<section class="header-subcategory">
            <div class="subcategory-head">
              <strong>${category.name}</strong>
              <span>${category.description}</span>
            </div>
            <div class="subcategory-items">
              ${category.items
                .map((label) => catalogTile(label, group))
                .join("")}
            </div>
          </section>`,
        )
        .join("")}
    </div>`;
}

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
    "텍스트 배너": '<section class="banner-preset banner-text"><small>NEW COLLECTION</small><h2>아이디어를 더 크게 펼쳐보세요</h2><p>핵심 메시지를 간결하고 선명하게 전달합니다.</p></section>',
    "단색 배너": '<section class="banner-preset banner-solid"><div><small>CODE LAB</small><h2>한 가지 색으로 강한 인상을</h2><p>브랜드 컬러를 중심으로 완성한 배너입니다.</p></div></section>',
    "그라데이션 배너": '<section class="banner-preset banner-gradient"><div><small>CREATIVE STUDIO</small><h2>상상을 현실로 만드는 순간</h2><p>부드러운 색의 흐름으로 시선을 모아보세요.</p></div></section>',
    "배경 이미지": '<section class="banner-preset banner-image-bg"><span>EXPLORE</span><h2>새로운 장면을 만나보세요</h2></section>',
    "이미지 + 텍스트": '<section class="banner-preset banner-image-text"><div class="banner-visual">IMAGE</div><div><small>FEATURED</small><h2>이미지와 이야기를 함께</h2><p>제품과 서비스를 한눈에 소개합니다.</p></div></section>',
    "오버레이 배너": '<section class="banner-preset banner-overlay"><div><small>LIMITED EDITION</small><h2>특별한 순간을 위한 선택</h2><p>오버레이로 텍스트 가독성을 높였습니다.</p></div></section>',
    "버튼 1개": '<section class="banner-preset banner-cta"><small>START TODAY</small><h2>지금 바로 시작해 보세요</h2><p>누구나 쉽고 빠르게 만들 수 있습니다.</p><div class="banner-buttons"><button>시작하기</button></div></section>',
    "버튼 2개": '<section class="banner-preset banner-cta"><small>BUILD BETTER</small><h2>당신의 다음 프로젝트</h2><p>필요한 기능을 자유롭게 조합하세요.</p><div class="banner-buttons"><button>무료로 시작</button><button class="outline">자세히 보기</button></div></section>',
    "다운로드 배너": '<section class="banner-preset banner-download"><div><small>AVAILABLE NOW</small><h2>어디서든 이어서 작업하세요</h2><p>데스크톱 앱을 지금 다운로드하세요.</p></div><button>↓ 다운로드</button></section>',
    "중앙형": '<section class="banner-preset banner-centered"><small>WELCOME</small><h2>중앙에 집중되는 메시지</h2><p>가장 중요한 콘텐츠에 시선을 모읍니다.</p><button>더 알아보기</button></section>',
    "좌우 분할형": '<section class="banner-preset banner-split"><div><small>OUR STORY</small><h2>더 나은 경험을 설계합니다</h2><p>왼쪽과 오른쪽 콘텐츠를 균형 있게 배치합니다.</p><button>프로젝트 보기</button></div><div class="banner-visual">VISUAL</div></section>',
    "이미지 우측형": '<section class="banner-preset banner-split banner-image-right"><div><small>NEW PRODUCT</small><h2>일상을 바꾸는 새로운 도구</h2><p>설명은 왼쪽에, 이미지는 오른쪽에 배치합니다.</p><button>살펴보기</button></div><div class="banner-visual">IMAGE</div></section>',
    "띠 배너": '<aside class="banner-preset banner-strip"><b>NEW</b><span>신규 회원에게 첫 달 30% 할인 혜택을 드립니다.</span><a href="#">확인하기 →</a></aside>',
    "이벤트 배너": '<section class="banner-preset banner-event"><div><small>SUMMER EVENT</small><h2>기간 한정 특별 혜택</h2><p>8월 31일까지 최대 50% 할인</p></div><strong>50<em>%</em></strong><button>혜택 받기</button></section>',
    "공지 배너": '<aside class="banner-preset banner-notice"><b>공지</b><div><strong>서비스 업데이트 안내</strong><span>새롭게 추가된 기능을 지금 확인해 보세요.</span></div><time>2026.08.04</time><a href="#">›</a></aside>',
    "기본 슬라이드": '<section class="banner-preset banner-slider" data-banner-slider><button class="slide-prev" aria-label="이전">‹</button><div class="banner-slides"><article class="active"><small>SLIDE 01</small><h2>첫 번째 슬라이드</h2><p>버튼을 눌러 콘텐츠를 전환할 수 있습니다.</p></article><article><small>SLIDE 02</small><h2>두 번째 이야기</h2><p>필요한 메시지를 자유롭게 담아보세요.</p></article><article><small>SLIDE 03</small><h2>마지막 슬라이드</h2><p>반응형으로 자연스럽게 표시됩니다.</p></article></div><button class="slide-next" aria-label="다음">›</button></section>',
    "자동 슬라이드": '<section class="banner-preset banner-slider banner-auto" data-banner-slider data-autoplay="true"><button class="slide-prev" aria-label="이전">‹</button><div class="banner-slides"><article class="active"><small>AUTO 01</small><h2>자동으로 흐르는 배너</h2><p>4초마다 다음 콘텐츠를 보여줍니다.</p></article><article><small>AUTO 02</small><h2>끊김 없는 메시지</h2><p>마우스를 올리면 잠시 멈춥니다.</p></article><article><small>AUTO 03</small><h2>다시 처음으로</h2><p>마지막 장면 뒤 첫 장면으로 돌아갑니다.</p></article></div><button class="slide-next" aria-label="다음">›</button></section>',
    "카드 슬라이드": '<section class="banner-preset banner-card-slider" data-card-slider><button class="slide-prev" aria-label="이전">‹</button><div class="banner-cards"><article><span>01</span><h3>Design</h3><p>감각적인 화면</p></article><article><span>02</span><h3>Build</h3><p>빠른 제작 과정</p></article><article><span>03</span><h3>Launch</h3><p>완성된 프로젝트</p></article></div><button class="slide-next" aria-label="다음">›</button></section>',
    "페이드인": '<section class="banner-preset banner-gradient effect-fade"><div><small>FADE IN</small><h2>부드럽게 나타나는 콘텐츠</h2><p>첫 진입 시 자연스러운 모션을 제공합니다.</p></div></section>',
    "호버 효과": '<section class="banner-preset banner-hover"><div><small>HOVER ME</small><h2>마우스를 올려보세요</h2><p>배너가 떠오르며 배경이 변화합니다.</p></div></section>',
    "스크롤 효과": '<section class="banner-preset banner-scroll-effect"><div><small>SCROLL REVEAL</small><h2>스크롤로 만나는 메시지</h2><p>화면에 들어오면 콘텐츠가 위로 나타납니다.</p></div></section>',
  };
  const contentMarkup = {
    "제목 + 본문": '<section class="content-block content-copy"><small>ABOUT US</small><h2>이야기를 명확하게 전달하세요</h2><p>핵심 내용을 읽기 편한 제목과 본문으로 구성한 기본 콘텐츠입니다.</p></section>',
    "이미지 + 텍스트": '<section class="content-block content-split"><div class="content-visual">IMAGE</div><div><small>OUR STORY</small><h2>이미지와 설명을 나란히</h2><p>시각 자료와 설명을 함께 보여 주어 내용을 빠르게 이해할 수 있습니다.</p><button type="button" data-demo-action="message">자세히 보기</button></div></section>',
    "기능 소개": '<section class="content-block feature-grid"><article><b>01</b><h3>빠른 제작</h3><p>원하는 요소를 골라 바로 배치합니다.</p></article><article><b>02</b><h3>쉬운 편집</h3><p>속성 패널에서 디자인을 조절합니다.</p></article><article><b>03</b><h3>코드 생성</h3><p>완성 결과를 코드로 확인합니다.</p></article></section>',
    "이용 순서": '<ol class="content-block steps"><li><b>01</b><span>요소 선택</span></li><li><b>02</b><span>디자인 편집</span></li><li><b>03</b><span>미리보기</span></li></ol>',
    "서비스 카드": '<article class="content-card"><span class="card-icon">✦</span><h3>웹 디자인 서비스</h3><p>아이디어를 실제 웹 화면으로 빠르게 완성합니다.</p><button type="button" data-demo-action="message">서비스 보기</button></article>',
    "상품 카드": '<article class="content-card product-card"><div class="card-thumb">PRODUCT</div><small>NEW</small><h3>프리미엄 상품</h3><p>상품에 대한 간단한 설명입니다.</p><b>₩29,000</b><button type="button" data-demo-action="cart">장바구니 담기</button></article>',
    "게시글 카드": '<article class="content-card post-card"><small>2026. 08. 10</small><h3>새로운 소식을 알려드립니다</h3><p>게시글의 핵심 내용을 간단하게 소개합니다.</p><button type="button" data-demo-action="message">읽어보기 →</button></article>',
    "사용자 후기": '<blockquote class="content-card review"><span>★★★★★</span><p>누구나 쉽게 화면을 만들 수 있어서 정말 편리해요.</p><footer>— CODE LAB 사용자</footer></blockquote>',
    "이미지 갤러리": '<div class="content-block gallery-grid"><button type="button" data-gallery-item="1">01</button><button type="button" data-gallery-item="2">02</button><button type="button" data-gallery-item="3">03</button><button type="button" data-gallery-item="4">04</button></div>',
    "영상": '<div class="content-block media-demo"><button type="button" data-demo-action="media" aria-pressed="false"><span>▶</span><b>소개 영상 재생</b></button></div>',
    "지도": '<div class="content-block map-demo"><span>⌖</span><div><b>CODE LAB 스튜디오</b><p>서울특별시 중구 세종대로</p><button type="button" data-demo-action="map">위치 확인</button></div></div>',
    "FAQ": '<div class="content-block faq-list"><details><summary>CODE LAB은 어떤 서비스인가요?</summary><p>코딩 없이 화면을 구성하고 결과 코드를 확인하는 비주얼 빌더입니다.</p></details><details><summary>결과를 저장할 수 있나요?</summary><p>저장 버튼을 누르면 브라우저에 프로젝트가 보관됩니다.</p></details></div>',
    "문의 폼": '<form class="content-block contact-form" data-demo-form><h3>문의하기</h3><input name="name" required placeholder="이름"><input name="email" type="email" required placeholder="이메일"><textarea name="message" required placeholder="문의 내용"></textarea><button type="submit">문의 보내기</button><small role="status"></small></form>',
    "뉴스레터": '<form class="content-block newsletter" data-demo-form><label>새 소식을 받아보세요</label><div><input name="email" type="email" required placeholder="이메일 주소"><button type="submit">구독하기</button></div><small role="status"></small></form>',
  };
  const footerMarkup = {
    "푸터 로고": '<div class="footer-brand"><b>&lt;/&gt; CODE LAB</b><span>Build your idea.</span></div>',
    "회사 소개": '<div class="footer-copy"><h3>CODE LAB</h3><p>아이디어를 누구나 쉽게 웹으로 만드는 비주얼 빌더입니다.</p></div>',
    "저작권": '<small class="copyright">© 2026 CODE LAB. All rights reserved.</small>',
    "푸터 메뉴": '<nav class="footer-links"><a href="#home">홈</a><a href="#service">서비스</a><a href="#about">소개</a><a href="#contact">문의</a></nav>',
    "사이트맵": '<nav class="footer-sitemap"><div><b>서비스</b><a href="#features">주요 기능</a><a href="#price">요금 안내</a></div><div><b>회사</b><a href="#about">회사 소개</a><a href="#jobs">채용</a></div><div><b>지원</b><a href="#help">도움말</a><a href="#contact">문의</a></div></nav>',
    "푸터 SNS": '<div class="footer-social"><button type="button" data-demo-action="social">f</button><button type="button" data-demo-action="social">◎</button><button type="button" data-demo-action="social">▶</button><button type="button" data-demo-action="social">𝕏</button></div>',
    "연락처": '<address class="footer-contact"><b>Contact</b><a href="mailto:hello@codelab.example">hello@codelab.example</a><a href="tel:0212345678">02-1234-5678</a></address>',
    "푸터 뉴스레터": '<form class="footer-newsletter" data-demo-form><label>뉴스레터 구독</label><div><input name="email" type="email" required placeholder="email@example.com"><button type="submit">구독</button></div><small role="status"></small></form>',
    "이용약관": '<button class="footer-policy" type="button" data-demo-action="policy" data-policy-title="이용약관">이용약관</button>',
    "개인정보처리방침": '<button class="footer-policy" type="button" data-demo-action="policy" data-policy-title="개인정보처리방침">개인정보처리방침</button>',
    "맨 위로 버튼": '<button class="top-button" type="button" data-demo-action="top">↑ TOP</button>',
  };
  if (bannerMarkup[L]) {
    const isSlider = ["기본 슬라이드", "자동 슬라이드", "카드 슬라이드"].includes(L);
    return isSlider
      ? bannerMarkup[L]
      : bannerMarkup[L]
          .replace(/<button(?![^>]*data-demo-action)/g, '<button type="button" data-demo-action="message"')
          .replace(/<a href="#"/g, '<a href="#" data-demo-action="message"');
  }
  if (contentMarkup[L]) return contentMarkup[L];
  if (footerMarkup[L]) return footerMarkup[L];
  if (L === "사이트명") return '<strong class="site-name">사이트 이름</strong>';
  if (L === "검색 아이콘")
    return '<button class="search-icon-button" aria-label="검색">⌕</button>';
  if (["헤더", "배너", "콘텐츠", "푸터"].includes(L))
    return `<section class="structure-placeholder structure-${type}"><span>${L}</span></section>`;
  if (/로그인/.test(L))
    return '<div class="auth-actions"><button>로그인</button><button class="filled">회원가입</button></div>';
  if (/메인 메뉴/.test(L))
    return '<nav class="real-menu"><a href="#">홈</a><div class="nav-dropdown"><button type="button" class="menu-trigger" data-menu-toggle aria-expanded="false">서비스 <i>⌄</i></button><div class="submenu"><a href="#">서비스 소개</a><a href="#">주요 기능</a><a href="#">요금 안내</a></div></div><a href="#">소개</a><a href="#">문의</a></nav>';
  if (/언어 선택/.test(L))
    return '<select class="real-select"><option>한국어</option><option>English</option><option>日本語</option></select>';
  if (/검색/.test(L))
    return '<div class="real-search"><input placeholder="검색어를 입력하세요"><button>검색</button></div>';
  if (/시작하기 버튼|다운로드 버튼|문의하기 버튼/.test(L))
    return `<button class="header-cta">${L.replace(" 버튼", "")}</button>`;
  if (/장바구니/.test(L))
    return '<button class="icon-action">🛒 <span>장바구니</span><em>0</em></button>';
  if (/마이페이지/.test(L))
    return '<button class="icon-action">👤 <span>마이페이지</span></button>';
  if (/햄버거/.test(L))
    return '<div class="mobile-menu"><button class="hamburger" type="button" data-menu-toggle aria-label="메뉴" aria-expanded="false"><i></i><i></i><i></i></button><div class="mobile-submenu"><a href="#">홈</a><a href="#">서비스</a><a href="#">소개</a><a href="#">문의</a></div></div>';
  if (/SNS/.test(L))
    return '<div class="social-links"><a href="#">f</a><a href="#">◎</a><a href="#">▶</a><a href="#">𝕏</a></div>';
  if (/공지사항/.test(L))
    return '<div class="notice-bar"><b>NOTICE</b><span>새로운 업데이트 소식을 확인해 보세요.</span><a href="#">자세히</a></div>';
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
    검색창: [320, 46],
    "검색 아이콘": [48, 48],
    "언어 선택": [190, 44],
    장바구니: [150, 44],
    마이페이지: [150, 44],
    "모바일 햄버거 메뉴": [44, 44],
    "SNS 링크": [190, 48],
    "상단 공지사항": [720, 46],
    "시작하기 버튼": [140, 44],
    "다운로드 버튼": [140, 44],
    "문의하기 버튼": [140, 44],
    "띠 배너": [1100, 72],
    "공지 배너": [1100, 92],
    "이벤트 배너": [1100, 260],
    "제목 + 본문": [760, 230], "이미지 + 텍스트": [900, 340], "기능 소개": [900, 260], "이용 순서": [780, 150],
    "서비스 카드": [300, 300], "상품 카드": [300, 390], "게시글 카드": [320, 290], "사용자 후기": [420, 220],
    "이미지 갤러리": [720, 360], 영상: [620, 350], 지도: [620, 280], FAQ: [680, 260], "문의 폼": [420, 430], 뉴스레터: [560, 150],
    "푸터 로고": [260, 90], "회사 소개": [360, 130], 저작권: [360, 44], "푸터 메뉴": [460, 52], 사이트맵: [620, 170],
    "푸터 SNS": [220, 52], 연락처: [300, 110], "푸터 뉴스레터": [420, 120], 이용약관: [120, 42], 개인정보처리방침: [180, 42], "맨 위로 버튼": [90, 46],
  };
  if (componentCatalog.배너.includes(label) && label !== "배너")
    return { w: sizes[label]?.[0] || 1100, h: sizes[label]?.[1] || 320 };
  const [w, h] = sizes[label] || [fallback.w, fallback.h];
  return { w, h };
}

function codeClassFor(label) {
  const bannerNames = {
    "텍스트 배너": "text-banner", "단색 배너": "solid-banner", "그라데이션 배너": "gradient-banner",
    "배경 이미지": "background-image-banner", "이미지 + 텍스트": "image-text-banner", "오버레이 배너": "overlay-banner",
    "버튼 1개": "single-cta-banner", "버튼 2개": "double-cta-banner", "다운로드 배너": "download-banner",
    "중앙형": "centered-banner", "좌우 분할형": "split-banner", "이미지 우측형": "image-right-banner",
    "띠 배너": "strip-banner", "이벤트 배너": "event-banner", "공지 배너": "notice-banner",
    "기본 슬라이드": "basic-slider", "자동 슬라이드": "auto-slider", "카드 슬라이드": "card-slider",
    "페이드인": "fade-banner", "호버 효과": "hover-banner", "스크롤 효과": "scroll-banner",
  };
  if (bannerNames[label]) return bannerNames[label];
  const names = {
    헤더: "header",
    로고: "logo",
    사이트명: "site-title",
    "메인 메뉴": "main-menu",
    "로그인 / 회원가입": "auth-buttons",
    검색창: "search-box",
    "검색 아이콘": "search-button",
    "언어 선택": "language-select",
    장바구니: "cart-button",
    마이페이지: "mypage-button",
    "모바일 햄버거 메뉴": "mobile-menu-button",
    "SNS 링크": "sns-links",
    "상단 공지사항": "top-notice",
    "시작하기 버튼": "start-button",
    "다운로드 버튼": "download-button",
    "문의하기 버튼": "contact-button",
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

// 4. 캔버스 렌더링: 상태(nodes)를 DOM으로 바꾸고 이동·선택 이벤트를 연결합니다.
// 새 노드의 기본값과 반응형 값을 만들고, 알맞은 부모 영역 안에 넣습니다.
// 영역 노드만 생성 순간에 문서 순서로 정렬되며 이후에는 자유롭게 편집할 수 있습니다.
function addNode(type, x, y, save = true, label = "", centerOnAdd = false) {
  const t = templates[type],
    id = "el-" + Date.now() + "-" + Math.floor(Math.random() * 99);
  const buttonColors = ["#5b46e8", "#087f8c", "#e05263", "#d97706", "#2563eb"];
  const defaultIcons = {
    "검색 아이콘": "⌕",
  };
  const isStructure = ["헤더", "배너", "콘텐츠", "푸터"].includes(label);
  const isHeaderItem = componentCatalog.헤더.includes(label);
  const isBannerItem = componentCatalog.배너.includes(label);
  const isContentItem = componentCatalog.콘텐츠.includes(label);
  const isFooterItem = componentCatalog.푸터.includes(label);
  const isCtaButton = [
    "시작하기 버튼",
    "다운로드 버튼",
    "문의하기 버튼",
  ].includes(label);
  const isUtilityButton = [
    "검색 아이콘",
    "장바구니",
    "마이페이지",
    "모바일 햄버거 메뉴",
  ].includes(label);
  const isHeaderChild = isHeaderItem && label !== "헤더";
  const isBannerChild = isBannerItem && label !== "배너";
  const isContentChild = isContentItem && label !== "콘텐츠";
  const isFooterChild = isFooterItem && label !== "푸터";
  const headerArea = nodes.find((node) => node.label === "헤더");
  const bannerArea = nodes.find((node) => node.label === "배너");
  const contentArea = nodes.find((node) => node.label === "콘텐츠");
  const footerArea = nodes.find((node) => node.label === "푸터");
  if (isHeaderChild && !headerArea) {
    showToast("헤더 영역을 먼저 추가해 주세요");
    return null;
  }
  if (isBannerChild && !bannerArea) {
    showToast("배너 영역을 먼저 추가해 주세요");
    return null;
  }
  if (isContentChild && !contentArea) {
    showToast("콘텐츠 영역을 먼저 추가해 주세요");
    return null;
  }
  if (isFooterChild && !footerArea) {
    showToast("푸터 영역을 먼저 추가해 주세요");
    return null;
  }
  const structureHeight = { 헤더: 88, 배너: 460, 콘텐츠: 620, 푸터: 240 };
  const defaultSize = defaultSizeFor(label, t);
  if (isHeaderChild) {
    const childCount = nodes.filter(
      (node) => node.parentId === headerArea.id,
    ).length;
    x = Math.max(
      headerArea.x + 16,
      Math.min(
        headerArea.x + headerArea.w - defaultSize.w - 16,
        x || headerArea.x + 20 + childCount * 28,
      ),
    );
    y =
      headerArea.y +
      Math.max(0, Math.round((headerArea.h - defaultSize.h) / 2));
  }
  if (isBannerChild) {
    x = bannerArea.x + Math.max(24, Math.round((bannerArea.w - defaultSize.w) / 2));
    y = bannerArea.y + Math.max(24, Math.round((bannerArea.h - defaultSize.h) / 2));
  }
  const freeformParent = isContentChild
    ? contentArea
    : isFooterChild
      ? footerArea
      : null;
  if (freeformParent) {
    const siblings = nodes.filter((node) => node.parentId === freeformParent.id);
    const column = siblings.length % 2;
    const row = Math.floor(siblings.length / 2);
    x = freeformParent.x + 28 + column * Math.max(320, Math.floor((freeformParent.w - 72) / 2));
    y = freeformParent.y + 28 + row * 190;
  }
  const data = {
    id,
    codeClass: codeClassFor(label),
    type,
    label: label || t.name,
    html: markupFor(label || t.name, type),
    parts: {},
    parentId: isHeaderChild ? headerArea.id : isBannerChild ? bannerArea.id : freeformParent?.id || null,
    fluidWidth: isStructure,
    x: isStructure ? 0 : Math.max(8, x),
    y: isStructure
      ? nodes.length
        ? Math.max(...nodes.map((v) => v.y + v.h))
        : 0
      : Math.max(8, y),
    w: isStructure ? canvasSize.w : defaultSize.w,
    h: isStructure ? structureHeight[label] : defaultSize.h,
    color:
      type === "button" && !isUtilityButton ? "#ffffff" : "#252836",
    bg:
      type === "button" && (isCtaButton || !isHeaderItem)
          ? buttonColors[Math.floor(Math.random() * buttonColors.length)]
        : isStructure || isHeaderItem
          ? "#ffffff"
          : type === "section"
              ? "#f5f2ff"
              : "transparent",
    radius:
      type === "button" ? 9 : type === "card" || type === "section" ? 14 : 0,
    content: defaultIcons[label] || (type === "icon" ? "✦" : ""),
    fontSize: type === "text" ? 30 : 16,
    fontWeight: type === "text" ? 800 : 600,
    fontFamily: "inherit",
    lineHeight: 1.5,
    textAlign: "left",
    textX: 0,
    textY: 0,
    padding: 0,
    opacity: 100,
    rotate: 0,
    borderWidth: 0,
    borderColor: "#d9dbe5",
    borderStyle: "solid",
    shadow: "none",
    effect: "none",
    effectIntensity: "normal",
    effectSpeed: "normal",
    z: isStructure
      ? 1
      : Math.max(1, ...nodes.map((node) => node.z || 1)) + 1,
    imageSrc: "",
    objectFit: label === "로고" ? "contain" : "cover",
    imagePosition: "center",
    logoEditMode: label === "로고" ? "image" : "",
    logoLayout: label === "로고" ? "combined" : "",
    logoImageScale: label === "로고" ? 1.35 : 1,
    languages:
      label === "언어 선택" ? ["한국어", "English", "日本語"] : undefined,
    selectedLanguage: label === "언어 선택" ? "한국어" : "",
  };
  if (centerOnAdd && !isStructure) {
    const parent = isHeaderChild ? headerArea : isBannerChild ? bannerArea : freeformParent;
    const areaX = parent?.x || 0;
    const areaY = parent?.y || 0;
    const areaW = parent?.w || canvasSize.w;
    const areaH = parent?.h || canvasSize.h;
    data.x = Math.max(areaX, Math.round(areaX + (areaW - data.w) / 2));
    data.y = Math.max(areaY, Math.round(areaY + (areaH - data.h) / 2));
  }
  data.views = {};
  Object.keys(deviceSizes).forEach((name) => {
    const ratio = deviceSizes[name].w / canvasSize.w;
    data.views[name] = {
      ...captureResponsive(data),
      x: data.fluidWidth ? 0 : Math.round(data.x * ratio),
      y: Math.round(data.y * ratio),
      w: data.fluidWidth
        ? deviceSizes[name].w
        : Math.min(deviceSizes[name].w, data.w),
      fontSize: data.fontSize,
    };
  });
  data.views[currentBreakpoint] = captureResponsive(data);
  nodes.push(data);
  // 자동 순서 배치는 영역을 새로 만드는 순간에만 적용합니다.
  if (isStructure) normalizeAreaLayout();
  else containNodeInParent(data);
  nodes.forEach((node) => {
    node.views = node.views || {};
    node.views[currentBreakpoint] = captureResponsive(node);
  });
  render();
  selectNode(id);
  if (autoFocusLabels.includes(data.label))
    setTimeout(() => focusSmallNode(id), 420);
  if (save) commit();
  return data;
}
// nodes 배열이 편집기의 실제 데이터이며, render는 그 데이터를 캔버스 DOM으로 표현합니다.
// 이 함수에서는 저장하거나 순서를 강제로 바꾸지 않아 반복 호출해도 사용자 편집값이 유지됩니다.
function render() {
  nodes.forEach(containNodeInParent);
  syncCanvasFrame();
  canvas.innerHTML = "";
  canvas.classList.toggle("empty", !nodes.length);
  refreshAreaBuilders();
  nodes.forEach((n) => {
    if (
      ["메인 메뉴", "모바일 햄버거 메뉴"].includes(n.label) &&
      !String(n.html || "").includes("data-menu-toggle")
    )
      n.html = markupFor(n.label, n.type);
    const utilityLabels = [
      "검색 아이콘",
      "장바구니",
      "마이페이지",
      "모바일 햄버거 메뉴",
    ];
    if (utilityLabels.includes(n.label) && n.color === "#ffffff") {
      n.color = "#252836";
      n.bg = "#ffffff";
    }
    if (n.label === "상단 공지사항" && n.bg === "#111522") {
      n.bg = "#ffffff";
      n.color = "#252836";
    }
    const legacySizeUpgrades = {
      사이트명: { from: [180, 44], to: [200, 48] },
      "메인 메뉴": { from: [420, 52], to: [460, 52] },
      "로그인 / 회원가입": { from: [124, 40], to: [190, 44] },
      검색창: { from: [300, 44], to: [320, 46] },
      "검색 아이콘": { from: [44, 44], to: [48, 48] },
      "언어 선택": { from: [150, 44], to: [190, 44] },
      장바구니: { from: [124, 40], to: [150, 44] },
      마이페이지: { from: [132, 40], to: [150, 44] },
      "모바일 햄버거 메뉴": { from: [36, 36], to: [44, 44] },
      "SNS 링크": { from: [168, 44], to: [190, 48] },
      "상단 공지사항": { from: [640, 44], to: [720, 46] },
      "시작하기 버튼": { from: [120, 42], to: [140, 44] },
      "다운로드 버튼": { from: [120, 42], to: [140, 44] },
      "문의하기 버튼": { from: [120, 42], to: [140, 44] },
    };
    const upgrade = legacySizeUpgrades[n.label];
    const isOlderLanguageSize =
      n.label === "언어 선택" &&
      ((n.w === 130 && n.h === 40) || (n.w === 150 && n.h === 44));
    if (
      upgrade &&
      ((n.w === upgrade.from[0] && n.h === upgrade.from[1]) ||
        isOlderLanguageSize)
    ) {
      [n.w, n.h] = upgrade.to;
      if (n.views?.[currentBreakpoint]) {
        n.views[currentBreakpoint].w = n.w;
        n.views[currentBreakpoint].h = n.h;
      }
    }
    const t = templates[n.type],
      el = document.createElement("div");
    el.className =
      "node " +
      t.className +
      (n.label === "로고" ? " node-logo" : "") +
      (n.label === "언어 선택" ? " node-language" : "") +
      (n.menuOpen ? " menu-open" : "") +
      (n.effect && n.effect !== "none" ? ` advanced-effect advanced-${n.effect}` : "") +
      (selected === n.id || selectedIds.has(n.id) ? " selected" : "");
    el.dataset.id = n.id;
    el.dataset.name = n.label || t.name;
    el.dataset.effectIntensity = n.effectIntensity || "normal";
    el.dataset.effectSpeed = n.effectSpeed || "normal";
    el.style.cssText = `left:${n.x}px;top:${n.y}px;width:${n.w}px;height:${n.h}px;color:${n.color};${n.bg !== "transparent" ? `background:${n.bg};` : ""}border-radius:${n.radius}px;text-align:${n.textAlign || "left"};padding:0;opacity:1;transform:rotate(${n.rotate || 0}deg);border:${n.borderWidth || 0}px ${n.borderStyle || "solid"} ${n.borderColor || "#d9dbe5"};box-shadow:${n.shadow || "none"};z-index:${n.z || 1};`;
    el.innerHTML = `<div class="node-content-frame">${n.html || t.html}</div>`;
    const contentRoot = el.querySelector(".node-content-frame");
    const centerLocked = [
      "검색 아이콘",
      "모바일 햄버거 메뉴",
      "로그인 / 회원가입",
    ].includes(n.label);
    contentRoot.style.padding = (n.padding || 0) + "px";
    contentRoot.style.opacity = (n.opacity ?? 100) / 100;
    contentRoot.style.textAlign = centerLocked ? "center" : n.textAlign || "left";
    if (centerLocked) {
      contentRoot.style.display = "grid";
      contentRoot.style.placeItems = "center";
    }
    if (n.label === "로고") {
      const imageContent = n.imageSrc
        ? `<img src="${n.imageSrc}" alt="로고 이미지" style="object-fit:${n.objectFit || "contain"};object-position:${n.imagePosition || "center"};transform:scale(${n.logoImageScale || 1.35})">`
        : '<span><b>＋</b><small>이미지</small></span>';
      const editorOnly = n.imageSrc ? "" : ' data-editor-only="true"';
      const imageOnly = n.logoLayout === "image";
      contentRoot.innerHTML = `<div class="real-logo${imageOnly ? " logo-image-only" : ""}"><div class="logo-image-area${n.imageSrc ? " has-image" : ""}"${editorOnly}>${imageContent}</div>${imageOnly ? "" : `<span class="logo-text">${n.content || "CODE LAB"}</span>`}</div>`;
    } else if (n.imageSrc && componentCatalog.배너.includes(n.label)) {
      const bannerRoot = contentRoot.firstElementChild;
      if (bannerRoot) {
        bannerRoot.style.backgroundImage = `linear-gradient(120deg, rgba(17,20,38,.18), rgba(17,20,38,.68)), url("${n.imageSrc}")`;
        bannerRoot.style.backgroundSize = n.objectFit || "cover";
        bannerRoot.style.backgroundRepeat = "no-repeat";
        bannerRoot.style.backgroundPosition = n.imagePosition || "center";
      }
    } else if (n.imageSrc) {
      contentRoot.innerHTML = `<img src="${n.imageSrc}" alt="${n.label || "업로드 이미지"}" style="width:100%;height:100%;object-fit:${n.objectFit || "cover"};object-position:${n.imagePosition || "center"}">`;
    }
    if (n.label === "언어 선택") {
      const languages = n.languages?.length
        ? n.languages
        : ["한국어", "English", "日本語"];
      const languageDropdown = document.createElement("div");
      languageDropdown.className = "language-dropdown";
      const currentLanguage = document.createElement("button");
      currentLanguage.className = "language-current";
      currentLanguage.type = "button";
      const selectedLanguage = languages.includes(n.selectedLanguage)
        ? n.selectedLanguage
        : languages[0];
      currentLanguage.innerHTML = `<span>${escapeHtml(selectedLanguage)}</span><i>⌄</i>`;
      const languageMenu = document.createElement("div");
      languageMenu.className = "language-menu";
      languages.forEach((language) => {
        const option = document.createElement("button");
        option.type = "button";
        option.textContent = language;
        option.classList.toggle("active", language === selectedLanguage);
        option.addEventListener("pointerdown", (event) =>
          event.stopPropagation(),
        );
        option.onclick = (event) => {
          event.stopPropagation();
          n.selectedLanguage = language;
          render();
          drawInspector();
          commit();
        };
        languageMenu.appendChild(option);
      });
      languageDropdown.append(currentLanguage, languageMenu);
      contentRoot.replaceChildren(languageDropdown);
    }
    const menuToggle = contentRoot.querySelector("[data-menu-toggle]");
    if (menuToggle) {
      menuToggle.setAttribute("aria-expanded", String(!!n.menuOpen));
      menuToggle.addEventListener("pointerdown", (event) => event.stopPropagation());
      menuToggle.onclick = (event) => {
        event.preventDefault();
        event.stopPropagation();
        n.menuOpen = !n.menuOpen;
        selected = n.id;
        selectedIds = new Set([n.id]);
        workspace.classList.add("inspector-open");
        render();
        drawInspector();
      };
    }
    if (n.label === "로고" && selected === n.id) {
      contentRoot
        .querySelector(
          n.logoEditMode === "text" ? ".logo-text" : ".logo-image-area",
        )
        ?.classList.add("logo-part-active");
    }
    const textTarget =
      contentRoot.querySelector(
        n.label === "사이트명"
          ? ".site-name"
          : n.label === "로고"
            ? ".logo-text"
            : "button,b,h3",
      ) ||
      (["text", "icon"].includes(n.type)
        ? contentRoot.firstElementChild
        : null);
    if (n.content && textTarget && n.label !== "모바일 햄버거 메뉴")
      textTarget.textContent = n.content;
    if (textTarget) {
      textTarget.style.position = "relative";
      textTarget.style.left = (centerLocked ? 0 : n.textX || 0) + "px";
      textTarget.style.top = (centerLocked ? 0 : n.textY || 0) + "px";
      textTarget.style.color = n.color;
      textTarget.style.fontFamily = n.fontFamily || "inherit";
      textTarget.style.fontSize = (n.fontSize || 16) + "px";
      textTarget.style.fontWeight = n.fontWeight || 600;
      textTarget.style.lineHeight =
        n.label === "사이트명" ? "1" : n.lineHeight || 1.5;
      textTarget.style.textAlign = centerLocked ? "center" : n.textAlign || "left";
      textTarget.style.justifyContent =
        centerLocked
          ? "center"
          : n.textAlign === "right"
          ? "flex-end"
          : n.textAlign === "center"
            ? "center"
            : "flex-start";
      if (centerLocked) textTarget.style.alignItems = "center";
    }
    contentRoot
      .querySelectorAll(
        "button, a, b, strong, h1, h2, h3, h4, p, span, small, label, li",
      )
      .forEach((textElement) => {
        textElement.style.textAlign = centerLocked ? "center" : n.textAlign || "left";
        if (textElement.tagName === "BUTTON")
          textElement.style.justifyContent =
            centerLocked
              ? "center"
              : n.textAlign === "right"
              ? "flex-end"
              : n.textAlign === "center"
                ? "center"
                : "flex-start";
      });
    if (n.label === "언어 선택") {
      const languageCurrent = contentRoot.querySelector(".language-current");
      if (languageCurrent) {
        languageCurrent.style.width = "100%";
        languageCurrent.style.justifyContent = "space-between";
        languageCurrent.style.textAlign = "left";
      }
      const languageText = languageCurrent?.querySelector("span");
      if (languageText) {
        languageText.style.position = "static";
        languageText.style.flex = "1";
        languageText.style.textAlign = "left";
      }
      contentRoot.querySelectorAll(".language-menu button").forEach((option) => {
        option.style.justifyContent = "flex-start";
        option.style.textAlign = "left";
      });
    }
    let selectedPartLabel = "";
    let selectedPartElement = null;
    [...contentRoot.querySelectorAll("*")].forEach((child, index) => {
      const p = n.parts?.[index];
      if (p) {
        if (p.text !== undefined) {
          if (["INPUT", "TEXTAREA"].includes(child.tagName))
            child.placeholder = p.text;
          else child.textContent = p.text;
        }
        Object.assign(child.style, {
          position: "relative",
          left: (p.x || 0) + "px",
          top: (p.y || 0) + "px",
          width: p.w ? `${p.w}px` : "",
          height: p.h ? `${p.h}px` : "",
          fontFamily: p.fontFamily || "",
          fontSize: p.fontSize ? `${p.fontSize}px` : "",
          fontWeight: p.fontWeight || "",
          color: p.color || "",
          background: p.bg || "",
          padding: p.padding !== undefined ? `${p.padding}px` : "",
        borderRadius: p.radius !== undefined ? `${p.radius}px` : "",
        textAlign: p.textAlign || "",
        justifyContent: p.textAlign
          ? p.textAlign === "right"
            ? "flex-end"
            : p.textAlign === "center"
              ? "center"
              : "flex-start"
          : "",
        opacity: p.visible === false ? "0" : "",
          pointerEvents: p.visible === false ? "none" : "",
        });
      }
      if (selected === n.id && selectedPart === index) {
        const partText = (
          child.textContent ||
          child.getAttribute("placeholder") ||
          ""
        )
          .trim()
          .slice(0, 14);
        const partLabels = {
          A: "링크",
          BUTTON: "버튼",
          H1: "큰 제목",
          H2: "제목",
          H3: "작은 제목",
          IMG: "이미지",
          INPUT: "입력칸",
          NAV: "메뉴 영역",
          P: "설명 글",
          SELECT: "선택 메뉴",
          SMALL: "보조 글자",
          SPAN: "글자",
          STRONG: "강조 글자",
          TEXTAREA: "긴 입력칸",
        };
        child.dataset.editLabel =
          (partLabels[child.tagName] || "선택한 부분") +
          (partText ? ` · ${partText}` : "");
        selectedPartLabel = child.dataset.editLabel;
        selectedPartElement = child;
        child.classList.add("inner-selected");
      }
    });
    if (selected === n.id && !preview) {
      ["nw", "n", "ne", "e", "se", "s", "sw", "w"].forEach((dir) => {
        const handle = document.createElement("span");
        handle.className = `resize-handle handle-${dir}`;
        handle.dataset.dir = dir;
        handle.title = `${dir.toUpperCase()} 방향 크기 조절`;
        handle.addEventListener("pointerdown", startResize);
        el.appendChild(handle);
      });
    }
    if ((selected === n.id || selectedIds.has(n.id)) && !preview) {
      const deleteButton = document.createElement("button");
      deleteButton.className = "canvas-delete-node";
      deleteButton.type = "button";
      deleteButton.title = `${n.label} 삭제`;
      deleteButton.setAttribute("aria-label", `${n.label} 삭제`);
      deleteButton.textContent = "×";
      deleteButton.addEventListener("pointerdown", (event) => event.stopPropagation());
      deleteButton.onclick = (event) => {
        event.stopPropagation();
        deleteNodeIds(new Set([n.id]));
      };
      el.appendChild(deleteButton);
    }
    el.addEventListener("pointerdown", startMove);
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      if (preview) {
        const action = e.target.closest("[data-action]")?.dataset.action;
        if (action === "dark") canvas.classList.toggle("dark-canvas");
        if (action === "top")
          document
            .querySelector(".stage-wrap")
            .scrollTo({ top: 0, behavior: "smooth" });
        if (e.target.closest(".real-slider button")) {
          const title = el.querySelector(".real-slider b");
          const num = (+(title.textContent.match(/\d+/) || [0])[0] % 3) + 1;
          title.textContent = "SLIDE 0" + num;
        }
        return;
      }
      // 폼·버튼처럼 실제 동작이 있는 콘텐츠는 편집 화면에서도 실행합니다.
      if (runInteractiveAction(e, el)) return;
      const children = [...contentRoot.querySelectorAll("*")];
      const part =
        e.target === el ||
        e.target === contentRoot ||
        e.target.classList.contains("resize-handle")
          ? null
          : children.indexOf(e.target);
      selectNode(n.id, part);
      if (
        autoFocusLabels.includes(n.label) ||
        Math.min(n.w * view.zoom, n.h * view.zoom) < 72
      )
        setTimeout(() => focusSmallNode(n.id), 380);
    });
    canvas.appendChild(el);
    if (selectedPartLabel && selectedPartElement) {
      const partRect = selectedPartElement.getBoundingClientRect();
      const nodeRect = el.getBoundingClientRect();
      const canvasRect = canvas.getBoundingClientRect();
      const zoom = view.zoom || 1;
      const hologram = document.createElement("div");
      hologram.className = "selection-hologram";
      hologram.style.left = (partRect.left - nodeRect.left) / zoom + "px";
      hologram.style.top = (partRect.top - nodeRect.top) / zoom + "px";
      hologram.style.width = partRect.width / zoom + "px";
      hologram.style.height = partRect.height / zoom + "px";
      el.appendChild(hologram);

      const selectionNote = document.createElement("div");
      const placeOnRight = canvasRect.right - partRect.right > 210;
      selectionNote.className =
        "selection-note " + (placeOnRight ? "note-right" : "note-left");
      selectionNote.style.top =
        (partRect.top - nodeRect.top + partRect.height / 2) / zoom + "px";
      if (placeOnRight) {
        selectionNote.style.left =
          (partRect.right - nodeRect.left) / zoom + 12 / zoom + "px";
      } else {
        selectionNote.style.right =
          (nodeRect.right - partRect.left) / zoom + 12 / zoom + "px";
      }
      selectionNote.innerHTML = `<strong>지금 편집 중</strong><span>${selectedPartLabel}</span>`;
      el.appendChild(selectionNote);
    }
  });
  if (selectedIds.size > 1 && !preview) {
    const chosen = nodes.filter((node) => selectedIds.has(node.id));
    if (chosen.length) {
      const bulkDelete = document.createElement("button");
      bulkDelete.className = "bulk-delete-nodes";
      bulkDelete.type = "button";
      bulkDelete.textContent = `선택 ${chosen.length}개 삭제`;
      bulkDelete.style.left = Math.min(canvasSize.w - 130, Math.max(...chosen.map((n) => n.x + n.w))) + "px";
      bulkDelete.style.top = Math.max(8, Math.min(...chosen.map((n) => n.y)) - 42) + "px";
      bulkDelete.onclick = (event) => {
        event.stopPropagation();
        deleteNodeIds(new Set(selectedIds));
      };
      canvas.appendChild(bulkDelete);
    }
  }
  if (activeGuides.x !== null) {
    const guide = document.createElement("i");
    guide.className = "smart-guide guide-v";
    guide.style.left = activeGuides.x + "px";
    canvas.appendChild(guide);
  }
  if (activeGuides.y !== null) {
    const guide = document.createElement("i");
    guide.className = "smart-guide guide-h";
    guide.style.top = activeGuides.y + "px";
    canvas.appendChild(guide);
  }
  syncAdvancedEffectPanel();
}
function selectNode(id, part = null) {
  if (focusedNodeId && focusedNodeId !== id) focusedNodeId = null;
  selected = id;
  selectedIds = new Set([id]);
  const node = nodes.find((item) => item.id === id);
  selectedPart = ["헤더", "로고", "사이트명", "언어 선택"].includes(node?.label)
    ? null
    : part;
  workspace.classList.add("inspector-open");
  render();
  drawInspector();
}
function focusSmallNode(id, announce = true) {
  const node = nodes.find((item) => item.id === id);
  if (!node || selected !== id) return;
  focusedNodeId = id;
  const targetZoom = Math.min(
    2.4,
    Math.max(view.zoom, 180 / Math.max(40, Math.min(node.w, node.h))),
  );
  view.zoom = targetZoom;
  view.x = Math.round(viewport.clientWidth / 2 - (node.x + node.w / 2) * targetZoom);
  view.y = Math.round(viewport.clientHeight / 2 - (node.y + node.h / 2) * targetZoom);
  if (announce) {
    shell.classList.remove("smooth-focus");
    void shell.offsetWidth;
    shell.classList.add("smooth-focus");
    clearTimeout(focusSmallNode.transitionTimer);
    focusSmallNode.transitionTimer = setTimeout(
      () => shell.classList.remove("smooth-focus"),
      420,
    );
  }
  applyView();
  if (announce)
    showToast("작은 요소를 확대했어요 · Space를 누른 채 이동할 수 있어요");
}

let suppressCanvasClick = false;
canvas.addEventListener("click", () => {
  if (suppressCanvasClick) return;
  selected = null;
  selectedIds.clear();
  focusedNodeId = null;
  selectedPart = null;
  workspace.classList.remove("inspector-open");
  render();
});

canvas.addEventListener("pointerdown", (event) => {
  if (
    preview ||
    spacePressed ||
    event.button !== 0 ||
    event.target !== canvas
  )
    return;
  const rect = canvas.getBoundingClientRect();
  const startX = (event.clientX - rect.left) / view.zoom;
  const startY = (event.clientY - rect.top) / view.zoom;
  const marquee = document.createElement("div");
  marquee.className = "selection-marquee";
  marquee.style.left = startX + "px";
  marquee.style.top = startY + "px";
  canvas.appendChild(marquee);
  let moved = false;

  const moveMarquee = (moveEvent) => {
    const x = (moveEvent.clientX - rect.left) / view.zoom;
    const y = (moveEvent.clientY - rect.top) / view.zoom;
    const left = Math.max(0, Math.min(startX, x));
    const top = Math.max(0, Math.min(startY, y));
    const width = Math.min(canvasSize.w, Math.max(startX, x)) - left;
    const height = Math.min(canvasSize.h, Math.max(startY, y)) - top;
    moved ||= width > 4 || height > 4;
    Object.assign(marquee.style, {
      left: left + "px",
      top: top + "px",
      width: width + "px",
      height: height + "px",
    });
  };
  const finishMarquee = () => {
    document.removeEventListener("pointermove", moveMarquee);
    document.removeEventListener("pointerup", finishMarquee);
    const left = parseFloat(marquee.style.left) || startX;
    const top = parseFloat(marquee.style.top) || startY;
    const right = left + (parseFloat(marquee.style.width) || 0);
    const bottom = top + (parseFloat(marquee.style.height) || 0);
    marquee.remove();
    if (!moved) return;
    selectedIds = new Set(
      nodes
        .filter(
          (node) =>
            node.x < right &&
            node.x + node.w > left &&
            node.y < bottom &&
            node.y + node.h > top,
        )
        .map((node) => node.id),
    );
    selected = selectedIds.size === 1 ? [...selectedIds][0] : null;
    selectedPart = null;
    workspace.classList.toggle("inspector-open", selectedIds.size === 1);
    suppressCanvasClick = true;
    render();
    if (selected) drawInspector();
    if (selectedIds.size)
      showToast(`${selectedIds.size}개 요소를 선택했어요 · Delete로 한 번에 삭제`);
    setTimeout(() => (suppressCanvasClick = false), 0);
  };
  document.addEventListener("pointermove", moveMarquee);
  document.addEventListener("pointerup", finishMarquee);
});
viewport.addEventListener("click", (event) => {
  if (suppressCanvasClick) return;
  if (event.target.closest(".node")) return;
  selected = null;
  selectedIds.clear();
  focusedNodeId = null;
  selectedPart = null;
  workspace.classList.remove("inspector-open");
  render();
});
// 포인터를 누른 좌표와 노드 좌표의 차이를 저장해 드래그 중 튀는 현상을 막습니다.
function startMove(e) {
  if (preview || spacePressed || e.button === 1) return;
  e.preventDefault();
  const id = e.currentTarget.dataset.id,
    n = nodes.find((v) => v.id === id),
    rect = canvas.getBoundingClientRect();
  selectNode(id);
  dragging = {
    n,
    dx: (e.clientX - rect.left) / view.zoom - n.x,
    dy: (e.clientY - rect.top) / view.zoom - n.y,
  };
  document.addEventListener("pointermove", move);
  document.addEventListener("pointerup", endMove, { once: true });
}
function snapCandidates(n, axis) {
  const size = axis === "x" ? canvasSize.w : canvasSize.h,
    list = [0, size / 2, size];
  nodes
    .filter((v) => v !== n)
    .forEach((v) => {
      const start = axis === "x" ? v.x : v.y,
        length = axis === "x" ? v.w : v.h;
      list.push(start, start + length / 2, start + length);
    });
  return list;
}
function magneticValue(raw, length, candidates, axis) {
  const threshold = 10 / view.zoom,
    anchors = [0, length / 2, length];
  let best = { distance: Infinity, value: raw, guide: null };
  candidates.forEach((line) =>
    anchors.forEach((offset) => {
      const distance = Math.abs(raw + offset - line);
      if (distance < best.distance && distance <= threshold)
        best = { distance, value: line - offset, guide: line };
    }),
  );
  activeGuides[axis] = best.guide;
  return best.value;
}
function move(e) {
  if (!dragging) return;
  const rect = canvas.getBoundingClientRect(),
    n = dragging.n,
    parent = n.parentId ? nodes.find((node) => node.id === n.parentId) : null,
    minX = parent ? parent.x : 0,
    minY = parent ? parent.y : 0,
    maxX = parent ? parent.x + parent.w : canvasSize.w,
    maxY = parent ? parent.y + parent.h : canvasSize.h,
    grid = (v) => (snapToGrid ? Math.round(v / 8) * 8 : Math.round(v));
  let x = Math.max(
      minX,
      Math.min(maxX - n.w, (e.clientX - rect.left) / view.zoom - dragging.dx),
    ),
    y = Math.max(
      minY,
      Math.min(maxY - n.h, (e.clientY - rect.top) / view.zoom - dragging.dy),
    );
  x = magneticValue(x, n.w, snapCandidates(n, "x"), "x");
  y = magneticValue(y, n.h, snapCandidates(n, "y"), "y");
  const nextX = activeGuides.x === null ? grid(x) : Math.round(x);
  const nextY = activeGuides.y === null ? grid(y) : Math.round(y);
  const deltaX = nextX - n.x;
  const deltaY = nextY - n.y;
  n.x = nextX;
  n.y = nextY;
  if (areaOrder.includes(n.label)) {
    n.fluidWidth = false;
    nodes
      .filter((node) => node.parentId === n.id)
      .forEach((child) => {
        child.x += deltaX;
        child.y += deltaY;
      });
  }
  containNodeInParent(n);
  render();
}
function endMove() {
  if (dragging) commit();
  dragging = null;
  activeGuides = { x: null, y: null };
  render();
  document.removeEventListener("pointermove", move);
}
function startResize(e) {
  e.preventDefault();
  e.stopPropagation();
  const el = e.currentTarget.parentElement,
    n = nodes.find((v) => v.id === el.dataset.id);
  dragging = {
    n,
    resizing: true,
    dir: e.currentTarget.dataset.dir,
    startX: e.clientX,
    startY: e.clientY,
    startLeft: n.x,
    startTop: n.y,
    startW: n.w,
    startH: n.h,
  };
  document.addEventListener("pointermove", resizeNode);
  document.addEventListener("pointerup", endResize, { once: true });
}
// 잡은 핸들 방향에 해당하는 변만 움직이고 부모 영역과 캔버스 경계를 넘지 않게 계산합니다.
function resizeNode(e) {
  if (!dragging?.resizing) return;
  const d = dragging,
    dir = d.dir,
    parent = d.n.parentId
      ? nodes.find((node) => node.id === d.n.parentId)
      : null,
    minX = parent ? parent.x : 0,
    minY = parent ? parent.y : 0,
    maxX = parent ? parent.x + parent.w : canvasSize.w,
    maxY = parent ? parent.y + parent.h : canvasSize.h,
    dx = (e.clientX - d.startX) / view.zoom,
    dy = (e.clientY - d.startY) / view.zoom,
    snap = (v) => (snapToGrid ? Math.round(v / 8) * 8 : Math.round(v)),
    minW = 32,
    minH = 24;
  let x = d.startLeft,
    y = d.startTop,
    w = d.startW,
    h = d.startH;
  if (dir.includes("e"))
    w = Math.min(maxX - x, Math.max(minW, snap(d.startW + dx)));
  if (dir.includes("s"))
    h = Math.min(maxY - y, Math.max(minH, snap(d.startH + dy)));
  if (dir.includes("w")) {
    const right = d.startLeft + d.startW;
    x = Math.max(minX, Math.min(right - minW, snap(d.startLeft + dx)));
    w = right - x;
  }
  if (dir.includes("n")) {
    const bottom = d.startTop + d.startH;
    y = Math.max(minY, Math.min(bottom - minH, snap(d.startTop + dy)));
    h = bottom - y;
  }
  const xCandidates = snapCandidates(d.n, "x"),
    yCandidates = snapCandidates(d.n, "y"),
    threshold = 10 / view.zoom;
  if (dir.includes("e")) {
    const edge = x + w,
      line = xCandidates.reduce(
        (a, b) => (Math.abs(b - edge) < Math.abs(a - edge) ? b : a),
        xCandidates[0],
      );
    if (Math.abs(line - edge) <= threshold) {
      w = line - x;
      activeGuides.x = line;
    } else activeGuides.x = null;
  }
  if (dir.includes("w")) {
    const line = xCandidates.reduce(
      (a, b) => (Math.abs(b - x) < Math.abs(a - x) ? b : a),
      xCandidates[0],
    );
    if (Math.abs(line - x) <= threshold) {
      w += x - line;
      x = line;
      activeGuides.x = line;
    } else activeGuides.x = null;
  }
  if (dir.includes("s")) {
    const edge = y + h,
      line = yCandidates.reduce(
        (a, b) => (Math.abs(b - edge) < Math.abs(a - edge) ? b : a),
        yCandidates[0],
      );
    if (Math.abs(line - edge) <= threshold) {
      h = line - y;
      activeGuides.y = line;
    } else activeGuides.y = null;
  }
  if (dir.includes("n")) {
    const line = yCandidates.reduce(
      (a, b) => (Math.abs(b - y) < Math.abs(a - y) ? b : a),
      yCandidates[0],
    );
    if (Math.abs(line - y) <= threshold) {
      h += y - line;
      y = line;
      activeGuides.y = line;
    } else activeGuides.y = null;
  }
  Object.assign(d.n, { x, y, w: Math.max(minW, w), h: Math.max(minH, h) });
  if (areaOrder.includes(d.n.label)) d.n.fluidWidth = false;
  containNodeInParent(d.n);
  render();
  drawInspector();
}
function endResize() {
  if (dragging?.resizing) {
    commit();
  }
  dragging = null;
  activeGuides = { x: null, y: null };
  render();
  document.removeEventListener("pointermove", resizeNode);
}
$$(".component").forEach((c) => {
  c.addEventListener("dragstart", (e) => {
    if (c.dataset.group === "고급효과" && !isMember) {
      e.preventDefault();
      openSignup();
      return;
    }
    e.dataTransfer.setData(
      "component",
      JSON.stringify({ type: c.dataset.type, label: c.dataset.label }),
    );
    c.classList.add("dragging");
  });
  c.addEventListener("dragend", () => c.classList.remove("dragging"));
  c.addEventListener("click", () => {
    if (c.dataset.group === "고급효과" && !isMember) {
      openSignup();
      return;
    }
    addNode(
      c.dataset.type,
      40 + nodes.length * 12,
      40 + nodes.length * 18,
      true,
      c.dataset.label,
      true,
    );
  });
});
canvas.addEventListener("dragover", (e) => e.preventDefault());
canvas.addEventListener("drop", (e) => {
  e.preventDefault();
  const rect = canvas.getBoundingClientRect();
  let item;
  try {
    item = JSON.parse(e.dataTransfer.getData("component"));
  } catch {}
  if (item?.type) {
    if (componentCatalog.고급효과.includes(item.label) && !isMember) {
      openSignup();
      return;
    }
    addNode(
      item.type,
      (e.clientX - rect.left) / view.zoom - templates[item.type].w / 2,
      (e.clientY - rect.top) / view.zoom - 20,
      true,
      item.label,
    );
  }
});
function runInteractiveAction(event, root = canvas) {
  const nodeElement = event.target.closest(".node[data-id]");
  const linkedNode = nodeElement && nodes.find((node) => node.id === nodeElement.dataset.id);
  const demoAction = event.target.closest("[data-demo-action]");
  if (demoAction && root.contains(demoAction)) {
    const action = demoAction.dataset.demoAction;
    if (action === "top") viewport.scrollTo({ top: 0, behavior: "smooth" });
    if (action === "cart") {
      const count = Number(demoAction.dataset.count || 0) + 1;
      demoAction.dataset.count = count;
      demoAction.textContent = `장바구니 담김 (${count})`;
    }
    if (action === "media") {
      const playing = demoAction.getAttribute("aria-pressed") !== "true";
      demoAction.setAttribute("aria-pressed", String(playing));
      demoAction.querySelector("span").textContent = playing ? "Ⅱ" : "▶";
      demoAction.querySelector("b").textContent = playing ? "영상 재생 중" : "소개 영상 재생";
    }
    if (action === "policy") showToast(`${demoAction.dataset.policyTitle} 내용을 확인했어요`);
    if (["message", "map", "social"].includes(action)) showToast(`${linkedNode?.label || "요소"} 기능이 실행됐어요`);
    return true;
  }
  const galleryItem = event.target.closest("[data-gallery-item]");
  if (galleryItem && root.contains(galleryItem)) {
    galleryItem.parentElement.querySelectorAll("button").forEach((item) => item.classList.toggle("active", item === galleryItem));
    showToast(`${galleryItem.dataset.galleryItem}번 이미지를 선택했어요`);
    return true;
  }
  if (linkedNode && (componentCatalog.배너.includes(linkedNode.label) || componentCatalog.헤더.includes(linkedNode.label)) && event.target.closest("button, a")) {
    showToast(`${linkedNode.label} 기능이 실행됐어요`);
    return true;
  }
  return false;
}
canvas.addEventListener("submit", (event) => {
  const form = event.target.closest("[data-demo-form]");
  if (!form) return;
  event.preventDefault();
  const status = form.querySelector('[role="status"]');
  if (status) status.textContent = "정상적으로 전송됐습니다.";
  showToast("입력한 내용이 정상적으로 전송됐어요");
});
function drawEffectOnlyInspector(node) {
  $("#inspectorBody").innerHTML = `
    <div class="selected-summary effect-only-summary">
      <strong>${node.label} 고급 효과</strong>
      <span>효과에 필요한 세 가지 설정만 표시하고 있어요.</span>
    </div>
    <div class="inspector-section advanced-effect-section advanced-effect-controls effect-only-panel${isMember ? "" : " member-locked"}">
      <div class="inspector-section-title">고급 효과 <span class="effect-lock">🔒</span></div>
      <div class="field"><label>효과 선택</label><select id="onlyEffect" ${isMember ? "" : "disabled"}><option value="none">없음</option><option value="fade">Fade</option><option value="slide">Slide</option><option value="zoom">Zoom</option><option value="glow">Glow</option></select></div>
      <div class="field"><label>강도</label><select id="onlyEffectIntensity" ${isMember ? "" : "disabled"}><option value="weak">약하게</option><option value="normal">보통</option><option value="strong">강하게</option></select></div>
      <div class="field"><label>속도</label><select id="onlyEffectSpeed" ${isMember ? "" : "disabled"}><option value="slow">느리게</option><option value="normal">보통</option><option value="fast">빠르게</option></select></div>
      <button class="wide-action" id="replayEffect" type="button">효과 다시 보기</button>
      <small class="field-help">모든 효과는 요소에 마우스를 올려 확인하세요.</small>
    </div>`;
  const fields = {
    onlyEffect: ["effect", "none"],
    onlyEffectIntensity: ["effectIntensity", "normal"],
    onlyEffectSpeed: ["effectSpeed", "normal"],
  };
  Object.entries(fields).forEach(([id, [key, fallback]]) => {
    const control = $("#" + id);
    control.value = node[key] || fallback;
    control.onchange = () => {
      if (!isMember) return openSignup();
      node[key] = control.value;
      render();
      syncAdvancedEffectPanel();
      commit();
      drawEffectOnlyInspector(node);
    };
  });
  $("#replayEffect").onclick = () => {
    if (!isMember) return openSignup();
    render();
    const target = canvas.querySelector(`[data-id="${node.id}"]`);
    target?.classList.add("effect-previewing");
    const previewDuration = { slow: 1200, normal: 750, fast: 420 }[
      node.effectSpeed || "normal"
    ];
    setTimeout(() => target?.classList.remove("effect-previewing"), previewDuration);
    showToast("효과를 다시 재생했어요");
  };
}

// 5. 속성 패널: 선택한 요소의 값을 입력 UI와 양방향으로 연결합니다.
// 선택한 노드 종류에 필요한 입력 항목만 만들어 오른쪽 속성 패널에 표시합니다.
function drawInspector() {
  const n = nodes.find((v) => v.id === selected);
  if (!n) return;
  if (workspace.classList.contains("effect-edit-mode")) {
    drawEffectOnlyInspector(n);
    return;
  }
  const isAreaOnly = n.label === "헤더";
  const isLogo = n.label === "로고";
  const isSiteName = n.label === "사이트명";
  const isLanguage = n.label === "언어 선택";
  const isBannerPreset = componentCatalog.배너.includes(n.label) && n.label !== "배너";
  const canEditTypography =
    !isAreaOnly &&
    (isLogo ||
      isSiteName ||
      !["image", "video", "map", "divider", "icon"].includes(n.type));
  const probe = document.createElement("div");
  probe.innerHTML = n.html || templates[n.type].html;
  const innerElements = [...probe.querySelectorAll("*")];
  const part =
    isAreaOnly || isLogo || isSiteName || isLanguage || selectedPart === null
      ? null
      : n.parts[selectedPart] || (n.parts[selectedPart] = {});
  const selectedInnerElement = innerElements[selectedPart];
  const canEditPartText =
    !!selectedInnerElement &&
    [
      "A",
      "BUTTON",
      "H1",
      "H2",
      "H3",
      "INPUT",
      "LABEL",
      "LI",
      "P",
      "SMALL",
      "SPAN",
      "STRONG",
      "TEXTAREA",
    ].includes(selectedInnerElement.tagName);
  const partName = (i) => {
    const el = innerElements[i],
      text = (el?.textContent || el?.getAttribute("placeholder") || "")
        .trim()
        .slice(0, 16);
    const friendlyTags = {
      a: "링크",
      button: "버튼",
      h1: "큰 제목",
      h2: "제목",
      h3: "작은 제목",
      img: "이미지",
      input: "입력칸",
      label: "안내 글자",
      li: "목록 항목",
      p: "설명 글",
      select: "선택 메뉴",
      small: "보조 글자",
      span: "글자",
      strong: "강조 글자",
      textarea: "긴 입력칸",
    };
    const name = friendlyTags[el?.tagName.toLowerCase()] || "안쪽 요소";
    return `${name}${text ? " · " + text : ""}`;
  };
  $("#inspectorBody").innerHTML = `
        <div class="selected-summary"><strong>${n.label}을(를) 꾸미는 중</strong><span>${isAreaOnly ? "헤더 영역의 크기, 위치, 배경만 설정할 수 있어요." : "바꾸고 싶은 항목을 위에서부터 하나씩 선택해 보세요."}</span></div>
        ${isAreaOnly || isLogo || isSiteName || isLanguage ? "" : `<div class="inner-picker"><label>어느 부분을 바꿀까요?</label><select id="innerTarget"><option value="">요소 전체</option>${innerElements.map((_, i) => `<option value="${i}" ${selectedPart === i ? "selected" : ""}>${i + 1}. ${partName(i)}</option>`).join("")}</select><small>글자나 버튼 하나만 바꾸려면 여기에서 선택하세요. 캔버스에서 직접 눌러도 됩니다.</small></div>`}
        ${
          part
            ? `<div class="part-editor"><div class="part-badge">선택한 부분 · ${partName(selectedPart)}</div>
          ${canEditPartText ? `<div class="field"><label>표시할 글자</label><textarea id="iText" rows="2">${part.text !== undefined ? part.text : (innerElements[selectedPart]?.textContent || innerElements[selectedPart]?.getAttribute("placeholder") || "").trim()}</textarea><small class="field-help">버튼 이름, 제목, 안내 문구를 입력하세요.</small></div>` : ""}
          <div class="split"><div class="field"><label>너비</label><input id="iW" type="number" min="0" value="${part.w || ""}" placeholder="자동"></div><div class="field"><label>높이</label><input id="iH" type="number" min="0" value="${part.h || ""}" placeholder="자동"></div></div>
          ${canEditPartText ? `<div class="field"><label>글꼴</label>${fontPickerMarkup("iFontFamily", part.fontFamily || "", true)}</div>
          <div class="split"><div class="field"><label>글자 크기</label><input id="iFontSize" type="number" min="8" max="160" value="${part.fontSize || ""}" placeholder="자동"></div><div class="field"><label>글자 굵기</label><select id="iFontWeight"><option value="">자동</option><option value="400">보통</option><option value="500">약간 굵게</option><option value="600">굵게</option><option value="700">더 굵게</option><option value="800">매우 굵게</option></select></div></div>
          <div class="field"><label>글자 정렬</label><select id="iTextAlign"><option value="">전체 설정 따라가기</option><option value="left">왼쪽 정렬</option><option value="center">가운데 정렬</option><option value="right">오른쪽 정렬</option></select></div>` : ""}
          <div class="split">${canEditPartText ? `<div class="field"><label>글자색</label><input id="iColor" type="color" value="${part.color || "#151622"}"></div>` : ""}<div class="field"><label>배경색</label><input id="iBg" type="color" value="${part.bg || "#ffffff"}"></div></div>
          <div class="split"><div class="field"><label>안쪽 여백</label><input id="iPadding" type="number" min="0" max="100" value="${part.padding ?? 0}"></div><div class="field"><label>모서리 둥글기</label><input id="iRadius" type="number" min="0" max="100" value="${part.radius ?? 0}"></div></div>
          <details class="advanced-settings"><summary>세부 위치 설정</summary><div class="split"><div class="field"><label>가로 이동</label><input id="iX" type="number" value="${part.x || 0}"></div><div class="field"><label>세로 이동</label><input id="iY" type="number" value="${part.y || 0}"></div></div></details>
          <div class="element-actions"><button id="hidePart">${part.visible === false ? "다시 보이기" : "이 부분 숨기기"}</button><button id="resetPart">변경 취소</button></div>
        </div>`
            : ""
        }
    ${isLogo ? `<div class="inspector-section logo-editor-switch"><div class="inspector-section-title">로고 구성</div><div class="field"><label>어떻게 표시할까요?</label><select id="pLogoLayout"><option value="combined">이미지 + 텍스트</option><option value="image">이미지만 사용</option></select></div><div class="inspector-section-title">바꿀 부분</div><div class="edit-mode-buttons"><button data-logo-mode="image" class="${n.logoEditMode !== "text" ? "active" : ""}">이미지 삽입</button>${n.logoLayout !== "image" ? `<button data-logo-mode="text" class="${n.logoEditMode === "text" ? "active" : ""}">텍스트 편집</button>` : ""}</div><small class="field-help">캔버스의 이미지 안내는 편집용이며 생성 코드에는 포함되지 않아요.</small></div>` : ""}
    ${(isLogo && n.logoEditMode !== "text") || isBannerPreset || (!isLogo && ["image", "video"].includes(n.type)) ? `<div class="inspector-section"><div class="inspector-section-title">${isLogo ? "로고 이미지 삽입" : isBannerPreset ? "배너 배경 이미지" : "사진 바꾸기"}</div><div class="field"><label>내 이미지 선택</label><input id="pImageUpload" type="file" accept="image/*"><small class="field-help">5MB 이하의 이미지 파일을 선택하세요.</small></div><div class="split"><div class="field"><label>이미지 맞춤</label><select id="pObjectFit"><option value="cover">빈틈없이 채우기</option><option value="contain">이미지 전체 보기</option><option value="fill">크기에 맞춰 늘이기</option></select></div><div class="field"><label>보일 위치</label><select id="pImagePosition"><option value="center">가운데</option><option value="top">위쪽</option><option value="bottom">아래쪽</option><option value="left">왼쪽</option><option value="right">오른쪽</option></select></div></div>${isLogo ? `<div class="field"><label id="logoScaleLabel">이미지 확대 · ${Math.round((n.logoImageScale || 1.35) * 100)}%</label><input id="pLogoImageScale" type="range" min="1" max="3" step=".05" value="${n.logoImageScale || 1.35}"></div>` : ""}</div>` : ""}
    ${isSiteName || (isLogo && n.logoEditMode === "text") ? `<div class="inspector-section"><div class="inspector-section-title">${isSiteName ? "사이트명 입력" : "로고 텍스트 편집"}</div><div class="field"><label>표시할 글자</label><textarea id="pMainText" rows="2">${n.content || (isSiteName ? "사이트 이름" : "CODE LAB")}</textarea><small class="field-help">${isSiteName ? "사이트명에는 이미지를 넣지 않고 글자만 표시합니다." : "로고 이미지 옆에 표시할 이름을 입력하세요."}</small></div></div>` : ""}
    ${n.label === "언어 선택" ? `<div class="inspector-section language-editor"><div class="inspector-section-title">표시할 언어</div><div class="language-options">${["한국어", "English", "日本語", "中文", "Español", "Français", "Deutsch", "ไทย", "Tiếng Việt", "Bahasa Indonesia", "العربية"].map((language) => `<label><input type="checkbox" data-language-option="${language}" ${(n.languages || ["한국어", "English", "日本語"]).includes(language) ? "checked" : ""}><span>${language}</span></label>`).join("")}</div><div class="field custom-language"><label>목록에 없는 언어 추가</label><div><input id="customLanguage" type="text" placeholder="예: Português"><button id="addCustomLanguage">추가</button></div></div><div class="selected-language-list">${(n.languages || ["한국어", "English", "日本語"]).map((language) => `<span>${escapeHtml(language)}<button data-remove-language="${escapeHtml(language)}" title="${escapeHtml(language)} 제거">×</button></span>`).join("")}</div><small class="field-help">선택한 언어가 캔버스의 드롭다운과 생성 코드에 표시됩니다.</small></div>` : ""}
    ${n.type === "icon" || /아이콘/.test(n.label) ? `<div class="inspector-section"><div class="inspector-section-title">아이콘 바꾸기</div><div class="field"><label>사용할 아이콘</label><select id="pIcon"><option value="✦">반짝이 ✦</option><option value="⌕">검색 ⌕</option><option value="♥">하트 ♥</option><option value="★">별 ★</option><option value="✓">확인 ✓</option><option value="＋">추가 ＋</option><option value="→">화살표 →</option><option value="☰">메뉴 ☰</option><option value="●">원 ●</option></select><small class="field-help">목록에서 원하는 모양을 선택하면 바로 바뀝니다.</small></div></div>` : ""}
    <div class="inspector-section"><div class="inspector-section-title">크기와 위치</div>
      <div class="split"><div class="field"><label>너비</label><input id="pW" type="number" min="20" value="${n.w}"></div><div class="field"><label>높이</label><input id="pH" type="number" min="20" value="${n.h}"></div></div>
      <button class="wide-action" id="centerNode">화면 가운데로 옮기기</button>
      <details class="advanced-settings"><summary>정확한 위치와 회전 설정</summary><div class="split"><div class="field"><label>왼쪽에서 거리</label><input id="pX" type="number" value="${n.x}"></div><div class="field"><label>위쪽에서 거리</label><input id="pY" type="number" value="${n.y}"></div></div><div class="split"><div class="field"><label>회전 각도</label><input id="pRotate" type="number" min="-180" max="180" value="${n.rotate || 0}"></div><div class="field"><label>겹침 순서</label><input id="pZ" type="number" min="1" value="${n.z || 1}"></div></div></details>
    </div>
    ${canEditTypography && (!isLogo || n.logoEditMode === "text") ? `<div class="inspector-section"><div class="inspector-section-title">글자 모양</div>
      <div class="field"><label>글꼴</label>${fontPickerMarkup("pFontFamily", n.fontFamily || "inherit", true)}</div>
      <div class="split"><div class="field"><label>글자 크기</label><input id="pFontSize" type="number" min="8" max="160" value="${n.fontSize || 16}"></div><div class="field"><label>글자 굵기</label><select id="pFontWeight"><option value="400">보통</option><option value="500">약간 굵게</option><option value="600">굵게</option><option value="700">더 굵게</option><option value="800">매우 굵게</option></select></div></div>
      <div class="field"><label>글자 정렬</label><select id="pTextAlign"><option value="left">왼쪽 정렬</option><option value="center">가운데 정렬</option><option value="right">오른쪽 정렬</option></select></div>
      <div class="field"><label>글자 색상</label><div class="color-line"><input id="pColor" type="color" value="${n.color}"><input value="${n.color}" readonly></div></div>
      <details class="advanced-settings"><summary>${isSiteName ? "글자 위치 설정" : "글자 간격과 위치 설정"}</summary>${isSiteName ? "" : `<div class="field"><label>줄 사이 간격</label><input id="pLineHeight" type="number" min=".8" max="3" step=".1" value="${n.lineHeight || 1.5}"></div>`}<div class="split"><div class="field"><label>가로 이동</label><input id="pTextX" type="number" value="${n.textX || 0}"></div><div class="field"><label>세로 이동</label><input id="pTextY" type="number" value="${n.textY || 0}"></div></div></details>
    </div>` : ""}
    <div class="inspector-section"><div class="inspector-section-title">색상과 모양</div>
      <div class="field"><label>배경색</label><div class="color-line"><input id="pBg" type="color" value="${n.bg === "transparent" ? "#ffffff" : n.bg}"><input value="${n.bg}" readonly></div></div>
      <div class="split"><div class="field"><label>모서리 둥글기</label><input id="pRadius" type="number" min="0" max="100" value="${n.radius}"></div><div class="field"><label>내용과 테두리 사이</label><input id="pPadding" type="number" min="0" max="100" value="${n.padding || 0}"></div></div>
      <details class="advanced-settings"><summary>테두리 설정</summary>
      <div class="split"><div class="field"><label>테두리 굵기</label><input id="pBorderWidth" type="number" min="0" max="20" value="${n.borderWidth || 0}"></div><div class="field"><label>테두리 방식</label><select id="pBorderStyle"><option value="solid">실선</option><option value="dashed">점선</option><option value="dotted">도트</option></select></div></div>
      <div class="field"><label>테두리 색상</label><input id="pBorderColor" type="color" value="${n.borderColor || "#d9dbe5"}"></div>
      </details>
    </div>
    <div class="inspector-section advanced-effect-section advanced-effect-controls${isMember ? "" : " member-locked"}">
      <div class="inspector-section-title">고급 효과 <span class="effect-lock">🔒</span></div>
      <div class="field"><label>효과 선택</label><select id="pEffect" ${isMember ? "" : "disabled"}><option value="none">없음</option><option value="fade">Fade</option><option value="slide">Slide</option><option value="zoom">Zoom</option><option value="glow">Glow</option></select></div>
      <div class="field"><label>강도</label><select id="pEffectIntensity" ${isMember ? "" : "disabled"}><option value="weak">약하게</option><option value="normal">보통</option><option value="strong">강하게</option></select></div>
      <div class="field"><label>속도</label><select id="pEffectSpeed" ${isMember ? "" : "disabled"}><option value="slow">느리게</option><option value="normal">보통</option><option value="fast">빠르게</option></select></div>
      <small class="field-help">${isMember ? "선택 즉시 캔버스와 미리보기에 반영됩니다." : "회원가입하면 고급 효과를 사용할 수 있어요."}</small>
    </div>
    <details class="inspector-section optional-section"><summary class="inspector-section-title">효과와 겹침 순서</summary><div class="optional-section-body">
      <div class="field"><label id="opacityLabel">투명도 · ${n.opacity ?? 100}%</label><div class="range-line"><input id="pOpacity" type="range" min="0" max="100" step="1" value="${n.opacity ?? 100}"><input id="pOpacityNumber" type="number" min="0" max="100" step="1" value="${n.opacity ?? 100}"></div><div class="range-ends"><span>0%</span><span>100%</span></div></div>
      <div class="field"><label>그림자</label><select id="pShadow"><option value="none">없음</option><option value="0 4px 12px #1d24401f">작게</option><option value="0 12px 30px #1d24402b">보통</option><option value="0 22px 55px #1d244038">크게</option></select></div>
      <div class="layer-actions"><button id="bringFront">다른 요소 앞으로</button><button id="sendBack">다른 요소 뒤로</button></div>
    </div></details>
    <div class="inspector-section"><button class="danger" id="deleteNode">선택한 요소 삭제</button></div>`;
  const fields = {
    X: "x",
    Y: "y",
    W: "w",
    H: "h",
    Rotate: "rotate",
    Z: "z",
    FontFamily: "fontFamily",
    FontSize: "fontSize",
    FontWeight: "fontWeight",
    LineHeight: "lineHeight",
    TextAlign: "textAlign",
    TextX: "textX",
    TextY: "textY",
    Color: "color",
    Bg: "bg",
    BorderWidth: "borderWidth",
    BorderStyle: "borderStyle",
    BorderColor: "borderColor",
    Radius: "radius",
    Padding: "padding",
    Opacity: "opacity",
    Shadow: "shadow",
    ObjectFit: "objectFit",
    ImagePosition: "imagePosition",
  };
  const effectFields = {
    pEffect: ["effect", "none"],
    pEffectIntensity: ["effectIntensity", "normal"],
    pEffectSpeed: ["effectSpeed", "normal"],
  };
  Object.entries(effectFields).forEach(([id, [key, fallback]]) => {
    const control = $("#" + id);
    if (!control) return;
    control.value = n[key] || fallback;
    control.onchange = () => {
      if (!isMember) {
        openSignup();
        return;
      }
      n[key] = control.value;
      render();
      commit();
      showToast(n.effect && n.effect !== "none" ? "고급 효과를 적용했어요" : "효과를 해제했어요");
    };
  });
  Object.entries(fields).forEach(([id, key]) => {
    const el = $("#p" + id);
    if (!el) return;
    if (id === "FontWeight") el.value = String(n.fontWeight || 600);
    if (id === "FontFamily")
      el.value =
        !n.fontFamily || n.fontFamily === "inherit" ? "" : n.fontFamily;
    if (id === "TextAlign") el.value = n.textAlign || "left";
    if (id === "BorderStyle") el.value = n.borderStyle || "solid";
    if (id === "Shadow") el.value = n.shadow || "none";
    if (id === "ObjectFit") el.value = n.objectFit || "cover";
    if (id === "ImagePosition") el.value = n.imagePosition || "center";
    el.addEventListener("input", () => {
      n[key] = [
        "fontFamily",
        "textAlign",
        "color",
        "bg",
        "borderStyle",
        "borderColor",
        "shadow",
        "objectFit",
        "imagePosition",
      ].includes(key)
        ? el.value
        : +el.value;
      render();
    });
    el.addEventListener("change", commit);
  });
  $$(".font-search").forEach((input) => {
    const picker = input.closest(".font-picker");
    const results = picker.querySelector(".font-results");
    const showFontResults = () => {
      const query = input.value.trim().toLocaleLowerCase("ko");
      const activeMood = picker.dataset.fontMood || "all";
      const matches = availableFontFamilies.filter(
        (font) =>
          font.toLocaleLowerCase("ko").includes(query) &&
          (activeMood === "all" || fontMoodFor(font) === activeMood),
      );
      results.innerHTML = `
        <div class="font-mood-tabs">
          ${Object.entries(fontMoodLabels)
            .map(
              ([mood, label]) =>
                `<button type="button" class="font-mood-tab${activeMood === mood ? " active" : ""}" data-font-mood="${mood}">${label}</button>`,
            )
            .join("")}
        </div>
        <div class="font-result-list">${
          matches.length
            ? matches
            .map(
              (font) =>
                `<button type="button" class="font-option" role="option" data-font="${escapeHtml(font)}" style="font-family:${escapeHtml(font)}"><span>${escapeHtml(font)}</span><small>가나다 ABC 123</small></button>`,
            )
            .join("")
            : `<div class="font-empty">이 분류에 일치하는 글꼴이 없어요.</div>`
        }</div>`;
      picker.classList.add("open");
      results.querySelectorAll("[data-font-mood]").forEach((tab) => {
        tab.onpointerdown = (event) => event.preventDefault();
        tab.onclick = () => {
          picker.dataset.fontMood = tab.dataset.fontMood;
          showFontResults();
        };
      });
      results.querySelectorAll("[data-font]").forEach((option) => {
        option.onpointerdown = (event) => event.preventDefault();
        option.onclick = () => {
          input.value = option.dataset.font;
          input.dispatchEvent(new Event("input", { bubbles: true }));
          input.dispatchEvent(new Event("change", { bubbles: true }));
          picker.classList.remove("open");
        };
      });
    };
    input.addEventListener("focus", showFontResults);
    input.addEventListener("input", showFontResults);
    input.addEventListener("keydown", (event) => {
      if (event.key === "Escape") picker.classList.remove("open");
    });
  });
  $$(".load-local-fonts").forEach((button) => {
    button.onclick = async () => {
      if (!("queryLocalFonts" in window)) {
        showToast("Chrome 또는 Edge 최신 버전에서 사용할 수 있어요.");
        return;
      }
      button.disabled = true;
      button.textContent = "글꼴을 불러오는 중...";
      try {
        const localFonts = await window.queryLocalFonts();
        availableFontFamilies = [
          ...new Set([
            ...availableFontFamilies,
            ...localFonts.map((font) => font.family).filter(Boolean),
          ]),
        ].sort((a, b) => a.localeCompare(b, "ko"));
        drawInspector();
        showToast(
          `내 컴퓨터 글꼴 ${availableFontFamilies.length}개를 불러왔어요.`,
        );
      } catch (error) {
        button.disabled = false;
        button.textContent = "내 컴퓨터 글꼴 불러오기";
        showToast("글꼴 접근 권한을 허용해 주세요.");
      }
    };
  });
  const opacityNumber = $("#pOpacityNumber"),
    opacityRange = $("#pOpacity");
  if (opacityNumber && opacityRange) {
    const syncOpacity = (value, source) => {
      value = Math.max(0, Math.min(100, +value || 0));
      n.opacity = value;
      source === "number"
        ? (opacityRange.value = value)
        : (opacityNumber.value = value);
      $("#opacityLabel").textContent = `투명도 · ${value}%`;
      render();
    };
    opacityNumber.oninput = (e) => syncOpacity(e.target.value, "number");
    opacityRange.oninput = (e) => syncOpacity(e.target.value, "range");
    opacityNumber.onchange = opacityRange.onchange = commit;
  }
  const upload = $("#pImageUpload");
  if (upload)
    upload.onchange = (e) => {
      const file = e.target.files[0];
      if (!file) return;
      if (file.size > 5 * 1024 * 1024) {
        showToast("이미지는 5MB 이하로 선택해 주세요");
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        n.imageSrc = reader.result;
        n.imageName = file.name.replace(/\s+/g, "-");
        render();
        commit();
        showToast("이미지를 적용했어요");
      };
      reader.readAsDataURL(file);
    };
  const iconPicker = $("#pIcon");
  if (iconPicker) {
    iconPicker.value = n.content || (n.label === "검색 아이콘" ? "⌕" : "✦");
    iconPicker.onchange = () => {
      n.content = iconPicker.value;
      render();
      commit();
    };
  }
  $$("[data-logo-mode]").forEach((button) => {
    button.onclick = () => {
      n.logoEditMode = button.dataset.logoMode;
      render();
      drawInspector();
    };
  });
  const logoLayout = $("#pLogoLayout");
  if (logoLayout) {
    logoLayout.value = n.logoLayout || "combined";
    logoLayout.onchange = () => {
      n.logoLayout = logoLayout.value;
      if (n.logoLayout === "image") n.logoEditMode = "image";
      render();
      drawInspector();
      commit();
    };
  }
  const logoImageScale = $("#pLogoImageScale");
  if (logoImageScale) {
    logoImageScale.oninput = () => {
      n.logoImageScale = +logoImageScale.value;
      $("#logoScaleLabel").textContent =
        `이미지 확대 · ${Math.round(n.logoImageScale * 100)}%`;
      render();
    };
    logoImageScale.onchange = commit;
  }
  const mainText = $("#pMainText");
  if (mainText) {
    mainText.oninput = () => {
      n.content = mainText.value;
      render();
    };
    mainText.onchange = commit;
  }
  if (n.label === "언어 선택") {
    n.languages = n.languages?.length
      ? n.languages
      : ["한국어", "English", "日本語"];
    const updateLanguages = () => {
      if (!n.languages.includes(n.selectedLanguage))
        n.selectedLanguage = n.languages[0];
      render();
      drawInspector();
      commit();
    };
    $$("[data-language-option]").forEach((checkbox) => {
      checkbox.onchange = () => {
        const language = checkbox.dataset.languageOption;
        if (!checkbox.checked && n.languages.length === 1) {
          checkbox.checked = true;
          showToast("언어를 한 개 이상 선택해 주세요");
          return;
        }
        n.languages = checkbox.checked
          ? [...new Set([...n.languages, language])]
          : n.languages.filter((item) => item !== language);
        updateLanguages();
      };
    });
    const addCustomLanguage = () => {
      const input = $("#customLanguage");
      const language = input?.value.trim().slice(0, 30);
      if (!language) {
        showToast("추가할 언어 이름을 입력해 주세요");
        return;
      }
      if (n.languages.includes(language)) {
        showToast("이미 추가된 언어예요");
        return;
      }
      n.languages.push(language);
      updateLanguages();
    };
    $("#addCustomLanguage").onclick = addCustomLanguage;
    $("#customLanguage").onkeydown = (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        addCustomLanguage();
      }
    };
    $$("[data-remove-language]").forEach((button) => {
      button.onclick = () => {
        if (n.languages.length === 1) {
          showToast("언어를 한 개 이상 남겨 주세요");
          return;
        }
        n.languages = n.languages.filter(
          (language) => language !== button.dataset.removeLanguage,
        );
        updateLanguages();
      };
    });
  }
  const innerTarget = $("#innerTarget");
  if (innerTarget)
    innerTarget.onchange = (e) => {
      selectedPart = e.target.value === "" ? null : +e.target.value;
      render();
      drawInspector();
    };
  if (part) {
    const innerFields = {
      Text: "text",
      X: "x",
      Y: "y",
      W: "w",
      H: "h",
      FontFamily: "fontFamily",
      FontSize: "fontSize",
      FontWeight: "fontWeight",
      TextAlign: "textAlign",
      Color: "color",
      Bg: "bg",
      Padding: "padding",
      Radius: "radius",
    };
    Object.entries(innerFields).forEach(([id, key]) => {
      const el = $("#i" + id);
      if (!el) return;
      if (["FontFamily", "FontWeight", "TextAlign"].includes(id))
        el.value = part[key] || "";
      el.addEventListener("input", () => {
        part[key] = [
          "text",
          "fontFamily",
          "fontWeight",
          "textAlign",
          "color",
          "bg",
        ].includes(key)
          ? el.value
          : el.value === ""
            ? ""
            : +el.value;
        render();
      });
      el.addEventListener("change", commit);
    });
    $("#hidePart").onclick = () => {
      part.visible = part.visible === false;
      render();
      drawInspector();
      commit();
    };
    $("#resetPart").onclick = () => {
      delete n.parts[selectedPart];
      render();
      drawInspector();
      commit();
    };
  }
  $("#bringFront").onclick = () => {
    n.z = Math.max(1, ...nodes.map((v) => v.z || 1)) + 1;
    render();
    drawInspector();
    commit();
  };
  $("#sendBack").onclick = () => {
    n.z = 1;
    nodes.filter((v) => v !== n).forEach((v) => (v.z = (v.z || 1) + 1));
    render();
    drawInspector();
    commit();
  };
  $("#resetNode").onclick = async () => {
    const approved = await showConfirm({
      title: `"${n.label}" 요소를 초기화할까요?`,
      message:
        "입력한 글자, 이미지, 색상과 크기 설정이 모두 기본값으로 돌아갑니다.",
      confirmText: "초기화하기",
      danger: true,
    });
    if (!approved) return;
    const template = templates[n.type];
    const isStructure = ["헤더", "배너", "콘텐츠", "푸터"].includes(
      n.label,
    );
    const isHeaderItem = componentCatalog.헤더.includes(n.label);
    const isUtilityButton = [
      "검색 아이콘",
      "장바구니",
      "마이페이지",
      "모바일 햄버거 메뉴",
    ].includes(n.label);
    const structureHeight = {
      헤더: 88,
      배너: 460,
      콘텐츠: 620,
      푸터: 240,
    };
    const size = defaultSizeFor(n.label, template);
    Object.assign(n, {
      html: markupFor(n.label, n.type),
      parts: {},
      w: isStructure ? canvasSize.w : size.w,
      h: isStructure ? structureHeight[n.label] : size.h,
      color:
        n.type === "button" && !isUtilityButton ? "#ffffff" : "#252836",
      bg:
        n.type === "button" && !isUtilityButton
            ? "#5b46e8"
            : isStructure || isHeaderItem
              ? "#ffffff"
              : n.type === "section"
                ? "#f5f2ff"
                : "transparent",
      radius:
        n.type === "button"
          ? 9
          : n.type === "card" || n.type === "section"
            ? 14
            : 0,
      content:
        n.label === "검색 아이콘"
          ? "⌕"
          : n.type === "icon"
            ? "✦"
            : "",
      fontSize: n.type === "text" ? 30 : 16,
      fontWeight: n.type === "text" ? 800 : 600,
      fontFamily: "inherit",
      lineHeight: 1.5,
      textAlign: "left",
      textX: 0,
      textY: 0,
      padding: 0,
      opacity: 100,
      rotate: 0,
      borderWidth: 0,
      borderColor: "#d9dbe5",
      borderStyle: "solid",
      shadow: "none",
      effect: "none",
      effectIntensity: "normal",
      effectSpeed: "normal",
      imageSrc: "",
      imageName: "",
      objectFit: n.label === "로고" ? "contain" : "cover",
      imagePosition: "center",
      logoEditMode: n.label === "로고" ? "image" : "",
      logoLayout: n.label === "로고" ? "combined" : "",
      logoImageScale: n.label === "로고" ? 1.35 : 1,
      languages:
        n.label === "언어 선택"
          ? ["한국어", "English", "日本語"]
          : undefined,
      selectedLanguage: n.label === "언어 선택" ? "한국어" : "",
    });
    n.views = {};
    Object.keys(deviceSizes).forEach((name) => {
      const ratio = deviceSizes[name].w / canvasSize.w;
      n.views[name] = {
        ...captureResponsive(n),
        x: n.fluidWidth ? 0 : Math.round(n.x * ratio),
        y: Math.round(n.y * ratio),
        w: n.fluidWidth
          ? deviceSizes[name].w
          : Math.min(deviceSizes[name].w, n.w),
      };
    });
    n.views[currentBreakpoint] = captureResponsive(n);
    selectedPart = null;
    render();
    drawInspector();
    commit();
    showToast("기본설정으로 초기화했어요");
  };
  $("#copyNode").onclick = () => {
    const copy = {
      ...n,
      parts: JSON.parse(JSON.stringify(n.parts || {})),
      id: "el-" + Date.now(),
      x: n.x + 20,
      y: n.y + 20,
      z: Math.max(1, ...nodes.map((node) => node.z || 1)) + 1,
    };
    nodes.push(copy);
    selectNode(copy.id);
    commit();
    showToast("선택한 요소를 복사했어요");
  };
  $("#centerNode").onclick = () => {
    const parent = n.parentId
      ? nodes.find((node) => node.id === n.parentId)
      : null;
    n.x = parent
      ? Math.round(parent.x + (parent.w - n.w) / 2)
      : Math.max(0, Math.round((canvasSize.w - n.w) / 2));
    containNodeInParent(n);
    render();
    drawInspector();
    commit();
  };
  $("#deleteNode").onclick = () => {
    deleteSelectedTree();
  };
}

function deleteSelectedTree() {
  const targets = selectedIds.size
    ? new Set(selectedIds)
    : selected
      ? new Set([selected])
      : new Set();
  deleteNodeIds(targets);
}

function deleteNodeIds(removeIds) {
  if (!removeIds.size) return;
  let foundChild = true;
  while (foundChild) {
    foundChild = false;
    nodes.forEach((node) => {
      if (
        node.parentId &&
        removeIds.has(node.parentId) &&
        !removeIds.has(node.id)
      ) {
        removeIds.add(node.id);
        foundChild = true;
      }
    });
  }
  const removedCount = removeIds.size;
  nodes = nodes.filter((node) => !removeIds.has(node.id));
  selected = null;
  selectedIds.clear();
  focusedNodeId = null;
  selectedPart = null;
  workspace.classList.remove("inspector-open");
  activeGuides = { x: null, y: null };
  render();
  commit();
  showToast(
    removedCount > 1
      ? `선택한 요소 ${removedCount}개를 삭제했어요`
      : "선택한 요소를 삭제했어요",
  );
}

$(".close-inspector").onclick = () => {
  selected = null;
  selectedIds.clear();
  focusedNodeId = null;
  selectedPart = null;
  workspace.classList.remove("inspector-open");
  render();
};
// 6. 저장과 실행 취소: 직렬화한 스냅샷을 localStorage와 작업 기록에 보관합니다.
function snapshot() {
  return JSON.stringify(nodes);
}
function setSaveState(text, saving = false) {
  const state = $("#saveState");
  if (!state) return;
  state.textContent = text;
  state.classList.toggle("saving", saving);
}
function saveProject(notify = false, showSavedModal = true) {
  clearTimeout(autoSaveTimer);
  saveCurrentBreakpoint();
  syncActivePage();
  setSaveState("저장 중", true);
  try {
    const archive = notify
      ? JSON.parse(localStorage.getItem(currentArchiveKey()) || "[]")
      : null;
    if (notify && !isMember && archive.length >= 1) {
      $("#storageLimitModal").classList.add("open");
      updateSavedCount();
      setSaveState("저장됨");
      return false;
    }
    let projectTitle = $("#projectName")?.textContent.trim() || "새 프로젝트";
    if (
      notify &&
      isAutomaticProjectName(projectTitle) &&
      archive.some((item) => item.name === projectTitle)
    ) {
      projectTitle = nextAutomaticProjectName(archive);
      $("#projectName").textContent = projectTitle;
    }
    const savedProjectId = notify ? Date.now() : activeSavedProjectId;
    localStorage.setItem(
      projectStorageKey,
      JSON.stringify({
        name: projectTitle,
        nodes,
        canvasSize,
        pages,
        currentPageId,
        savedAt: Date.now(),
        savedProjectId,
      }),
    );
    setSaveState("저장됨");
    if (notify) {
      activeSavedProjectId = savedProjectId;
      archive.unshift({
        id: savedProjectId,
        name: projectTitle,
        nodes: JSON.parse(JSON.stringify(nodes)),
        canvasSize: { ...canvasSize },
        pages: JSON.parse(JSON.stringify(pages)),
        currentPageId,
        savedAt: Date.now(),
      });
      const archiveLimit = isMember ? 20 : 1;
      localStorage.setItem(
        currentArchiveKey(),
        JSON.stringify(archive.slice(0, archiveLimit)),
      );
      updateSavedCount();
      $("#savedProjectName").textContent = projectTitle;
      $("#savedAt").textContent = new Intl.DateTimeFormat("ko-KR", {
        hour: "2-digit",
        minute: "2-digit",
      }).format(new Date()) + " 저장";
      if (showSavedModal) $("#saveModal").classList.add("open");
    }
    return true;
  } catch (error) {
    setSaveState("저장 실패");
    if (notify) showToast("브라우저 저장 공간이 부족해요");
    return false;
  }
}
function scheduleAutoSave() {
  clearTimeout(autoSaveTimer);
  setSaveState("저장 중", true);
  autoSaveTimer = setTimeout(() => saveProject(), 650);
}
// 브라우저 저장소의 프로젝트를 읽되, 손상되거나 예전 형식인 값은 정규화 과정에서 걸러냅니다.
function loadProject() {
  try {
    const saved = JSON.parse(localStorage.getItem(projectStorageKey));
    if (!saved) return false;
    pages = normalizePages(saved);
    currentPageId = pages.some((page) => page.id === saved.currentPageId)
      ? saved.currentPageId
      : pages[0].id;
    loadActivePage(false);
    if (saved.name) $("#projectName").textContent = saved.name;
    activeSavedProjectId = saved.savedProjectId ?? null;
    setSaveState("저장됨");
    return true;
  } catch (error) {
    return false;
  }
}
// 현재 상태를 실행 취소 기록과 localStorage에 함께 저장하는 편집 작업의 마침점입니다.
function commit() {
  const s = snapshot();
  if (history[historyIndex] === s) return;
  history = history.slice(0, historyIndex + 1);
  history.push(s);
  historyIndex = history.length - 1;
  scheduleAutoSave();
}

function makePage(name, pageNodes = [], size = { w: 1920, h: 1080 }, breakpoint = "desktop") {
  return {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    name,
    nodes: JSON.parse(JSON.stringify(pageNodes)),
    canvasSize: { ...size },
    breakpoint,
  };
}
function normalizePages(source = {}) {
  if (Array.isArray(source.pages) && source.pages.length) {
    return source.pages.map((page, index) => ({
      id: page.id || `${Date.now()}-${index}`,
      name: page.name || `페이지 ${index + 1}`,
      nodes: removeJavascriptWidgetsFromNodes(
        Array.isArray(page.nodes) ? page.nodes : [],
      ),
      canvasSize: page.canvasSize || { w: 1920, h: 1080 },
      breakpoint: page.breakpoint || "desktop",
    }));
  }
  return [
    makePage(
      "페이지 1",
      removeJavascriptWidgetsFromNodes(source.nodes || []),
      source.canvasSize,
    ),
  ];
}
function syncActivePage() {
  const page = pages.find((item) => item.id === currentPageId);
  if (!page) return;
  page.nodes = JSON.parse(JSON.stringify(nodes));
  page.canvasSize = { ...canvasSize };
  page.breakpoint = currentBreakpoint;
}
function renderPageTabs() {
  const tabs = $("#pageTabs");
  if (!tabs) return;
  tabs.innerHTML = pages
    .map(
      (page) => `<button class="page-tab${page.id === currentPageId ? " active" : ""}" data-page-id="${page.id}" role="tab" aria-selected="${page.id === currentPageId}" title="더블클릭해서 이름 변경"><span class="page-tab-name">${escapeHtml(page.name)}</span>${pages.length > 1 ? '<span class="page-tab-delete" data-delete-page aria-label="페이지 삭제">×</span>' : ""}</button>`,
    )
    .join("");
  tabs.querySelector(".page-tab.active")?.scrollIntoView({ block: "nearest", inline: "nearest" });
}
function loadActivePage(shouldFit = true) {
  const page = pages.find((item) => item.id === currentPageId) || pages[0];
  if (!page) return;
  currentPageId = page.id;
  nodes = JSON.parse(
    JSON.stringify(removeJavascriptWidgetsFromNodes(page.nodes || [])),
  );
  page.nodes = JSON.parse(JSON.stringify(nodes));
  selected = null;
  selectedIds.clear();
  focusedNodeId = null;
  selectedPart = null;
  history = [];
  historyIndex = -1;
  currentBreakpoint = page.breakpoint || "desktop";
  shell.className = "canvas-shell " + (currentBreakpoint === "desktop" ? "" : currentBreakpoint);
  $$('[data-device]').forEach((button) =>
    button.classList.toggle("active", button.dataset.device === currentBreakpoint),
  );
  workspace.classList.remove("inspector-open");
  applyCanvasSize(page.canvasSize?.w || 1920, page.canvasSize?.h || 1080);
  renderPageTabs();
  render();
  if (shouldFit) fitCanvas();
  history = [snapshot()];
  historyIndex = 0;
}
function addPage() {
  if (!isMember) {
    openSignup();
    return;
  }
  syncActivePage();
  const used = new Set(pages.map((page) => page.name));
  let number = pages.length + 1;
  while (used.has(`페이지 ${number}`)) number += 1;
  const page = makePage(`페이지 ${number}`);
  pages.push(page);
  currentPageId = page.id;
  loadActivePage();
  scheduleAutoSave();
  showToast(`${page.name}를 만들었어요`);
}
async function createNewProject() {
  const choice = await showConfirm({
    title: "새 프로젝트를 만들까요?",
    message: "현재 프로젝트를 저장한 뒤 새로 만들거나, 저장하지 않고 바로 시작할 수 있어요.",
    confirmText: "저장하지 않고 만들기",
    secondaryText: "저장하고 만들기",
  });
  if (!choice) return;
  if (choice === "secondary" && !saveProject(true, false)) return;
  const archive = JSON.parse(localStorage.getItem(currentArchiveKey()) || "[]");
  const firstPage = makePage("페이지 1");
  pages = [firstPage];
  currentPageId = firstPage.id;
  activeSavedProjectId = null;
  currentBreakpoint = "desktop";
  $("#projectName").textContent = nextAutomaticProjectName(archive);
  loadActivePage();
  scheduleAutoSave();
  showToast("새 프로젝트를 만들었어요");
}
function restore(i) {
  if (i < 0 || i >= history.length) return false;
  historyIndex = i;
  nodes = JSON.parse(history[i]);
  selected = null;
  selectedPart = null;
  workspace.classList.remove("inspector-open");
  render();
  scheduleAutoSave();
  return true;
}
$("#undoBtn").onclick = () => restore(historyIndex - 1);
$("#redoBtn").onclick = () => restore(historyIndex + 1);
function applyView() {
  shell.style.transform = `translate(${view.x}px,${view.y}px) scale(${view.zoom})`;
  shell.style.setProperty("--inv-zoom", 1 / view.zoom);
  $("#zoomValue").textContent = Math.round(view.zoom * 100) + "%";
}
function setZoom(
  next,
  originX = viewport.clientWidth / 2,
  originY = viewport.clientHeight / 2,
) {
  const old = view.zoom;
  next = Math.max(0.15, Math.min(3, next));
  view.x = originX - (originX - view.x) * (next / old);
  view.y = originY - (originY - view.y) * (next / old);
  view.zoom = next;
  applyView();
}
function fitCanvas() {
  const pad = 80,
    availableW = Math.max(100, viewport.clientWidth - pad),
    availableH = Math.max(100, viewport.clientHeight - pad);
  view.zoom = Math.max(
    0.15,
    Math.min(1, availableW / canvasSize.w, availableH / canvasSize.h),
  );
  view.x = Math.round((viewport.clientWidth - canvasSize.w * view.zoom) / 2);
  view.y = Math.round((viewport.clientHeight - canvasSize.h * view.zoom) / 2);
  applyView();
}

// 패널이 차지하는 공간이 변하는 동안 캔버스도 매 프레임 함께 이동합니다.
// 전환 마지막에 한 번 튀는 대신 패널과 캔버스가 하나의 동작처럼 보입니다.
let inspectorTransitioning = false;
let inspectorFitFrame = 0;

const inspectorResizeObserver = new ResizeObserver(() => {
  if (!inspectorTransitioning || inspectorFitFrame) return;
  inspectorFitFrame = requestAnimationFrame(() => {
    inspectorFitFrame = 0;
    if (focusedNodeId) focusSmallNode(focusedNodeId, false);
    else fitCanvas();
  });
});
inspectorResizeObserver.observe(viewport);

workspace.addEventListener("transitionrun", (event) => {
  if (
    event.target === workspace &&
    event.propertyName === "grid-template-columns"
  )
    inspectorTransitioning = true;
});

workspace.addEventListener("transitionend", (event) => {
  if (
    event.target === workspace &&
    event.propertyName === "grid-template-columns"
  ) {
    inspectorTransitioning = false;
    if (focusedNodeId) focusSmallNode(focusedNodeId, false);
    else fitCanvas();
  }
});
function applyCanvasSize(w, h) {
  canvasSize = {
    w: Math.max(320, Math.min(1920, +w || 1120)),
    h: Math.max(400, Math.min(3000, +h || 720)),
  };
  shell.style.width = canvasSize.w + "px";
  shell.style.maxWidth = "none";
  shell.style.minHeight = canvasSize.h + "px";
  canvas.style.width = canvasSize.w + "px";
  canvas.style.minHeight = canvasSize.h + "px";
  $("#canvasW").value = canvasSize.w;
  $("#canvasH").value = canvasSize.h;
  $$(".canvas-presets button").forEach((b) => {
    const [pw, ph] = b.dataset.size.split(",").map(Number);
    b.classList.toggle("active", pw === canvasSize.w && ph === canvasSize.h);
  });
  nodes.forEach((n) => {
    n.x = Math.min(n.x, Math.max(0, canvasSize.w - n.w));
    n.y = Math.min(n.y, Math.max(0, canvasSize.h - n.h));
  });
  render();
}
function switchBreakpoint(name) {
  loadBreakpoint(name);
  const size = deviceSizes[name];
  shell.className = "canvas-shell " + (name === "desktop" ? "" : name);
  applyCanvasSize(size.w, size.h);
  fitCanvas();
  render();
  $$("[data-device]").forEach((b) =>
    b.classList.toggle("active", b.dataset.device === name),
  );
  scheduleAutoSave();
  showToast(`${name.toUpperCase()} 레이아웃을 편집합니다`);
}
function setDevice(d) {
  switchBreakpoint(d);
}
$$("[data-device]").forEach(
  (b) =>
    (b.onclick = () => {
      if (b.classList.contains("member-locked")) {
        openSignup();
        return;
      }
      setDevice(b.dataset.device);
    }),
);
$$(".canvas-presets button").forEach(
  (b) =>
    (b.onclick = () => {
      if (b.classList.contains("member-locked")) {
        openSignup();
        return;
      }
      const names = {
        "1920,1080": "desktop",
        "1024,768": "laptop",
        "768,1024": "tablet",
        "390,844": "mobile",
      };
      switchBreakpoint(names[b.dataset.size]);
    }),
);
$("#applyCanvas").onclick = () => {
  applyCanvasSize($("#canvasW").value, $("#canvasH").value);
  deviceSizes[currentBreakpoint] = { ...canvasSize };
  fitCanvas();
  commit();
  scheduleAutoSave();
  showToast(
    `${currentBreakpoint.toUpperCase()} 캔버스를 ${canvasSize.w} × ${canvasSize.h}px로 변경했어요`,
  );
};
["canvasW", "canvasH"].forEach((id) =>
  $("#" + id).addEventListener("keydown", (e) => {
    if (e.key === "Enter") $("#applyCanvas").click();
  }),
);
$("#zoomIn").onclick = () => setZoom(view.zoom + 0.1);
$("#zoomOut").onclick = () => setZoom(view.zoom - 0.1);
$("#zoomValue").onclick = fitCanvas;
$("#fitCanvas").onclick = fitCanvas;
$("#gridToggle").onclick = (e) => {
  snapToGrid = !snapToGrid;
  canvas.classList.toggle("grid", snapToGrid);
  e.currentTarget.classList.toggle("active", snapToGrid);
  showToast(snapToGrid ? "8px 격자를 켰어요" : "자유 이동 모드입니다");
};
viewport.addEventListener(
  "wheel",
  (e) => {
    e.preventDefault();
    const rect = viewport.getBoundingClientRect();
    if (e.ctrlKey || e.metaKey) {
      setZoom(
        view.zoom * (e.deltaY > 0 ? 0.9 : 1.1),
        e.clientX - rect.left,
        e.clientY - rect.top,
      );
    } else {
      view.x -= e.deltaX;
      view.y -= e.deltaY;
      applyView();
    }
  },
  { passive: false },
);
viewport.addEventListener("pointerdown", (e) => {
  if (e.button === 1 || spacePressed) {
    e.preventDefault();
    panning = {
      sx: e.clientX,
      sy: e.clientY,
      x: view.x,
      y: view.y,
      moved: false,
    };
    viewport.classList.add("panning");
    viewport.setPointerCapture?.(e.pointerId);
  }
});
viewport.addEventListener("pointermove", (e) => {
  if (!panning) return;
  if (Math.abs(e.clientX - panning.sx) > 3 || Math.abs(e.clientY - panning.sy) > 3)
    panning.moved = true;
  view.x = panning.x + e.clientX - panning.sx;
  view.y = panning.y + e.clientY - panning.sy;
  applyView();
});
viewport.addEventListener("pointerup", () => {
  if (panning?.moved) {
    suppressCanvasClick = true;
    setTimeout(() => (suppressCanvasClick = false), 0);
  }
  panning = null;
  viewport.classList.remove("panning");
});
document.addEventListener("keydown", (e) => {
  const editing =
    ["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName) ||
    document.activeElement.isContentEditable;
  if (e.code === "Space" && !editing) {
    spacePressed = true;
    viewport.style.cursor = "grab";
    e.preventDefault();
  }
  if ((e.ctrlKey || e.metaKey) && !editing && e.key.toLowerCase() === "z") {
    e.preventDefault();
    if (e.shiftKey) {
      if (restore(historyIndex + 1)) showToast("다시 실행했어요");
    } else {
      if (restore(historyIndex - 1)) showToast("이전 상태로 되돌렸어요");
    }
  }
  if ((e.ctrlKey || e.metaKey) && !editing && e.key.toLowerCase() === "y") {
    e.preventDefault();
    if (restore(historyIndex + 1)) showToast("다시 실행했어요");
  }
  if ((e.ctrlKey || e.metaKey) && e.key === "0") {
    e.preventDefault();
    fitCanvas();
  }
  if (
    (e.key === "Delete" || e.key === "Backspace") &&
    !editing &&
    (selected || selectedIds.size)
  ) {
    e.preventDefault();
    deleteSelectedTree();
  }
});
document.addEventListener("keyup", (e) => {
  if (e.code === "Space") {
    spacePressed = false;
    viewport.style.cursor = "";
  }
});
let catalogStateBeforeSearch = null;
$("#search").oninput = (e) => {
  const q = e.target.value.trim().toLowerCase();
  const groups = $$(".catalog-group");

  if (q && !catalogStateBeforeSearch) {
    catalogStateBeforeSearch = new Map(
      groups.map((group) => [group, group.classList.contains("collapsed")]),
    );
  }

  groups.forEach((group) => {
    let found = false;
    group.querySelectorAll(".component").forEach((component) => {
      const match = component.textContent.toLowerCase().includes(q);
      component.style.display = match ? "flex" : "none";
      found ||= match;
    });

    if (q) {
      group.classList.toggle("collapsed", !found);
    } else {
      group.classList.toggle(
        "collapsed",
        catalogStateBeforeSearch?.get(group) ?? true,
      );
    }
  });

  if (!q) catalogStateBeforeSearch = null;
};
$("#saveBtn").onclick = () => saveProject(true);
$("#newPageBtn").onclick = createNewProject;
$("#addPageTab").onclick = addPage;
$("#pageTabs").onclick = async (event) => {
  const tab = event.target.closest("[data-page-id]");
  if (!tab) return;
  const pageId = tab.dataset.pageId;
  if (event.target.closest("[data-delete-page]")) {
    const page = pages.find((item) => item.id === pageId);
    if (!page || pages.length === 1) return;
    const approved = await showConfirm({
      title: `"${page.name}" 페이지를 삭제할까요?`,
      message: "이 페이지의 작업 내용은 다시 복구할 수 없습니다.",
      confirmText: "삭제하기",
      danger: true,
    });
    if (!approved) return;
    const index = pages.findIndex((item) => item.id === pageId);
    pages.splice(index, 1);
    if (currentPageId === pageId) {
      currentPageId = pages[Math.min(index, pages.length - 1)].id;
      loadActivePage();
    } else renderPageTabs();
    scheduleAutoSave();
    showToast("페이지를 삭제했어요");
    return;
  }
  if (pageId === currentPageId) return;
  syncActivePage();
  currentPageId = pageId;
  loadActivePage();
  scheduleAutoSave();
};
$("#pageTabs").ondblclick = (event) => {
  const tab = event.target.closest("[data-page-id]");
  if (!tab || event.target.closest("[data-delete-page]")) return;
  const page = pages.find((item) => item.id === tab.dataset.pageId);
  if (!page) return;
  openPageNameModal(page);
};
let renamingPageId = null;
function closePageNameModal() {
  $("#pageNameModal").classList.remove("open");
  renamingPageId = null;
}
function openPageNameModal(page) {
  renamingPageId = page.id;
  const input = $("#pageNameInput");
  input.value = page.name;
  $("#pageNameCount").textContent = input.value.length;
  $("#pageNameModal").classList.add("open");
  requestAnimationFrame(() => {
    input.focus();
    input.select();
  });
}
$("#pageNameInput").oninput = (event) => {
  $("#pageNameCount").textContent = event.target.value.length;
};
$("#pageNameForm").onsubmit = (event) => {
  event.preventDefault();
  const page = pages.find((item) => item.id === renamingPageId);
  const nextName = $("#pageNameInput").value.trim().slice(0, 30);
  if (!page || !nextName) {
    $("#pageNameInput").focus();
    return;
  }
  page.name = nextName;
  renderPageTabs();
  scheduleAutoSave();
  closePageNameModal();
  showToast("페이지 이름을 변경했어요");
};
$("#cancelPageName").onclick = closePageNameModal;
$("#pageNameModal").onclick = (event) => {
  if (event.target.id === "pageNameModal") closePageNameModal();
};
$("#pageNameModal").onkeydown = (event) => {
  if (event.key === "Escape") closePageNameModal();
};
function renderSavedProjects() {
  const archive = JSON.parse(localStorage.getItem(currentArchiveKey()) || "[]");
  $("#savedProjectList").innerHTML = archive.length
    ? archive
        .map(
          (item) => `<div class="saved-project-item">
            <div><strong>${item.name}</strong><small>${new Date(item.savedAt).toLocaleString("ko-KR")}</small></div>
            <div class="saved-project-actions">
              <button data-load-project="${item.id}">열기</button>
              <button class="delete-saved-project" data-delete-project="${item.id}">삭제</button>
            </div>
          </div>`,
        )
        .join("")
    : '<div class="empty-inspector">아직 저장한 프로젝트가 없어요.</div>';
  $$("[data-load-project]").forEach((button) => {
    button.onclick = async () => {
      const item = archive.find((saved) => saved.id === +button.dataset.loadProject);
      if (!item) return;
      pages = normalizePages(item);
      currentPageId = pages.some((page) => page.id === item.currentPageId)
        ? item.currentPageId
        : pages[0].id;
      $("#projectName").textContent = item.name;
      activeSavedProjectId = item.id;
      loadActivePage();
      scheduleAutoSave();
      $("#savedProjectsModal").classList.remove("open");
      showToast("저장한 프로젝트를 불러왔어요");
    };
  });
  $$("[data-delete-project]").forEach((button) => {
    button.onclick = async () => {
      const item = archive.find(
        (saved) => saved.id === +button.dataset.deleteProject,
      );
      if (!item) return;
      const approved = await showConfirm({
        title: `"${item.name}" 프로젝트를 삭제할까요?`,
        message:
          "저장함에서 삭제하면 다시 불러올 수 없습니다. 현재 편집 중인 캔버스에는 영향을 주지 않아요.",
        confirmText: "삭제하기",
        danger: true,
      });
      if (!approved) return;
      if (activeSavedProjectId === item.id) activeSavedProjectId = null;
      const nextArchive = compactAutomaticProjectNames(
        archive.filter((saved) => saved.id !== item.id),
      );
      localStorage.setItem(currentArchiveKey(), JSON.stringify(nextArchive));
      renderSavedProjects();
      updateSavedCount();
      showToast("저장한 프로젝트를 삭제했어요");
    };
  });
}
$("#savedProjectsBtn").onclick = () => {
  renderSavedProjects();
  $("#savedProjectsModal").classList.add("open");
};
$("#closeSavedProjects").onclick = () =>
  $("#savedProjectsModal").classList.remove("open");
$("#savedProjectsModal").onclick = (event) => {
  if (event.target.id === "savedProjectsModal")
    event.currentTarget.classList.remove("open");
};
$("#closeSave").onclick = () => $("#saveModal").classList.remove("open");
$("#saveModal").onclick = (event) => {
  if (event.target.id === "saveModal")
    event.currentTarget.classList.remove("open");
};
const projectName = $("#projectName");
function startProjectNameEdit() {
  if (projectName.contentEditable === "true") return;
  projectName.dataset.beforeEdit = projectName.textContent.trim();
  projectName.contentEditable = "true";
  projectName.focus();
  const selection = window.getSelection();
  const range = document.createRange();
  range.selectNodeContents(projectName);
  selection.removeAllRanges();
  selection.addRange(range);
}
projectName.ondblclick = (event) => {
  event.stopPropagation();
  startProjectNameEdit();
};
$("#editProjectName").onclick = (event) => {
  event.stopPropagation();
  startProjectNameEdit();
};
projectName.oninput = () => {
  const value = projectName.textContent || "";
  if (value.length > 40) projectName.textContent = value.slice(0, 40);
};
projectName.onkeydown = (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    projectName.blur();
  }
  if (event.key === "Escape") {
    projectName.textContent =
      projectName.dataset.beforeEdit || "새 프로젝트";
    projectName.blur();
  }
};
projectName.onblur = () => {
  if (projectName.contentEditable !== "true") return;
  projectName.contentEditable = "false";
  const before = projectName.dataset.beforeEdit || "새 프로젝트";
  projectName.textContent = projectName.textContent.trim().slice(0, 40) || "새 프로젝트";
  scheduleAutoSave();
  if (projectName.textContent !== before)
    showToast("프로젝트 이름을 변경했어요");
};
const previewWidths = { desktop: 1920, laptop: 1024, mobile: 390 };
const previewHeights = { desktop: 1080, laptop: 768, mobile: 844 };
const previewStage = $(".preview-stage");
const previewFrame = $("#previewFrame");
const monitorScreen = $("#monitorScreen");
let previewView = { x: 0, y: 0, scale: 1 };
let currentPreviewDevice = "desktop";
const removedJavascriptWidgets = new Set([
  "클릭 카운터", "콘텐츠 토글", "탭 전환", "모달 열기", "아코디언",
  "좋아요 버튼", "글자 수 카운터", "비밀번호 표시", "랜덤 색상", "현재 시간",
]);
const isPreviewableNode = (node) =>
  node && !removedJavascriptWidgets.has(node.label);
const removeJavascriptWidgetsFromNodes = (items = []) =>
  items.filter(isPreviewableNode);

function removeJavascriptWidgetsFromProject(project) {
  if (!project || typeof project !== "object") return project;
  if (Array.isArray(project.nodes))
    project.nodes = removeJavascriptWidgetsFromNodes(project.nodes);
  if (Array.isArray(project.pages))
    project.pages.forEach((page) => {
      page.nodes = removeJavascriptWidgetsFromNodes(page.nodes || []);
    });
  return project;
}

function purgeStoredJavascriptWidgets() {
  [projectStorageKey, projectArchiveKey, guestProjectArchiveKey].forEach((key) => {
    try {
      const stored = JSON.parse(localStorage.getItem(key));
      if (!stored) return;
      const cleaned = Array.isArray(stored)
        ? stored.map(removeJavascriptWidgetsFromProject)
        : removeJavascriptWidgetsFromProject(stored);
      localStorage.setItem(key, JSON.stringify(cleaned));
    } catch {}
  });
}
function applyPreviewView() {
  const width = previewWidths[currentPreviewDevice];
  const height = previewHeights[currentPreviewDevice];
  const renderedWidth = width * previewView.scale;
  const renderedHeight = height * previewView.scale;
  previewFrame.style.left =
    (monitorScreen.clientWidth - renderedWidth) / 2 + previewView.x + "px";
  previewFrame.style.top =
    (currentPreviewDevice === "desktop"
      ? 0
      : (monitorScreen.clientHeight - renderedHeight) / 2) +
    previewView.y +
    "px";
  previewFrame.style.transform = `scale(${previewView.scale})`;
}
function resetPreviewView(scale = 1) {
  previewView = { x: 0, y: 0, scale };
  applyPreviewView();
  previewStage.scrollTop = 0;
}
function setPreviewDevice(device) {
  currentPreviewDevice = device;
  const deviceWidth = previewWidths[device];
  const deviceHeight = previewHeights[device];
  previewFrame.style.width = deviceWidth + "px";
  previewFrame.style.height = deviceHeight + "px";
  $$("[data-preview-device]").forEach((button) =>
    button.classList.toggle("active", button.dataset.previewDevice === device),
  );
  const availableWidth = monitorScreen.clientWidth;
  const availableHeight = monitorScreen.clientHeight;
  resetPreviewView(
    currentPreviewDevice === "desktop"
      ? Math.min(1, availableWidth / deviceWidth)
      : Math.min(
          1,
          availableWidth / deviceWidth,
          availableHeight / deviceHeight,
        ),
  );
}
// 7. 미리보기와 코드 생성: 편집기 상태를 실제 화면과 배포 가능한 HTML/CSS로 변환합니다.
// 편집 핸들·선택선은 제거하고 캔버스의 계산된 모양만 복제해 미리보기 문서를 만듭니다.
function canvasPreviewDocument() {
  const previewNodes = [...canvas.querySelectorAll(".node")]
    .filter((source) =>
      isPreviewableNode(nodes.find((node) => node.id === source.dataset.id)),
    )
    .map((source) => {
    const sourceNode = nodes.find((node) => node.id === source.dataset.id);
    const clone = source.cloneNode(true);
    clone.classList.remove("selected");
    clone
      .querySelectorAll(".inner-selected")
      .forEach((element) => element.classList.remove("inner-selected"));
    clone
      .querySelectorAll(".logo-part-active")
      .forEach((element) => element.classList.remove("logo-part-active"));
    clone
      .querySelectorAll(".resize-handle, .selection-note, .selection-hologram, .canvas-delete-node")
      .forEach((decoration) => decoration.remove());
    const sourceElements = [source, ...source.querySelectorAll("*")];
    const cloneElements = [clone, ...clone.querySelectorAll("*")];
    cloneElements.forEach((target, index) => {
      const original = sourceElements[index];
      if (!original || original.classList?.contains("resize-handle")) return;
      const computed = getComputedStyle(original);
      [...computed].forEach((property) => {
        target.style.setProperty(property, computed.getPropertyValue(property));
      });
      // 편집용 커서는 인라인으로 복제하지 않고 미리보기 CSS가 결정합니다.
      target.style.removeProperty("cursor");
      if (
        original === source ||
        original.classList?.contains("inner-selected") ||
        original.classList?.contains("logo-part-active")
      ) {
        target.style.outline = "none";
        target.style.filter = "none";
        target.style.animation = "none";
        target.style.boxShadow =
          original === source ? sourceNode?.shadow || "none" : "none";
        if (original === source)
          target.style.zIndex = String(sourceNode?.z || 1);
      }
      target.removeAttribute("data-id");
      target.removeAttribute("data-name");
    });
    clone
      .querySelectorAll("[data-editor-only]")
      .forEach((guide) => guide.remove());
    if (sourceNode?.label === "로고") {
      clone.style.overflow = "hidden";
      clone.querySelector(".node-content-frame")?.style.setProperty(
        "overflow",
        "hidden",
      );
      clone.querySelector(".real-logo")?.style.setProperty("overflow", "hidden");
    }
    if (sourceNode?.label === "언어 선택") {
      const dropdown = clone.querySelector(".language-dropdown");
      if (dropdown) {
        dropdown.dataset.previewLanguage = "true";
        clone.style.overflow = "visible";
        clone
          .querySelector(".node-content-frame")
          ?.style.setProperty("overflow", "visible");
        clone
          .querySelector(".language-menu")
          ?.style.setProperty("display", "none");
      }
    }
    if (sourceNode?.effect && sourceNode.effect !== "none") {
      const effectFrame = clone.querySelector(".node-content-frame");
      ["animation", "transform", "transition", "box-shadow", "filter"].forEach(
        (property) => effectFrame?.style.removeProperty(property),
      );
    }
    clone.style.pointerEvents = "auto";
    clone.style.cursor = "default";
    return clone.outerHTML;
    });

  return `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=${canvasSize.w}">
  <title>캔버스 미리보기</title>
  <style>
    html, body {
      width: ${canvasSize.w}px;
      height: ${canvasSize.h}px;
      margin: 0;
      overflow: hidden;
      background: #fff;
    }
    .preview-canvas {
      position: relative;
      width: ${canvasSize.w}px;
      height: ${canvasSize.h}px;
      overflow: hidden;
      background: #fff;
    }
    .preview-canvas,
    .preview-canvas * {
      cursor: default;
    }
    .preview-canvas a,
    .preview-canvas button,
    .preview-canvas label,
    .preview-canvas select,
    .preview-canvas summary,
    .preview-canvas [role="button"] {
      cursor: pointer;
    }
    .preview-canvas input,
    .preview-canvas textarea,
    .preview-canvas [contenteditable="true"] {
      cursor: text;
    }
    .preview-canvas input[type="checkbox"],
    .preview-canvas input[type="radio"],
    .preview-canvas input[type="range"] {
      cursor: pointer;
    }
    .language-dropdown.preview-open .language-menu {
      display: block;
    }
    .node.advanced-fade:hover > .node-content-frame {
      animation: advancedHoverFade var(--effect-duration) ease both;
    }
    .node.advanced-slide:hover > .node-content-frame {
      animation: advancedHoverSlide var(--effect-duration) cubic-bezier(.2,.8,.2,1) both;
    }
    .node.advanced-zoom:hover > .node-content-frame {
      transform: scale(var(--effect-scale));
    }
    .node.advanced-glow:hover > .node-content-frame {
      box-shadow: var(--effect-glow);
      filter: saturate(1.12);
    }
    @keyframes advancedHoverFade {
      from { opacity: .25; }
      to { opacity: 1; }
    }
    @keyframes advancedHoverSlide {
      from { opacity: .45; transform: translateY(var(--effect-distance)); }
      to { opacity: 1; transform: translateY(0); }
    }
  </style>
</head>
<body>
  <div class="preview-canvas">
    ${previewNodes.join("\n    ")}
  </div>
  <script>
    document.querySelectorAll("[data-preview-language]").forEach(function (dropdown) {
      var current = dropdown.querySelector(".language-current");
      var menu = dropdown.querySelector(".language-menu");
      current.addEventListener("click", function (event) {
        event.stopPropagation();
        document.querySelectorAll(".language-dropdown.preview-open").forEach(function (item) {
          if (item !== dropdown) {
            item.classList.remove("preview-open");
            item.querySelector(".language-menu").style.display = "none";
          }
        });
        var willOpen = !dropdown.classList.contains("preview-open");
        dropdown.classList.toggle("preview-open", willOpen);
        menu.style.display = willOpen ? "block" : "none";
      });
      menu.querySelectorAll("button").forEach(function (option) {
        option.addEventListener("click", function (event) {
          event.stopPropagation();
          current.querySelector("span").textContent = option.textContent;
          menu.querySelectorAll("button").forEach(function (item) {
            item.classList.toggle("active", item === option);
          });
          dropdown.classList.remove("preview-open");
          menu.style.display = "none";
        });
      });
    });
    document.querySelectorAll("[data-menu-toggle]").forEach(function (button) {
      button.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
        var node = button.closest(".node");
        var willOpen = !node.classList.contains("menu-open");
        document.querySelectorAll(".node.menu-open").forEach(function (item) {
          item.classList.remove("menu-open");
        });
        node.classList.toggle("menu-open", willOpen);
        button.setAttribute("aria-expanded", String(willOpen));
      });
    });
    document.querySelectorAll("[data-banner-slider]").forEach(function (slider) {
      var slides = Array.from(slider.querySelectorAll(".banner-slides article"));
      var index = 0;
      function show(next) {
        index = (next + slides.length) % slides.length;
        slides.forEach(function (slide, i) {
          slide.style.display = i === index ? "flex" : "none";
        });
      }
      slider.querySelector(".slide-prev").addEventListener("click", function () { show(index - 1); });
      slider.querySelector(".slide-next").addEventListener("click", function () { show(index + 1); });
      show(0);
      if (slider.dataset.autoplay) setInterval(function () { show(index + 1); }, 4000);
    });
    document.querySelectorAll("[data-card-slider]").forEach(function (slider) {
      var track = slider.querySelector(".banner-cards");
      var offset = 0;
      function move(direction) {
        offset = Math.max(0, Math.min(track.children.length - 1, offset + direction));
        track.style.transform = "translateX(" + (-offset * 34) + "%)";
      }
      slider.querySelector(".slide-prev").addEventListener("click", function () { move(-1); });
      slider.querySelector(".slide-next").addEventListener("click", function () { move(1); });
    });
    document.addEventListener("click", function (event) {
      var actionTarget = event.target.closest("[data-demo-action]");
      if (actionTarget) {
        var action = actionTarget.dataset.demoAction;
        if (action === "top") window.scrollTo({ top: 0, behavior: "smooth" });
        if (action === "cart") {
          var count = Number(actionTarget.dataset.count || 0) + 1;
          actionTarget.dataset.count = count;
          actionTarget.textContent = "장바구니 담김 (" + count + ")";
        }
        if (action === "media") {
          var playing = actionTarget.getAttribute("aria-pressed") !== "true";
          actionTarget.setAttribute("aria-pressed", String(playing));
          actionTarget.querySelector("span").textContent = playing ? "Ⅱ" : "▶";
          actionTarget.querySelector("b").textContent = playing ? "영상 재생 중" : "소개 영상 재생";
        }
      }
      var galleryItem = event.target.closest("[data-gallery-item]");
      if (galleryItem)
        galleryItem.parentElement.querySelectorAll("button").forEach(function (item) {
          item.classList.toggle("active", item === galleryItem);
        });
    });
    document.addEventListener("submit", function (event) {
      var form = event.target.closest("[data-demo-form]");
      if (!form) return;
      event.preventDefault();
      var status = form.querySelector('[role="status"]');
      if (status) status.textContent = "정상적으로 전송됐습니다.";
    });
    document.addEventListener("click", function () {
      document.querySelectorAll(".language-dropdown.preview-open").forEach(function (item) {
        item.classList.remove("preview-open");
        item.querySelector(".language-menu").style.display = "none";
      });
      document.querySelectorAll(".node.menu-open").forEach(function (item) {
        item.classList.remove("menu-open");
      });
    });
  <\/script>
</body>
</html>`;
}
$("#previewBtn").onclick = () => {
  if (!isMember) {
    openSignup();
    return;
  }
  saveProject();
  $("#previewProjectName").textContent =
    projectName.textContent.trim() || "새 프로젝트";
  // 미리보기와 코드 출력이 같은 생성 결과를 사용해야 배치와 효과가 일치합니다.
  previewFrame.srcdoc = canvasPreviewDocument();
  previewWidths[currentBreakpoint] = canvasSize.w;
  previewHeights[currentBreakpoint] = canvasSize.h;
  $("#previewModal").classList.add("open");
  setPreviewDevice(previewWidths[currentBreakpoint] ? currentBreakpoint : "desktop");
};
$("#closePreview").onclick = () =>
  $("#previewModal").classList.remove("open");
$("#previewModal").onclick = (event) => {
  if (event.target.id === "previewModal")
    event.currentTarget.classList.remove("open");
};
$$("[data-preview-device]").forEach((button) => {
  button.onclick = () => setPreviewDevice(button.dataset.previewDevice);
});
window.addEventListener("resize", () => {
  if ($("#previewModal").classList.contains("open"))
    setPreviewDevice(currentPreviewDevice);
});
const bannerPresetCss = `.banner-preset{width:100%;height:100%;box-sizing:border-box;overflow:hidden}.banner-preset h2{margin:8px 0 10px;font-size:clamp(24px,3vw,46px)}.banner-preset p{margin:0;line-height:1.65;opacity:.78}.banner-preset button{padding:12px 20px;border:0;border-radius:9px;background:#5b46e8;color:#fff;font-weight:800}.banner-text,.banner-centered,.banner-cta{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:36px;text-align:center}.banner-solid,.banner-gradient,.banner-overlay,.banner-hover,.banner-scroll-effect{display:flex;align-items:center;padding:48px 7%;color:#fff}.banner-solid{background:#27235c}.banner-gradient{background:linear-gradient(125deg,#5b46e8,#9b5de5,#f15bb5)}.banner-image-bg,.banner-overlay{display:flex;flex-direction:column;justify-content:flex-end;padding:48px 7%;color:#fff;background:linear-gradient(120deg,#11263633,#111426bb),radial-gradient(circle at 70% 30%,#b7a9ff,#29315f 65%,#151827)}.banner-image-text,.banner-split{display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:42px;padding:32px 5%;background:#f5f2ff}.banner-visual{display:grid;width:100%;height:100%;min-height:120px;place-items:center;border-radius:16px;background:linear-gradient(135deg,#d9d2ff,#927eff);color:#fff;font-weight:900}.banner-buttons{display:flex;gap:10px;margin-top:22px}.banner-download,.banner-event,.banner-notice,.banner-strip{display:flex;align-items:center;justify-content:space-between;gap:24px;padding:28px 5%}.banner-download{background:#171a29;color:#fff}.banner-strip{background:#5b46e8;color:#fff}.banner-event{background:linear-gradient(120deg,#fff3d9,#ffd7e5)}.banner-notice{border:1px solid #e2e3ea}.banner-notice div{display:flex;flex:1;flex-direction:column}.banner-slider,.banner-card-slider{display:flex;align-items:center;justify-content:space-between;padding:26px;background:#1d2034;color:#fff}.banner-slides{position:relative;width:calc(100% - 100px);height:100%}.banner-slides article{position:absolute;inset:0;display:none;align-items:center;justify-content:center;flex-direction:column;text-align:center}.banner-slides article.active{display:flex;animation:bannerFade .45s}.banner-cards{display:grid;width:calc(100% - 110px);grid-template-columns:repeat(3,1fr);gap:16px}.banner-cards article{padding:28px;border-radius:14px;background:#fff;color:#272a3a}.effect-fade{animation:bannerFade .9s}.banner-hover{background:linear-gradient(125deg,#185a9d,#43cea2);transition:.3s}.banner-hover:hover{transform:translateY(-6px)}.banner-scroll-effect{background:linear-gradient(120deg,#20243b,#5b46e8)}.banner-scroll-effect.revealed>div{animation:bannerRise .7s}@keyframes bannerFade{from{opacity:0}to{opacity:1}}@keyframes bannerRise{from{opacity:0;transform:translateY(30px)}to{opacity:1}}@media(max-width:700px){.banner-image-text,.banner-split{grid-template-columns:1fr}.banner-cards{grid-template-columns:1fr}.banner-cards article:not(:first-child){display:none}}`;
  const advancedEffectCss = `.advanced-effect{--effect-distance:18px;--effect-scale:1.06;--effect-glow:0 0 28px rgba(111,77,255,.55);--effect-duration:.65s;--effect-rotate:0deg}.advanced-effect[data-effect-intensity=weak]{--effect-distance:10px;--effect-scale:1.025;--effect-glow:0 0 14px rgba(111,77,255,.35)}.advanced-effect[data-effect-intensity=strong]{--effect-distance:32px;--effect-scale:1.12;--effect-glow:0 0 46px rgba(111,77,255,.8)}.advanced-effect[data-effect-speed=slow]{--effect-duration:1.1s}.advanced-effect[data-effect-speed=fast]{--effect-duration:.32s}.advanced-fade,.advanced-slide,.advanced-zoom,.advanced-glow{transition:transform var(--effect-duration) ease,opacity var(--effect-duration) ease,box-shadow var(--effect-duration) ease,filter var(--effect-duration) ease}.advanced-fade:hover{animation:advancedHoverFade var(--effect-duration) ease both}.advanced-slide:hover{animation:advancedHoverSlide var(--effect-duration) cubic-bezier(.2,.8,.2,1) both}.advanced-zoom:hover{transform:rotate(var(--effect-rotate)) scale(var(--effect-scale))}.advanced-glow:hover{box-shadow:var(--effect-glow);filter:saturate(1.12)}@keyframes advancedHoverFade{from{opacity:.25}to{opacity:1}}@keyframes advancedHoverSlide{from{opacity:.45;transform:rotate(var(--effect-rotate)) translateY(var(--effect-distance))}to{opacity:1;transform:rotate(var(--effect-rotate)) translateY(0)}}@media(prefers-reduced-motion:reduce){.advanced-effect.advanced-fade:hover,.advanced-effect.advanced-slide:hover{animation:none}.advanced-effect.advanced-fade,.advanced-effect.advanced-slide,.advanced-effect.advanced-zoom,.advanced-effect.advanced-glow{transition:none}}`;
  const contentElementCss = `.content-block,.content-card,.footer-brand,.footer-copy,.footer-links,.footer-sitemap,.footer-social,.footer-contact,.footer-newsletter{width:100%;height:100%;box-sizing:border-box}.content-block,.content-card{padding:24px;border:1px solid #e1e3ec;border-radius:16px;background:#fff;color:#252836}.content-copy{display:flex;flex-direction:column;justify-content:center}.content-copy h2{margin:8px 0}.content-split{display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:28px}.content-visual,.card-thumb{display:grid;height:100%;min-height:100px;place-items:center;border-radius:12px;background:linear-gradient(135deg,#d9d2ff,#806bea);color:#fff;font-weight:900}.feature-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.feature-grid article{padding:18px;border-radius:12px;background:#f5f3ff}.content-card{display:flex;flex-direction:column;gap:10px;box-shadow:0 8px 22px rgba(30,33,55,.08)}.content-card h3,.content-card p{margin:0}.content-block button,.content-card button,.footer-newsletter button,.footer-policy,.top-button{padding:10px 16px;border:0;border-radius:8px;background:#5b46e8;color:#fff;font-weight:800;cursor:pointer}.gallery-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:10px}.gallery-grid button{font-size:24px;background:linear-gradient(135deg,#b8aaff,#6651df)}.gallery-grid button.active{outline:5px solid #f4bf4f}.media-demo,.map-demo{display:flex;align-items:center;justify-content:center}.media-demo button{display:flex;flex-direction:column;align-items:center;gap:12px;background:#202438}.media-demo span{font-size:42px}.map-demo{gap:22px;background:#eef8f2}.map-demo>span{font-size:58px}.faq-list details{padding:14px;border-bottom:1px solid #ddd}.faq-list summary{font-weight:800;cursor:pointer}.contact-form,.newsletter,.footer-newsletter{display:flex;flex-direction:column;gap:10px}.contact-form input,.contact-form textarea,.newsletter input,.footer-newsletter input{min-height:42px;padding:10px;border:1px solid #d9dce8;border-radius:8px;font:inherit}.contact-form textarea{min-height:110px;resize:vertical}.contact-form [role=status],.newsletter [role=status],.footer-newsletter [role=status]{color:#16865b}.footer-brand,.footer-copy,.footer-contact{display:flex;flex-direction:column;justify-content:center;gap:8px}.footer-brand b{font-size:24px}.footer-links{display:flex;align-items:center;justify-content:space-around}.footer-links a,.footer-sitemap a,.footer-contact a{color:inherit;text-decoration:none}.footer-sitemap{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}.footer-sitemap div{display:flex;flex-direction:column;gap:8px}.footer-social{display:flex;align-items:center;gap:8px}.footer-social button{width:38px;height:38px;border:0;border-radius:50%;background:#292d3d;color:#fff}.footer-contact{font-style:normal}.footer-newsletter div{display:flex}.footer-newsletter input{min-width:0;flex:1}.footer-newsletter button{border-radius:0 8px 8px 0}.footer-policy{width:100%;height:100%;background:transparent;color:inherit;border:1px solid #d9dce8}.copyright{display:flex;width:100%;height:100%;align-items:center}@media(max-width:700px){.content-split,.feature-grid,.footer-sitemap{grid-template-columns:1fr}.feature-grid article:not(:first-child){display:none}}`;
// 캔버스 데이터를 배포 가능한 HTML/CSS로 변환합니다.
// 존재하는 요소의 공통 스타일과 동작만 조건부로 포함해 빈 프로젝트 코드를 가볍게 유지합니다.
function generated(forPreview = false) {
  saveCurrentBreakpoint();
  const renderNodes = nodes.filter(isPreviewableNode);
  const outputTagFor = (node) => {
    const tags = {
      로고: "h1",
      "메인 메뉴": "div",
      "로그인 / 회원가입": "div",
      검색창: "form",
      "검색 아이콘": "button",
      "언어 선택": "select",
      장바구니: "button",
      마이페이지: "button",
      "모바일 햄버거 메뉴": "div",
      "시작하기 버튼": "button",
      "다운로드 버튼": "button",
      "문의하기 버튼": "button",
      "SNS 링크": "nav",
      "상단 공지사항": "aside",
      배너: "section",
      콘텐츠: "section",
      푸터: "footer",
    };
    return tags[node.label] || "div";
  };
  let html = renderNodes
    .map((n) => {
      let inner = n.html || templates[n.type].html;
      if (["헤더", "배너", "콘텐츠", "푸터"].includes(n.label)) inner = "";
      if (n.label === "로고") {
        const logoImage = n.imageSrc
          ? `<img src="${!forPreview && n.imageName ? `./images/${n.imageName}` : n.imageSrc}" alt="로고 이미지" style="transform:scale(${n.logoImageScale || 1.35})">`
          : "";
        const imageOnly = n.logoLayout === "image";
        inner = `<div class="real-logo${imageOnly ? " logo-image-only" : ""}">${logoImage}${imageOnly ? "" : `<span class="logo-text">${n.content || "CODE LAB"}</span>`}</div>`;
      } else if (n.imageSrc && !componentCatalog.배너.includes(n.label)) {
        const imagePath =
          !forPreview && n.imageName ? `./images/${n.imageName}` : n.imageSrc;
        inner = `<img src="${imagePath}" alt="${n.label || "이미지"}">`;
      } else if (n.content) {
        if (
          n.type === "button" &&
          ![
            "장바구니",
            "마이페이지",
            "모바일 햄버거 메뉴",
          ].includes(n.label)
        )
          inner = `<button>${n.content}</button>`;
        if (n.type === "text") inner = `<div>${n.content}</div>`;
        if (n.label === "사이트명")
          inner = `<strong class="site-name">${n.content}</strong>`;
        if (n.type === "section")
          inner = `<section><h3>${n.content}</h3><p>내용을 자유롭게 편집해 보세요.</p></section>`;
      }
      const temp = document.createElement("div");
      temp.innerHTML = inner;
      if (n.imageSrc && componentCatalog.배너.includes(n.label)) {
        const imagePath = !forPreview && n.imageName ? `./images/${n.imageName}` : n.imageSrc;
        const bannerRoot = temp.firstElementChild;
        if (bannerRoot) {
          bannerRoot.style.backgroundImage = `linear-gradient(120deg, rgba(17,20,38,.18), rgba(17,20,38,.68)), url("${imagePath}")`;
          bannerRoot.style.backgroundSize = n.objectFit || "cover";
          bannerRoot.style.backgroundRepeat = "no-repeat";
          bannerRoot.style.backgroundPosition = n.imagePosition || "center";
        }
      }
      temp
        .querySelectorAll("[data-editor-only]")
        .forEach((element) => element.remove());
      [...temp.querySelectorAll("*")].forEach((el, i) => {
        const p = n.parts?.[i];
        if (!p) return;
        if (p.text !== undefined) {
          if (["INPUT", "TEXTAREA"].includes(el.tagName))
            el.placeholder = p.text;
          else el.textContent = p.text;
        }
        const hasOffset = (p.x || 0) !== 0 || (p.y || 0) !== 0;
        Object.assign(el.style, {
          position: hasOffset ? "relative" : "",
          left: hasOffset && p.x ? p.x + "px" : "",
          top: hasOffset && p.y ? p.y + "px" : "",
          width: p.w ? p.w + "px" : "",
          height: p.h ? p.h + "px" : "",
          fontFamily: p.fontFamily || "",
          fontSize: p.fontSize ? p.fontSize + "px" : "",
          fontWeight: p.fontWeight || "",
          color: p.color || "",
          background: p.bg || "",
          padding: p.padding !== undefined ? p.padding + "px" : "",
          borderRadius: p.radius !== undefined ? p.radius + "px" : "",
          textAlign: p.textAlign || "",
          justifyContent: p.textAlign
            ? p.textAlign === "right"
              ? "flex-end"
              : p.textAlign === "center"
                ? "center"
                : "flex-start"
            : "",
          display: p.visible === false ? "none" : "",
        });
      });
      inner = temp.innerHTML;
      const tag = outputTagFor(n);
      const onlyChild = temp.children.length === 1 ? temp.firstElementChild : null;
      if (tag === "button" && onlyChild?.tagName === "BUTTON") {
        inner = onlyChild.innerHTML;
      }
      if (tag === "select") {
        const languages = n.languages || ["한국어", "English", "日本語"];
        const current = languages.includes(n.selectedLanguage)
          ? n.selectedLanguage
          : languages[0];
        return `  <div class="${n.codeClass || "component"} ${n.id} generated-language-dropdown${n.effect && n.effect !== "none" ? ` advanced-effect advanced-${n.effect}` : ""}"${n.effect && n.effect !== "none" ? ` data-effect-intensity="${n.effectIntensity || "normal"}" data-effect-speed="${n.effectSpeed || "normal"}"` : ""}>
    <button class="language-current" type="button"><span>${escapeHtml(current)}</span><i>⌄</i></button>
    <div class="language-menu">
      ${languages.map((language) => `<button type="button"${language === current ? ' class="active"' : ""}>${escapeHtml(language)}</button>`).join("\n      ")}
    </div>
  </div>`;
      }
      const effectClass = n.effect && n.effect !== "none"
        ? ` advanced-effect advanced-${n.effect}`
        : "";
      const effectData = effectClass
        ? ` data-effect-intensity="${n.effectIntensity || "normal"}" data-effect-speed="${n.effectSpeed || "normal"}"`
        : "";
      return `  <${tag} class="${n.codeClass || "component"} ${n.id}${effectClass}"${effectData}>\n    ${inner}\n  </${tag}>`;
    })
    .join("\n");
  const htmlTree = document.createElement("div");
  htmlTree.innerHTML = html;
  renderNodes
    .filter((node) => node.parentId)
    .sort((a, b) => {
      const aView = a.views?.desktop || a;
      const bView = b.views?.desktop || b;
      return aView.x - bView.x;
    })
    .forEach((node) => {
      const child = htmlTree.querySelector(`.${node.id}`);
      const parentNode = renderNodes.find((item) => item.id === node.parentId);
      const parent = parentNode
        ? htmlTree.querySelector(`.${parentNode.id}`)
        : null;
      if (child && parent) parent.appendChild(child);
    });
  const headerNode = renderNodes.find((node) => node.label === "헤더");
  if (headerNode) {
    const oldHeader = htmlTree.querySelector(
      `.${headerNode.id}`,
    );
    if (oldHeader) {
      const headerSection = document.createElement("header");
      headerSection.id = "header";
      const headerInner = document.createElement("header");
      headerInner.className = oldHeader.className;
      headerInner.innerHTML = oldHeader.innerHTML;
      headerSection.appendChild(headerInner);
      oldHeader.replaceWith(headerSection);
    }
  }
  html = htmlTree.innerHTML;
  const responsiveRule = (n, v, full = false, device = "desktop") => {
    const parent = n.parentId
      ? nodes.find((node) => node.id === n.parentId)
      : null;
    const parentView = forPreview
      ? parent || { x: 0, y: 0 }
      : parent?.views?.[device] || parent || { x: 0, y: 0 };
    const left = n.parentId ? v.x - parentView.x : v.x;
    const top = n.parentId ? v.y - parentView.y : v.y;
    const className = n.id;
    const isFlowSection = ["헤더", "배너", "콘텐츠", "푸터"].includes(n.label);
    const isFlexChild = parent?.label === "헤더";
    const siblings = isFlexChild
      ? nodes
          .filter((node) => node.parentId === parent.id)
          .sort((a, b) => {
            const aView = a.views?.[device] || a;
            const bView = b.views?.[device] || b;
            return aView.x - bView.x;
          })
      : [];
    const order = isFlexChild ? siblings.indexOf(n) : 0;
    const previous = order > 0 ? siblings[order - 1] : null;
    const previousView = previous?.views?.[device] || previous;
    const marginLeft = isFlexChild
      ? previousView
        ? v.x - (previousView.x + previousView.w)
        : left
      : 0;
    const lines = [];
    if (full) {
      if (forPreview || !isFlexChild) lines.push("position: absolute");
      if ((n.z || 1) !== 1) lines.push(`z-index: ${n.z}`);
      if (n.color && n.color !== "#151622") lines.push(`color: ${n.color}`);
      if (n.bg && n.bg !== "transparent") lines.push(`background: ${n.bg}`);
      if (n.fontFamily && n.fontFamily !== "inherit")
        lines.push(`font-family: ${n.fontFamily}`);
      if ((n.opacity ?? 100) !== 100)
        lines.push(`opacity: ${(n.opacity ?? 100) / 100}`);
      if (n.shadow && n.shadow !== "none")
        lines.push(`box-shadow: ${n.shadow}`);
    }
    if (forPreview) {
      lines.push(
        `left: ${left}px`,
        `top: ${top}px`,
        `width: ${v.w}px`,
        "box-sizing: border-box",
      );
    } else {
      if (n.label === "헤더") {
        lines.push(
          "display: flex",
          "align-items: flex-start",
          "box-sizing: border-box",
        );
      }
      if (isFlexChild) {
        lines.push(
          "flex: 0 0 auto",
          `order: ${order}`,
          `margin-left: ${marginLeft}px`,
          `margin-top: ${top}px`,
        );
      } else {
        lines.push(`left: ${left}px`, `top: ${top}px`);
      }
      if (!isFlexChild) lines.push(`width: ${v.w}px`);
    }
    lines.push(`height: ${v.h}px`);
    if ((v.fontSize || 16) !== 16) lines.push(`font-size: ${v.fontSize}px`);
    if ((v.fontWeight || 600) !== 600)
      lines.push(`font-weight: ${v.fontWeight}`);
    if (n.label !== "사이트명" && (v.lineHeight || 1.5) !== 1.5)
      lines.push(`line-height: ${v.lineHeight}`);
    if ((v.textAlign || "left") !== "left")
      lines.push(`text-align: ${v.textAlign}`);
    if (n.label === "사이트명") {
      lines.push(
        "display: flex",
        "align-items: center",
        "line-height: 1",
        `justify-content: ${
          v.textAlign === "right"
            ? "flex-end"
            : v.textAlign === "center"
              ? "center"
              : "flex-start"
        }`,
      );
    }
    if ((v.padding || 0) !== 0) lines.push(`padding: ${v.padding}px`);
    if ((v.borderWidth || 0) > 0) {
      lines.push(
        `border: ${v.borderWidth}px ${n.borderStyle || "solid"} ${n.borderColor || "#d9dbe5"}`,
      );
    }
    if ((v.radius || 0) > 0) lines.push(`border-radius: ${v.radius}px`);
    if ((v.rotate || 0) !== 0)
      lines.push(`--effect-rotate: ${v.rotate}deg`, `transform: rotate(${v.rotate}deg)`);
    const rule = `.${className} {\n${lines.map((line) => `  ${line};`).join("\n")}\n}`;
    const textOffset =
      !forPreview && ((v.textX || 0) !== 0 || (v.textY || 0) !== 0)
        ? `\n.${className} > :first-child {\n  position: relative;\n  left: ${v.textX || 0}px;\n  top: ${v.textY || 0}px;\n}`
        : "";
    return rule + textOffset;
  };
  const desktopCss = renderNodes
    .map((n) => {
      const rule = responsiveRule(
        n,
        forPreview
          ? captureResponsive(n)
          : n.views.desktop || captureResponsive(n),
        true,
      );
      if (!n.imageSrc) return rule;
      if (n.label === "로고")
        return `${rule}\n.${n.id} .real-logo img {\n  width: ${n.logoLayout === "image" ? "100%" : "58px"};\n  height: 100%;\n  object-fit: ${n.objectFit || "contain"};\n  object-position: ${n.imagePosition || "center"};\n}`;
      return `${rule}\n.${n.id} img {\n  width: 100%;\n  height: 100%;\n  object-fit: ${n.objectFit || "cover"};\n  object-position: ${n.imagePosition || "center"};\n}`;
    })
    .join("\n\n");
  const breakpoints = [
    ["laptop", 1199],
    ["tablet", 899],
    ["mobile", 599],
  ];
  const mediaCss = forPreview
    ? ""
    : breakpoints.map(
      ([name, max]) =>
        `@media (max-width: ${max}px) {\n  .page { min-height: ${deviceSizes[name].h}px; }\n${renderNodes
          .map((n) =>
            responsiveRule(n, n.views[name] || n.views.desktop, false, name)
              .split("\n")
              .map((line) => "  " + line)
              .join("\n"),
          )
          .join("\n\n")}\n}`,
    )
    .join("\n\n");
  const hasNode = (label) => renderNodes.some((node) => node.label === label);
    const componentCss = [
      renderNodes.some((node) => node.effect && node.effect !== "none") ? advancedEffectCss : "",
      componentCatalog.콘텐츠.some((label) => label !== "콘텐츠" && hasNode(label)) || componentCatalog.푸터.some((label) => label !== "푸터" && hasNode(label)) ? contentElementCss : "",
    componentCatalog.배너.some((label) => label !== "배너" && hasNode(label))
      ? bannerPresetCss
      : "",
    hasNode("로고")
      ? `.logo {\n  margin: 0;\n}\n\n.real-logo {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  font-weight: 800;\n  white-space: nowrap;\n}\n\n.real-logo img {\n  width: 58px;\n  height: 100%;\n  flex: 0 0 58px;\n  border-radius: 7px;\n  object-fit: contain;\n}\n\n.real-logo.logo-image-only {\n  gap: 0;\n}\n\n.real-logo.logo-image-only img {\n  width: 100%;\n  height: 100%;\n  flex-basis: 100%;\n}\n\n.logo-text {\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}`
      : "",
    hasNode("검색창")
      ? `.real-search {\n  display: flex;\n  width: 100%;\n  height: 100%;\n}\n\n.real-search input {\n  min-width: 0;\n  flex: 1;\n  padding: 0 13px;\n  border: 1px solid #dfe1e9;\n  border-radius: 8px 0 0 8px;\n}\n\n.real-search button {\n  padding: 0 17px;\n  border: 0;\n  border-radius: 0 8px 8px 0;\n  background: #6236ff;\n  color: #fff;\n}`
      : "",
    hasNode("언어 선택")
      ? `.generated-language-dropdown {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n\n.generated-language-dropdown .language-current {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 12px;\n  border: 1px solid #dfe1e9;\n  border-radius: 8px;\n  background: #fff;\n  color: #242735;\n  font-family: inherit;\n  font-size: 12px;\n  cursor: pointer;\n}\n\n.generated-language-dropdown .language-current i {\n  color: #777c8e;\n  font-style: normal;\n}\n\n.generated-language-dropdown .language-menu {\n  position: absolute;\n  top: calc(100% + 6px);\n  left: 0;\n  z-index: 20;\n  display: none;\n  width: 100%;\n  max-height: 220px;\n  overflow-y: auto;\n  padding: 5px;\n  border: 1px solid #dcdde7;\n  border-radius: 9px;\n  background: #fff;\n  box-shadow: 0 12px 28px rgba(30, 35, 58, .18);\n}\n\n.generated-language-dropdown.open .language-menu {\n  display: block;\n}\n\n.generated-language-dropdown .language-menu button {\n  display: block;\n  width: 100%;\n  min-height: 32px;\n  padding: 0 9px;\n  border: 0;\n  border-radius: 6px;\n  background: #fff;\n  color: #3f4352;\n  font-size: 11px;\n  text-align: left;\n  cursor: pointer;\n}\n\n.generated-language-dropdown .language-menu button:hover,\n.generated-language-dropdown .language-menu button.active {\n  background: #eeebff;\n  color: #523fca;\n}`
      : "",
    hasNode("상단 공지사항")
      ? `.notice-bar {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  align-items: center;\n  gap: 18px;\n  padding: 0 16px;\n  border: 1px solid #e0e2e9;\n  border-radius: 9px;\n  background: #fff;\n  color: #252836;\n}\n\n.notice-bar b,\n.notice-bar a {\n  color: #5b46e8;\n  font-weight: 700;\n}\n\n.notice-bar span {\n  flex: 1;\n}`
      : "",
    hasNode("장바구니") || hasNode("마이페이지")
      ? `.cart-button,\n.mypage-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 7px;\n  padding: 0 10px;\n  border: 1px solid #e0e1e8;\n  border-radius: 9px;\n  background: #fff;\n  white-space: nowrap;\n}\n\n.cart-button em {\n  padding: 2px 6px;\n  border-radius: 20px;\n  background: #ef3758;\n  color: #fff;\n  font-size: 9px;\n  font-style: normal;\n}`
      : "",
    hasNode("메인 메뉴") || hasNode("모바일 햄버거 메뉴")
      ? `.nav-dropdown,
.mobile-menu {
  position: relative;
}

.mobile-menu {
  width: 100%;
  height: 100%;
}

.submenu,
.mobile-submenu {
  position: absolute;
  z-index: 50;
  top: calc(100% + 8px);
  right: 0;
  display: none;
  min-width: 150px;
  padding: 7px;
  border: 1px solid #dedfea;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 14px 32px rgba(27, 30, 50, .2);
}

.submenu {
  right: auto;
  left: 0;
}

.nav-dropdown.open .submenu,
.mobile-menu.open .mobile-submenu {
  display: grid;
  gap: 3px;
}

.submenu a,
.mobile-submenu a {
  display: block;
  padding: 9px 10px;
  border-radius: 7px;
  color: #282b39;
  font-size: 12px;
  text-decoration: none;
  white-space: nowrap;
}

.submenu a:hover,
.mobile-submenu a:hover {
  background: #f0edff;
  color: #5b46e8;
}

.menu-trigger {
  display: flex;
  height: 100%;
  align-items: center;
  gap: 5px;
  border: 0;
  background: transparent;
  cursor: pointer;
}`
      : "",
    ["시작하기 버튼", "다운로드 버튼", "문의하기 버튼"].some(hasNode)
      ? `.start-button,\n.download-button,\n.contact-button {\n  border: 0;\n  cursor: pointer;\n}`
      : "",
    hasNode("SNS 링크")
      ? `.social-links {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  height: 100%;\n}\n\n.social-links a {\n  display: grid;\n  width: 32px;\n  height: 32px;\n  place-items: center;\n  border-radius: 50%;\n  background: #171a26;\n  color: #fff;\n  text-decoration: none;\n}`
      : "",
  ]
    .filter(Boolean)
    .join("\n\n");
  const pageCss = forPreview
    ? `/* 미리보기 화면의 크기와 기본 배치를 설정합니다. */\nhtml,\nbody {\n  width: ${canvasSize.w}px;\n  height: ${canvasSize.h}px;\n  margin: 0;\n  overflow: hidden;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n.page {\n  position: relative;\n  width: ${canvasSize.w}px;\n  height: ${canvasSize.h}px;\n  overflow: hidden;\n}`
    : `/* 기본 설정: 여백과 크기 계산 방식을 통일합니다. */\nhtml,\nbody {\n  width: 100%;\n  margin: 0;\n  overflow-x: hidden;\n}\n\nbody,\nbutton,\ninput,\nselect {\n  font-family: Inter, Pretendard, "Noto Sans KR", "Malgun Gothic", Arial, sans-serif;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* 생성된 요소들이 들어가는 페이지 틀입니다. */\n.page {\n  width: 100%;\n  max-width: ${deviceSizes.desktop.w}px;\n  min-height: ${deviceSizes.desktop.h}px;\n  margin: 0 auto;\n  overflow-x: clip;\n}`;
  const regionRules = [];
  if (headerNode) regionRules.push(`#header {\n  width: 100%;\n}`);
  if (renderNodes.some((node) => node.label === "배너")) {
    regionRules.push(`.banner {\n  position: relative;\n  overflow: hidden;\n}`);
  }
  const cssSections = [pageCss];
  if (regionRules.length) {
    cssSections.push(`/* 추가한 영역의 기본 스타일입니다. */\n${regionRules.join("\n\n")}`);
  }
  if (componentCss) {
    cssSections.push(`/* 추가한 구성 요소가 사용하는 공통 스타일입니다. */\n${componentCss}`);
  }
  if (desktopCss) {
    cssSections.push(`/* 캔버스에서 배치한 각 요소의 위치와 모양입니다. */\n${desktopCss}`);
  }
  if (mediaCss) {
    cssSections.push(`/* 화면 크기에 따라 요소 배치를 조정하는 반응형 스타일입니다. */\n${mediaCss}`);
  }
  const css = cssSections.join("\n\n");
  const pageContent = html
    ? `  <!-- 캔버스에 추가한 요소입니다. 각 class는 CSS와 연결됩니다. -->\n${html}`
    : "  <!-- 요소를 추가하면 이 안에 HTML이 생성됩니다. -->";
  const pageHtml = `<div class="page">\n${pageContent}\n</div>`;
  const projectTitle =
    $("#projectName")?.textContent.trim() || "새 프로젝트";
  const languageScript = hasNode("언어 선택")
    ? `<script>
document.querySelectorAll(".generated-language-dropdown").forEach((dropdown) => {
  const current = dropdown.querySelector(".language-current");
  const options = dropdown.querySelectorAll(".language-menu button");
  current.addEventListener("click", () => dropdown.classList.toggle("open"));
  options.forEach((option) => option.addEventListener("click", () => {
    current.querySelector("span").textContent = option.textContent;
    options.forEach((item) => item.classList.toggle("active", item === option));
    dropdown.classList.remove("open");
  }));
});
document.addEventListener("click", (event) => {
  document.querySelectorAll(".generated-language-dropdown.open").forEach((dropdown) => {
    if (!dropdown.contains(event.target)) dropdown.classList.remove("open");
  });
});
<\/script>`
    : "";
  const menuScript = hasNode("메인 메뉴") || hasNode("모바일 햄버거 메뉴")
    ? `<script>
document.querySelectorAll("[data-menu-toggle]").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    const menu = button.closest(".nav-dropdown, .mobile-menu");
    const willOpen = !menu.classList.contains("open");
    document.querySelectorAll(".nav-dropdown.open, .mobile-menu.open").forEach((item) => item.classList.remove("open"));
    menu.classList.toggle("open", willOpen);
    button.setAttribute("aria-expanded", String(willOpen));
  });
});
document.addEventListener("click", () => {
  document.querySelectorAll(".nav-dropdown.open, .mobile-menu.open").forEach((menu) => menu.classList.remove("open"));
});
<\/script>`
    : "";
  const bannerScript = componentCatalog.배너.some((label) => label !== "배너" && hasNode(label))
    ? `<script>
document.querySelectorAll("[data-banner-slider]").forEach((slider) => {
  const slides = [...slider.querySelectorAll(".banner-slides article")];
  let index = Math.max(0, slides.findIndex((slide) => slide.classList.contains("active")));
  const show = (next) => {
    index = (next + slides.length) % slides.length;
    slides.forEach((slide, i) => slide.classList.toggle("active", i === index));
  };
  slider.querySelector(".slide-prev")?.addEventListener("click", () => show(index - 1));
  slider.querySelector(".slide-next")?.addEventListener("click", () => show(index + 1));
  if (slider.dataset.autoplay) {
    let timer = setInterval(() => show(index + 1), 4000);
    slider.addEventListener("mouseenter", () => clearInterval(timer));
    slider.addEventListener("mouseleave", () => timer = setInterval(() => show(index + 1), 4000));
  }
});
document.querySelectorAll("[data-card-slider]").forEach((slider) => {
  const track = slider.querySelector(".banner-cards");
  let offset = 0;
  const move = (direction) => {
    offset = Math.max(0, Math.min(track.children.length - 1, offset + direction));
    track.style.transform = "translateX(" + (-offset * 34) + "%)";
    track.style.transition = "transform .35s ease";
  };
  slider.querySelector(".slide-prev")?.addEventListener("click", () => move(-1));
  slider.querySelector(".slide-next")?.addEventListener("click", () => move(1));
});
const bannerObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) entry.target.classList.add("revealed");
}), { threshold: .2 });
document.querySelectorAll(".banner-scroll-effect").forEach((banner) => bannerObserver.observe(banner));
<\/script>`
    : "";
  const interactiveScript = renderNodes.some((node) => String(node.html || "").includes("data-demo-"))
    ? `<script>
document.addEventListener("click", function (event) {
  const demoAction = event.target.closest("[data-demo-action]");
  if (demoAction) {
    const action = demoAction.dataset.demoAction;
    if (action === "top") window.scrollTo({ top: 0, behavior: "smooth" });
    if (action === "cart") {
      const count = Number(demoAction.dataset.count || 0) + 1;
      demoAction.dataset.count = count;
      demoAction.textContent = "장바구니 담김 (" + count + ")";
    }
    if (action === "media") {
      const playing = demoAction.getAttribute("aria-pressed") !== "true";
      demoAction.setAttribute("aria-pressed", String(playing));
      demoAction.querySelector("span").textContent = playing ? "Ⅱ" : "▶";
      demoAction.querySelector("b").textContent = playing ? "영상 재생 중" : "소개 영상 재생";
    }
    if (["message", "map", "social", "policy"].includes(action))
      alert(demoAction.dataset.policyTitle || "기능이 정상적으로 실행됐습니다.");
    return;
  }
  const galleryItem = event.target.closest("[data-gallery-item]");
  if (galleryItem) {
    galleryItem.parentElement.querySelectorAll("button").forEach(function (item) { item.classList.toggle("active", item === galleryItem); });
  }
});
document.addEventListener("submit", function (event) {
  const form = event.target.closest("[data-demo-form]");
  if (!form) return;
  event.preventDefault();
  const status = form.querySelector('[role="status"]');
  if (status) status.textContent = "정상적으로 전송됐습니다.";
});
<\/script>`
    : "";
  const behaviorScripts = [languageScript, menuScript, bannerScript, interactiveScript]
    .filter(Boolean)
    .join("\n");
  const behaviorSection = behaviorScripts
    ? `\n<!-- 추가한 요소의 동작에 필요한 코드이며, 해당 요소가 있을 때만 생성됩니다. -->\n${behaviorScripts}`
    : "";
  const htmlDocument = `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${projectTitle}</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
<!-- 페이지 내용: 캔버스에 요소를 추가하면 아래에 생성됩니다. -->
${pageHtml}
${behaviorSection}
</body>
</html>`;
  // 코드 모달에는 사용자가 선택할 수 있는 HTML과 CSS만 전달합니다.
  return {
    html: htmlDocument,
    css,
  };
}
function formatCodeParagraphs(code, language) {
  if (language === "css") return code.replace(/}\n(?!\s*\n|})/g, "}\n\n");
  return code.replace(/(<\/(?:header|nav|main|section|article|footer|div)>)\n(?=\s*<)/g, "$1\n\n");
}
function highlightCodeLine(line, language) {
  const escaped = escapeHtml(line);
  const trimmed = line.trim();
  if (!trimmed) return "";
  if (trimmed.startsWith("<!--") || trimmed.startsWith("/*") || trimmed.startsWith("*"))
    return `<span class="syntax-comment">${escaped}</span>`;
  if (language === "html") {
    return escaped.replace(/(&lt;\/?[^<>]*?&gt;)/g, '<span class="syntax-tag">$1</span>');
  }
  if (trimmed.endsWith("{"))
    return `<span class="syntax-selector">${escaped}</span>`;
  const property = escaped.match(/^(\s*)([-\w]+)(\s*:\s*)(.*?)(;?)$/);
  if (property)
    return `${property[1]}<span class="syntax-property">${property[2]}</span>${property[3]}<span class="syntax-value">${property[4]}</span>${property[5]}`;
  return escaped;
}
// 현재 선택된 HTML 또는 CSS 결과를 줄 번호와 문법 색상이 있는 코드 창에 출력합니다.
function updateCode() {
  // 코드 창에는 기본 뼈대와 사용자가 추가한 요소의 코드만 보여 줍니다.
  const code = generated(false);
  const formatted = formatCodeParagraphs(code[currentTab], currentTab);
  $("#codeOutput").innerHTML = formatted
    .split("\n")
    .map((line) => `<span class="code-line${line ? "" : " blank"}">${highlightCodeLine(line, currentTab)}</span>`)
    .join("\n");
}
$("#codeBtn").onclick = () => {
  $("#codeModal").classList.add("open");
  updateCode();
};
$("#closeModal").onclick = () => $("#codeModal").classList.remove("open");
$("#codeModal").onclick = (e) => {
  if (e.target.id === "codeModal") e.currentTarget.classList.remove("open");
};
$$(".tabs button").forEach(
  (b) =>
    (b.onclick = () => {
      currentTab = b.dataset.tab;
      $$(".tabs button").forEach((x) => x.classList.toggle("active", x === b));
      updateCode();
    }),
);

$("#copyBtn").onclick = async () => {
  await navigator.clipboard.writeText($("#codeOutput").textContent);
  showToast("코드를 클립보드에 복사했어요");
};
// 8. 공용 대화상자와 튜토리얼: 여러 기능이 같은 피드백 UI를 재사용합니다.
// 확인 창의 문구와 버튼 동작을 Promise로 돌려 여러 위험 작업에서 재사용합니다.
function showConfirm({
  title,
  message,
  confirmText = "확인",
  secondaryText = "",
  danger = false,
}) {
  const modal = $("#confirmModal");
  const accept = $("#confirmAccept");
  const secondary = $("#confirmSecondary");
  $("#confirmTitle").textContent = title;
  $("#confirmMessage").textContent = message;
  accept.textContent = confirmText;
  secondary.textContent = secondaryText;
  secondary.hidden = !secondaryText;
  modal.classList.toggle("has-secondary", Boolean(secondaryText));
  accept.classList.toggle("danger", danger);
  modal.classList.add("open");

  return new Promise((resolve) => {
    const finish = (result) => {
      modal.classList.remove("open");
      accept.onclick = null;
      secondary.onclick = null;
      $("#confirmCancel").onclick = null;
      modal.onclick = null;
      document.removeEventListener("keydown", onKeydown);
      resolve(result);
    };
    const onKeydown = (event) => {
      if (event.key === "Escape") finish(false);
      if (event.key === "Enter") finish(secondaryText ? "secondary" : true);
    };
    accept.onclick = () => finish(true);
    secondary.onclick = () => finish("secondary");
    $("#confirmCancel").onclick = () => finish(false);
    modal.onclick = (event) => {
      if (event.target === modal) finish(false);
    };
    document.addEventListener("keydown", onKeydown);
    $("#confirmCancel").focus();
  });
}

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1800);
}
const tutorialContent = {
  전체: [
    ["1 / 10", "영역부터 만들기", "왼쪽에는 헤더·배너·콘텐츠·푸터 영역이 준비되어 있어요.", ".sidebar"],
    ["2 / 12", "왼쪽 영역 너비 조절", "화면 요소 영역 오른쪽의 세로 조절선을 드래그하면 목록 너비를 원하는 만큼 바꿀 수 있어요. 키보드 방향키로도 조절할 수 있습니다.", "#sidebarResizer"],
    ["2 / 11", "프로젝트 이름 바꾸기", "상단의 프로젝트 이름 옆 연필 버튼을 누르거나 이름을 더블클릭하세요. 새 이름을 입력한 뒤 Enter를 누르면 자동으로 저장돼요.", ".project"],
    ["2 / 10", "헤더 영역 만들기", "헤더를 펼친 뒤 먼저 헤더 영역 만들기 버튼을 눌러 주세요.", ".catalog-group[data-area='헤더'] .header-builder-guide"],
    ["3 / 10", "영역별 요소 살펴보기", "각 영역을 펼치면 그 영역에 맞는 요소들이 용도별로 묶여 표시됩니다. 헤더에는 Logo·Navigation·Search·Utility·CTA가 있고, 배너·콘텐츠·푸터에는 각각 다른 구성이 제공됩니다.", ".catalog-group[data-area='헤더'] .header-subcategories"],
    ["8 / 10", "캔버스에 배치하기", "요소를 클릭하거나 드래그하면 캔버스에 배치할 수 있어요.", "#canvasViewport"],
    ["9 / 10", "요소 꾸미기", "요소를 선택하면 오른쪽 패널에서 글자, 크기, 색상을 순서대로 쉽게 바꿀 수 있어요.", ".inspector"],
    ["회원", "여러 페이지 사용", "회원은 페이지 탭의 ＋ 버튼으로 한 프로젝트 안에 여러 페이지를 만들 수 있습니다.", "#addPageTab", true],
    ["회원", "반응형 기기 편집", "회원은 노트북·태블릿·핸드폰 화면을 전환하며 기기별 레이아웃을 편집할 수 있습니다.", ".live", true],
    ["회원", "전체 화면 미리보기", "회원은 미리보기에서 완성된 페이지의 동작과 반응형 화면을 확인할 수 있습니다.", "#previewBtn", true],
    ["10 / 12", "고급 효과", "고급 효과 영역에서 Hover·등장·스타일 효과의 종류를 간단히 확인할 수 있습니다.", "[data-catalog-group='고급효과']", true],
    ["11 / 12", "효과 적용하기", "요소를 선택한 뒤 오른쪽에서 효과, 강도, 속도만 고르면 미리보기와 생성 코드까지 자동 반영됩니다.", ".advanced-effect-section", true],
    ["10 / 10", "저장하고 코드 보기", "저장함에 작업을 보관하고 HTML과 CSS 코드를 복사할 수 있어요.", ".top-actions"],
  ],
  헤더: [
    ["1 / 6", "헤더 영역 만들기", "먼저 헤더 영역 만들기 버튼으로 실제 헤더 영역을 준비하세요.", ".catalog-group[data-area='헤더'] .header-builder-guide"],
    ["2 / 6", "Logo", "로고와 사이트명을 추가하는 브랜드 영역입니다.", ".header-subcategory:nth-child(1)"],
    ["3 / 6", "Navigation", "메인 메뉴, 모바일 메뉴와 SNS 이동 요소입니다.", ".header-subcategory:nth-child(2)"],
    ["4 / 6", "Search", "검색창 또는 검색 아이콘을 추가하는 그룹입니다.", ".header-subcategory:nth-child(3)"],
    ["5 / 6", "Utility", "로그인, 장바구니, 마이페이지 같은 사용자 기능입니다.", ".header-subcategory:nth-child(4)"],
    ["6 / 6", "CTA", "사용자의 행동을 유도하는 강조 버튼 그룹입니다.", ".header-subcategory:nth-child(5)"],
  ],
  배너: [
    ["1 / 2", "배너 영역 만들기", "배너 영역 만들기 버튼으로 큰 소개 영역을 준비하세요.", ".catalog-group[data-area='배너'] .header-builder-guide"],
    ["2 / 2", "배너 배치하기", "만든 배너 영역에서 크기와 배경을 정하고 주요 문구와 이미지를 배치하세요.", "#canvasViewport"],
  ],
  콘텐츠: [
    ["1 / 2", "콘텐츠 영역 만들기", "콘텐츠 영역 만들기 버튼으로 본문 공간을 준비하세요.", ".catalog-group[data-area='콘텐츠'] .header-builder-guide"],
    ["2 / 2", "콘텐츠 배치하기", "서비스 설명과 카드 요소를 본문 흐름에 맞게 배치하세요.", "#canvasViewport"],
  ],
  푸터: [
    ["1 / 2", "푸터 영역 만들기", "푸터 영역 만들기 버튼으로 페이지 하단을 준비하세요.", ".catalog-group[data-area='푸터'] .header-builder-guide"],
    ["2 / 2", "푸터 배치하기", "회사 정보와 약관, 저작권 정보를 페이지 하단에 배치하세요.", "#canvasViewport"],
  ],
  고급효과: [
    ["1 / 3", "고급 효과 살펴보기", "Hover·등장·스타일 효과의 예시를 확인하세요.", "[data-catalog-group='고급효과']", true],
    ["2 / 3", "요소에 효과 적용", "캔버스 요소를 선택하고 효과·강도·속도를 고르면 바로 적용됩니다.", ".advanced-effect-section", true],
    ["3 / 3", "미리보기 확인", "적용한 효과는 미리보기와 생성 코드에도 동일하게 반영됩니다.", "#previewBtn", true],
  ],
};
let activeTutorial = [];
let tutorialIndex = 0;
let tutorialUiState = null;
let activeTutorialArea = "전체";
// 선택한 카탈로그 영역에 맞는 단계만 골라 첫 번째 도움말 위치부터 시작합니다.
function openTutorial(area = "전체") {
  tutorialUiState = {
    inspectorOpen: workspace.classList.contains("inspector-open"),
    inspectorHtml: $("#inspectorBody").innerHTML,
    search: $("#search").value,
    collapsedGroups: $$(".catalog-group").map((group) =>
      group.classList.contains("collapsed"),
    ),
  };
  $("#search").value = "";
  $("#search").dispatchEvent(new Event("input"));
  $$(".catalog-group").forEach((group) => group.classList.add("collapsed"));
  workspace.classList.remove("inspector-open");
  activeTutorial = tutorialContent[area] || tutorialContent.전체;
  activeTutorialArea = area;
  tutorialIndex = 0;
  prepareTutorialStep();
  updateTutorial();
  $("#tutorialModal").classList.add("open");
  setTimeout(positionTutorial, 460);
}
function updateTutorial() {
  const [, title, text] = activeTutorial[tutorialIndex];
  const progress = ((tutorialIndex + 1) / activeTutorial.length) * 100;
  $("#tutorialStep").textContent = `${tutorialIndex + 1} / ${activeTutorial.length}`;
  $("#tutorialTitle").textContent = title;
  $("#tutorialText").textContent = text;
  const selector = activeTutorial[tutorialIndex]?.[3] || "";
  const explicitlyMemberOnly = activeTutorial[tutorialIndex]?.[4] === true;
  const memberOnlyStep =
    explicitlyMemberOnly ||
    activeTutorialArea === "고급효과" ||
    selector.includes("고급효과") ||
    selector.includes("advanced-effect-section");
  $("#tutorialModal").classList.toggle("member-feature-step", memberOnlyStep);
  $("#tutorialPercent").textContent = `${Math.round(progress)}%`;
  $("#tutorialProgressBar").style.width = `${progress}%`;
  $("#prevTutorial").disabled = tutorialIndex === 0;
  $("#nextTutorial").textContent =
    tutorialIndex === activeTutorial.length - 1 ? "시작하기" : "다음";
  $("#tutorialDots").innerHTML = activeTutorial
    .map((_, index) => `<button class="tutorial-dot${index === tutorialIndex ? " active" : ""}" data-tutorial-index="${index}" aria-label="${index + 1}단계로 이동" aria-current="${index === tutorialIndex ? "step" : "false"}"></button>`)
    .join("");
  if ($("#tutorialModal").classList.contains("open"))
    setTimeout(positionTutorial, 460);
}
function prepareTutorialStep() {
  const selector = activeTutorial[tutorialIndex]?.[3] || "";
  $$(".catalog-group").forEach((group) => {
    group.classList.remove("tutorial-demo-ready", "tutorial-show-guide");
  });
  if (
    ![".inspector", ".advanced-effect-section"].includes(selector) &&
    tutorialUiState &&
    !tutorialUiState.inspectorOpen
  ) {
    workspace.classList.remove("inspector-open");
    if (!selected)
      $("#inspectorBody").innerHTML = tutorialUiState.inspectorHtml;
  }
  if (
    selector.includes(".catalog-group") ||
    selector.includes(".header-subcategory") ||
    selector.includes(".header-subcategories")
  ) {
    const target = document.querySelector(selector);
    const group = target?.closest(".catalog-group");
    group?.classList.remove("collapsed");
    if (
      selector.includes(".header-subcategory") ||
      selector.includes(".header-subcategories")
    )
      group?.classList.add("tutorial-demo-ready");
    if (selector.includes(".header-builder-guide"))
      group?.classList.add("tutorial-show-guide");
  }
  if (selector === ".inspector") {
    workspace.classList.add("inspector-open");
    if (selected) drawInspector();
    else {
      $("#inspectorBody").innerHTML = `
        <div class="selected-summary">
          <strong>선택한 요소</strong>
          <span>캔버스 요소를 누르면 편집 항목이 나타나요.</span>
        </div>
        <div class="inspector-section">
          <div class="inspector-section-title">위치 및 크기</div>
          <div class="split"><div class="field"><label>너비</label><input value="320" disabled></div><div class="field"><label>높이</label><input value="80" disabled></div></div>
        </div>
        <div class="inspector-section">
          <div class="inspector-section-title">색상과 글자</div>
          <div class="split"><div class="field"><label>글자색</label><input type="color" value="#151622" disabled></div><div class="field"><label>배경색</label><input type="color" value="#ffffff" disabled></div></div>
      </div>`;
    }
  }
  if (selector === ".advanced-effect-section") {
    workspace.classList.add("inspector-open");
    if (selected) drawInspector();
    else {
      $("#inspectorBody").innerHTML = `<div class="selected-summary"><strong>고급 효과 설정</strong><span>요소를 선택하면 효과 설정이 표시됩니다.</span></div><div class="inspector-section advanced-effect-section advanced-effect-controls"><div class="inspector-section-title">고급 효과 🔒</div><div class="field"><label>효과 선택</label><select disabled><option>없음 / Fade / Slide / Zoom / Glow</option></select></div><div class="field"><label>강도</label><select disabled><option>약하게 / 보통 / 강하게</option></select></div><div class="field"><label>속도</label><select disabled><option>느리게 / 보통 / 빠르게</option></select></div></div>`;
    }
  }
  setTimeout(() => {
    document
      .querySelector(selector)
      ?.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
  }, 40);
}
function positionTutorial() {
  const selector = activeTutorial[tutorialIndex]?.[3];
  const target = document.querySelector(selector) || $(".workspace");
  const rect = target.getBoundingClientRect();
  const padding = 8;
  const spotlight = $("#tutorialSpotlight");
  spotlight.style.left = Math.max(8, rect.left - padding) + "px";
  spotlight.style.top = Math.max(8, rect.top - padding) + "px";
  spotlight.style.width =
    Math.min(innerWidth - 16, rect.width + padding * 2) + "px";
  spotlight.style.height =
    Math.min(innerHeight - 16, rect.height + padding * 2) + "px";

  const card = $("#tutorialModal .tutorial-card");
  const cardWidth = Math.min(380, innerWidth - 32);
  let left =
    rect.right + 20 + cardWidth <= innerWidth
      ? rect.right + 20
      : Math.max(16, rect.left - cardWidth - 20);
  let top = Math.max(16, Math.min(rect.top, innerHeight - 260));
  if (rect.width > innerWidth * 0.7) {
    left = Math.max(16, (innerWidth - cardWidth) / 2);
    top =
      rect.bottom + 20 < innerHeight - 220
        ? rect.bottom + 20
        : Math.max(16, rect.top - 230);
  }
  card.style.left = left + "px";
  card.style.top = top + "px";
}
function closeTutorial() {
  $("#tutorialModal").classList.remove("open");
  $$(".catalog-group").forEach((group) =>
    group.classList.remove("tutorial-demo-ready", "tutorial-show-guide"),
  );
  if (tutorialUiState) {
    workspace.classList.toggle(
      "inspector-open",
      tutorialUiState.inspectorOpen,
    );
    if (!selected) $("#inspectorBody").innerHTML = tutorialUiState.inspectorHtml;
    $$(".catalog-group").forEach((group, index) =>
      group.classList.toggle(
        "collapsed",
        tutorialUiState.collapsedGroups[index] ?? true,
      ),
    );
    $("#search").value = tutorialUiState.search;
    $("#search").dispatchEvent(new Event("input"));
  }
  tutorialUiState = null;
  if ($("#dontShowTutorialAgain").checked)
    localStorage.setItem(tutorialSeenKey, "true");
  else localStorage.removeItem(tutorialSeenKey);
}
$("#tutorialBtn").onclick = () => openTutorial("전체");
$("#skipTutorial").onclick = closeTutorial;
$("#prevTutorial").onclick = () => {
  if (tutorialIndex === 0) return;
  tutorialIndex -= 1;
  prepareTutorialStep();
  updateTutorial();
};
$("#nextTutorial").onclick = () => {
  if (tutorialIndex >= activeTutorial.length - 1) closeTutorial();
  else {
    tutorialIndex += 1;
    prepareTutorialStep();
    updateTutorial();
  }
};
$("#tutorialDots").onclick = (event) => {
  const dot = event.target.closest("[data-tutorial-index]");
  if (!dot) return;
  tutorialIndex = Number(dot.dataset.tutorialIndex);
  prepareTutorialStep();
  updateTutorial();
};
document.addEventListener("keydown", (event) => {
  if (!$("#tutorialModal").classList.contains("open")) return;
  if (event.key === "Escape") closeTutorial();
  if (event.key === "ArrowLeft") $("#prevTutorial").click();
  if (event.key === "ArrowRight" || event.key === "Enter")
    $("#nextTutorial").click();
});
$("#tutorialModal").onclick = (event) => {
  if (event.target.id === "tutorialModal") closeTutorial();
};
window.addEventListener("resize", () => {
  if ($("#tutorialModal").classList.contains("open")) positionTutorial();
});

purgeStoredJavascriptWidgets();
if (!loadProject()) {
  pages = [makePage("페이지 1")];
  currentPageId = pages[0].id;
  loadActivePage(false);
}
render();
applyAuthState();
requestAnimationFrame(fitCanvas);
commit();
if (!localStorage.getItem(tutorialSeenKey))
  requestAnimationFrame(() => openTutorial("전체"));
