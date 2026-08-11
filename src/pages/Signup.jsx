import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import '../styles/login/login.css';

// 비밀번호 표시 상태에 따라 '보기' 또는 '숨김' 모양을 출력하는 작은 아이콘 컴포넌트다.
const EyeIcon = ({ open }) =>
  open ? (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8Z"/><circle cx="12" cy="12" r="3"/></svg>
  ) : (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-11-8-11-8a20.3 20.3 0 0 1 5.06-5.94M9.9 4.24A10.4 10.4 0 0 1 12 4c7 0 11 8 11 8a20.3 20.3 0 0 1-2.16 3.19M14.12 14.12a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
  );

const CheckIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
);

/**
 * 회원가입 페이지.
 *
 * 기본 정보, 비밀번호, 약관을 접이식 구역으로 나누고 각 입력을 React 상태로 관리한다.
 * 제출할 때 모든 조건을 다시 검사한 뒤 AuthContext에 사용자를 저장하고 원래 목적지로 이동한다.
 */
export default function Signup() {
  // 가입 성공을 현재 앱의 로그인 완료 상태로 저장하기 위해 전역 login 함수를 사용한다.
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // 사용자가 폼에 입력하는 기본 계정 정보다.
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  // 두 비밀번호 입력란을 text/password 중 어떤 형식으로 보여줄지 관리한다.
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  // 필수 약관 두 개와 선택 마케팅 약관의 동의 여부다.
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreePrivacy, setAgreePrivacy] = useState(false);
  const [agreeMarketing, setAgreeMarketing] = useState(false);
  // 제출을 한 번 시도했는지 기록해 그 전에는 불필요한 오류 표시를 줄인다.
  const [touched, setTouched] = useState(false);
  // 조건을 통과하지 못했을 때 사용자에게 보여줄 대표 오류 문구다.
  const [error, setError] = useState('');
  // basic, password, terms 중 현재 펼쳐진 가입 단계의 이름이다.
  const [openSection, setOpenSection] = useState('basic');

  // 비밀번호의 각 규칙을 별도로 계산해 체크 표시와 최종 검증에 함께 사용한다.
  const passwordChecks = {
    length: password.length >= 8,
    letter: /[a-zA-Z]/.test(password),
    number: /[0-9]/.test(password),
  };
  const isPasswordValid = passwordChecks.length && passwordChecks.letter && passwordChecks.number;
  const doPasswordsMatch = passwordConfirm.length > 0 && password === passwordConfirm;
  const agreeAll = agreeTerms && agreePrivacy && agreeMarketing;

  // 필수 입력과 필수 약관을 모두 만족할 때만 제출 버튼을 활성화한다.
  const canSubmit =
    name.trim() &&
    nickname.trim() &&
    email.trim() &&
    isPasswordValid &&
    doPasswordsMatch &&
    agreeTerms &&
    agreePrivacy;

  // 전체 동의를 누르면 세 약관을 현재 전체 동의 상태의 반대 값으로 한 번에 맞춘다.
  const toggleAgreeAll = () => {
    const next = !agreeAll;
    setAgreeTerms(next);
    setAgreePrivacy(next);
    setAgreeMarketing(next);
  };

  // 폼 전체를 최종 검증하고, 문제가 있는 구역을 자동으로 펼쳐 사용자가 바로 수정하게 한다.
  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched(true);

    if (!isPasswordValid) {
      setError('비밀번호 조건을 모두 만족해주세요.');
      setOpenSection('password');
      return;
    }
    if (!doPasswordsMatch) {
      setError('비밀번호가 일치하지 않아요.');
      setOpenSection('password');
      return;
    }
    if (!agreeTerms || !agreePrivacy) {
      setError('필수 약관에 동의해주세요.');
      setOpenSection('terms');
      return;
    }

    // 모든 검사를 통과하면 오류를 지우고 가입 정보를 전역 로그인 상태에 저장한다.
    setError('');
    login({ name: name.trim(), nickname: nickname.trim(), email: email.trim() });

    // 로그인 페이지와 동일한 우선순위로 가입 전에 사용자가 가려던 내부 주소를 복원한다.
    const queryReturn = new URLSearchParams(location.search).get('from');
    const savedReturn = localStorage.getItem('codelab_signup_return');
    const requestedReturn = location.state?.from || queryReturn || savedReturn || '/';
    const returnTo = requestedReturn.startsWith('/') ? requestedReturn : '/';
    localStorage.removeItem('codelab_signup_return');
    // 가입 페이지를 방문 기록에서 교체해 뒤로 가기로 가입 폼이 다시 나오지 않게 한다.
    navigate(returnTo, { replace: true });
  };

  return (
    <div className="login-page">
      <div className="login-card login-card--wide">
        <div className="login-card__logo">
          <span className="logo-icon">&lt;/&gt;</span>
          CODE LAB
        </div>
        <p className="login-card__subtitle">회원가입하고 나만의 프로젝트를 시작해보세요.</p>

        {/* 브라우저 기본 오류창 대신 위에서 정의한 한국어 검증 메시지를 사용한다. */}
        <form className="login-form" onSubmit={handleSubmit} noValidate>
          <div className={`signup-section${openSection === 'basic' ? ' is-open' : ''}`}>
            <button
              type="button"
              className="signup-section__toggle"
              onClick={() => setOpenSection((section) => section === 'basic' ? '' : 'basic')}
              aria-expanded={openSection === 'basic'}
            >
              <span className="signup-section__step">1</span>
              <span className="signup-section__title">기본 정보</span>
              <span className="signup-section__state">{name && nickname && email ? '입력 완료' : '이름과 이메일'}</span>
              <span className="signup-section__chevron">⌄</span>
            </button>

            <div className="signup-section__content" hidden={openSection !== 'basic'}>

            <div>
              <label htmlFor="signup-name">이름</label>
              <input
                id="signup-name"
                type="text"
                placeholder="실명을 입력하세요"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="signup-nickname">닉네임</label>
              <input
                id="signup-nickname"
                type="text"
                placeholder="다른 사람에게 보여질 이름이에요"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="signup-email">이메일</label>
              <input
                id="signup-email"
                type="email"
                placeholder="이메일 주소를 입력하세요"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button type="button" className="signup-section__next" onClick={() => setOpenSection('password')}>
              다음: 비밀번호
            </button>
            </div>
          </div>

          <div className={`signup-section${openSection === 'password' ? ' is-open' : ''}`}>
            <button
              type="button"
              className="signup-section__toggle"
              onClick={() => setOpenSection((section) => section === 'password' ? '' : 'password')}
              aria-expanded={openSection === 'password'}
            >
              <span className="signup-section__step">2</span>
              <span className="signup-section__title">비밀번호</span>
              <span className="signup-section__state">{isPasswordValid && doPasswordsMatch ? '설정 완료' : '8자 이상'}</span>
              <span className="signup-section__chevron">⌄</span>
            </button>

            <div className="signup-section__content" hidden={openSection !== 'password'}>

            <div>
              <label htmlFor="signup-password">비밀번호</label>
              <div className="signup-input-wrap">
                <input
                  id="signup-password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="비밀번호를 입력하세요"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="signup-input-toggle"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? '비밀번호 숨기기' : '비밀번호 보기'}
                >
                  <EyeIcon open={showPassword} />
                </button>
              </div>

              <ul className="signup-password-rules">
                <li className={passwordChecks.length ? 'is-met' : ''}>
                  {passwordChecks.length && <CheckIcon />} 8자 이상
                </li>
                <li className={passwordChecks.letter ? 'is-met' : ''}>
                  {passwordChecks.letter && <CheckIcon />} 영문 포함
                </li>
                <li className={passwordChecks.number ? 'is-met' : ''}>
                  {passwordChecks.number && <CheckIcon />} 숫자 포함
                </li>
              </ul>
            </div>

            <div>
              <label htmlFor="signup-password-confirm">비밀번호 확인</label>
              <div className="signup-input-wrap">
                <input
                  id="signup-password-confirm"
                  type={showPasswordConfirm ? 'text' : 'password'}
                  placeholder="비밀번호를 다시 입력하세요"
                  value={passwordConfirm}
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="signup-input-toggle"
                  onClick={() => setShowPasswordConfirm((v) => !v)}
                  aria-label={showPasswordConfirm ? '비밀번호 숨기기' : '비밀번호 보기'}
                >
                  <EyeIcon open={showPasswordConfirm} />
                </button>
              </div>
              {passwordConfirm.length > 0 && (
                <p className={`signup-match-hint ${doPasswordsMatch ? 'is-match' : 'is-mismatch'}`}>
                  {doPasswordsMatch ? '비밀번호가 일치해요' : '비밀번호가 일치하지 않아요'}
                </p>
              )}
            </div>
            <button type="button" className="signup-section__next" onClick={() => setOpenSection('terms')}>
              다음: 약관 동의
            </button>
            </div>
          </div>

          <div className={`signup-section${openSection === 'terms' ? ' is-open' : ''}`}>
            <button
              type="button"
              className="signup-section__toggle"
              onClick={() => setOpenSection((section) => section === 'terms' ? '' : 'terms')}
              aria-expanded={openSection === 'terms'}
            >
              <span className="signup-section__step">3</span>
              <span className="signup-section__title">약관 동의</span>
              <span className="signup-section__state">{agreeTerms && agreePrivacy ? '필수 동의 완료' : '필수 항목 확인'}</span>
              <span className="signup-section__chevron">⌄</span>
            </button>

            <div className="signup-section__content" hidden={openSection !== 'terms'}>

            <label className="signup-check signup-check--all">
              <input type="checkbox" checked={agreeAll} onChange={toggleAgreeAll} />
              <span>전체 동의합니다</span>
            </label>

            <label className="signup-check">
              <input type="checkbox" checked={agreeTerms} onChange={(e) => setAgreeTerms(e.target.checked)} />
              <span>[필수] 이용약관 동의</span>
            </label>
            <label className="signup-check">
              <input type="checkbox" checked={agreePrivacy} onChange={(e) => setAgreePrivacy(e.target.checked)} />
              <span>[필수] 개인정보 수집 및 이용 동의</span>
            </label>
            <label className="signup-check">
              <input type="checkbox" checked={agreeMarketing} onChange={(e) => setAgreeMarketing(e.target.checked)} />
              <span>[선택] 이벤트 및 마케팅 정보 수신 동의</span>
            </label>
            </div>
          </div>

          {touched && error && <p className="login-form__error">{error}</p>}

          <button type="submit" className="login-form__submit" disabled={!canSubmit}>
            회원가입
          </button>
        </form>

        <p className="login-card__footer">
          이미 계정이 있으신가요? <Link to={`/login${location.search}`}>로그인</Link>
        </p>
      </div>
    </div>
  );
}
