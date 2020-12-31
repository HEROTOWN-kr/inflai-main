import React from 'react';

function App() {
  return (
    <div className="intro">
      <div className="intro-col intro-col--left">
        <div className="intro-bg intro-bg--influencer" />
        <div className="intro-content">
          <div className="intro-fake" />
          <div className="intro-area">
            <div className="intro-logo" />
            <div className="intro-title">인플루언서이신가요?</div>
            <div className="intro-meta">
              <div className="intro-text">내가 찾던 브랜드 협찬. 당신만의 협찬 파트너</div>
              <div className="intro-hashtag">#인플라이</div>
            </div>
            <a href="https://influencer.inflai.com" className="intro-btn">
              <span className="intro-btn__text">지금 알아보기</span>
            </a>
          </div>
        </div>
      </div>
      <div className="intro-col intro-col--right">
        <div className="intro-bg intro-bg--advertiser" />
        <div className="intro-content">
          <div className="intro-fake" />
          <div className="intro-area">
            <div className="intro-logo" />
            <div className="intro-title">광고주이신가요?</div>
            <div className="intro-meta">
              <div className="intro-text">내 예산에 가장 효과적인 마케팅</div>
              <div className="intro-text">쉽고 빠른 인플루언서 매칭</div>
              <div className="intro-text">블로그, 인스타, 유튜브, 틱톡까지</div>
            </div>
            <a href="https://biz.inflai.com" className="intro-btn">
              <span className="intro-btn__text">지금 알아보기</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
