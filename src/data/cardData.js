/**
 * 어바웃 페이지의 기능 카드 상세 모달에 사용하는 정적 콘텐츠 데이터.
 *
 * 외부에서 다운로드하는 데이터가 아니라 CODE LAB의 기능을 설명하기 위해 직접 작성한 설정이다.
 * About.jsx의 카드 클릭 이벤트가 해당 키의 객체를 activeCard 상태에 넣고,
 * CardModal.jsx가 전달받은 필드로 이미지, 설명, 특징 목록과 이동 버튼을 만든다.
 *
 * 각 카드 객체의 필드:
 * - eyebrow: 제목 위에 표시하는 짧은 카테고리
 * - accent: 모달 강조색으로 사용할 CSS 색상
 * - title: 기능 이름
 * - desc: 기능을 소개하는 본문
 * - image: public 폴더를 기준으로 한 대표 이미지 주소
 * - media: image 대신 사용할 수 있는 직접 작성한 HTML 문자열
 * - features: 핵심 기능 설명 목록
 * - ctaText: 하단 이동 버튼 문구
 * - ctaHref: 버튼을 눌렀을 때 이동할 사이트 내부 주소
 *
 * image와 media 중 하나만 있으면 된다. media가 있으면 CardModal은 media를 우선 표시한다.
 */
export const cardData = {
  // HTML/CSS 속성을 찾아보는 치트시트 기능 소개
  cheatsheet: {
    eyebrow: 'GUIDE',
    accent: '#6C5CE7',
    title: 'HTML / CSS Cheatsheet',
    desc: '매번 검색하지 않아도 되는, 자주 쓰는 HTML 태그와 CSS 속성 모음집이에요. 실무에서 정말 자주 쓰는 레이아웃/애니메이션 속성 위주로 예시 코드와 함께 정리했어요.',
    image: '/assets/about/html_css.png',
    features: [
      'Flex, Grid, Position 등 레이아웃 속성을 실제 코드 예시와 함께 확인해요.',
      'Animation, Transform 같은 자주 헷갈리는 속성도 한눈에 정리했어요.',
      '검색으로 원하는 속성을 바로 찾을 수 있어요.',
    ],
    ctaText: '치트시트 보러가기',
    ctaHref: '/guide',
  },
  // 디자인 요구사항을 코드로 구현하는 챌린지 기능 소개
  challenges: {
    eyebrow: 'CHALLENGE',
    accent: '#EA7A1C',
    title: 'Coding Challenges',
    desc: '이론 말로는 늘지 않아요. 실전처럼 주어진 디자인을 직접 코드로 구현하면서 실력을 키우는 미니 학습 공간입니다. 난이도별로 나뉘어 있어 내 수준에 맞게 도전할 수 있어요.',
    media: `
      <div class="mission-media">
        <div class="side-box">
          <h4>Mission</h4>
          <p>이 모양의 버튼을 만들어보세요.</p>
          <span class="btn-submit">Submit</span>
        </div>
        <div class="side-box">
          <h4>Progress</h4>
          <div class="progress-bar">
            <span class="is-filled"></span><span class="is-filled"></span><span class="is-filled"></span><span class="is-filled"></span><span class="is-filled"></span><span></span><span></span><span></span>
          </div>
        </div>
      </div>
    `,
    features: [
      '입문 · 중급 · 고급 난이도별 미션이 준비되어 있어요.',
      '미션마다 목표와 요구사항이 명확하게 정의되어 있어요.',
      '실시간 코드 에디터에서 작성하고 바로 결과를 확인해요.',
    ],
    ctaText: '미션 도전하러 가기',
    ctaHref: '/challenges',
  },
  // CODE LAB의 목적과 방향성을 설명하는 소개 페이지 카드
  'about-website': {
    eyebrow: 'ABOUT',
    accent: '#16A34A',
    title: 'About Website',
    desc: 'CODE LAB이 어떤 목적으로, 누구를 위해 만들어졌는지 소개하는 페이지예요. 서비스의 방향성과 앞으로 그려갈 로드맵을 확인하고, 함께할 학습자와 기여자를 기다리고 있어요.',
    image: '/assets/about/about(5).png',
    features: [
      '왜 CODE LAB을 만들게 됐는지 비전과 목적을 소개해요.',
      '함께하는 팀 구성과 서비스 로드맵을 확인할 수 있어요.',
      '피드백이나 제안은 언제든 환영이에요.',
    ],
    ctaText: '소개 페이지 보기',
    ctaHref: '/about',
  },
  // 실제 서비스 UI 사례를 탐색하는 레퍼런스 기능 소개
  'ui-inspiration': {
    eyebrow: 'INSPIRATION',
    accent: '#EA7A1C',
    title: 'UI Inspiration',
    desc: 'Landing, SaaS, Portfolio, Dashboard 등 카테고리별로 정리된 실제 서비스 UI 레퍼런스 모음이에요. 막막할 때 참고할 디자인이 필요하다면 여기서 영감을 얻어보세요.',
    image: '/assets/about/about3.png',
    features: [
      '카테고리별로 정리되어 있어 원하는 스타일을 빠르게 찾아요.',
      '실제 서비스의 우수한 UI 패턴과 구성을 참고할 수 있어요.',
      '마음에 드는 레퍼런스는 저장해서 다시 볼 수 있어요.',
    ],
    ctaText: '레퍼런스 둘러보기',
    ctaHref: '/ui-inspiration',
  },
};
