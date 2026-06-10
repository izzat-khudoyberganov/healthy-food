import React, { useContext } from "react";
import { MainContext } from "../context/mainContext";
import Card from "../components/card";
import LikeItem from "../components/likeItem";

const Like = () => {
  const { likeItems, cartItems } = useContext(MainContext);
  return (
    <div className="container">
      <div className="products">
        {likeItems.length > 0 ? (
          likeItems.map((el, i) => (
            <LikeItem
              key={i}
              {...el}
              isContainedCartItems={cartItems.some((item) => item.id === el.id)}
            />
          ))
        ) : (
          <h2>Like is empty</h2>
        )}
      </div>
    </div>
  );
};

export default Like;
