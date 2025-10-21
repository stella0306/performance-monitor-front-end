import React from "react";
import "../styles/CpuFieldItem.css";

const CpuFieldItem = ({ label, value }) => (
  <div className="cpu-field-item">
    <span className="cpu-label">{label}</span>
    <span className="cpu-value">{value}</span>
  </div>
);

export default CpuFieldItem;
