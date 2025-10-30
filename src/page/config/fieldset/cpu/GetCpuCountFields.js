const getCpuCountFields = ( cpuData ) => {
  if (!cpuData) {
    return [{ label: "데이터 없음", value: "서버 응답이 비어 있습니다." }];
  }

  return [
    { label: "코어 개수", value: cpuData.cpu_count + "개" },
    { label: "논리 코어 포함", value: cpuData.logical_state === "on" ? "활성화" : "비활성화" },
    { label: "상태 코드", value: cpuData.status_code },
    { label: "상태 메시지", value: cpuData.status_message },
    { label: "시작 시간", value: cpuData.start_time },
    { label: "끝난 시간", value: cpuData.end_time },
    { label: "경과 시간", value: cpuData.elapsed_time },
  ];
};

export default getCpuCountFields;