import IntegratedFrame from '../components/IntegratedFrame.jsx';
import Footer from '../components/Footer.jsx';

/**
 * HTML/CSS 가이드 페이지.
 *
 * public/integrated/guide의 독립 가이드 앱을 iframe 안에 표시한다.
 * 빌더와 가이드를 독립 문서로 유지하면 기존 HTML 구조와 스크립트를 바꾸지 않고도
 * React 사이트의 라우팅과 공통 레이아웃 안에서 사용할 수 있다.
 */
export default function Guide() {
  return (
    <>
      {/* v 값은 정적 파일 캐시를 갱신하기 위한 버전이다. */}
      {/* guide 파일을 수정했는데 이전 화면이 보이면 이 숫자를 함께 올린다. */}
      <IntegratedFrame
        // 브라우저가 불러올 가이드 HTML과 캐시 갱신용 버전 값이다.
        src="/integrated/guide/index.html?v=21"
        // 스크린 리더가 iframe의 목적을 알 수 있게 하는 제목이다.
        title="CODE LAB HTML/CSS 치트키 사전"
        // 공통 iframe 스타일에 가이드 전용 크기 규칙을 추가한다.
        className="integrated-page--guide"
      />
      {/* About/Challenges와 같은 공통 사이트 푸터를 iframe 도구 아래에 붙인다. */}
      <Footer />
    </>
  );
}
