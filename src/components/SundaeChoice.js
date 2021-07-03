import React from "react";

// ----------------------- RENDERED LIST OF SUNDAES WITH ADD TO CART OPTION -------------------------------
function SundaeChoice(props) {
  const { option, handleOnAdd } = props;
  //console.log(option);
  return (
    <>
      <div className="sundae-list">
        <h3>{option}</h3>
        <button onClick={handleOnAdd} option={option}>Add to Cart</button>
      </div>
    </>
  );
}

export default SundaeChoice;
