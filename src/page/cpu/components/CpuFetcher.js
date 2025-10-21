import React, { useEffect, useState } from "react";
import CpuFieldList from "./CpuFieldList";
import "../styles/CpuFetcher.css";

const CpuFetcher = ({ url, delay }) => {
  const [cpuData, setCpuData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCpu() {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setCpuData(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      }
    }

    fetchCpu();
    const id = setInterval(fetchCpu, delay);
    return () => clearInterval(id);
  }, [url, delay]);

  if (error) {
    return <div className="cpu-error">❌ 데이터를 불러오지 못했습니다: {error}</div>;
  }

  if (!cpuData) {
    return <div className="cpu-loading">⏳ 데이터를 불러오는 중...</div>;
  }

  return <CpuFieldList cpuData={cpuData} />;
};

export default CpuFetcher;
