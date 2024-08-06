import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Container className="mt-5 text-center bg-danger text-info" >
      <Row>
        <Col className="fw-bolder">
          <h1>Welcome to our E-Book Store</h1>
          <p>Find all the best selling books  at the best prices!</p>
          <Button className="w-25" as={Link} to="/products" variant="primary">
            Buy Books Now
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
