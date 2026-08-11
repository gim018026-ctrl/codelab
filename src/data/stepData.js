/**
 * 어바웃 페이지의 HOW IT WORKS 단계 모달에 사용하는 정적 콘텐츠 데이터.
 *
 * 외부 API나 데이터베이스에서 받아오는 값이 아니라 이 프로젝트에서 직접 작성한 안내 문구다.
 * About.jsx가 사용자가 누른 단계의 키(discover, learn, practice, build)로 항목을 선택하고,
 * 선택된 객체를 StepModal.jsx의 data prop으로 전달한다.
 *
 * 각 단계 객체의 필드:
 * - eyebrow: 모달 제목 위에 작게 표시하는 단계 번호
 * - title: 단계의 대표 제목
 * - icon: 모달에서 innerHTML로 출력하는 SVG 문자열
 * - items: 해당 단계에서 할 일을 순서대로 보여주는 설명 목록
 *
 * 단계를 추가하려면 이 객체에 데이터를 추가한 뒤 About.jsx의 단계 버튼에도 같은 키를 연결한다.
 */
export const stepData = {
  // 1단계: 사용자가 학습 주제와 난이도를 탐색하는 과정
  discover: {
    eyebrow: 'STEP 01',
    title: 'Discover',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>',
    items: [
      '입문/중급/고급 트랙 중 원하는 난이도를 선택해요.',
      'HTML, CSS, JS 등 배우고 싶은 주제를 탐색해요.',
      '다른 학습자들이 만든 UI 레퍼런스도 함께 둘러봐요.',
    ],
  },
  // 2단계: 설명과 코드 예시를 통해 개념을 배우는 과정
  learn: {
    eyebrow: 'STEP 02',
    title: 'Learn',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
    items: [
      '짧은 설명과 실제 코드 예시로 개념을 익혀요.',
      'HTML/CSS 치트시트에서 자주 쓰는 속성을 바로 찾아봐요.',
      '이해가 잘 안 되는 부분은 힌트 기능으로 도움을 받아요.',
    ],
  },
  // 3단계: 챌린지에서 직접 코드를 작성하며 연습하는 과정
  practice: {
    eyebrow: 'STEP 03',
    title: 'Practice',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    items: [
      '주어진 미션을 직접 코드로 작성해서 완성해요.',
      '실시간 미리보기로 결과를 바로 확인해요.',
      '정답 코드와 비교하며 부족한 부분을 점검해요.',
    ],
  },
  // 4단계: 배운 내용을 빌더에서 실제 결과물로 만드는 과정
  build: {
    eyebrow: 'STEP 04',
    title: 'Build',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/></svg>',
    items: [
      '배운 내용을 모아 나만의 결과물을 완성해요.',
      'Builder에서 드래그 앤 드롭으로 실제 페이지를 조립해요.',
      '완성한 프로젝트는 UI Inspiration에 공유할 수 있어요.',
    ],
  },
};
