import { useEffect, useRef, useState } from 'react';

import '../styles/home/home-hero.css';
import '../styles/home/media.css';

// 홈 오른쪽의 미니 빌더 도구 모음에 표시할 이름과 SVG 아이콘 목록이다.
// 화면에서는 이 배열을 map으로 순회하므로 도구를 추가할 때 이곳에 한 항목만 더하면 된다.
const toolbarItems = [
  {
    label: '텍스트',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg>
    ),
  },
  {
    label: '버튼',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="8" width="18" height="8" rx="4"/></svg>
    ),
  },
  {
    label: '이미지',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
    ),
  },
  {
    label: '아이콘',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15 9 22 9.5 17 14.5 18.5 21.5 12 18 5.5 21.5 7 14.5 2 9.5 9 9 12 2"/></svg>
    ),
  },
  {
    label: '구분선',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="12" x2="20" y2="12"/></svg>
    ),
  },
  {
    label: '레이아웃',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="8" height="8" rx="1.5"/><rect x="13" y="3" width="8" height="8" rx="1.5"/><rect x="3" y="13" width="8" height="8" rx="1.5"/><rect x="13" y="13" width="8" height="8" rx="1.5"/></svg>
    ),
  },
];

// 사용자가 선택한 도구 이름을 미니 캔버스에서 보여줄 실제 JSX 모양으로 바꾼다.
function renderCanvasElement(tool) {
  switch (tool) {
    case '텍스트':
      return <strong className="mockup__canvas-title">CODE LAB</strong>;
    case '버튼':
      return <span className="mockup__canvas-button">시작하기</span>;
    case '아이콘':
      return <span className="mockup__canvas-icon">&lt;/&gt;</span>;
    case '구분선':
      return <span className="mockup__canvas-divider"></span>;
    case '레이아웃':
      return (
        <div className="mockup__canvas-layout">
          <span></span>
          <span></span>
        </div>
      );
    default:
      return null;
  }
}

// 홈의 코드 예시 문자열을 태그·속성·문자열 토큰으로 나눠 각기 다른 CSS 색상을 적용한다.
// 실제 코드 편집기가 필요한 영역은 아니므로 무거운 라이브러리 대신 작은 정규식으로 처리한다.
function highlightCode(line) {
  const regex = /(<\/?[a-zA-Z][a-zA-Z0-9]*)|(\s[a-zA-Z-]+=)|("[^"]*")|(\/?>)/g;
  const tokens = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(line)) !== null) {
    if (match.index > lastIndex) {
      tokens.push({ text: line.slice(lastIndex, match.index), type: 'text' });
    }
    if (match[1]) tokens.push({ text: match[1], type: 'tag' });
    else if (match[2]) tokens.push({ text: match[2], type: 'attr' });
    else if (match[3]) tokens.push({ text: match[3], type: 'string' });
    else if (match[4]) tokens.push({ text: match[4], type: 'tag' });
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < line.length) {
    tokens.push({ text: line.slice(lastIndex), type: 'text' });
  }

  return tokens.map((t, i) => (
    <span className={`tok-${t.type}`} key={i}>
      {t.text}
    </span>
  ));
}

// 미니 코드 패널에 표시할 줄 번호와 HTML 예시다.
const codeLines = [
  { n: 1, code: '<section class="hero">' },
  { n: 2, code: '  <div class="container">' },
  { n: 3, code: '    <드로, 상상을 웹으로</h1>' },
  { n: 5, code: '    <ph1>아이디어를<br>' },
  { n: 4, code: '    코>드래그 앤 드롭으로' },
  { n: 6, code: '    아이디어를 구현하고 실시간' },
  { n: 7, code: '    으로 확인해 보세요.</p>' },
  { n: 8, code: '    <button class="btn">' },
  { n: 9, code: '      시작하기' },
  { n: 10, code: '    </button>' },
  { n: 11, code: '  </div>' },
  { n: 12, code: '</section>' },
];

// 컬러 팔레트 버튼과 미니 빌더 강조색에 공통으로 사용하는 색상 목록이다.
const paletteColors = ['#4C3FE0', '#3B82F6', '#EC4899', '#D8D8F0', '#111827'];

// 홈 하단의 주요 기능 소개 카드에 들어갈 색상, 제목, 설명과 아이콘 데이터다.
const highlights = [
  {
    accent: 'purple',
    title: '드래그 앤 드롭',
    desc: [
      '왼쪽 패널에서 원하는 요소를 찾아요',
      '캔버스로 끌어다 놓으면 바로 배치돼요',
      '클릭 한 번으로 위치·크기를 조정해요',
    ],
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="12" height="12" rx="2" strokeDasharray="3 3"/><path d="M14 14l6 6"/><path d="M15 20l5-1-1-5"/></svg>
    ),
  },
  {
    accent: 'teal',
    title: '실시간 미리보기',
    desc: [
      '스타일을 바꾸면 새로고침 없이 반영돼요',
      '데스크탑·태블릿·모바일로 바로 전환해요',
      '화면 크기별로 어떻게 보이는지 확인해요',
    ],
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 11 14 10 22 21 10 13 10 13 2"/></svg>
    ),
  },
  {
    accent: 'orange',
    title: '깔끔한 코드',
    desc: [
      '만든 화면이 자동으로 코드로 바뀌어요',
      '"코드 보기" 버튼으로 바로 확인해요',
      '필요한 부분만 복사해서 써도 돼요',
    ],
    icon: <span className="highlight__code-icon">&lt;/&gt;</span>,
  },
  {
    accent: 'blue',
    title: '빠른 저장',
    desc: [
      '버튼 한 번이면 저장 끝, 서버 설정 없어요',
      '저장하면 언제든 다시 불러올 수 있어요',
      '작업한 내용이 안전하게 보관돼요',
    ],
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2Z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
    ),
  },
];

/**
 * 사이트의 홈 화면.
 *
 * @param {object} props
 * @param {() => void} props.onStart 시작하기 버튼을 눌렀을 때 App이 전달한
 * 인트로 재생 및 빌더 이동 흐름을 실행하는 함수
 */
export default function Home({ onStart }) {
  // 이 페이지는 실제 빌더로 들어가기 전에 핵심 조작을 간단히 체험하는 미니 데모 역할도 한다.
  // 홈의 미니 빌더는 서버 없이 React 상태만으로 화면을 즉시 다시 그린다.
  // canvasBlocks에는 사용자가 켠 텍스트/버튼/아이콘/구분선 블록만 저장한다.
  const [isOpen, setIsOpen] = useState(false);
  const [accentColor, setAccentColor] = useState(paletteColors[0]);
  const [canvasBlocks, setCanvasBlocks] = useState([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const [photoScale, setPhotoScale] = useState(1);
  const [uploadedImageUrl, setUploadedImageUrl] = useState('/assets/home/con1.png');
  const [hasUploadedImage, setHasUploadedImage] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(true);
  const imageInputRef = useRef(null);
  const uploadedObjectUrlRef = useRef(null);

  // URL.createObjectURL로 만든 임시 주소는 사용이 끝나면 직접 해제해야 메모리 누수를 막을 수 있다.
  useEffect(() => () => {
    if (uploadedObjectUrlRef.current) {
      URL.revokeObjectURL(uploadedObjectUrlRef.current);
    }
  }, []);

  const addBlock = (type) => {
    // 이미지 버튼은 최초 한 번만 파일 선택창을 열고, 그 뒤부터는 표시/숨김 토글로 동작한다.
    if (type === '이미지') {
      if (hasUploadedImage) setIsImageVisible((visible) => !visible);
      else imageInputRef.current?.click();
      return;
    }

    // 이전 배열에 같은 type이 있으면 제거하고, 없으면 추가하는 토글 패턴이다.
    setCanvasBlocks((prev) => (
      prev.some((block) => block.type === type)
        ? prev.filter((block) => block.type !== type)
        : [...prev, { id: type, type }]
    ));
  };

  const handleImageUpload = (event) => {
    const [file] = event.target.files;
    if (!file || !file.type.startsWith('image/') || hasUploadedImage) return;

    // File 객체를 업로드 서버로 보내지 않고 브라우저에서 바로 미리 볼 수 있는 임시 URL을 만든다.
    const nextImageUrl = URL.createObjectURL(file);
    uploadedObjectUrlRef.current = nextImageUrl;
    setUploadedImageUrl(nextImageUrl);
    setHasUploadedImage(true);
    setIsImageVisible(true);
  };

  const handleResizeStart = (e, direction) => {
    // 드래그 시작 좌표와 현재 배율을 기억한 뒤 mousemove의 이동량으로 새 배율을 계산한다.
    e.preventDefault();
    const startX = e.clientX;
    const startY = e.clientY;
    const startScale = photoScale;
    const slotRect = e.currentTarget
      .closest('.mockup__selection-slot')
      .getBoundingClientRect();

    const onMouseMove = (moveEvent) => {
      const deltaX = moveEvent.clientX - startX;
      const deltaY = moveEvent.clientY - startY;
      const movements = [];

      if (direction.includes('left')) movements.push(-deltaX / slotRect.width);
      if (direction.includes('right')) movements.push(deltaX / slotRect.width);
      if (direction.includes('top')) movements.push(-deltaY / slotRect.height);
      if (direction.includes('bottom')) movements.push(deltaY / slotRect.height);

      const averageMovement = movements.reduce((sum, value) => sum + value, 0) / movements.length;
      const deltaScale = averageMovement * 1.4;
      const next = Math.min(1.6, Math.max(0.6, startScale + deltaScale));
      setPhotoScale(next);
    };

    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      document.body.classList.remove('is-resizing');
    };

    document.body.classList.add('is-resizing');
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  return (
    <div className="home-page-root" style={{ '--demo-accent': accentColor }}>
      <div className="page-bg"></div>

      <section className="hero">
        <div className="hero__text">
          <span className="hero__badge">
            <span className="hero__badge-icon">&lt;/&gt;</span>
            직관적인 웹 빌더
          </span>

          <h1 className="hero__title">
            아이디어를 <span className="hero__title-accent">코드로,</span>
            <br />
            상상을 <span className="hero__title-accent">웹으로</span>
          </h1>

          <p className="hero__subtitle">
            드래그 앤 드롭으로 아이디어를 구현하고,
            <br />
            실시간으로 결과를 확인해 보세요.
          </p>

          <div className="hero__actions">
            {/*
              일반 Link로 바로 이동하지 않고 App에서 받은 onStart를 실행한다.
              그래야 App이 인트로를 띄우면서 그 뒤에서 /builder를 먼저 불러올 수 있다.
              type="button"은 이 버튼이 폼 안에 배치되더라도 submit으로 동작하는 일을 막는다.
            */}
            <button type="button" className="hero__cta" onClick={onStart}>
              {/* 버튼 위를 지나가는 장식용 광택 레이어 */}
              <span className="hero__cta-shine"></span>
              {/* 사용자에게 실제로 보이는 버튼 문구 */}
              <span className="hero__cta-text">시작하기</span>
            </button>
          </div>
        </div>

        <div className="hero__mockup">
          <div className="mockup__toolbar">
            {toolbarItems.map((item) => (
              <button
                type="button"
                className={`mockup__toolbar-item${
                  item.label === '이미지'
                    ? (hasUploadedImage && isImageVisible ? ' is-active' : '')
                    : (canvasBlocks.some((block) => block.type === item.label) ? ' is-active' : '')
                }`}
                key={item.label}
                draggable={item.label !== '이미지' || !hasUploadedImage}
                onDragStart={(e) => e.dataTransfer.setData('text/plain', item.label)}
                onClick={() => addBlock(item.label)}
                aria-pressed={item.label === '이미지'
                  ? hasUploadedImage && isImageVisible
                  : canvasBlocks.some((block) => block.type === item.label)}
                title={item.label === '이미지' && hasUploadedImage
                  ? (isImageVisible ? '업로드한 이미지 숨기기' : '업로드한 이미지 다시 표시하기')
                  : '드래그하거나 클릭해서 캔버스에 추가'}
              >
                <span className="mockup__toolbar-icon">{item.icon}</span>
                {item.label}
              </button>
            ))}
            <input
              ref={imageInputRef}
              className="mockup__image-input"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              tabIndex="-1"
              aria-hidden="true"
            />
          </div>

          <div className="mockup__browser-wrap">
          <div className="mockup__browser">
            <div className="mockup__browser-bar">
              <span className="mockup__browser-title">My Website</span>
              <div className="mockup__device-icons">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="13" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="2" width="12" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="2" width="8" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
              </div>
            </div>

            <div className="mockup__browser-body">
              <div className="mockup__selection-slot">
              <div
                className="mockup__selection"
                style={{ width: `${photoScale * 100}%`, height: `${photoScale * 100}%` }}
              >
                <div className="mockup__selection-toolbar">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="8" height="8" rx="1.5"/><rect x="13" y="3" width="8" height="8" rx="1.5"/><rect x="3" y="13" width="8" height="8" rx="1.5"/><rect x="13" y="13" width="8" height="8" rx="1.5"/></svg>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="19" x2="20" y2="19"/><rect x="6" y="10" width="3" height="9"/><rect x="14" y="6" width="3" height="13"/></svg>
                </div>
                <img
                  className={`mockup__photo${isImageVisible ? '' : ' is-hidden'}`}
                  src={uploadedImageUrl}
                  alt="편집 중인 이미지"
                  draggable={false}
                />
                <div
                  className={`mockup__canvas-elements${isDragOver ? ' is-drag-over' : ''}`}
                  onDragOver={(e) => {
                    e.preventDefault();
                    setIsDragOver(true);
                  }}
                  onDragLeave={() => setIsDragOver(false)}
                  onDrop={(e) => {
                    e.preventDefault();
                    setIsDragOver(false);
                    const type = e.dataTransfer.getData('text/plain');
                    if (type) addBlock(type);
                  }}
                >
                  {canvasBlocks.map((block) => (
                    <div className="mockup__canvas-element" key={block.id}>
                      {renderCanvasElement(block.type)}
                    </div>
                  ))}
                </div>
                <span
                  className="mockup__handle mockup__handle--tl"
                  onMouseDown={(e) => handleResizeStart(e, 'top-left')}
                ></span>
                <span
                  className="mockup__handle mockup__handle--tc"
                  onMouseDown={(e) => handleResizeStart(e, 'top')}
                ></span>
                <span
                  className="mockup__handle mockup__handle--tr"
                  onMouseDown={(e) => handleResizeStart(e, 'top-right')}
                ></span>
                <span
                  className="mockup__handle mockup__handle--ml"
                  onMouseDown={(e) => handleResizeStart(e, 'left')}
                ></span>
                <span
                  className="mockup__handle mockup__handle--mr"
                  onMouseDown={(e) => handleResizeStart(e, 'right')}
                ></span>
                <span
                  className="mockup__handle mockup__handle--bl"
                  onMouseDown={(e) => handleResizeStart(e, 'bottom-left')}
                ></span>
                <span
                  className="mockup__handle mockup__handle--bc"
                  onMouseDown={(e) => handleResizeStart(e, 'bottom')}
                ></span>
                <span
                  className="mockup__handle mockup__handle--br"
                  onMouseDown={(e) => handleResizeStart(e, 'bottom-right')}
                ></span>
              </div>
              </div>
            </div>
          </div>
          </div>

          <div className="mockup__palette">
            <span className="mockup__palette-label">컬러 팔레트</span>
            <div className="mockup__swatches">
              {paletteColors.map((color) => (
                <button
                  type="button"
                  key={color}
                  className={color === accentColor ? 'is-selected' : ''}
                  style={{ background: color, color }}
                  onClick={() => setAccentColor(color)}
                  aria-label={`색상 ${color} 선택`}
                ></button>
              ))}
            </div>
          </div>

          <div className="mockup__code">
            <div className="mockup__code-tabs">
              <span className="is-active">HTML</span>
              <span>CSS</span>
              <span>JS</span>
            </div>
            <div className="mockup__code-lines">
              {codeLines.map((line) => (
                <div className="mockup__code-line" key={line.n}>
                  <span className="mockup__code-ln">{line.n}</span>
                  <span className="mockup__code-text">{highlightCode(line.code)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`highlights${isOpen ? ' is-open' : ''}`}>
        <button
          type="button"
          className="highlights__handle"
          onClick={() => setIsOpen((v) => !v)}
          aria-expanded={isOpen}
        >
          <span className="highlights__handle-bar"></span>
        </button>

        <div className="highlights__grid">
          {highlights.map((item) => (
            <div className="highlight" key={item.title}>
              <div className={`highlight__icon highlight__icon--${item.accent}`}>{item.icon}</div>
              <h3>{item.title}</h3>
              <ul className="highlight__steps">
                {item.desc.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
