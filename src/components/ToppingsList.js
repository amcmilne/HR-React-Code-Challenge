import React, { useState } from "react";
import content from "../content";

function ToppingsList() {
  const [toppings, setToppings] = useState("");

  const handleToppingsChange = (e) => {
    setToppings(e.target.value);
  };
  return (
    <div className="toppings-list">
      <label>Select:</label>
      <select onChange={handleToppingsChange}>
        <option value="Select Toppings"></option>

        {content.toppings.map((types) => (
          <option className="icrecreamFlavors" key={types.id}>
            {types.type}
          </option>
        ))}
      </select>
      <div style={{borderRadius: "3px", backgroundColor:"#D8BFD8",  }}> {toppings} </div>
    </div>
  );
}

export default ToppingsList;
