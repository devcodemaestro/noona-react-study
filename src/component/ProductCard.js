import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  };
  return (
    <Card className="product-card h-100" onClick={showDetail}>
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
