import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ 홈 이동용
import NetworkFetcher from "./components/NetworkFetcher";
import getNetworkTestFields from "./components/dataset/GetNetworkTestFields";
import "./styles/GetNetworkInfoPage.css";

const GetNetworkInfoPage = () => {
  const navigate = useNavigate(); // ✅ 페이지 이동 함수 생성

  const [delay, setDelay] = useState(2000);
  const [networkTestUrl, setNetworkTestUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setNetworkTestUrl(`http://localhost:8000/system/api/virtual_memory`);
  };

  return (
    <div className="network-page">
      <header className="network-header">
        <h1>🛜 NETWORK 모니터링 - 백엔드 서버 개발 중 이라서 MEMORY 사용량으로 대체됐습니다.</h1>
        <p>실시간 NETWORK 사용률과 시스템 상태를 시각화합니다.</p>
      </header>

      {/* 입력 폼 */}
      <form className="network-form" onSubmit={handleSubmit}>
        <div className="network-input-group">
          <label>갱신 주기(ms)</label>
          <input
            type="number"
            step="100"
            value={delay}
            onChange={(e) => setDelay(Number(e.target.value))}
          />
        </div>

        {/* 데이터 조회 버튼 */}
        <button className="network-button" type="submit">
          🔍 데이터 조회
        </button>

        {/* 홈으로 이동 버튼 */}
        <button
          type="button"
          className="network-home-button"
          onClick={() => navigate("/")}
        >
          🏠 홈으로
        </button>
      </form>

      {/* 비동기 Fetch */}
      {networkTestUrl && <NetworkFetcher url={networkTestUrl} delay={delay} title="NETWORK TEST 정보" fields={getNetworkTestFields} />}
      
    </div>
  );
};

export default GetNetworkInfoPage;
