import React from "react";
import { Card } from "react-bootstrap";

const ProductCard = ({ item }) => {
  console.log(item);
  return (
    <Card className="product-card h-100">
      <div className="img-container">
        <Card.Img
          src={item?.img}
          alt={item?.img}
          variant="top"
          className="product-img"
        />
      </div>
      <Card.Body>
        <div>{item?.choice === true ? "Conscious choice" : ""}</div>
        <div>{item?.title}</div>
        <div>₩{item?.price}</div>
        <div>{item?.new === true ? "신제품" : ""}</div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
