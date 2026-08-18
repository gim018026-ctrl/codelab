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
