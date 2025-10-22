import React from "react";
import DiskFieldItem from "./DiskFieldItem";
import "../styles/DiskFieldList.css";

const DiskFieldList = ({ title, fields = [] }) => {
  return (
    <div className="disk-fields">
      <h2>🧩 {title}</h2>
      {fields.map((f) => (
        <DiskFieldItem key={f.label} label={f.label} value={f.value} />
      ))}
    </div>
  );
};

export default DiskFieldList;
