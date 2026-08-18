import { partShell } from './01-shell.js';
import { partHtml } from './02-panel-html.js';
import { partCss } from './03-panel-css.js';
import { partLayout } from './04-panel-layout.js';
import { partTypography } from './05-panel-typography.js';
import { partColor } from './06-panel-color.js';
import { partResponsive } from './07-panel-responsive.js';
import { partAnimation } from './08-panel-animation.js';
import { partTail } from './09-tail.js';

export const pageMarkup = "\n" + [
  partShell,
  partHtml,
  partCss,
  partLayout,
  partTypography,
  partColor,
  partResponsive,
  partAnimation,
  partTail,
].join("\n") + "\n";