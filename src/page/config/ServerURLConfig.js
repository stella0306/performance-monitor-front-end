// 서버 URL 모음
const serverURLConfig = {
    "cpu": {
        "cpu_percent_url": "http://localhost:8000/system/api/cpu_percent",
        "cpu_count_url": "http://localhost:8000/system/api/cpu_count",
    },
    "memory": {
        "virtual_memory": "http://localhost:8000/system/api/virtual_memory"
    },
    "network": {
        "net_io_counters": "http://localhost:8000/system/api/net_io_counters"
    },
    "disk": {
        "virtual_memory": "http://localhost:8000/system/api/virtual_memory" // disk 서버가 개발되기 전까지 임시 URL로 사용함.
    }
};

export default serverURLConfig;