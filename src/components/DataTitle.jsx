import React from "react";
const DataTitle = ({ text, dataDate }) => (
  <div className="text-center">
    <h2 className="text-3xl font-bold">{text}</h2>
    <div className="text-2xl mt-4 mb-10">{dataDate}</div>
  </div>
);
export default DataTitle;
