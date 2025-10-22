import React from "react";
import NetworkFieldItem from "./NetworkFieldItem";
import "../styles/NetworkFieldList.css";

const NetworkFieldList = ({ title, fields = [] }) => {
  return (
    <div className="network-fields">
      <h2>🧩 {title}</h2>
      {fields.map((f) => (
        <NetworkFieldItem key={f.label} label={f.label} value={f.value} />
      ))}
    </div>
  );
};

export default NetworkFieldList;
