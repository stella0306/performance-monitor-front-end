import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // 홈 이동용
import CPUFetcher from "./components/CPUFetcher";
import getCPUPercentFields from "../config/fieldset/cpu/getCPUPercentFields";
import getCPUCountFields from "../config/fieldset/cpu/getCPUCountFields";
import serverURLConfig from "../config/serverURLConfig";
import "./styles/GetCPUInfoPage.css";

const GetCPUInfoPage = () => {
  const navigate = useNavigate(); // 페이지 이동 함수 생성

  const [interval, setIntervalValue] = useState(1);
  const [intervalState, setIntervalState] = useState("off");
  const [percpuState, setPercpuState] = useState("off");
  const [logicalState, setLogicalState] = useState("off");
  const [delay, setDelay] = useState(1000);
  const [cpuPercentUrl, setCPUPercentUrl] = useState("");
  const [cpuCountUrl, setCPUCountUrl] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    const cpuPercentQuery = `interval=${interval}&interval_state=${intervalState}&percpu_state=${percpuState}`;
    const cpuCountQuery = `logical_state=${logicalState}`;

    setCPUPercentUrl(`${serverURLConfig.cpu.cpu_percent_url}?${cpuPercentQuery}`);
    setCPUCountUrl(`${serverURLConfig.cpu.cpu_count_url}?${cpuCountQuery}`);
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

        <div className="cpu-input-group">
          <label>코어 개수</label>
          <select
            value={logicalState}
            onChange={(e) => setLogicalState(e.target.value)}
          >
            <option value="on">논리 코어 포함</option>
            <option value="off">논리 코어 미포함</option>
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
      {cpuPercentUrl && <CPUFetcher url={cpuPercentUrl} delay={delay} title="CPU PERCENT 정보" fields={getCPUPercentFields}/>}
      {cpuCountUrl && <CPUFetcher url={cpuCountUrl} delay={delay} title="CPU COUNT 정보" fields={getCPUCountFields}/>}
    </div>
  );
};

export default GetCPUInfoPage;
