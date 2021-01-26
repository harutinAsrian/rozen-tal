import React, { useState } from "react";
import Logo from "../logo/Logo";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CartModal from "../../merchandise/cartModal/CartModal";
import "./Header.css";

function Header({ color, cart }) {
  const [burgerActive, setBurgerActive] = useState(false);
  const [cartModal, setCartModal] = useState(false);
  const handleBurger = () => {
    setBurgerActive(!burgerActive);
  };

  const cartItemQuantity = useSelector((state) => state.itemInfo.length);
  return (
    <div className={`header ${color}`}>
      <nav className="nav stroke">
        <ul
          className={
            burgerActive ? "nav-links nav-active nav-item-fade" : "nav-links"
          }
        >
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>about</li>
          </Link>
          <Link to="/album">
            <li>album</li>
          </Link>
          <Link to="/merchandise">
            <li>merchandise</li>
          </Link>
        </ul>
        <div className="burger" onClick={() => handleBurger()}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
      <Logo />
      {cart ? (
        <div className="cart" onClick={() => setCartModal(true)}>
          <i className="fas fa-shopping-cart"></i>
          <div className="cart-quantity">{cartItemQuantity}</div>
        </div>
      ) : null}
      <CartModal
        open={cartModal}
        onClose={() => setCartModal(false)}
        itemCount={cartItemQuantity}
      />
    </div>
  );
}

export default Header;
