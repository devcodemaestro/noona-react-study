import ProductCard from "component/ProductCard";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);

  const getProducts = async () => {
    let url = "http://localhost:5000/products";
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <Container>
        <Row className="g-4">
          {productList.map((menu, index) => (
            <Col key={index} md={3} sm={12}>
              <ProductCard item={menu} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
