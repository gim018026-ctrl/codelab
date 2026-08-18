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
    "모바일 햄버거 메뉴",
    "로그인 / 회원가입",
    "마이페이지",
  ],
  배너: [
    "배너", "배경 이미지", "중앙형", "버튼 2개", "페이드인",
  ],
  콘텐츠: [
    "콘텐츠", "기능 소개", "서비스 카드", "이용 순서", "이미지 갤러리", "영상",
  ],
  푸터: [
    "푸터", "푸터 로고", "저작권", "푸터 메뉴", "개인정보처리방침",
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
  return items.map((label) => catalogTile(label, group)).join("");
}

