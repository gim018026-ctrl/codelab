import { Link } from 'react-router-dom';
import '../styles/about/about-footer.css';

/**
 * 어바웃과 챌린지 페이지가 공유하는 사이트 푸터.
 * 브랜드 소개, 내부 메뉴, 외부 채널 자리, 뉴스레터 폼과 정책 링크를 한곳에 보여준다.
 * 현재 # 링크와 뉴스레터 폼은 백엔드가 연결되지 않은 화면용 자리 표시자다.
 */
export default function Footer() {
  return (
    <footer className="about-footer">
      {/* 코드 학습 사이트라는 성격을 HTML/CSS/JS 배지로 표현하는 브랜드 영역 */}
      <div className="container about-footer__brand">
        {/* 원형 빛 효과 대신, 실제 개발 언어를 나타내는 작은 코드 배지를 배치합니다. */}
        <div className="about-footer__mark" aria-hidden="true">
          <span className="about-footer__tag about-footer__tag--html">&lt;HTML&gt;</span>
          <span className="about-footer__tag about-footer__tag--css">.CSS &#123; &#125;</span>
          <span className="about-footer__tag about-footer__tag--js">JS( )</span>
          <span className="about-footer__icon">&lt;/&gt;</span>
        </div>
        <h2>
          CODE LAB<span className="about-footer__cursor" aria-hidden="true"></span>
        </h2>
        <div className="about-footer__code-line" aria-hidden="true">
          <span>const</span> nextIdea = <strong>&quot;make it real&quot;</strong>;
        </div>
        <p>코딩을 배우고, 만들고, 성장하는 공간</p>
      </div>

      <div className="container about-footer__divider"></div>

      {/* 사이트 내부 메뉴, 외부 채널 링크와 뉴스레터 입력을 열 단위로 배치한다. */}
      <div className="container about-footer__grid">
        <div className="about-footer__col">
          <span>연결하기</span>
          <a href="#">GitHub</a>
          <a href="#">Discord</a>
          <a href="#">Instagram</a>
        </div>
        <div className="about-footer__col">
          <span>배우기</span>
          <Link to="/guide">Guide</Link>
          <Link to="/builder" target="_blank" rel="noopener noreferrer">Builder</Link>
          <Link to="/challenges">Challenges</Link>
        </div>
        <div className="about-footer__col">
          <span>리소스</span>
          <Link to="/about">HTML/CSS Cheatsheet</Link>
          <Link to="/ui-inspiration">UI Inspiration</Link>
          <Link to="/about">Roadmap</Link>
        </div>
        <div className="about-footer__col">
          <span>회사</span>
          <Link to="/about">소개</Link>
          <a href="#">채용</a>
          <a href="#">보도 자료</a>
        </div>
        <div className="about-footer__newsletter">
          <span>새로운 소식 받기</span>
          <p>최신 튜토리얼, 기능 업데이트 및 소식을 받아보세요.</p>
          {/* 아직 구독 서버가 없으므로 제출 새로고침만 막고 UI 형태만 제공한다. */}
          <form className="about-footer__form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="이메일 주소를 입력하세요" required />
            <button type="submit" aria-label="구독하기">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
          </form>
        </div>
      </div>

      {/* 저작권, 소셜 아이콘과 법적 문서 링크를 배치하는 최하단 영역 */}
      <div className="container about-footer__bottom">
        <span>© 2026 CODE LAB. 모든 권리 보유.</span>
        <div className="about-footer__socials">
          <a href="#" aria-label="X"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.6 8.7L23.3 22H16.9l-5-6.5L6 22H2.9l8.1-9.3L1.9 2h6.5l4.5 6z"/></svg></a>
          <a href="#" aria-label="YouTube"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12s0-3.6-.5-5.3c-.3-1-1.1-1.7-2-2C18.7 4 12 4 12 4s-6.7 0-8.5.7c-1 .3-1.7 1-2 2C1 8.4 1 12 1 12s0 3.6.5 5.3c.3 1 1.1 1.7 2 2C5.3 20 12 20 12 20s6.7 0 8.5-.7c1-.3 1.7-1 2-2 .5-1.7.5-5.3.5-5.3zM10 15.5v-7l6 3.5-6 3.5z"/></svg></a>
          <a href="#" aria-label="GitHub"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.91c-2.78.62-3.37-1.36-3.37-1.36-.46-1.2-1.11-1.53-1.11-1.53-.91-.64.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.05 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.9-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.92-2.34 4.78-4.57 5.04.36.32.68.94.68 1.9v2.82c0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2z"/></svg></a>
          <a href="#" aria-label="Discord"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.3 5.3A17.6 17.6 0 0 0 15.9 4l-.3.5c1.7.4 2.9 1 4.1 1.8-1.7-.8-3.4-1.3-5.1-1.5a12 12 0 0 0-4.6 0c-1.7.2-3.4.7-5.1 1.5 1.2-.8 2.6-1.4 4.1-1.8L8.7 4c-1.6.2-3.1.7-4.5 1.3C1.9 8.8 1.3 12.2 1.6 15.6c1.7 1.3 3.4 2 5 2.5l.6-1c-.9-.3-1.7-.7-2.5-1.3l.4-.3c2.5 1.2 5.2 1.2 7.7 0l.4.3c-.8.6-1.6 1-2.5 1.3l.6 1c1.6-.5 3.3-1.2 5-2.5.4-4-.7-7.4-2.9-10.3zM8.8 13.6c-.8 0-1.4-.7-1.4-1.6s.6-1.6 1.4-1.6 1.4.7 1.4 1.6-.6 1.6-1.4 1.6zm6.4 0c-.8 0-1.4-.7-1.4-1.6s.6-1.6 1.4-1.6 1.4.7 1.4 1.6-.6 1.6-1.4 1.6z"/></svg></a>
        </div>
        <div className="about-footer__legal">
          <a href="#">개인정보 보호정책</a>
          <a href="#">이용약관</a>
          <a href="#">쿠키 설정</a>
        </div>
      </div>
    </footer>
  );
}
