import React from "react";
import Button from "react-bootstrap/Button";

export default function Product(props) {
  const { sundae, onAdd } = props;
  return (
    <div>
      <h3>{sundae.option}</h3>

      <Button className="btn-responsive" variant="info" size="sm" onClick={() => onAdd(sundae)}>
        <i class="fas fa-cart-plus"></i>
      </Button>
    </div>
  );
}
