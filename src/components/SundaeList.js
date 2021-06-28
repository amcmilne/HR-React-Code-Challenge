import React from "react";
import content from "../content";

function SundaeList() {
  return (
    <div className="toppings-list">
      {content.mysundaes.sundaes.map((sundaes) => (
        <li className="icrecreamFlavors" key={sundaes.id}>
          {sundaes.sundae}
        </li>
      ))}
    </div>
  );
}

export default SundaeList;
