import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import CodeMirror from '@uiw/react-codemirror';
import { EditorView } from '@codemirror/view';
import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { tags as t } from '@lezer/highlight';
import { html as htmlLang } from '@codemirror/lang-html';
import { css as cssLang } from '@codemirror/lang-css';
import Footer from '../components/Footer.jsx';
import '../styles/challenges/challenges.css';

// CodeMirror 편집기의 배경, 글꼴, 선택 영역 등 화면 전체 모양을 정의한다.
const editorTheme = EditorView.theme(
  {
    '&': { fontSize: '12.5px', backgroundColor: 'transparent' },
    '.cm-content': { fontFamily: '"JetBrains Mono", Consolas, monospace', color: '#E5E7EB', padding: '12px 14px' },
    '.cm-gutters': { backgroundColor: 'transparent', color: '#4B5563', border: 'none' },
    '.cm-activeLine': { backgroundColor: 'rgba(255,255,255,0.04)' },
    '.cm-activeLineGutter': { backgroundColor: 'transparent' },
    '.cm-cursor': { borderLeftColor: '#E5E7EB' },
    '.cm-selectionBackground, ::selection': { backgroundColor: 'rgba(108,92,231,0.35) !important' },
    '.cm-tooltip-autocomplete': { fontFamily: '"JetBrains Mono", Consolas, monospace', fontSize: '12px' },
  },
  { dark: true }
);

// HTML/CSS 문법 종류별 색상을 지정해 코드 구조를 눈으로 쉽게 구분하게 한다.
const editorHighlightStyle = HighlightStyle.define([
  { tag: t.tagName, color: '#F472B6', fontWeight: '700' },
  { tag: t.angleBracket, color: '#94A3B8' },
  { tag: t.attributeName, color: '#67E8F9' },
  { tag: t.attributeValue, color: '#A5F3A5' },
  { tag: t.string, color: '#A5F3A5' },
  { tag: t.number, color: '#FBBF24' },
  { tag: t.keyword, color: '#C4B5FD', fontWeight: '700' },
  { tag: t.propertyName, color: '#67E8F9' },
  { tag: t.className, color: '#FBBF24' },
  { tag: t.punctuation, color: '#94A3B8' },
  { tag: t.comment, color: '#6B7280', fontStyle: 'italic' },
  { tag: t.unit, color: '#FBBF24' },
  { tag: t.color, color: '#FBBF24' },
]);

// 각 챌린지의 설명, 시작 코드, 정답 예시, 검사 함수와 카드 미리보기를 한곳에 모은 데이터다.
// checks 배열은 iframe에서 만든 실제 요소를 받아 요구 조건을 만족했는지 true/false로 반환한다.
const challenges = [
  {
    n: '01',
    level: '초급',
    title: '버튼 만들기',
    desc: '다양한 스타일의 버튼을 만들어 보세요.',
    time: '5분',
    requirements: [
      '가로 140px, 세로 44px',
      '모서리는 12px 둥글게',
      '마우스 올리면 살짝 위로 떠오르는 효과',
    ],
    html: '<button class="btn">\n  시작하기\n</button>',
    css: '.btn {\n  /* 여기에 스타일을 작성하세요 */\n}',
    answerCss:
      '.btn {\n  width: 140px;\n  height: 44px;\n  border: none;\n  border-radius: 12px;\n  background: #6C5CE7;\n  color: #fff;\n  font-weight: 700;\n  cursor: pointer;\n  transition: transform 0.2s ease;\n}\n\n.btn:hover {\n  transform: translateY(-4px);\n}',
    selector: '.btn',
    checks: [
      (el) => {
        const r = el.getBoundingClientRect();
        return Math.abs(r.width - 140) <= 2 && Math.abs(r.height - 44) <= 2;
      },
      (el) => getComputedStyle(el).borderRadius === '12px',
    ],
    preview: (
      <button type="button" className="cpreview__btn">
        시작하기
        <span>→</span>
      </button>
    ),
  },
  {
    n: '02',
    level: '초급',
    title: '카드 만들기',
    desc: '이미지와 내용을 포함한 카드를 만들어 보세요.',
    time: '10분',
    requirements: [
      '썸네일 + 텍스트 2줄 구성',
      '카드 전체에 은은한 그림자',
      '모서리는 10px 둥글게',
    ],
    html: '<div class="card">\n  <div class="thumb"></div>\n  <p>내용 1</p>\n  <p>내용 2</p>\n</div>',
    css: '.card {\n  /* 여기에 스타일을 작성하세요 */\n}',
    answerCss:
      '.card {\n  width: 220px;\n  padding: 16px;\n  border-radius: 10px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);\n  background: #fff;\n}\n\n.card .thumb {\n  height: 120px;\n  border-radius: 8px;\n  margin-bottom: 12px;\n  background: #e2e8f0;\n}\n\n.card p {\n  margin: 4px 0;\n  font-size: 13px;\n  color: #475569;\n}',
    selector: '.card',
    checks: [
      (el) => el.children.length >= 3,
      (el) => getComputedStyle(el).boxShadow !== 'none',
      (el) => getComputedStyle(el).borderRadius === '10px',
    ],
    preview: (
      <div className="cpreview__card">
        <span className="cpreview__card-thumb"></span>
        <span className="cpreview__card-line" style={{ width: '80%' }}></span>
        <span className="cpreview__card-line" style={{ width: '55%' }}></span>
      </div>
    ),
  },
  {
    n: '03',
    level: '중급',
    title: '네비게이션 바',
    desc: '반응형 네비게이션 바를 구현해 보세요.',
    time: '10분',
    requirements: [
      '메뉴 3개를 가로로 배치',
      '화면이 좁아지면 세로로 전환',
      '현재 메뉴는 강조 색상 표시',
    ],
    html: '<nav class="navbar">\n  <a href="#">Home</a>\n  <a href="#">About</a>\n  <a href="#">Contact</a>\n</nav>',
    css: '.navbar {\n  /* 여기에 스타일을 작성하세요 */\n}',
    answerCss:
      '.navbar {\n  display: flex;\n  gap: 24px;\n}\n\n.navbar a {\n  color: #334155;\n  text-decoration: none;\n  font-weight: 600;\n}\n\n.navbar a:first-child {\n  color: #6C5CE7;\n}\n\n@media (max-width: 480px) {\n  .navbar {\n    flex-direction: column;\n    gap: 12px;\n  }\n}',
    selector: '.navbar',
    checks: [
      (el) => el.children.length === 3 && getComputedStyle(el).display === 'flex',
    ],
    preview: (
      <div className="cpreview__nav">
        <span>Home</span>
        <span>About</span>
        <span>Contact</span>
      </div>
    ),
  },
  {
    n: '04',
    level: '중급',
    title: '히어로 섹션',
    desc: '멋진 히어로 섹션을 만들어 보세요.',
    time: '15분',
    requirements: [
      '제목 + 버튼 구성',
      '배경에 포인트 그래픽 요소',
      '버튼은 브랜드 컬러로 강조',
    ],
    html: '<section class="hero">\n  <h2>Hello, I\'m Developer</h2>\n  <a class="btn" href="#">Learn More</a>\n</section>',
    css: '.hero {\n  /* 여기에 스타일을 작성하세요 */\n}',
    answerCss:
      '.hero {\n  padding: 60px 40px;\n  text-align: center;\n  border-radius: 16px;\n  background: linear-gradient(135deg, #EEF2FF, #E0E7FF);\n}\n\n.hero h2 {\n  margin: 0 0 20px;\n  font-size: 24px;\n}\n\n.hero .btn {\n  display: inline-block;\n  padding: 12px 24px;\n  border-radius: 8px;\n  background: #6C5CE7;\n  color: #fff;\n  text-decoration: none;\n  font-weight: 700;\n}',
    selector: '.hero',
    checks: [
      (el) => !!el.querySelector('h2') && !!el.querySelector('.btn, a, button'),
    ],
    preview: (
      <div className="cpreview__hero">
        <div>
          <span className="cpreview__hero-title">
            Hello,
            <br />
            I&apos;m Developer
          </span>
          <span className="cpreview__hero-btn">Learn More</span>
        </div>
        <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 3 20h18L12 2z"/></svg>
      </div>
    ),
  },
  {
    n: '05',
    level: '고급',
    title: '탭 컴포넌트',
    desc: '탭 인터페이스를 구현해 보세요.',
    time: '15분',
    requirements: [
      '탭 3개, 클릭 시 활성 탭 전환',
      '활성 탭은 밑줄/색상으로 구분',
      '탭 내용 영역은 애니메이션으로 전환',
    ],
    html: '<div class="tabs">\n  <button class="is-active">Tab 1</button>\n  <button>Tab 2</button>\n  <button>Tab 3</button>\n</div>',
    css: '.tabs {\n  /* 여기에 스타일을 작성하세요 */\n}',
    answerCss:
      '.tabs {\n  display: flex;\n  gap: 8px;\n}\n\n.tabs button {\n  border: none;\n  background: none;\n  padding: 10px 4px;\n  font-weight: 600;\n  color: #94a3b8;\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  transition: color 0.2s ease, border-color 0.2s ease;\n}\n\n.tabs button.is-active {\n  color: #6C5CE7;\n  border-bottom-color: #6C5CE7;\n}',
    selector: '.tabs',
    checks: [
      (el) => el.querySelectorAll('button').length === 3,
    ],
    preview: (
      <div className="cpreview__tabs">
        <div className="cpreview__tabs-head">
          <span className="is-active">Tab 1</span>
          <span>Tab 2</span>
          <span>Tab 3</span>
        </div>
        <span className="cpreview__tabs-line"></span>
      </div>
    ),
  },
  {
    n: '06',
    level: '고급',
    title: '가격 카드',
    desc: '가격 정보를 포함한 카드를 만들어 보세요.',
    time: '15분',
    requirements: [
      '플랜명 + 가격 + 버튼 구성',
      '강조하고 싶은 플랜은 테두리로 구분',
      '버튼은 호버 시 색상 변화',
    ],
    html: '<div class="price-card">\n  <span>Pro Plan</span>\n  <strong>$29 / month</strong>\n  <a class="btn" href="#">Get Started</a>\n</div>',
    css: '.price-card {\n  /* 여기에 스타일을 작성하세요 */\n}',
    answerCss:
      '.price-card {\n  width: 220px;\n  padding: 28px 20px;\n  text-align: center;\n  border: 2px solid #6C5CE7;\n  border-radius: 12px;\n}\n\n.price-card strong {\n  display: block;\n  margin: 10px 0 20px;\n  font-size: 22px;\n}\n\n.price-card .btn {\n  display: inline-block;\n  padding: 10px 22px;\n  border-radius: 8px;\n  background: #6C5CE7;\n  color: #fff;\n  text-decoration: none;\n  font-weight: 700;\n  transition: background 0.2s ease;\n}\n\n.price-card .btn:hover {\n  background: #4b3fd1;\n}',
    selector: '.price-card',
    checks: [
      (el) => el.children.length >= 3,
      (el) => {
        const s = getComputedStyle(el);
        return s.borderStyle !== 'none' && parseFloat(s.borderWidth) > 0;
      },
    ],
    preview: (
      <div className="cpreview__price">
        <span className="cpreview__price-label">Pro Plan</span>
        <span className="cpreview__price-value">
          $29<small> / month</small>
        </span>
        <span className="cpreview__price-btn">Get Started</span>
      </div>
    ),
  },
];

const PROGRESS_KEY = 'codelab-challenge-progress';

// '5분' 같은 문자열에서 숫자를 꺼내 타이머의 초기 분 값으로 바꾼다.
function parseMinutes(str) {
  const match = /(\d+)/.exec(str);
  return match ? parseInt(match[1], 10) : 10;
}

// 초 단위 숫자를 화면에 표시할 00:00 형식으로 변환한다.
function formatTime(sec) {
  const m = Math.floor(sec / 60).toString().padStart(2, '0');
  const s = (sec % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

/**
 * 선택한 챌린지를 실제로 푸는 전체 화면 모달.
 * 코드 편집기 입력을 iframe 미리보기에 반영하고, 검사 버튼으로 요구 조건을 검증한다.
 */
function ChallengeModal({ challenge, onClose, onComplete, onNext, hasNext }) {
  // 현재 편집 중인 HTML/CSS와 마지막 검사 결과를 관리한다.
  const [html, setHtml] = useState(challenge.html);
  const [css, setCss] = useState(challenge.css);
  const [results, setResults] = useState(null);
  // 챌린지 권장 시간을 초로 바꿔 카운트다운한다.
  const [timeLeft, setTimeLeft] = useState(() => parseMinutes(challenge.time) * 60);
  // 검사 함수가 미리보기 iframe 내부 문서에 접근할 때 사용하는 DOM 참조다.
  const iframeRef = useRef(null);

  // 다음 챌린지로 바뀌면 이전 편집 내용과 결과, 타이머를 새 문제의 초기값으로 되돌린다.
  useEffect(() => {
    setHtml(challenge.html);
    setCss(challenge.css);
    setResults(null);
    setTimeLeft(parseMinutes(challenge.time) * 60);
  }, [challenge]);

  // 코드를 수정한 뒤에는 이전 검사 결과가 더 이상 유효하지 않으므로 지운다.
  useEffect(() => {
    setResults(null);
  }, [html, css]);

  // 모달이 열린 동안 1초마다 남은 시간을 줄이고, 닫힐 때 interval을 반드시 해제한다.
  useEffect(() => {
    const id = setInterval(() => {
      setTimeLeft((t) => (t <= 0 ? 0 : t - 1));
    }, 1000);
    return () => clearInterval(id);
  }, [challenge]);

  // iframe에서 검사 대상 요소를 찾고 challenge.checks를 순서대로 실행한다.
  const handleCheck = () => {
    const doc = iframeRef.current?.contentDocument;
    const el = doc?.querySelector(challenge.selector);

    if (!el) {
      setResults({ error: true });
      return;
    }

    // 한 검사에서 오류가 발생해도 모달 전체가 깨지지 않고 해당 조건만 실패로 처리한다.
    const passed = challenge.checks.map((test) => {
      try {
        return !!test(el);
      } catch {
        return false;
      }
    });
    setResults({ passed });
    if (passed.every(Boolean)) {
      onComplete(challenge.n);
    }
  };

  // 모달 뒤 페이지의 스크롤을 잠그고 Escape 키로 닫을 수 있게 한다.
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const onKeydown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeydown);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKeydown);
    };
  }, [onClose]);

  // 페이지 전환 컨테이너에는 transform이 적용됩니다. 그 안에 fixed 모달을 두면
  // 화면이 아닌 컨테이너를 기준으로 배치되므로, body에 Portal로 렌더링합니다.
  return createPortal(
    <div className="challenge-modal" role="dialog" aria-modal="true" aria-label={`${challenge.title} 챌린지`}>
      <div className="challenge-modal__backdrop" onClick={onClose}></div>
      <div className="challenge-modal__panel">
        <button type="button" className="challenge-modal__close" onClick={onClose} aria-label="닫기">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>

        <div className="challenge-modal__head">
          <span className="challenge-card__index">{challenge.n}</span>
          <span className={`challenge-card__level challenge-card__level--${challenge.level}`}>{challenge.level}</span>
          <h2>{challenge.title}</h2>
          <span className={`challenge-modal__time${timeLeft <= 30 && timeLeft > 0 ? ' is-urgent' : ''}${timeLeft === 0 ? ' is-over' : ''}`}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            {timeLeft === 0 ? '시간 종료' : formatTime(timeLeft)}
          </span>
        </div>

        <p className="challenge-modal__desc">{challenge.desc}</p>

        <ul className="challenge-modal__requirements">
          {challenge.requirements.map((r, i) => {
            const hasCheck = results?.passed && i < challenge.checks.length;
            const passed = hasCheck ? results.passed[i] : null;
            return (
              <li
                key={r}
                className={hasCheck ? (passed ? 'is-pass' : 'is-fail') : ''}
              >
                {hasCheck ? (
                  passed ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  )
                ) : (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                )}
                {r}
              </li>
            );
          })}
        </ul>

        {results?.error && (
          <p className="challenge-modal__result challenge-modal__result--error">
            결과를 확인할 수 없어요. HTML의 최상위 요소 구조를 확인해주세요.
          </p>
        )}

        {results?.passed && (
          <p
            className={`challenge-modal__result ${
              results.passed.every(Boolean) ? 'is-pass' : 'is-fail'
            }`}
          >
            {results.passed.every(Boolean)
              ? '테스트 가능한 조건을 모두 만족했어요! 🎉'
              : `${results.passed.filter(Boolean).length} / ${results.passed.length}개 조건을 만족했어요.`}
          </p>
        )}

        {results && (
          <div className="challenge-modal__answer">
            <span className="challenge-modal__answer-label">정답 예시 CSS</span>
            <pre>
              <code>{challenge.answerCss}</code>
            </pre>
          </div>
        )}

        <div className="challenge-modal__body">
          <div className="challenge-modal__editors">
            <div className="code-panel">
              <div className="code-panel__head">
                <span>HTML</span>
              </div>
              <CodeMirror
                value={html}
                height="260px"
                theme={editorTheme}
                extensions={[htmlLang(), syntaxHighlighting(editorHighlightStyle)]}
                basicSetup={{ lineNumbers: true, foldGutter: false }}
                onChange={(value) => setHtml(value)}
              />
            </div>
            <div className="code-panel">
              <div className="code-panel__head">
                <span>CSS</span>
              </div>
              <CodeMirror
                value={css}
                height="260px"
                theme={editorTheme}
                extensions={[cssLang(), syntaxHighlighting(editorHighlightStyle)]}
                basicSetup={{ lineNumbers: true, foldGutter: false }}
                onChange={(value) => setCss(value)}
              />
            </div>
          </div>

          <div className="challenge-modal__preview">
            <span className="challenge-modal__preview-label">미리보기</span>
            <iframe
              ref={iframeRef}
              className="challenge-modal__preview-stage"
              title="미리보기"
              sandbox="allow-same-origin"
              srcDoc={`<!doctype html><html><head><style>
                * { box-sizing: border-box; }
                body {
                  margin: 0;
                  min-height: 100vh;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-family: -apple-system, "Pretendard", "Malgun Gothic", sans-serif;
                  padding: 20px;
                }
                ${css}
              </style></head><body>${html}</body></html>`}
            />
          </div>
        </div>

        <div className="challenge-modal__actions">
          <button
            type="button"
            className="challenges-btn challenges-btn--ghost"
            onClick={() => {
              setHtml(challenge.html);
              setCss(challenge.css);
              setResults(null);
            }}
          >
            초기화
          </button>
          <button type="button" className="challenges-btn challenges-btn--primary" onClick={handleCheck}>
            정답 확인하기
          </button>
          {hasNext && (
            <button type="button" className="challenges-btn challenges-btn--next" onClick={onNext}>
              다음 단계
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}

/**
 * 챌린지 목록과 전체 진행률을 보여주는 페이지.
 * 카드를 선택하면 ChallengeModal을 열고 완료 결과는 localStorage에 보존한다.
 */
export default function Challenges() {
  // null이면 모달이 닫혀 있고, 숫자이면 challenges 배열의 해당 문제를 연다.
  const [activeIndex, setActiveIndex] = useState(null);
  const activeChallenge = activeIndex === null ? null : challenges[activeIndex];

  // 이전 방문에서 완료한 문제 번호를 읽어 중복 없는 Set으로 복원한다.
  const [completed, setCompleted] = useState(() => {
    try {
      return new Set(JSON.parse(localStorage.getItem(PROGRESS_KEY)) || []);
    } catch {
      return new Set();
    }
  });

  // 완료 목록이 바뀔 때마다 새로고침 후에도 유지되도록 브라우저 저장소에 기록한다.
  useEffect(() => {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify([...completed]));
  }, [completed]);

  // 새 문제만 완료 Set에 추가하며 이미 완료한 문제는 기존 상태를 그대로 사용한다.
  const handleComplete = (n) => {
    setCompleted((prev) => (prev.has(n) ? prev : new Set(prev).add(n)));
  };

  // 완료한 문제 수를 전체 문제 수로 나눠 진행률 막대에 사용할 백분율을 만든다.
  const percent = Math.round((completed.size / challenges.length) * 100);

  return (
    <>
    <main className="challenges-page">
      <section className="challenges-hero container">
        <div className="challenges-hero__text">
          <span className="challenges-hero__eyebrow">CODE CHALLENGE</span>
          <h1>
            직접 만들고,
            <br />
            직접 <span className="challenges-hero__accent">해결하세요.</span>
          </h1>
          <p>
            HTML과 CSS로 다양한 UI를 구현하며
            <br />
            실력을 단계별로 성장시켜 보세요.
          </p>
          <div className="challenges-hero__actions">
            <button
              type="button"
              className="challenges-hero__cta"
              onClick={() => setActiveIndex(0)}
            >
              챌린지 시작하기
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
          </div>
        </div>

        <div className="challenges-hero__art">
          <img src="/assets/challenges/banner.png" alt="코딩 챌린지 일러스트" />
        </div>
      </section>

      <section className="container challenges-grid" id="challenge-list">
        {challenges.map((c, idx) => (
          <div
            className={`challenge-card${completed.has(c.n) ? ' is-done' : ''}`}
            key={c.n}
            onClick={() => setActiveIndex(idx)}
          >
            <div className="challenge-card__head">
              <span className="challenge-card__index">{c.n}</span>
              <span className={`challenge-card__level challenge-card__level--${c.level}`}>{c.level}</span>
              {completed.has(c.n) && (
                <span className="challenge-card__done" aria-label="완료">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  완료
                </span>
              )}
            </div>

            <div className="challenge-card__preview">{c.preview}</div>

            <h3>{c.title}</h3>
            <p>{c.desc}</p>

            <div className="challenge-card__meta">
              <span>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                {c.time}
              </span>
            </div>

            <button
              type="button"
              className="challenge-card__cta"
              onClick={(e) => {
                e.stopPropagation();
                setActiveIndex(idx);
              }}
            >
              도전하기
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
          </div>
        ))}
      </section>

      <section className="container challenges-progress">
        <div className="challenges-progress__inner">
          <div className="challenges-progress__goal">
            <span className="challenges-progress__goal-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
            </span>
            <div>
              <strong>목표를 세우고 꾸준히 도전해 보세요!</strong>
              <span>모든 챌린지를 완료하고 실력을 증명해 보세요.</span>
            </div>
          </div>

          <div className="challenges-progress__bar">
            <span className="challenges-progress__bar-label">전체 완료율</span>
            <div className="challenges-progress__track">
              <span style={{ width: `${percent}%` }}></span>
            </div>
            <span className="challenges-progress__percent">{percent}%</span>
          </div>

          <a href="#" className="challenges-progress__cta">
            내 진행 상황 보기
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
        </div>
      </section>

      {activeChallenge && (
        <ChallengeModal
          challenge={activeChallenge}
          onClose={() => setActiveIndex(null)}
          onComplete={handleComplete}
          onNext={() => setActiveIndex((i) => Math.min(i + 1, challenges.length - 1))}
          hasNext={activeIndex < challenges.length - 1}
        />
      )}
      </main>

      <Footer />
    </>
  );
}
