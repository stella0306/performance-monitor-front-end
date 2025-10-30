import React from "react";
import "../styles/CPUFieldItem.css";

const CPUFieldItem = ({ label, value }) => (
  <div className="cpu-field-item">
    <span className="cpu-label">{label}</span>
    <span className="cpu-value">{value}</span>
  </div>
);

export default CPUFieldItem;
