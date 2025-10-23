const getNetIoCountersUrlFields = ( networkData ) => {
  if (!networkData) {
    return [];
  }

  return [
    { label: "이전 전체 다운로드 바이트", value: networkData.old_download_bytes + "bytes" },
    { label: "이전 전체 업로드 바이트", value: networkData.old_upload_bytes + "bytes" },
    { label: "현재 전체 다운로드 바이트", value: networkData.new_download_bytes + "bytes" },
    { label: "현재 전체 업로드 바이트", value: networkData.new_upload_bytes + "bytes" },
    { label: "현재 다운로드 속도", value: networkData.download_speed_mb + "MB/s" },
    { label: "현재 업로드 속도", value: networkData.upload_speed_mb + "MB/s" },
    { label: "네트워크 측정 지연 시간 (단위: 초)", value: networkData.network_measurement_time_delay },
    { label: "상태 코드", value: networkData.status_code },
    { label: "상태 메시지", value: networkData.status_message },
    { label: "시작 시간", value: networkData.start_time },
    { label: "끝난 시간", value: networkData.end_time },
    { label: "경과 시간", value: networkData.elapsed_time },
  ];
};

export default getNetIoCountersUrlFields;