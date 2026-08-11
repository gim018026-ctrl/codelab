import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

// 알림 드롭다운에 보여주는 예시 알림 데이터다. 현재는 서버가 아닌 이 파일에서 직접 관리한다.
const notifications = [
  { id: 1, text: 'Coding Challenges에 새 미션이 열렸어요.' },
  { id: 2, text: 'UI Inspiration에 새 레퍼런스가 추가됐어요.' },
  { id: 3, text: 'HTML/CSS Cheatsheet 내용이 업데이트됐어요.' },
];

// 도움말 드롭다운의 문구와 React Router 내부 이동 주소를 한 쌍으로 관리한다.
const helpLinks = [
  { label: '이용 가이드', to: '/guide' },
  { label: '코딩 챌린지 시작하기', to: '/challenges' },
  { label: '자주 묻는 질문', to: '/about' },
];

/**
 * 빌더를 제외한 모든 일반 페이지 위에 표시되는 공통 헤더.
 *
 * 주요 역할:
 * - 로고와 NavLink로 페이지 이동 제공
 * - 스크롤 위치에 따라 헤더 배경 변경
 * - 알림·도움말·프로필 드롭다운 관리
 * - AuthContext의 로그인 상태에 따라 로그인 버튼 또는 프로필 표시
 * - 작은 화면에서 햄버거 메뉴 열기/닫기
 */
export default function Header() {
  // user는 로그인 정보, isLoggedIn은 표시 조건, logout은 로그아웃 처리 함수다.
  const { user, isLoggedIn, logout } = useAuth();
  // 로그인 후 현재 페이지로 돌아올 수 있도록 현재 pathname을 로그인 링크 state에 저장한다.
  const location = useLocation();

  // 서로 독립적인 UI 상태를 나눠 두면 한 기능의 변경이 다른 메뉴를 의도치 않게 바꾸지 않는다.
  // 페이지가 위에서 8px 이상 내려갔는지 기록해 헤더의 그림자/배경 스타일을 바꾼다.
  const [isScrolled, setIsScrolled] = useState(false);
  // 모바일 내비게이션 메뉴가 펼쳐져 있는지 나타낸다.
  const [isNavOpen, setIsNavOpen] = useState(false);
  // 동시에 하나의 드롭다운만 열기 위해 열린 메뉴 이름 하나만 저장한다.
  const [openMenu, setOpenMenu] = useState(null); // 'notif' | 'help' | 'profile' | null
  // 아직 알림 버튼을 열어보지 않았을 때 빨간 배지를 표시한다.
  const [hasUnread, setHasUnread] = useState(true);
  // 헤더 액션 영역 밖을 클릭했는지 판단하는 실제 DOM 참조다.
  const actionsRef = useRef(null);

  // 같은 메뉴 버튼은 토글하고, 다른 메뉴 버튼을 누르면 기존 메뉴 대신 새 메뉴를 연다.
  const toggleMenu = (menu) => {
    // 이미 열린 메뉴를 다시 누르면 닫고, 다른 메뉴를 누르면 바로 교체한다.
    setOpenMenu((prev) => (prev === menu ? null : menu));
    if (menu === 'notif') setHasUnread(false);
  };

  // 인증 정보를 지운 다음 열려 있던 프로필 메뉴도 함께 닫는다.
  const handleLogout = () => {
    logout();
    setOpenMenu(null);
  };

  useEffect(() => {
    // passive 옵션은 스크롤을 막지 않는 리스너임을 브라우저에 알려 성능을 돕는다.
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!openMenu) return;

    // ref가 가리키는 헤더 액션 영역 밖을 클릭했을 때만 드롭다운을 닫는다.
    const onClickOutside = (e) => {
      if (actionsRef.current && !actionsRef.current.contains(e.target)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, [openMenu]);

  return (
    // 스크롤 상태를 CSS 클래스에 반영해 투명 헤더와 고정 헤더 모양을 전환한다.
    <header className={`site-header${isScrolled ? ' is-scrolled' : ''}`}>
      {/* 사이트 로고는 새로고침 없이 홈으로 이동하는 내부 Link다. */}
      <Link to="/" className="logo">
        <span className="logo-icon">&lt;/&gt;</span>
        CODE LAB
      </Link>

      {/* NavLink는 현재 주소와 일치하는 메뉴에 자동으로 active 클래스를 붙인다. */}
      <nav className={`main-nav${isNavOpen ? ' is-open' : ''}`} id="mainNav">
        <NavLink to="/" end onClick={() => setIsNavOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/builder" onClick={() => setIsNavOpen(false)}>
          Builder
        </NavLink>
        <NavLink to="/guide" onClick={() => setIsNavOpen(false)}>
          Guide
        </NavLink>
        <NavLink to="/challenges" onClick={() => setIsNavOpen(false)}>
          Challenges
        </NavLink>
        <NavLink to="/ui-inspiration" onClick={() => setIsNavOpen(false)}>
          UI Inspiration
        </NavLink>
        <NavLink to="/about" onClick={() => setIsNavOpen(false)}>
          About
        </NavLink>
      </nav>

      {/* 알림, 도움말, 로그인/프로필과 모바일 메뉴 버튼을 모은 오른쪽 액션 영역 */}
      <div className="header-actions" ref={actionsRef}>
        <div className="header-dropdown">
          <button
            className="icon-btn"
            aria-label="알림"
            onClick={() => toggleMenu('notif')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
            {hasUnread && <span className="icon-btn__badge" />}
          </button>
          {/* 로그인 사용자에게만 알림 목록을 보여주고 비로그인 사용자는 로그인으로 안내한다. */}
          {openMenu === 'notif' && (
            <div className="header-dropdown__panel">
              <span className="header-dropdown__title">알림</span>
              {isLoggedIn ? (
                <ul className="notif-list">
                  {notifications.map((n) => (
                    <li key={n.id}>{n.text}</li>
                  ))}
                </ul>
              ) : (
                <p className="header-dropdown__empty">
                  로그인하면 알림을 확인할 수 있어요.
                  <Link
                    to="/login"
                    state={{ from: location.pathname }}
                    onClick={() => setOpenMenu(null)}
                  >
                    로그인하러 가기
                  </Link>
                </p>
              )}
            </div>
          )}
        </div>

        <div className="header-dropdown">
          <button
            className="icon-btn"
            aria-label="도움말"
            onClick={() => toggleMenu('help')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 2-3 4"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          </button>
          {openMenu === 'help' && (
            <div className="header-dropdown__panel">
              <span className="header-dropdown__title">도움말</span>
              <ul className="help-list">
                {helpLinks.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} onClick={() => setOpenMenu(null)}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* 로그인 여부에 따라 프로필 메뉴와 로그인 링크 중 하나만 렌더링한다. */}
        {isLoggedIn ? (
          <div className="profile-menu">
            <button
              type="button"
              className="avatar"
              onClick={() => toggleMenu('profile')}
              aria-label="프로필 메뉴"
            >
              {user.email.charAt(0).toUpperCase()}
            </button>
            {openMenu === 'profile' && (
              <div className="profile-dropdown">
                <span className="profile-dropdown__email">{user.email}</span>
                <button type="button" onClick={handleLogout}>
                  로그아웃
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login" state={{ from: location.pathname }} className="login-btn">
            로그인
          </Link>
        )}
        <button
          className="nav-toggle"
          id="navToggle"
          aria-label="메뉴 열기"
          onClick={() => setIsNavOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
      </div>
    </header>
  );
}
