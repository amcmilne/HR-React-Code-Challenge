import React from "react";

function AddButton( {addCustomizedOrder}) {
  return (
    <div className="add-button">
      <button onClick={addCustomizedOrder}>
       + Start Your Customized Sundae
      </button>
    </div>
  );
}

export default AddButton;
