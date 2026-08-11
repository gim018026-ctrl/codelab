import { createPortal } from 'react-dom';

/**
 * stepData의 한 단계 객체를 받아 상세 내용을 보여주는 모달.
 * data는 About.jsx에서 사용자가 선택한 stepData 항목이며 null이면 내용 없이 닫힌 상태다.
 */
export default function StepModal({ data, onClose }) {
  // CardModal과 같은 이유로 body에 Portal을 만들며, data가 있을 때만 is-open이 붙는다.
  return createPortal(
    // data가 있으면 is-open을 붙여 CSS로 모달을 표시하고, 없으면 닫힌 상태를 유지한다.
    <div className={`step-modal${data ? ' is-open' : ''}`}>
      {/* 배경과 닫기 버튼은 모두 About이 전달한 동일한 onClose 함수를 실행한다. */}
      <div className="step-modal__backdrop" onClick={onClose}></div>
      <div className="step-modal__panel">
        <button type="button" className="step-modal__close" onClick={onClose} aria-label="닫기">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
        {/* 선택된 단계 데이터가 있을 때만 안전하게 각 필드를 렌더링한다. */}
        {data && (
          <>
            {/* icon HTML은 외부 입력이 아니라 src/data/stepData.js에서 직접 작성한 SVG만 사용한다. */}
            <div className="step-modal__icon" dangerouslySetInnerHTML={{ __html: data.icon }} />
            <span className="step-modal__eyebrow">{data.eyebrow}</span>
            <h3 className="step-modal__title">{data.title}</h3>
            {/* items 배열의 안내 문구를 순서대로 목록에 출력한다. */}
            <ul className="step-modal__list">
              {data.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>,
    document.body
  );
}
