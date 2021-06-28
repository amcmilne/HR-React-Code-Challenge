import React, { useState } from "react";
import content from "../content";

function ToppingsList() {
  const [toppings, setToppings] = useState("");

  const handleToppingsChange = (e) => {
    setToppings(e.target.value);
  };
  return (
    <div className="toppings-list">
      {toppings}
      <label>Select:</label>
      <select onChange={handleToppingsChange}>
        <option value="Select Toppings"></option>

        {content.mytoppings.toppings.map((types) => (
          <option className="icrecreamFlavors" key={types.id}>
            {types.type}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ToppingsList;
