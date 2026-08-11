import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import '../styles/login/login.css';

/**
 * 로그인 페이지.
 *
 * 현재 예제에서는 서버에 비밀번호를 전송하지 않고 AuthContext에 로그인 사용자만 저장한다.
 * 로그인이 끝나면 사용자가 로그인 전에 보던 주소를 찾아 그 페이지로 돌려보낸다.
 */
export default function Login() {
  // 전역 인증 상태를 갱신하는 AuthContext의 로그인 함수다.
  const { login } = useAuth();
  // 로그인 완료 후 새로고침 없이 다른 주소로 이동할 때 사용한다.
  const navigate = useNavigate();
  // 쿼리 문자열과 이전 페이지 state에서 복귀 주소를 읽기 위해 현재 위치를 가져온다.
  const location = useLocation();
  // 이메일 입력란의 현재 값을 React 상태로 관리한다.
  const [email, setEmail] = useState('');

  // 폼 제출 시 브라우저 기본 새로고침을 막고 로그인 및 원래 페이지 복귀를 처리한다.
  const handleSubmit = (e) => {
    e.preventDefault();
    login(email);

    // 복귀 주소는 Router state → URL의 from → 회원가입 전에 저장한 주소 → 홈 순으로 찾는다.
    const queryReturn = new URLSearchParams(location.search).get('from');
    const savedReturn = localStorage.getItem('codelab_signup_return');
    const requestedReturn = location.state?.from || queryReturn || savedReturn || '/';

    // 외부 사이트 주소가 들어오는 일을 막고 사이트 내부의 '/'로 시작하는 주소만 허용한다.
    const returnTo = requestedReturn.startsWith('/') ? requestedReturn : '/';

    // 한 번 사용한 임시 복귀 주소를 지워 다음 로그인에 영향을 주지 않게 한다.
    localStorage.removeItem('codelab_signup_return');

    // replace를 사용해 로그인 화면이 뒤로 가기 기록에 다시 나타나지 않게 한다.
    navigate(returnTo, { replace: true });
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-card__logo">
          <span className="logo-icon">&lt;/&gt;</span>
          CODE LAB
        </div>
        <p className="login-card__subtitle">로그인하고 나만의 프로젝트를 이어가세요.</p>

        {/* 입력값이 유효하면 handleSubmit이 로그인 상태와 페이지 이동을 처리한다. */}
        <form className="login-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="login-email">이메일</label>
            <input
              id="login-email"
              type="email"
              placeholder="이메일 주소를 입력하세요"
              value={email}
              // 입력할 때마다 화면 값과 email 상태를 동일하게 유지한다.
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="login-password">비밀번호</label>
            <input id="login-password" type="password" placeholder="비밀번호를 입력하세요" required />
          </div>
          <button type="submit" className="login-form__submit">
            로그인
          </button>
        </form>

        <p className="login-card__footer">
          {/* 현재 ?from=... 쿼리를 유지해 회원가입 후에도 원래 목적지로 돌아갈 수 있게 한다. */}
          아직 계정이 없으신가요? <Link to={`/signup${location.search}`}>회원가입</Link>
        </p>
      </div>
    </div>
  );
}
