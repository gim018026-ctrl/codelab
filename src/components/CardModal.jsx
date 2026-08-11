import { Link } from 'react-router-dom';
import { createPortal } from 'react-dom';

/**
 * cardData의 한 카드 객체를 받아 기능 상세 정보를 보여주는 모달.
 * About.jsx가 선택한 데이터를 전달하며, data가 null이면 CSS상 닫힌 상태로 유지된다.
 */
export default function CardModal({ data, onClose }) {
  // Portal은 모달 DOM을 route-transition 밖의 body 바로 아래에 만든다.
  // 부모의 transform이나 overflow 때문에 fixed 모달이 잘리는 문제를 방지한다.
  return createPortal(
    <div
      // data 유무로 열림 클래스를 정하고 카드별 accent를 CSS 사용자 변수로 전달한다.
      className={`card-modal${data ? ' is-open' : ''}`}
      style={data ? { '--modal-accent': data.accent } : undefined}
    >
      {/* 반투명 배경을 누르면 About의 activeCard가 null로 바뀌며 모달이 닫힌다. */}
      <div className="card-modal__backdrop" onClick={onClose}></div>
      <div className="card-modal__panel">
        <button type="button" className="card-modal__close" onClick={onClose} aria-label="닫기">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
        {/* data가 있을 때만 필드에 접근해 닫힌 상태의 null 오류를 방지한다. */}
        {data && (
          <>
            <div
              className="card-modal__media"
              // media는 src/data/cardData.js에 직접 작성한 신뢰할 수 있는 HTML만 가져온다.
              // 사용자 입력을 그대로 넣으면 XSS 위험이 있으므로 실제 서비스에서는 정제해야 한다.
              dangerouslySetInnerHTML={{ __html: data.media || `<img src="${data.image}" alt="" />` }}
            />
            <div className="card-modal__body">
              <span className="card-modal__eyebrow" style={{ color: data.accent }}>
                {data.eyebrow}
              </span>
              <h3 className="card-modal__title">{data.title}</h3>
              <p className="card-modal__desc">{data.desc}</p>
              {/* features 배열을 순회해 핵심 기능을 목록으로 만든다. */}
              <ul className="card-modal__features">
                {data.features.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              {/* cardData에 지정된 내부 페이지로 이동하는 CTA 버튼이다. */}
              <Link to={data.ctaHref} className="card-modal__cta">
                <span>{data.ctaText}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>,
    document.body
  );
}
