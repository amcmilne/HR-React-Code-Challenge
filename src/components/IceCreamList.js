import React, {useState} from "react";
import content from "../content";

function IceCreamList() {
  const [icecream, setIcecream] = useState("");

  const handleIcecreamChange = (e) => {
    setIcecream(e.target.value);
  };

  return (
    <div className="icecream-list">
      {icecream}
      <label>Select:</label>
      <select onChange={handleIcecreamChange}>
        <option placeholder= "Choices" value="Select Flavor"></option>

        {content.myflavors.icecream.map((flavors) => (
          <option className="icrecreamFlavors" key={flavors.id}>
            {flavors.flavor}
          </option>
        ))}
      </select>
    </div>
  );
}

export default IceCreamList;
