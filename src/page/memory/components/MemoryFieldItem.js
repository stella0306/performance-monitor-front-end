import React from "react";
import "../styles/MemoryFieldItem.css";

const MemoryFieldItem = ({ label, value }) => (
  <div className="memory-field-item">
    <span className="memory-label">{label}</span>
    <span className="memory-value">{value}</span>
  </div>
);

export default MemoryFieldItem;
