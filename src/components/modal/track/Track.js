import React from "react";
import "./Track.css";

function Track({ index, onChange, value }) {
  return (
    <input
      value={value}
      type="text"
      className="track-list-add-input"
      onChange={(e) => onChange(e)}
    />
  );
}

export default Track;
