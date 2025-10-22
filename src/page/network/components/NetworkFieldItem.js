import React from "react";
import "../styles/NetworkFieldItem.css";

const NetworkFieldItem = ({ label, value }) => (
  <div className="network-field-item">
    <span className="network-label">{label}</span>
    <span className="network-value">{value}</span>
  </div>
);

export default NetworkFieldItem;
