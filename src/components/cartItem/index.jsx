import React, { useContext } from "react";
import "./style.css";
import { formatPrice, truncate } from "../../utils/helper";
import { MainContext } from "../../context/mainContext";

const CartItems = ({ thumbnail, title, price, rating, description, id, quantity }) => {
  const { addOne, removeOne, removeFromCart } = useContext(MainContext);
  return (
    <div className="product">
      <img src={thumbnail} alt={title} className="product__img" />
      <div className="product__content">
        <div className="product__info">
          <h2 className="product__title">{truncate(title, 20)}</h2>
          <p className="product__price">{formatPrice(price)}</p>
        </div>
        <p className="product__description">{truncate(description, 75)}</p>
        <div className="btn_groups">

        <div className="counter">
          <button className="counter__btn" onClick={() => removeOne(id)} disabled={quantity === 1}>
            -
          </button>
          <span className="counter__value">{quantity}</span>
          <button className="counter__btn" onClick={() => addOne(id)} disabled={quantity === 10}>
            +
          </button>
        </div>

         <button className="remove__btn" onClick={() => removeFromCart(id)}>
            Remove from cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
