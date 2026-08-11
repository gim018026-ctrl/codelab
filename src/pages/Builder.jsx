import IntegratedFrame from '../components/IntegratedFrame.jsx';

/**
 * 비주얼 빌더 페이지.
 *
 * 실제 빌더는 React로 다시 작성하지 않고 public/integrated/builder에 있는
 * 독립 HTML·CSS·JavaScript 앱을 사용한다. IntegratedFrame은 그 앱을 iframe으로
 * 감싸서 React Router의 /builder 주소 안에 표시하고 화면 높이도 맞춰 준다.
 */
export default function Builder() {
  return (
    // public 아래 파일은 번들에 합치지 않고 Vite가 입력한 경로 그대로 제공한다.
    <IntegratedFrame
      // iframe이 처음 불러올 독립 빌더 HTML 문서의 공개 경로다.
      src="/integrated/builder/main.html"
      // iframe 내용을 설명하는 접근성용 제목이다.
      title="CODE LAB 비주얼 빌더"
      // 빌더 전용 전체 화면 크기와 여백을 적용하는 CSS 클래스다.
      className="integrated-page--builder"
    />
  );
}
