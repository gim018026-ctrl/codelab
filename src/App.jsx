import { useCallback, useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header.jsx';
import IntroSplash from './components/IntroSplash.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Challenges from './pages/Challenges.jsx';
import Builder from './pages/Builder.jsx';
import Guide from './pages/Guide.jsx';

/**
 * 애플리케이션의 최상위 화면 구성 요소.
 *
 * 역할을 세 가지로 나누어 보면 이해하기 쉽다.
 * 1. URL에 맞는 페이지를 Routes로 선택한다.
 * 2. 모든 일반 페이지가 공유하는 Header와 IntroSplash를 배치한다.
 * 3. 페이지가 바뀔 때 스크롤 위치와 전환 애니메이션을 초기화한다.
 */
export default function App() {
  // 현재 주소 정보를 읽는다. pathname은 현재 페이지, search는 ? 뒤의 쿼리 문자열이다.
  const location = useLocation();

  // 링크를 새로고침하지 않고 React Router 방식으로 이동시키는 함수다.
  const navigate = useNavigate();

  // 빌더는 자체 헤더를 가진 독립 도구이므로 공통 Header를 표시하지 않는다.
  const isBuilderPage = location.pathname === '/builder';

  // 인트로 표시 여부를 관리한다.
  // useState에 함수를 전달하면 App이 처음 만들어질 때 단 한 번만 이 조건을 계산한다.
  // 최초 주소가 홈(/)이면 인트로를 보여주되, 빌더 로고를 눌러 돌아온 경우에는 보여주지 않는다.
  // 빌더는 iframe에서 최상위 창을 다시 열기 때문에 ?from=builder라는 출발지 표시가 필요하다.
  const [showIntro, setShowIntro] = useState(() => (
    location.pathname === '/' && new URLSearchParams(location.search).get('from') !== 'builder'
  ));

  // 홈 또는 어바웃의 '시작하기' 버튼이 호출하는 공통 진입 함수다.
  // 1) 인트로를 먼저 화면 최상단에 띄운다.
  // 2) 인트로가 화면을 덮고 있는 동안 /builder로 즉시 이동한다.
  // 이 순서 덕분에 빌더 iframe이 뒤에서 미리 로드되어 인트로 종료 후 홈이 잠깐 보이지 않는다.
  const openBuilderWithIntro = useCallback(() => {
    setShowIntro(true);
    navigate('/builder');
  }, [navigate]);

  // IntroSplash의 퇴장 애니메이션이 끝나면 호출된다.
  // 이미 빌더 이동은 완료된 상태이므로 인트로만 숨기면 아래의 빌더가 바로 보인다.
  // 의존하는 외부 값이 없어 빈 배열로 고정된 함수를 유지한다.
  const handleIntroComplete = useCallback(() => {
    setShowIntro(false);
  }, []);

  // React Router는 SPA 이동 시 이전 스크롤 위치를 자동으로 올리지 않는다.
  // pathname이 바뀔 때 세 위치를 함께 초기화하면 브라우저별 차이도 줄일 수 있다.
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [location.pathname]);

  // 빌더 로고는 독립 iframe 안에 있어서 일반 React Link를 직접 사용할 수 없다.
  // 따라서 /?from=builder로 최상위 창을 연 뒤, App이 이 표시를 확인해 인트로를 건너뛴다.
  // 확인이 끝나면 replace 방식으로 쿼리를 제거한다. replace를 쓰면 불필요한 주소가
  // 브라우저 뒤로 가기 기록에도 남지 않고 사용자에게는 깨끗한 '/' 주소만 보인다.
  useEffect(() => {
    if (new URLSearchParams(location.search).get('from') === 'builder') {
      navigate('/', { replace: true });
    }
  }, [location.search, navigate]);

  return (
    <>
      {/* showIntro가 true일 때만 전체 화면 인트로를 DOM에 만든다. */}
      {showIntro && <IntroSplash onComplete={handleIntroComplete} />}

      {/* 빌더에는 자체 상단 바가 있으므로 /builder에서만 사이트 공통 헤더를 숨긴다. */}
      {!isBuilderPage && <Header />}

      {/* location.key가 바뀔 때만 래퍼를 새로 만들어 페이지 이동 애니메이션을 실행한다. */}
      {/* 인트로 종료만으로 래퍼를 다시 만들지 않아 빌더 화면이 두 번 전환되는 현상을 막는다. */}
      <div
        key={location.key}
        className={`route-transition${isBuilderPage ? ' route-transition--fullscreen' : ''}`}
      >
        {/* URL과 실제 페이지 컴포넌트를 연결하는 라우팅 표 */}
        <Routes>
          {/* 홈의 시작 버튼에는 인트로와 함께 빌더로 들어가는 함수를 전달한다. */}
          <Route path="/" element={<Home onStart={openBuilderWithIntro} />} />
          {/* 어바웃의 시작 버튼도 홈과 완전히 같은 진입 흐름을 사용한다. */}
          <Route path="/about" element={<About onStart={openBuilderWithIntro} />} />
          {/* 아래 페이지들은 일반 이동이므로 인트로 실행 함수를 전달하지 않는다. */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/challenges" element={<Challenges />} />
          {/* 빌더 자체 주소다. 직접 새로고침하거나 직접 접속할 때는 인트로가 자동 실행되지 않는다. */}
          <Route path="/builder" element={<Builder />} />
          <Route path="/guide" element={<Guide />} />
        </Routes>
      </div>
    </>
  );
}
