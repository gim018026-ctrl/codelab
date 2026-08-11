import { useEffect } from 'react';
import '../styles/common/intro-splash.css';

/**
 * 화면 전체를 덮는 CODE LAB 인트로 애니메이션.
 *
 * App.jsx가 표시 시점을 결정하고 onComplete 함수를 전달한다.
 * CSS 퇴장 애니메이션이 끝나면 onComplete를 호출해 자신을 숨기며,
 * 애니메이션 이벤트가 누락되는 환경에서도 종료되도록 보조 타이머를 함께 사용한다.
 */
export default function IntroSplash({ onComplete }) {
  // 인트로가 마운트된 동안 body 스크롤을 막는 클래스를 추가한다.
  useEffect(() => {
    document.body.classList.add('intro-is-playing');

    // CSS animationend가 발생하지 않아 화면이 영구히 막히는 상황을 방지하는 안전장치다.
    const fallbackTimer = window.setTimeout(onComplete, 3200);

    // 인트로가 사라지거나 페이지가 종료될 때 타이머와 body 클래스를 반드시 정리한다.
    return () => {
      window.clearTimeout(fallbackTimer);
      document.body.classList.remove('intro-is-playing');
    };
  }, [onComplete]);

  // 자식 로고 애니메이션이 아니라 바깥 splash의 퇴장 애니메이션이 끝났을 때만 완료 처리한다.
  const handleAnimationEnd = (event) => {
    if (event.target === event.currentTarget && event.animationName === 'intro-splash-exit') {
      onComplete();
    }
  };

  return (
    // CSS가 이 최상위 요소에 진입·대기·퇴장 애니메이션을 적용한다.
    <div className="intro-splash" onAnimationEnd={handleAnimationEnd}>
      <div className="intro-splash__logo" role="img" aria-label="CODE LAB">
        <span className="intro-splash__mark" aria-hidden="true">&lt;/&gt;</span>
        <span className="intro-splash__name">CODE LAB</span>
      </div>
    </div>
  );
}
