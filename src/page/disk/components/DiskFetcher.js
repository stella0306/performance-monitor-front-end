import React, { useEffect, useState } from "react";
import DiskFieldList from "./DiskFieldList";
import "../styles/DiskFetcher.css";

const DiskFetcher = ({ url, delay, title, fields }) => {
  const [diskData, setDiskData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchDisk() {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setDiskData(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      }
    }

    fetchDisk();
    const id = setInterval(fetchDisk, delay);
    return () => clearInterval(id);
  }, [url, delay]);

  if (error) {
    return <div className="disk-error">❌ 데이터를 불러오지 못했습니다: {error}</div>;
  }

  if (!diskData) {
    return <div className="disk-loading">⏳ 데이터를 불러오는 중...</div>;
  }

  return <DiskFieldList title={title} fields={fields(diskData)} />;
};

export default DiskFetcher;
