import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ 홈 이동용
import DiskFetcher from "./components/DiskFetcher";
import getDiskUsageFields from "../config/fieldset/disk/GetDiskUsageFields";
import serverURLConfig from "../config/ServerURLConfig";
import "./styles/GetDiskInfoPage.css";

const GetDiskInfoPage = () => {
  const navigate = useNavigate(); // ✅ 페이지 이동 함수 생성

  const [delay, setDelay] = useState(1000);
  const [diskUsageUrl, setDiskUsageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setDiskUsageUrl(`${serverURLConfig.disk.disk_usage}`);
  };

  return (
    <div className="disk-page">
      <header className="disk-header">
        <h1>💽 DISK 모니터링</h1>
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
      {diskUsageUrl && <DiskFetcher url={diskUsageUrl} delay={delay} title="DISK USAGE 정보" fields={getDiskUsageFields} />}
    </div>
  );
};

export default GetDiskInfoPage;
