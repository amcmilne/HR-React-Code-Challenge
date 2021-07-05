import React from "react";
import Button from "react-bootstrap/Button";

export default function SundaeChoice(props) {
  const { sundae, onAdd } = props;
  return (
    <div key={sundae.option} className="row">
      <div className="col-2">
        <h3>{sundae.option}</h3>
      </div>
      <div className="col-2">
        <Button
          className="btn-responsive"
          variant="info"
          size="sm"
          onClick={() => onAdd(sundae)}
        >
          <i className="fas fa-cart-plus"></i>
        </Button>
      </div>
    </div>
  );
}
