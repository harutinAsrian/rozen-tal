import React, { useState } from "react";
import SizeButton from "./sizeButton/SizeButton";
import { addToCart } from "../../../actions";
import { useDispatch } from "react-redux";
import "./ShopItem.css";

function ShopItem({ img, header, price, id }) {
  let [merchSize, setMerchSize] = useState("");
  const dispatch = useDispatch();

  const handleClick = () => {
    let size = "Medium";
    if (merchSize === "") merchSize = size;

    dispatch(
      addToCart({
        header,
        price,
        size: merchSize,
        id,
        img,
        quantity: 1,
        total: price,
      })
    );
  };

  const [buttonActive, setButtonActive] = useState("Medium");
  const handleActiveButton = (size) => {
    setMerchSize(size);
    setButtonActive(size);
  };

  return (
    <div className="shop-item">
      <div className="shop-item-img">
        <img src={img} alt="" />
      </div>
      <div className="shop-item-text">
        <h2>{header}</h2>
        <p>Official Rozen Tal Merchandise</p>
        <span className="price">£ {price}</span>
        <span className="select-size">Select Size</span>
        <div className="size-buttons">
          <SizeButton
            active={buttonActive}
            size="Small"
            click={handleActiveButton}
          />
          <SizeButton
            active={buttonActive}
            size="Medium"
            click={handleActiveButton}
          />
          <SizeButton
            active={buttonActive}
            size="Large"
            click={handleActiveButton}
          />
          <SizeButton
            active={buttonActive}
            size="X-Large"
            click={handleActiveButton}
          />
        </div>
        <div className="add-to-cart" onClick={() => handleClick()}>
          <i className="fas fa-shopping-cart"></i>
          Add
        </div>
      </div>
    </div>
  );
}

export default ShopItem;
