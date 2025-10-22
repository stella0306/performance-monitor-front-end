import React, { useEffect, useState } from "react";
import NetworkFieldList from "./NetworkFieldList";
import "../styles/NetworkFetcher.css";

const NetworkFetcher = ({ url, delay, title, fields }) => {
  const [networkData, setNetworkData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchNetwork() {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setNetworkData(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      }
    }

    fetchNetwork();
    const id = setInterval(fetchNetwork, delay);
    return () => clearInterval(id);
  }, [url, delay]);

  if (error) {
    return <div className="network-error">❌ 데이터를 불러오지 못했습니다: {error}</div>;
  }

  if (!networkData) {
    return <div className="network-loading">⏳ 데이터를 불러오는 중...</div>;
  }

  return <NetworkFieldList title={title} fields={fields(networkData)} />;
};

export default NetworkFetcher;
