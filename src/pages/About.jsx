import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import StepModal from '../components/StepModal.jsx';
import CardModal from '../components/CardModal.jsx';
import Footer from '../components/Footer.jsx';
// HOW IT WORKS의 단계별 상세 문구를 직접 작성해 둔 정적 데이터다.
import { stepData } from '../data/stepData.js';
// 기능 카드 모달의 이미지, 설명, 특징과 이동 주소를 모아 둔 정적 데이터다.
import { cardData } from '../data/cardData.js';

import '../styles/about/about-hero.css';
import '../styles/about/about-feature-cards.css';
import '../styles/about/about-how-it-works.css';
import '../styles/about/about-cta-banner.css';
import '../styles/about/about-modal.css';
import '../styles/about/about-card-modal.css';
import '../styles/about/about-faq.css';
import '../styles/about/media.css';

/**
 * 서비스 소개와 학습 콘텐츠를 보여주는 어바웃 화면.
 * 상단 소개, 기능 카드, 이용 단계, FAQ, 하단 CTA와 푸터 순서로 구성된다.
 * 카드와 단계의 상세 내용은 별도 데이터 파일에서 받아 모달로 표시한다.
 *
 * @param {object} props
 * @param {() => void} props.onStart 상단 시작하기 버튼에서 실행할 함수.
 * App이 인트로 표시와 빌더 이동을 한 흐름으로 묶어 전달한다.
 */
export default function About({ onStart }) {
  const location = useLocation();

  // null이면 닫힘, 데이터 객체가 들어오면 해당 모달이 열린다.
  // boolean 대신 데이터 자체를 상태로 두면 "열림 여부"와 "표시할 내용"을 한 번에 관리할 수 있다.
  const [activeStep, setActiveStep] = useState(null);
  const [activeCard, setActiveCard] = useState(null);

  // 모달 뒤의 페이지가 함께 스크롤되지 않도록 body를 잠근다.
  // cleanup에서 반드시 원래 값으로 돌려야 다른 페이지로 이동한 뒤에도 스크롤할 수 있다.
  useEffect(() => {
    const isOpen = activeStep || activeCard;
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeStep, activeCard]);

  // 같은 /about 링크를 다시 눌러도 location.key는 바뀐다.
  // 이때 남아 있던 모달 상태를 비워 새로고침 없이 기본 About 화면으로 돌아간다.
  useEffect(() => {
    setActiveStep(null);
    setActiveCard(null);
  }, [location.key]);

  // 마우스뿐 아니라 키보드 Escape로도 모달을 닫을 수 있게 한 접근성 동작이다.
  useEffect(() => {
    const onKeydown = (e) => {
      if (e.key === 'Escape') {
        setActiveStep(null);
        setActiveCard(null);
      }
    };
    document.addEventListener('keydown', onKeydown);
    return () => document.removeEventListener('keydown', onKeydown);
  }, []);

  return (
    <div>
      <main>
        {/* 1. 페이지의 핵심 문구와 빌더 시작 버튼을 보여주는 상단 소개 영역 */}
        <section className="about-hero">
          <div className="about-hero__art">
            <img src="/assets/about/banner.png" alt="" />
          </div>
          <div className="container about-hero__text">
            <span className="about-hero__eyebrow">EXPLORE ALL PAGES</span>
            <h1 className="about-hero__title">
              Explore
              <br />
              Everything
              <span className="dot">.</span>
            </h1>
            <p className="about-hero__subtitle">
              배우고, 만들고, 영감을 얻는
              <br />
              모든 페이지를 한 곳에서 만나보세요.
            </p>
            {/* 홈의 시작하기 버튼과 동일하게, 인트로를 거쳐 빌더로 진입한다. */}
            <button
              type="button"
              className="about-hero__cta"
              onClick={onStart}
            >
              시작하기
              {/* 진행 방향을 보여주는 오른쪽 화살표 아이콘 */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
          </div>
        </section>

        {/* 2. 학습 자료와 사이트 기능을 카드 형태로 탐색하는 영역 */}
        <section className="feature-cards container">
          <div className="feature-cards__grid">

            {/* 01 HTML / CSS Cheatsheet */}
            <div className="fcard fcard--split" onClick={() => setActiveCard(cardData.cheatsheet)}>
              <div className="fcard__body">
                <div className="fcard__top">
                  <span className="fcard__index">01</span>
                  <span className="fcard__icon fcard__icon--purple">&lt;/&gt;</span>
                </div>
                <h3>
                  HTML / CSS
                  <br />
                  Cheatsheet
                </h3>
                <p>
                  자주 사용하는 HTML 태그와
                  <br />
                  CSS 속성을 보기 쉽게 정리한
                  <br />
                  개발자를 위한 치트키 사전입니다.
                </p>
                <div className="fcard__tags">
                  <span className="fcard__tag">Flex</span>
                  <span className="fcard__tag">Grid</span>
                  <span className="fcard__tag">Position</span>
                  <span className="fcard__tag">Animation</span>
                  <span className="fcard__tag">Transform</span>
                  <span className="fcard__tag">Display</span>
                </div>
                <Link to="/" className="link-arrow fcard__link" onClick={(e) => e.stopPropagation()}>
                  Explore →
                </Link>
              </div>
              <div className="code-snippet">
                <img src="/assets/about/html_css.png" alt="CSS 코드 예시" />
              </div>
            </div>

            {/* 02 Coding Challenges */}
            <div className="fcard fcard--split" onClick={() => setActiveCard(cardData.challenges)}>
              <div className="fcard__body">
                <div className="fcard__top">
                  <span className="fcard__index">02</span>
                  <span className="fcard__icon fcard__icon--purple">&lt;&gt;</span>
                </div>
                <h3>
                  Coding
                  <br />
                  Challenges
                </h3>
                <p>
                  간단한 UI를 직접 만들어 보며
                  <br />
                  실력을 키울 수 있는
                  <br />
                  미니 학습 페이지입니다.
                </p>
                <div className="fcard__tags">
                  <span className="fcard__tag fcard__tag--green">Beginner</span>
                  <span className="fcard__tag fcard__tag--orange">Intermediate</span>
                  <span className="fcard__tag fcard__tag--red">Advanced</span>
                </div>
                <Link to="/" className="link-arrow fcard__link" onClick={(e) => e.stopPropagation()}>
                  Start Mission →
                </Link>
              </div>
              <div className="side-panels">
                <div className="side-box">
                  <h4>Mission</h4>
                  <p>이 모양의 버튼을 만들어보세요.</p>
                  <span className="btn-submit">Submit</span>
                </div>
                <div className="side-box">
                  <h4>Progress</h4>
                  <div className="progress-bar">
                    <span className="is-filled"></span>
                    <span className="is-filled"></span>
                    <span className="is-filled"></span>
                    <span className="is-filled"></span>
                    <span className="is-filled"></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>

            {/* 03 About Website */}
            <div className="fcard fcard--split" onClick={() => setActiveCard(cardData['about-website'])}>
              <div className="fcard__body">
                <div className="fcard__top">
                  <span className="fcard__index">03</span>
                  <span className="fcard__icon fcard__icon--green">✓</span>
                </div>
                <h3>
                  About
                  <br />
                  Website
                </h3>
                <p>
                  서비스 소개와 프로젝트 목적,
                  <br />
                  사용 방법을 확인할 수 있습니다.
                </p>
                <div className="fcard__tags">
                  <span className="fcard__tag">Vision</span>
                  <span className="fcard__tag">Purpose</span>
                  <span className="fcard__tag">Team</span>
                  <span className="fcard__tag">Roadmap</span>
                </div>
                <Link to="/about" className="link-arrow fcard__link fcard__link--green" onClick={(e) => e.stopPropagation()}>
                  Learn More →
                </Link>
              </div>
              <div className="laptop-mock">
                <img src="/assets/about/about(5).png" alt="Code Lab 노트북 목업" />
              </div>
            </div>

            {/* 04 UI Inspiration */}
            <div className="fcard fcard--split" onClick={() => setActiveCard(cardData['ui-inspiration'])}>
              <div className="fcard__body">
                <div className="fcard__top">
                  <span className="fcard__index">04</span>
                  <span className="fcard__icon fcard__icon--orange">◆</span>
                </div>
                <h3>
                  UI
                  <br />
                  Inspiration
                </h3>
                <p>
                  다양한 웹사이트의 카테고리별로
                  <br />
                  모아둔 UI/디자인 레퍼런스
                  <br />
                  페이지입니다.
                </p>
                <div className="fcard__tags">
                  <span className="fcard__tag">Landing</span>
                  <span className="fcard__tag">SaaS</span>
                  <span className="fcard__tag">Portfolio</span>
                  <span className="fcard__tag">Dashboard</span>
                  <span className="fcard__tag">Blog</span>
                  <span className="fcard__tag">Shopping Mall</span>
                </div>
                <Link to="/ui-inspiration" className="link-arrow fcard__link fcard__link--orange" onClick={(e) => e.stopPropagation()}>
                  Browse →
                </Link>
              </div>
              <div className="ui-gallery">
                <img src="/assets/about/about3.png" alt="UI 레퍼런스 모음" />
              </div>
            </div>

          </div>
        </section>

        {/* 3. Discover부터 Build까지 서비스 이용 순서를 설명하는 영역 */}
        <section className="how-it-works container">
          <span className="how-it-works__eyebrow">HOW IT WORKS</span>
          <h2 className="how-it-works__title">Learn. Practice. Build.</h2>
          <p className="how-it-works__subtitle">4단계로 실력을 쌓아보세요.</p>

          <div className="steps">
            <button type="button" className="step" onClick={() => setActiveStep(stepData.discover)}>
              <div className="step__icon step__icon--blue">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
              </div>
              <h3><span>01</span>Discover</h3>
              <p>
                원하는 주제를 탐색하고
                <br />
                다양한 자료를 확인합니다.
              </p>
              <span className="step__more">자세히 보기 →</span>
            </button>
            <div className="step-arrow">→</div>
            <button type="button" className="step" onClick={() => setActiveStep(stepData.learn)}>
              <div className="step__icon step__icon--purple">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
              </div>
              <h3><span>02</span>Learn</h3>
              <p>
                짧은 설명을 통해
                <br />
                개념을 익힙니다.
              </p>
              <span className="step__more">자세히 보기 →</span>
            </button>
            <div className="step-arrow">→</div>
            <button type="button" className="step" onClick={() => setActiveStep(stepData.practice)}>
              <div className="step__icon step__icon--green">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              </div>
              <h3><span>03</span>Practice</h3>
              <p>
                미션을 풀며 직접 코드를 작성하고
                <br />
                실력을 기릅니다.
              </p>
              <span className="step__more">자세히 보기 →</span>
            </button>
            <div className="step-arrow">→</div>
            <button type="button" className="step" onClick={() => setActiveStep(stepData.build)}>
              <div className="step__icon step__icon--orange">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/></svg>
              </div>
              <h3><span>04</span>Build</h3>
              <p>
                배운 내용을 바탕으로
                <br />
                나만의 프로젝트를 완성합니다.
              </p>
              <span className="step__more">자세히 보기 →</span>
            </button>
          </div>
        </section>

        {/* 4. 자주 묻는 질문을 details 태그로 펼쳐보는 FAQ 영역 */}
        <section className="faq container">
          <div className="faq__heading">
            <span className="how-it-works__eyebrow">FAQ</span>
            <h2 className="how-it-works__title">자주 묻는 질문</h2>
          </div>
          <div className="faq__list">
            <details className="faq__item" open>
              <summary><span>코딩을 전혀 몰라도 시작할 수 있나요?</span></summary>
              <p>네, 괜찮아요. HTML/CSS 기초부터 차근차근 안내하는 입문 트랙이 있어서 처음 코드를 접하는 분도 바로 시작할 수 있어요.</p>
            </details>
            <details className="faq__item">
              <summary><span>무료로 이용할 수 있나요?</span></summary>
              <p>튜토리얼과 챌린지 대부분은 무료로 제공돼요. 일부 심화 콘텐츠는 추후 유료 플랜으로 열릴 수 있습니다.</p>
            </details>
            <details className="faq__item">
              <summary><span>미션은 몇 개 정도 있나요?</span></summary>
              <p>현재 입문 트랙은 5개 미션이 열려 있고, 중급·고급 미션은 계속 추가될 예정이에요.</p>
            </details>
            <details className="faq__item">
              <summary><span>모바일에서도 이용할 수 있나요?</span></summary>
              <p>코드 에디터가 포함된 미션 페이지는 데스크탑(PC)에 최적화되어 있어요. 튜토리얼 열람이나 UI 레퍼런스 둘러보기는 모바일에서도 가능해요.</p>
            </details>
          </div>
        </section>

        {/* 5. 가이드 페이지로 이동하도록 유도하는 하단 CTA 배너 */}
        <section className="cta-banner container">
          <div className="cta-banner__inner">
            <div className="cta-banner__icon">&lt;/&gt;</div>
            <h2 className="cta-banner__title">Ready to Improve Your Coding Skills?</h2>
            <p className="cta-banner__subtitle">실습부터 레퍼런스까지 한 곳에서 시작해보세요.</p>
            <Link to="/guide" className="cta-banner__cta">
              Start Exploring
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
          </div>
        </section>

      </main>

      {/* 6. 어바웃과 챌린지 페이지가 함께 사용하는 사이트 푸터 */}
      <Footer />

      {/* 이용 단계 카드를 선택했을 때 body 위에 표시되는 상세 모달 */}
      <StepModal data={activeStep} onClose={() => setActiveStep(null)} />

      {/* 기능 카드를 선택했을 때 이미지와 설명을 표시하는 상세 모달 */}
      <CardModal data={activeCard} onClose={() => setActiveCard(null)} />
    </div>
  );
}
