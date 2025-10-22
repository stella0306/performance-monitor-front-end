const getVirtualMemoryFields = ( memoryData ) => {
  if (!memoryData) {
    return [];
  }

  return [
    { label: "총합 메모리 용량", value: memoryData .memory_total_bytes + "bytes" },
    { label: "사용 중인 메모리 용량", value: memoryData.memory_used_bytes + "bytes" },
    { label: "총합 메모리 용량", value: memoryData.memory_total_gb + "GB" },
    { label: "사용 중인 메모리 용량", value: memoryData.memory_used_gb + "GB" },
    { label: "사용 중인 메모리 사용률", value: memoryData.memory_percent + "%" },
    { label: "상태 코드", value: memoryData.status_code },
    { label: "상태 메시지", value: memoryData.status_message },
    { label: "시작 시간", value: memoryData.start_time },
    { label: "끝난 시간", value: memoryData.end_time },
    { label: "경과 시간", value: memoryData.elapsed_time },
  ];
};

export default getVirtualMemoryFields;