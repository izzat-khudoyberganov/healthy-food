import React, { useContext, useEffect, useState } from "react";
import Card from "../card";
import "./style.css";
import { MainContext } from "../../context/mainContext";
const ProductList = () => {
  const [products, setProducts] = useState([]);

  async function getData() {
    await fetch(`${import.meta.env.VITE_BASE_URL}products`)
      .then((res) => res.json())
      .then((json) => setProducts(json.products));
  }

  useEffect(() => {
    getData();
  }, []);

  const data =
    Array.isArray(products) && products.length > 0 && products.slice(0, 6);

  const { likeItems, cartItems } = useContext(MainContext);

  return (
    <div className="products">
      {data.length > 0 &&
        data.map((el, i) => (
          <Card
            key={i}
            {...el}
            isContainedCartItems={cartItems.some((item) => (el.id == item.id))}
            isContainedLikeItems={likeItems.some((item) => (el.id == item.id))}
          />
        ))}
    </div>
  );
};

export default ProductList;
