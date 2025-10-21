export async function getCpuPercent(interval = 0.5) {
  const response = await fetch("http://localhost:8000/system/api/cpu_percent?interval=1&interval_state=off&percpu_state=off", {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error(`서버 오류: ${response.status}`);
  }

  return response.json();
}
