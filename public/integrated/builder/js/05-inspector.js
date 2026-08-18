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
