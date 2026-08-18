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
