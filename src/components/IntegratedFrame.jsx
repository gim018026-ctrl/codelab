import '../styles/common/integrated-frame.css';

/**
 * 기존 HTML/CSS/JavaScript 도구를 React 라우트 안에 넣는 공통 래퍼.
 *
 * Guide와 Builder는 원래 독립 HTML 문서이므로 한 번에 React로 다시 작성하지 않고
 * iframe으로 격리했다. 이렇게 하면 두 문서의 전역 CSS와 전역 변수가 React 화면을
 * 오염시키지 않는다. title은 스크린 리더가 iframe의 용도를 알 수 있게 해준다.
 */
export default function IntegratedFrame({ src, title, className = '' }) {
  return (
    // 전달된 전용 className을 공통 integrated-page 클래스 뒤에 안전하게 합친다.
    <main className={`integrated-page ${className}`.trim()}>
      {/* 가이드의 코드 복사와 빌더의 복사 기능에 필요한 권한만 허용한다. */}
      <iframe
        // 공통 CSS에서 iframe이 부모 영역을 가득 채우도록 사용하는 클래스다.
        className="integrated-page__frame"
        // Builder.jsx 또는 Guide.jsx가 전달한 독립 HTML 문서 주소다.
        src={src}
        // iframe에는 접근성상 내용을 설명하는 title이 반드시 필요하다.
        title={title}
        // 독립 도구가 생성 코드를 클립보드에 복사하고 읽을 수 있도록 허용한다.
        allow="clipboard-read; clipboard-write"
      />
    </main>
  );
}
