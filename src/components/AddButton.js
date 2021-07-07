import React from "react";
import Button from "react-bootstrap/Button";

function AddButton({ addCustomizedOrder }) {
  return (
    <div className="add-button">
      <h1 className="custom-order">Not feeling Classic today? No problem!</h1>
      <div>
        <label></label>
        <Button onClick={addCustomizedOrder}>
          + Start Your Customized Sundae
        </Button>
      </div>
    </div>
  );
}

export default AddButton;
