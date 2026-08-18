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
