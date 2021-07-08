import React from "react";
import Button from "react-bootstrap/Button";

export default function Cart(props) {
  const { cartItems, onAdd, onRemove, onEdit } = props;

  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <hr></hr>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">
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
            </div>
            <div className="col-2">
              <Button 
              onClick={() => onRemove(item)} 
              size="sm">
                <i className="fas fa-minus"></i>
              </Button>{" "}
              <Button 
              onClick={() => onAdd(item)} 
              size="sm">
                <i className="fas fa-plus"></i>
              </Button>{" "}
              <Button
                onClick={() => onEdit(item)}
                size="sm"
                disabled={item.type === "custom" ? false : true}
              >
                <i className="fas fa-edit"></i>
              </Button>
            </div>
            <div className="col-2 text-right">Qty: {item.qty}</div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr />
            <div className="text-right">
              <Button onClick={() => alert("Implement Checkout!")}>
                Checkout
              </Button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
