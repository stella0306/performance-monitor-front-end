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

      {/* GitHub */}
      <a
        href="https://github.com/stella0306"
        target="_blank"
        rel="noopener noreferrer"
        className="home-btn github"
      >
        💻 GitHub 저장소
      </a>
    </div>
  );
};

export default HomeButtons;
