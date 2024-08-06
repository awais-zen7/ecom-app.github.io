import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { Container, Row, Col, Button } from "react-bootstrap";

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) =>
    state.products.products.find((p) => p.id === parseInt(id))
  );

  if (!product) {
    return <div>Book not found</div>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <Container className="mt-5 bg-danger fw-bolder text-primary">
      <Row>
        <Col md={6}>
          <img src={product["cover_image"  ]} alt={product.title} className="img-fluid" />
        </Col>
        <Col md={6}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <h3>${product.price}</h3>
          <Button onClick={handleAddToCart} variant="primary">
            Add the Book to Cart
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetails;
