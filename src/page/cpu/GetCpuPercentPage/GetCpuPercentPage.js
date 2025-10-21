// src/pages/cpu.js
import React, { useEffect, useState } from "react";
import { getCpuPercent } from "../../../api/cpu/GetCpuPercent";
import "./GetCpuPercentPage.css"

function GetCpuPercentPage() {
  const [cpuData, setCpuData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCpu() {
      try {
        const data = await getCpuPercent();
        setCpuData(data);
      } catch (err) {
        setError(err.message);
      }
    }

    fetchCpu(); // 최초 실행
    const intervalId = setInterval(fetchCpu, 2000); // 2초마다 갱신
    return () => clearInterval(intervalId);
  }, []);

  if (error) {
    return <div className="cpu">오류: {error}</div>;
  }

  if (!cpuData) {
    return <div className="cpu">로딩 중...</div>;
  }

  const cpuFields = [
    { label: "사용률", value: cpuData.cpu_percent + "%" },
    { label: "측정 간격", value: cpuData.interval + "초" },
    { label: "간격 상태", value: cpuData.interval_state === "on" ? "활성화" : "비활성화" },
    { label: "코어별 사용률", value: cpuData.percpu_state === "on" ? "개별 코어" : "전체 평균" },
    { label: "상태 코드", value: cpuData.status_code },
    { label: "상태 메시지", value: cpuData.status_message },
    { label: "시작 시간", value: cpuData.start_time },
    { label: "끝난 시간", value: cpuData.end_time },
    { label: "경과 시간", value: cpuData.elapsed_time },
  ];

  return (
    <div className="cpu">
      <h1>CPU 모니터링</h1>
      {cpuFields.map((field, index) => (
        <h2 key={index}>
          {field.label}: {field.value}
        </h2>
      ))}
    </div>
  );

}

export default GetCpuPercentPage;
