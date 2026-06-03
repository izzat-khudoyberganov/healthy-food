import React, { useContext } from "react";
import shopping_cart from "../../assets/shopping-cart.svg";
import like from "../../assets/heart.svg";
import { Link } from "react-router-dom";
import { MainContext } from "../../context/mainContext";
import "./header.css";
const Header = () => {
  const { cartItems, likeItems } = useContext(MainContext);
  return (
    <header className="header">
      <div className="container">
        <div className="content">
          <Link to="/" className="logo">
            Logo
          </Link>

          <div className="user__actions">
            <Link to="/cart">
              {cartItems.length > 0 && <span>{cartItems.length}</span>}
              <img src={shopping_cart} width="24" height="24" alt="Cart" />
            </Link>
            <Link to="/like">
              {likeItems.length > 0 && <span>{likeItems.length}</span>}
              <img src={like} width="24" height="24" alt="Like" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
