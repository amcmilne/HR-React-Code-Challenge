import React from "react";
import Button from "react-bootstrap/Button";

function AddButton( {addCustomizedOrder}) {
  return (
    <div className="add-button">
      <Button
        className="btn-responsive" 
        onClick={addCustomizedOrder}
        variant="warning"
        >
       + Start Your Customized Sundae
      </Button>
    </div>
  );
}

export default AddButton;
