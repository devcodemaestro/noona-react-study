import React, { useEffect, useState } from "react";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
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
    <Container className="product-detail-card">
      <Row>
        <Col className="product-img" sm={6}>
          <img src={product?.img} alt={product?.img} />
        </Col>
        <Col sm={6}>
          <div>{product?.title}</div>
          <div>₩{product?.price}</div>
          <div>{product?.choice === true ? "Conscious choice" : ""}</div>
          <Dropdown className="dropdown" drop={"down-centered"}>
            <Dropdown.Toggle id="dropdown-basic">사이즈 선택</Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu">
              {product?.size.map((item, index) => (
                <Dropdown.Item href="#/action-1">{item}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
