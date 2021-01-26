import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, removeProduct } from "../../../actions";
import "./CartModal.css";

function CartModal({ open, onClose, itemCount }) {
  const dispatch = useDispatch();

  const itemInfo = useSelector((state) => state.itemInfo);

  let totalPrice = 0;
  for (let i = 0; i < itemInfo.length; i++) {
    totalPrice += itemInfo[i].total;
  }

  if (!open) return null;

  if (itemInfo.length === 0) {
    return (
      <>
        <div className="overlay"></div>
        <div className="cart-modal">
          <div className="modal-close-btn" onClick={onClose}>
            <i className="fas fa-times"></i>
          </div>
          <div className="cart-header empty-cart">Shopping cart is empty</div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="overlay"></div>
      <div className="cart-modal">
        <div className="modal-close-btn" onClick={onClose}>
          <i className="fas fa-times"></i>
        </div>

        <div className="cart-header">{itemCount} items in Cart</div>

        {itemInfo.map((item) => {
          const { header, id, price, size, img, quantity, total } = item;
          return (
            <div className="cart-body">
              <div className="cart-item-img">
                <img src={img} alt="" />
              </div>
              <div className="product-name">
                {header} ({size})
              </div>
              <div className="quantity">
                <div className="minus" onClick={() => dispatch(decrement(id))}>
                  <i className="fas fa-minus"></i>
                </div>
                {quantity}
                <div className="plus" onClick={() => dispatch(increment(id))}>
                  <i className="fas fa-plus"></i>
                </div>
              </div>
              <div className="product-price">
                £ {Math.floor(price * quantity)}
              </div>
              <div
                className="product-remove"
                onClick={() => dispatch(removeProduct(id))}
              >
                <i className="fas fa-times"></i>
              </div>
            </div>
          );
        })}
        <div className="cart-footer">
          <div className="total-price">
            <span>Total </span>£ {totalPrice}
          </div>
          <div
            className="purchase"
            onClick={() => alert("Sorry this is only a demo version")}
          >
            purchase
          </div>
        </div>
      </div>
    </>
  );
}

export default CartModal;
