import { createContext, useContext, useEffect, useState } from 'react';

// 페이지 어디서든 같은 로그인 정보를 읽도록 만드는 React Context 저장소다.
const AuthContext = createContext(null);
// localStorage에 사용자 정보를 저장할 때 충돌을 피하기 위한 전용 키 이름이다.
const STORAGE_KEY = 'codelab_auth_user';

// localStorage의 문자열을 사용자 객체로 바꾼다.
// 저장값이 손상되어 JSON.parse가 실패해도 앱 전체가 멈추지 않도록 null로 복구한다.
function readSavedUser() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : null;
  } catch {
    return null;
  }
}

/**
 * 애플리케이션 전체에 사용자 정보와 login/logout 함수를 공급하는 Provider.
 * main.jsx에서 App 바깥을 감싸므로 Header, Login, Signup 등 모든 하위 컴포넌트가 사용 가능하다.
 */
export function AuthProvider({ children }) {
  // useState에 함수를 넘기면 최초 렌더링 때만 localStorage를 읽는 지연 초기화가 된다.
  const [user, setUser] = useState(readSavedUser);

  // React 상태가 바뀔 때 브라우저 저장소에도 같은 값을 반영한다.
  // 이 프로젝트의 로그인은 학습용 클라이언트 저장 방식이며 실제 인증 서버는 아니다.
  useEffect(() => {
    if (user) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [user]);

  // 다른 탭에서 로그인/로그아웃하면 storage 이벤트가 발생한다.
  // 이를 구독해 여러 탭의 헤더 로그인 상태를 일치시킨다.
  useEffect(() => {
    const syncAuth = (event) => {
      if (event.key === STORAGE_KEY) setUser(readSavedUser());
    };
    window.addEventListener('storage', syncAuth);
    return () => window.removeEventListener('storage', syncAuth);
  }, []);

  // 로그인 페이지의 이메일 문자열 또는 회원가입 페이지의 사용자 객체를 동일한 형태로 저장한다.
  const login = (account) => {
    // 이메일 문자열과 완성된 사용자 객체를 모두 받을 수 있게 입력 형태를 통일한다.
    const nextUser = typeof account === 'string' ? { email: account } : account;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextUser));
    setUser(nextUser);
  };
  // 브라우저 저장값과 현재 React 상태를 모두 비워 즉시 로그아웃 화면으로 갱신한다.
  const logout = () => {
    localStorage.removeItem(STORAGE_KEY);
    setUser(null);
  };

  return (
    // value에 넣은 값이 useAuth()를 호출하는 모든 하위 컴포넌트에 전달된다.
    <AuthContext.Provider value={{ user, isLoggedIn: !!user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

/** Header, Login, Signup에서 인증 Context를 간단히 꺼내 쓰는 전용 Hook. */
export function useAuth() {
  // 소비 컴포넌트가 Context 객체를 직접 다루지 않도록 전용 Hook으로 감싼다.
  return useContext(AuthContext);
}
