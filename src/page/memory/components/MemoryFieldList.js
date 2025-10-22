import React from "react";
import MemoryFieldItem from "./MemoryFieldItem";
import "../styles/MemoryFieldList.css";

const MemoryFieldList = ({ title, fields = [] }) => {
  return (
    <div className="memory-fields">
      <h2>🧩 {title}</h2>
      {fields.map((f) => (
        <MemoryFieldItem key={f.label} label={f.label} value={f.value} />
      ))}
    </div>
  );
};

export default MemoryFieldList;
