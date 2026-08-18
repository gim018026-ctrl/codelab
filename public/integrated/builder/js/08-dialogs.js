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
    ["3 / 10", "영역별 요소 살펴보기", "각 영역을 펼치면 그 영역에 맞는 요소들이 표시됩니다. 헤더에는 로고·메인 메뉴·모바일 메뉴·로그인/회원가입·마이페이지가 있고, 배너·콘텐츠·푸터에는 각각 다른 구성이 제공됩니다.", ".catalog-group[data-area='헤더'] .component-grid"],
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
    ["1 / 2", "헤더 영역 만들기", "먼저 헤더 영역 만들기 버튼으로 실제 헤더 영역을 준비하세요.", ".catalog-group[data-area='헤더'] .header-builder-guide"],
    ["2 / 2", "헤더 요소 배치하기", "로고, 사이트명, 메인 메뉴, 모바일 햄버거 메뉴, 로그인/회원가입, 마이페이지를 헤더 영역에 배치하세요.", "#canvasViewport"],
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
