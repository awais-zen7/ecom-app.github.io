import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import { Container, Form, Button } from "react-bootstrap";

function Checkout() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order placed:", { ...formData, items: cartItems });
    dispatch(clearCart());
    alert("Order placed successfully!");
  };

  return (
    <Container className="mt-5">
      <h2>Checkout</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Address</Form.Label>
          <Form.Control
            as="textarea"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          Place Order
        </Button>
      </Form>
    </Container>
  );
}

export default Checkout;
