import React from "react";
import Button from "react-bootstrap/Button";

export default function Cart(props) {
  const { cartItems, onAdd, onRemove } = props;

  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">
              <ul>
                <li>{item.option}</li>
              </ul>
            </div>
            <div className="col-2">
              <Button
                className="btn-responsive"
                onClick={() => onRemove(item)}
                variant="primary"
                size="sm"
              >
                <i class="fas fa-minus"></i>
              </Button>{" "}
              <Button
                className="btn-responsive"
                onClick={() => onAdd(item)}
                variant="success"
                size="sm"
              >
                <i class="fas fa-plus"></i>
              </Button>
            </div>
            <div className="col-2 text-right">Qty: {item.qty}</div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr />
            <div className="row">
              <button onClick={() => alert("Implement Checkout!")}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
