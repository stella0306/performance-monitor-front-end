import React from "react";
import "../styles/HomeButtons.css";

const HomeButtons = () => {
  return (
    <div className="home-buttons">
      {/* CPU 모니터링 */}
      <a href="/cpu_info" className="home-btn cpu">
        ⚙️ CPU 모니터링
      </a>

      {/* 메모리 모니터링 */}
      <a href="/memory_info" className="home-btn memory">
        💾 메모리 모니터링
      </a>

      {/* 네트워크 모니터링 */}
      <a href="/network_info" className="home-btn network">
        🛜 네트워크 모니터링
      </a>

      {/* 디스크 모니터링 */}
      <a href="/disk_info" className="home-btn disk">
        💽 디스크 모니터링
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/stella0306/performance-monitor-back-end"
        target="_blank"
        rel="noopener noreferrer"
        className="home-btn github"
      >
        💻 GitHub 백엔드 저장소
      </a>

      <a
        href="https://github.com/stella0306/performance-monitor-front-end"
        target="_blank"
        rel="noopener noreferrer"
        className="home-btn github"
      >
        💻 GitHub 프론트엔드 저장소
      </a>

    </div>
  );
};

export default HomeButtons;
