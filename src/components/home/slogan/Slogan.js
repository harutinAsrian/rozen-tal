import React, { useState } from "react";
import "./Slogan.css";

function Slogan() {
  const [now, setNow] = useState(false);

  const handleClick = () => {
    setNow(!now);
  };

  return (
    <div className="slogan">
      <div className="slogan-text">
        if anything is going to happen <br />
        <span>
          It’s going to happen{" "}
          <span className={now ? "neon now" : "now"} onClick={handleClick}>
            now
          </span>
        </span>
      </div>
    </div>
  );
}

export default Slogan;
