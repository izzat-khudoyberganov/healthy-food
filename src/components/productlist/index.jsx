import React, { useEffect, useState } from "react";
import "./style.css";
import Card from "../card";
const ProductList = () => {
  const [products, setProducts] = useState([]);

  async function getData() {
    await fetch(`${import.meta.env.VITE_BASE_URL}products`)
      .then((res) => res.json())
      .then((json) => setProducts(json.products));
  }

  useEffect(() => {
    getData()
  }, [])

  const data = Array.isArray(products) && products.length > 0 && products.slice(0, 6)
  

  return (
    <div className="products">
      {
        data.length > 0 && data.map(el => (
           <Card key={el.id} {...el}/>
        ))
      }
    </div>
  );
};

export default ProductList;
