import React from 'react';

function checkProduction(hostname) {
  const result = hostname.indexOf('inflai.com');
  return result !== -1;
}

function App() {
  const isProduction = checkProduction(window.location.origin);
  const BizPage = isProduction ? 'https://biz.inflai.com' : 'http://localhost:3003';
  const InfPage = isProduction ? 'https://influencer.inflai.com' : 'http://localhost:3002';

  return (
    <div className="intro">
      <div className="intro-col intro-col--left">
        <div className="intro-bg intro-bg--influencer" />
        <div className="intro-content">
          <div className="intro-fake" />
          <div className="intro-area">
            <div className="intro-logo blue" />
            <div className="intro-title">인플루언서</div>
            <div className="intro-meta">
              <div className="intro-text">내가 찾던 브랜드 협찬. 당신만의 협찬 파트너</div>
              <div className="intro-text">인공지능분석을 통해 내 계정을 좀 더 전문화 시키세요</div>
              <div className="intro-hashtag">#인플라이</div>
            </div>
            <a href={InfPage} className="intro-btn left">
              <span className="intro-btn__text">시작하기</span>
            </a>
          </div>
        </div>
      </div>
      <div className="intro-col intro-col--right">
        <div className="intro-bg intro-bg--advertiser" />
        <div className="intro-content">
          <div className="intro-fake" />
          <div className="intro-area">
            <div className="intro-logo orange" />
            <div className="intro-title">광고주</div>
            <div className="intro-meta">
              <div className="intro-text">내 예산에 가장 효과적인 마케팅</div>
              <div className="intro-text">쉽고 빠른 인플루언서 매칭</div>
              <div className="intro-text">블로그, 인스타, 유튜브, 틱톡까지</div>
            </div>
            <a href={BizPage} className="intro-btn right">
              <span className="intro-btn__text">시작하기</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
