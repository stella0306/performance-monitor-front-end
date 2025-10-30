const getDiskUsageFields = (diskData) => {
  if (!diskData) {
    return [{ label: "데이터 없음", value: "서버 응답이 비어 있습니다." }];
  }

  const driveFields = [];

  // 각 드라이브(C:\, D:\ 등)에 대해 4개의 필드 생성
  Object.entries(diskData.disk_usage_values).forEach(([drive, info]) => {
    driveFields.push(
      {
        label: `${drive} 총용량`,
        value: `${info.total}Bytes (${info.total_gb}GB)`,
      },
      {
        label: `${drive} 사용량`,
        value: `${info.used}Bytes (${info.used_gb}GB)`,
      },
      {
        label: `${drive} 여유량`,
        value: `${info.free}Bytes (${info.free_gb}GB)`,
      },
      {
        label: `${drive} 사용률`,
        value: `${info.percent}%`,
      }
    );
  });

  // 공통 필드 (상태, 시간 등)
  const metaFields = [
    { label: "상태 코드", value: diskData.status_code },
    { label: "상태 메시지", value: diskData.status_message },
    { label: "시작 시간", value: diskData.start_time },
    { label: "끝난 시간", value: diskData.end_time },
    { label: "경과 시간", value: diskData.elapsed_time },
  ];

  return [...driveFields, ...metaFields];
};

export default getDiskUsageFields;
