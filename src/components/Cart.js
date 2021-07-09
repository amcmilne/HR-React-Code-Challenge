import React from "react";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default function Cart(props) {
  const { cartItems, onAdd, onRemove, onEdit } = props;

  return (
    <Container fluid>
      <div className="cart-items">
        <h2>Cart Items</h2>
      </div>

      <aside className="" id="cart">
        <hr></hr>

        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <Row key={item.id}>
            <Col sm={6}>
              <ul className="fa-ul">
                <li>
                  <span className="fa-li">
                    <i className="fas fa-ice-cream"></i>
                  </span>
                  {item.option}
                </li>
                <li>{item.icecream}</li>
                <li>{item.toppings}</li>
                <li>{item.size}</li>
                <li>{item.container}</li>
              </ul>
            </Col>
            <Col className="col-2" sm={4}>
              <Button onClick={() => onRemove(item)} size="sm">
                <i className="fas fa-minus"></i>
              </Button>{" "}
              <Button onClick={() => onAdd(item)} size="sm">
                <i className="fas fa-plus"></i>
              </Button>{" "}
              <Button
                onClick={() => onEdit(item)}
                size="sm"
                disabled={item.type === "custom" ? false : true}
              >
                <i className="fas fa-edit"></i>
              </Button>
            </Col>
            <Col sm={2}>Qty: {item.qty}</Col>
          </Row>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr />
            <div className="text-right">
              <Button
                className="checkout-btn"
                onClick={() => alert("Implement Checkout!")}
              >
                Checkout
              </Button>
            </div>
          </>
        )}
      </aside>
    </Container>
  );
}
