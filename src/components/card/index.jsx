import React, { useReducer } from "react";
import "./style.css";
import { reducer } from "../../store";
import { ADD_ONE, ADD_TO_CART, ADD_TO_LIKE, REMOVE_FROM_CART, REMOVE_FROM_LIKE, REMOVE_ONE } from "../../store/type";

const Card = ({ thumbnail, title, price, rating, description }) => {
  function truncate(str, max) {
    return str.length > max ? str.slice(0, max) + "..." : str;
  }

  function formatPrice(price) {
    return price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }

  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div className="product">
      <img src={thumbnail} alt={title} className="product__img" />

      <div className="product__content">
        <div className="product__info">
          <h2 className="product__title">{truncate(title, 20)} </h2>
          <p className="product__price">{formatPrice(price)}</p>
        </div>
        <p className="product__description">{truncate(description, 75)}</p>

        <div className="product__review">
          <button
            className="add__btn"
            onClick={() => dispatch({ type: REMOVE_ONE })}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
