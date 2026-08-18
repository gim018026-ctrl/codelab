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

