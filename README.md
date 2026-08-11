# CODE LAB 학습 가이드

이 프로젝트는 React로 만든 메인 사이트와 기존 HTML/CSS/JavaScript 도구를 함께 사용하는 구조입니다.
코드를 공부할 때는 아래 순서로 읽으면 전체 흐름을 이해하기 쉽습니다.

## 1. 실행 방법

PowerShell 터미널에서 프로젝트 폴더로 이동한 뒤 실행합니다.

```powershell
cd "C:\Users\정훈\Desktop\2차팀플\Code_lab"
npm run dev
```

브라우저에서 `http://127.0.0.1:5173/`을 엽니다.

프로덕션용 결과가 정상적으로 만들어지는지 확인할 때는 다음 명령을 사용합니다.

```powershell
npm run build
```

## 2. 폴더 구조

```text
src/
  App.jsx                 URL과 페이지를 연결하는 최상위 라우터
  main.jsx                React 앱의 시작점
  components/             여러 페이지에서 재사용하는 UI
  context/                로그인처럼 여러 화면이 공유하는 상태
  data/                   About 모달에 표시할 데이터
  pages/                  URL별 페이지 컴포넌트
  styles/                 화면별 CSS

public/
  assets/                 빌드 과정 없이 그대로 제공할 이미지
  integrated/builder/     독립 HTML 비주얼 빌더
  integrated/guide/       독립 HTML/CSS 치트키 가이드
```

`src`의 파일은 Vite가 분석하고 묶어서 배포합니다. `public`의 파일은 원래 경로를 유지한 채 그대로 제공됩니다.

## 3. React 화면 이동 흐름

1. `src/main.jsx`가 브라우저의 `#root`에 React를 연결합니다.
2. `BrowserRouter`가 현재 URL을 읽을 수 있게 합니다.
3. `src/App.jsx`의 `Routes`가 URL에 맞는 페이지를 고릅니다.
4. `Header`의 `NavLink`를 누르면 새 문서를 받지 않고 React 화면만 교체됩니다.
5. 경로가 바뀌면 `App.jsx`의 effect가 스크롤을 맨 위로 초기화합니다.

빌더는 화면 전체를 사용하는 독립 도구라 공통 헤더를 숨깁니다. 가이드는 공통 헤더를 유지합니다.

## 4. 기존 HTML 도구를 React에 넣는 방법

`Builder.jsx`와 `Guide.jsx`는 `IntegratedFrame`을 사용합니다.

```jsx
<IntegratedFrame src="/integrated/guide/index.html?v=20" />
```

iframe을 사용한 이유는 기존 도구의 전역 CSS와 전역 JavaScript가 React 페이지와 충돌하는 것을 막기 위해서입니다.
가이드의 `v=20` 같은 값은 브라우저 캐시를 갱신하는 버전입니다. 정적 가이드 파일을 고친 뒤 예전 화면이 계속 보이면 버전도 올립니다.

## 5. 가이드 검색이 동작하는 순서

핵심 코드는 `public/integrated/guide/legacy.js`에 있습니다.

1. 입력 이벤트가 발생하면 `handleSearchInput()`이 호출됩니다.
2. `handleSearch()`가 이전 검색의 숨김 클래스와 강조 표시를 제거합니다.
3. 입력값을 공백 단위 검색어로 분리합니다.
4. `사진`, `가운데`, `여백` 같은 쉬운 단어는 관련 HTML/CSS 용어로 확장합니다.
5. 태그명, 속성명, 쉬운 설명, 예시 코드 전체를 검사합니다.
6. 맞지 않는 카드는 `hidden-by-search` 클래스로 숨깁니다.
7. 같은 속성이 여러 카테고리에 있으면 첫 카드만 남겨 중복을 제거합니다.
8. 일치한 글자는 `<mark>`로 강조하고 결과 개수를 표시합니다.

일반 목록은 처음 16개와 더보기 버튼을 사용하지만, 검색 중에는 숨겨진 전체 항목을 검사합니다.

## 6. 사용 빈도 탭

각 태그와 속성은 `META` 객체의 `f` 값으로 사용 빈도를 가집니다.

- `4~5`: 자주 사용
- `3`: 보통 사용
- `1~2`: 가끔 사용

탭을 누르면 `activeFrequency`가 바뀌고 각 카드에 `hidden-by-frequency` 클래스를 적용합니다.
검색을 시작하면 빈도 때문에 결과가 빠지지 않도록 자동으로 `전체` 탭으로 돌아갑니다.

## 7. About 모달과 Portal

About 카드의 선택값은 `activeCard`, 단계 선택값은 `activeStep`에 저장합니다.
값이 `null`이면 닫힘이고 데이터 객체가 있으면 해당 모달이 열립니다.

모달은 `createPortal(..., document.body)`로 렌더링합니다. 이렇게 해야 페이지 전환 래퍼의 `transform`이나 부모의 `overflow`에 잘리지 않고 현재 화면 중앙에 고정됩니다.

모달이 열리면 `document.body.style.overflow = 'hidden'`으로 배경 스크롤을 막습니다. effect의 cleanup에서 반드시 빈 문자열로 되돌려야 다른 페이지에서도 스크롤할 수 있습니다.

## 8. 로그인 상태

`AuthContext`가 로그인 정보를 모든 페이지에 제공합니다.

- 저장 키: `codelab_auth_user`
- 저장 위치: 브라우저 `localStorage`
- 탭 간 동기화: `storage` 이벤트

현재 방식은 화면 흐름을 연습하기 위한 클라이언트 예제입니다. 실제 서비스에서는 비밀번호와 인증 토큰을 이런 방식으로 직접 저장하면 안 되며 서버 인증과 안전한 쿠키를 사용해야 합니다.

## 9. 홈 미니 빌더

홈의 편집 결과는 React 상태로 관리합니다.

- `canvasBlocks`: 켜진 텍스트, 버튼, 아이콘, 구분선
- `accentColor`: 선택한 강조 색상
- `photoScale`: 이미지 확대 비율
- `uploadedImageUrl`: 사용자가 고른 이미지의 임시 주소

`URL.createObjectURL()`은 파일을 서버에 올리지 않고 즉시 미리 볼 때 유용합니다. 사용 후 `URL.revokeObjectURL()`로 해제해야 메모리 누수를 막을 수 있습니다.

## 10. 수정할 때 확인할 사항

- 새 페이지를 만들면 `src/App.jsx`에 Route를 추가합니다.
- 공통 상단 메뉴는 `src/components/Header.jsx`에서 수정합니다.
- 가이드 정적 파일을 수정하면 `Guide.jsx`와 가이드 내부 파일의 캐시 버전을 함께 올립니다.
- 이미지 삭제 전에는 `rg -n "파일명" src public`로 참조 여부를 확인합니다.
- 작업이 끝나면 `npm run build`로 문법과 번들 생성을 확인합니다.
