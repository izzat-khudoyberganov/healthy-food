import React, { useContext } from "react";
import { MainContext } from "../context/mainContext";
import Card from "../components/card";

const Like = () => {
  const { likeItems } = useContext(MainContext);
  return <div className="container">{
      likeItems.length > 0 ? likeItems.map((el, i) => (
        <Card key={i} {...el} />
      )) : <h2>Like is empty</h2>
    }</div>;
};

export default Like;
