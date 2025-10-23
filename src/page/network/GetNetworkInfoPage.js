import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ 홈 이동용
import NetworkFetcher from "./components/NetworkFetcher";
import getNetIoCountersUrlFields from "./components/dataset/GetNetIoCountersUrlFields";
import "./styles/GetNetworkInfoPage.css";

const GetNetworkInfoPage = () => {
  const navigate = useNavigate(); // ✅ 페이지 이동 함수 생성

  const [delay, setDelay] = useState(1000);
  const [netIoCountersUrl, setNetIoCountersUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setNetIoCountersUrl(`http://localhost:8000/system/api/net_io_counters`);
  };

  return (
    <div className="network-page">
      <header className="network-header">
        <h1>🛜 NETWORK 모니터링</h1>
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
      {netIoCountersUrl && <NetworkFetcher url={netIoCountersUrl} delay={delay} title="NETWORK NETIOCOUNTERS 정보" fields={getNetIoCountersUrlFields} />}
    </div>
  );
};

export default GetNetworkInfoPage;
