import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ 홈 이동용
import CpuFetcher from "./components/CpuFetcher";
import "./styles/GetCpuInfoPage.css";

const GetCpuInfoPage = () => {
  const navigate = useNavigate(); // ✅ 페이지 이동 함수 생성

  const [interval, setIntervalValue] = useState(1);
  const [intervalState, setIntervalState] = useState("off");
  const [percpuState, setPercpuState] = useState("off");
  const [delay, setDelay] = useState(2000);
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = `interval=${interval}&interval_state=${intervalState}&percpu_state=${percpuState}`;
    setUrl(`http://localhost:8000/system/api/cpu_percent?${query}`);
  };

  return (
    <div className="cpu-page">
      <header className="cpu-header">
        <h1>⚙️ CPU 모니터링</h1>
        <p>실시간 CPU 사용률과 시스템 상태를 시각화합니다.</p>
      </header>

      {/* 입력 폼 */}
      <form className="cpu-form" onSubmit={handleSubmit}>
        <div className="cpu-input-group">
          <label>측정 간격(초)</label>
          <input
            type="number"
            step="0.1"
            value={interval}
            onChange={(e) => setIntervalValue(e.target.value)}
          />
        </div>

        <div className="cpu-input-group">
          <label>갱신 주기(ms)</label>
          <input
            type="number"
            step="100"
            value={delay}
            onChange={(e) => setDelay(Number(e.target.value))}
          />
        </div>

        <div className="cpu-input-group">
          <label>간격 상태</label>
          <select
            value={intervalState}
            onChange={(e) => setIntervalState(e.target.value)}
          >
            <option value="on">활성화</option>
            <option value="off">비활성화</option>
          </select>
        </div>

        <div className="cpu-input-group">
          <label>코어별 사용률</label>
          <select
            value={percpuState}
            onChange={(e) => setPercpuState(e.target.value)}
          >
            <option value="on">개별 코어</option>
            <option value="off">전체 평균</option>
          </select>
        </div>

        {/* 데이터 조회 버튼 */}
        <button className="cpu-button" type="submit">
          🔍 데이터 조회
        </button>

        {/* 홈으로 이동 버튼 */}
        <button
          type="button"
          className="cpu-home-button"
          onClick={() => navigate("/")}
        >
          🏠 홈으로
        </button>
      </form>

      {/* 비동기 Fetch */}
      {url && <CpuFetcher url={url} delay={delay} />}
    </div>
  );
};

export default GetCpuInfoPage;
