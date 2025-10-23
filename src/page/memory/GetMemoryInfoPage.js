import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ 홈 이동용
import MemoryFetcher from "./components/MemoryFetcher";
import getVirtualMemoryFields from "./components/dataset/GetVirtualMemoryFields";
import "./styles/GetMemoryInfoPage.css";

const GetMemoryInfoPage = () => {
  const navigate = useNavigate(); // ✅ 페이지 이동 함수 생성

  const [delay, setDelay] = useState(1000);
  const [VirtualMemoryUrl, setVirtualMemoryUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setVirtualMemoryUrl(`http://localhost:8000/system/api/virtual_memory`);
  };

  return (
    <div className="memory-page">
      <header className="memory-header">
        <h1>💾 MEMORY 모니터링</h1>
        <p>실시간 MEMORY 사용률과 시스템 상태를 시각화합니다.</p>
      </header>

      {/* 입력 폼 */}
      <form className="memory-form" onSubmit={handleSubmit}>
        <div className="memory-input-group">
          <label>갱신 주기(ms)</label>
          <input
            type="number"
            step="100"
            value={delay}
            onChange={(e) => setDelay(Number(e.target.value))}
          />
        </div>

        {/* 데이터 조회 버튼 */}
        <button className="memory-button" type="submit">
          🔍 데이터 조회
        </button>

        {/* 홈으로 이동 버튼 */}
        <button
          type="button"
          className="memory-home-button"
          onClick={() => navigate("/")}
        >
          🏠 홈으로
        </button>
      </form>

      {/* 비동기 Fetch */}
      {VirtualMemoryUrl && <MemoryFetcher url={VirtualMemoryUrl} delay={delay} title="MEMORY VIRTUALMEMORY 정보" fields={getVirtualMemoryFields}/>}
    </div>
  );
};

export default GetMemoryInfoPage;
