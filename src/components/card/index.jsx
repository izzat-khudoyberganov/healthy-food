import React, { useContext } from "react";
import { reducer } from "../../store";
import {
  ADD_ONE,
  ADD_TO_CART,
  ADD_TO_LIKE,
  REMOVE_FROM_CART,
  REMOVE_FROM_LIKE,
  REMOVE_ONE,
} from "../../store/type";
import { MainContext } from "../../context/mainContext";
import like from "../../assets/heart.svg";
import like_red from "../../assets/heart-red.svg";
import "./style.css";
import { formatPrice, truncate } from "../../utils/helper";

const Card = ({
  thumbnail,
  title,
  price,
  rating,
  description,
  id,
  isContainedCartItems,
  isContainedLikeItems,
}) => {
  

  const { addToCart, addToLike, removeFromCart, removeFromLike } = useContext(MainContext);

  return (
    <div className="product">
      <button
        className="add__btn like_btn"
        onClick={() =>
          isContainedLikeItems ? removeFromLike(id) : addToLike({ thumbnail, title, price, rating, description, id })
        }
      >
       {
        isContainedLikeItems ?  <img src={like_red} width="24" height="24" /> :  <img src={like} width="24" height="24" />
       }
      </button>
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
            onClick={() =>
              isContainedCartItems
                ? removeFromCart(id)
                : addToCart({
                    thumbnail,
                    title,
                    price,
                    rating,
                    description,
                    id,
                  })
            }
          >
            {
              isContainedCartItems ? '-' : '+'
            }
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
