import React from 'react';

function App() {
  return (
    <div className="intro">
      <div className="intro-col intro-col--left">
        <div className="intro-bg intro-bg--influencer" />
        <div className="intro-content">
          <div className="intro-fake" />
          <div className="intro-area">
            <div className="intro-title">인플루언서이신가요?</div>
            <div className="intro-meta">
              <div className="intro-text">내가 원하는 브랜드 협찬! 당신을 위한 협찬 매니저</div>
              <div className="intro-hashtag">#인플라이</div>
            </div>
            <a target="_blank" href="https://influencer.inflai.com" className="intro-btn">
              <span className="intro-btn__text">서비스 알아보기</span>
            </a>
          </div>
        </div>
      </div>
      <div className="intro-col intro-col--right">
        <div className="intro-bg intro-bg--advertiser" />
        <div className="intro-content">
          <div className="intro-fake" />
          <div className="intro-area">
            <div className="intro-title">광고주이신가요?</div>
            <div className="intro-meta">
              <div className="intro-text">가장 빠른 인플루언서 매칭 완료</div>
              <div className="intro-text">상세한 실시간 성과분석 리포트</div>
              <div className="intro-text">가장 합리적인 비용산출 시스템</div>
            </div>
            <a target="_blank" href="https://biz.inflai.com" className="intro-btn">
              <span className="intro-btn__text">서비스 알아보기</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
