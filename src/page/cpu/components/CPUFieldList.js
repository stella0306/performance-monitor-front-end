import React from "react";
import CPUFieldItem from "./CPUFieldItem";
import "../styles/CPUFieldList.css";

const CPUFieldList = ({ title, fields = [] }) => {
  return (
    <div className="cpu-fields">
      <h2>🧩 {title}</h2>
      {fields.map((f) => (
        <CPUFieldItem key={f.label} label={f.label} value={f.value} />
      ))}
    </div>
  );
};

export default CPUFieldList;