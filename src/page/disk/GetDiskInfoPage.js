import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ 홈 이동용
import DiskFetcher from "./components/DiskFetcher";
import getDiskTestFields from "./components/dataset/GetDiskTestFields";
import "./styles/GetDiskInfoPage.css";

const GetDiskInfoPage = () => {
  const navigate = useNavigate(); // ✅ 페이지 이동 함수 생성

  const [delay, setDelay] = useState(2000);
  const [diskTestUrl, setDiskTestUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setDiskTestUrl(`http://localhost:8000/system/api/virtual_memory`);
  };

  return (
    <div className="disk-page">
      <header className="disk-header">
        <h1>💽 DISK 모니터링 - 백엔드 서버 개발 중 이라서 MEMORY 사용량으로 대체됐습니다.</h1>
        <p>실시간 DISK 사용률과 시스템 상태를 시각화합니다.</p>
      </header>

      {/* 입력 폼 */}
      <form className="disk-form" onSubmit={handleSubmit}>
        <div className="disk-input-group">
          <label>갱신 주기(ms)</label>
          <input
            type="number"
            step="100"
            value={delay}
            onChange={(e) => setDelay(Number(e.target.value))}
          />
        </div>

        {/* 데이터 조회 버튼 */}
        <button className="disk-button" type="submit">
          🔍 데이터 조회
        </button>

        {/* 홈으로 이동 버튼 */}
        <button
          type="button"
          className="disk-home-button"
          onClick={() => navigate("/")}
        >
          🏠 홈으로
        </button>
      </form>

      {/* 비동기 Fetch */}
      {diskTestUrl && <DiskFetcher url={diskTestUrl} delay={delay} title="DISK TEST 정보" fields={getDiskTestFields} />}
    </div>
  );
};

export default GetDiskInfoPage;
