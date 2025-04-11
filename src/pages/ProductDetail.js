import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProductDetail = async () => {
    const url = process.env.REACT_APP_JSON_DB_URL + "/" + id;
    let response = await fetch(url);
    let data = await response.json();
    console.log("IDdata", data);
    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
    // eslint-disable-next-line
  }, []);
  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={product?.img} alt={product?.img} />
        </Col>
        <Col>
          <div>{product?.title}</div>
          <div>{product?.price}</div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
