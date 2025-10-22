import React from "react";
import "../styles/DiskFieldItem.css";

const DiskFieldItem = ({ label, value }) => (
  <div className="disk-field-item">
    <span className="disk-label">{label}</span>
    <span className="disk-value">{value}</span>
  </div>
);

export default DiskFieldItem;
