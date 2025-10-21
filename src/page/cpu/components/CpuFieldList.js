import React from "react";
import CpuFieldItem from "./CpuFieldItem";
import "../styles/CpuFieldList.css";

const CpuFieldList = ({ cpuData }) => {
  const fields = [
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
    <div className="cpu-fields">
      <h2>🧩 CPU 정보</h2>
      {fields.map((f) => (
        <CpuFieldItem key={f.label} label={f.label} value={f.value} />
      ))}
    </div>
  );
};

export default CpuFieldList;
