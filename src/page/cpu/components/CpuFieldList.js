import React from "react";
import CpuFieldItem from "./CpuFieldItem";
import "../styles/CpuFieldList.css";

const CpuFieldList = ({ title, fields = [] }) => {
  return (
    <div className="cpu-fields">
      <h2>🧩 {title}</h2>
      {fields.map((f) => (
        <CpuFieldItem key={f.label} label={f.label} value={f.value} />
      ))}
    </div>
  );
};

export default CpuFieldList;