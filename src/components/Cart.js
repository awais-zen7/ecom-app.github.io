import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";
import { Container, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Container className="mt-5 bg-success text-secondary">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Book</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>${item.price}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price * item.quantity}</td>
                  <td>
                    <Button
                      onClick={() => handleRemoveFromCart(item.id)}
                      variant="danger"
                    >
                      Remove the Book
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <h3>Total: ${total.toFixed(2)}</h3>
          <Button as={Link} to="/checkout" variant="primary">
            Proceed to Checkout
          </Button>
        </>
      )}
    </Container>
  );
}

export default Cart;
