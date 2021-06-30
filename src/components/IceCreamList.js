import React, { useState, useEffect } from "react";
import content from "../content";

function IceCreamList() {
  const [icecream, setIcecream] = useState("");
  

  const handleIcecreamChange = (e) => {
    setIcecream(e.target.value);
  };

  useEffect(() => {
    setIcecream();
  }, []);


  
  return (
    <div className="icecream-list">
    

      <label>Select:</label>
      <select onChange={handleIcecreamChange}>
        <option placeholder="Choices" value="Select Flavor"></option>

        {content.myflavors.icecream.map((flavors) => (
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
