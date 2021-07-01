import React, { useState } from "react";
import content from "../content";

function IceCreamList() {
  const [icecream, setIcecream] = useState("");

  const handleIcecreamChange = (e) => {
    setIcecream(e.target.value);
  };

  return (
    <div className="icecream-list">
      <label>Select:</label>
      <select 
      onChange={handleIcecreamChange}>
        <option placeholder="Choices" value="Select Flavor"></option>
        {content.icecream.map((flavors) => (
          <option className="icrecreamFlavors" key={flavors.id}>
            {flavors.flavor}
          </option>
        ))}
      </select>
      <li>{icecream}</li>
    </div>
  );
}

export default IceCreamList;
