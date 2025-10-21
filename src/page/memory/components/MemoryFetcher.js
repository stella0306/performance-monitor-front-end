import React, { useEffect, useState } from "react";
import MemoryFieldList from "./MemoryFieldList";
import "../styles/MemoryFetcher.css";

const MemoryFetcher = ({ url, delay }) => {
  const [memoryData, setMemoryData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMemory() {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setMemoryData(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      }
    }

    fetchMemory();
    const id = setInterval(fetchMemory, delay);
    return () => clearInterval(id);
  }, [url, delay]);

  if (error) {
    return <div className="memory-error">❌ 데이터를 불러오지 못했습니다: {error}</div>;
  }

  if (!memoryData) {
    return <div className="memory-loading">⏳ 데이터를 불러오는 중...</div>;
  }

  return <MemoryFieldList memoryData={memoryData} />;
};

export default MemoryFetcher;
