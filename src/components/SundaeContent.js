import React from "react";
import Button from "react-bootstrap/Button";

export default function SundaeChoice(props) {
  const { sundae, onAdd } = props;
  return (
    <div key={sundae.option} className="card">
      <div className="sundae-content">
        <h3 className="sundae-name">{sundae.option}</h3>

        <Button className="card" onClick={() => onAdd(sundae)}>
          <i className="fas fa-cart-plus"></i>
        </Button>
      </div>
    </div>
  );
}
