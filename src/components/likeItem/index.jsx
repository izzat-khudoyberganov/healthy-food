import { formatPrice, truncate } from "../../utils/helper";
import "./style.css";

import like from "../../assets/heart.svg";
import like_red from "../../assets/heart-red.svg";
import { useContext } from "react";
import { MainContext } from "../../context/mainContext";

const LikeItem = ({
  thumbnail,
  title,
  price,
  rating,
  description,
  id,
  quantity,
  isContainedCartItems,
}) => {
  const { addToCart, addToLike, removeFromCart, removeFromLike } =
    useContext(MainContext);
  return (
    <div className="product">
      <button className="add__btn like_btn" onClick={() => removeFromLike(id)}>
        <img src={like_red} width="24" height="24" />
      </button>
      <img src={thumbnail} alt={title} className="product__img" />
      <div className="product__content">
        <div className="product__info">
          <h2 className="product__title">{truncate(title, 20)}</h2>
          <p className="product__price">{formatPrice(price)}</p>
        </div>
        <p className="product__description">{truncate(description, 75)}</p>

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
          {isContainedCartItems ? "-" : "+"}
        </button>
      </div>
    </div>
  );
};

export default LikeItem;
