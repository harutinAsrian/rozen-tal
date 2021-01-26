import react from "react";
import "./SizeButton.css";

function SizeButton({ size, active, click }) {
  return (
    <div
      className={active === size ? "size-button size-active" : "size-button"}
      onClick={() => click(size)}
    >
      {size}
    </div>
  );
}

export default SizeButton;
