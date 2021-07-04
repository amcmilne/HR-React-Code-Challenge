import { useState } from "react";
//import IceCreamList from "./IceCreamList";
//import ToppingsList from "./ToppingsList";
import content from "../content";

function Form() {
  const [icecream, setIcecream] = useState([]);
  const [toppings, setToppings] = useState([]);
  const [size, setSize] = useState("");
  const [customSundae, setCustomSundae] = useState([]);
  const [container, setContainer] = useState("");
  const sundaeObject = { icecream, toppings, size, container };
  const sundaeArray = [content];
  const newSundaeArray = [...sundaeArray, sundaeObject];
  console.log(newSundaeArray);

  //----------------Handle Icecream Selection -----------------------//
  const handleIcecreamChange = (e) => {
    e.preventDefault();
    setIcecream(e.target.value);
  };
  // --------------Handle Toppings Selection -----------------------//
  const handleToppingsChange = (e) => {
    e.preventDefault();
    setToppings(e.target.value);
  };
  // -------------Handle Submit Selections ------------------------//
  const handleSubmit = (e) => {
    e.preventDefault();
    setCustomSundae(customSundae);
  };
  console.log(customSundae);
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h1>Create Your Own! </h1>

        <div className="icecreamOptions" id="myflavors">
          <h2>Flavors:</h2>

          <div className="icecream-list">
            <label>Select:</label>
            <select onChange={handleIcecreamChange}>
              <option placeholder="Choices" value="Select Flavor"></option>
              {content.icecream.map((flavors) => (
                <option className="icrecreamFlavors" key={flavors.id}>
                  {flavors.flavor}
                </option>
              ))}
            </select>
          </div>
        </div>
        <hr></hr>
        <div className="toppingsOptions" id="mytoppings">
          <h2>Toppings:</h2>
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
          </div>
        </div>
        <hr></hr>
        <h2>Size:</h2>
        <select value={size} onChange={(e) => setSize(e.target.value)}>
          <option value="One Scoop">One Scoop</option>
          <option value="Two Scoops">Two Scoops</option>
          <option value="Three Scoops">Three Scoops</option>
          <option value="shareable">Shareable</option>
        </select>
        <hr></hr>
        <h2>Container:</h2>

        <div
          className="radio"
          value={container}
          onChange={(e) => setContainer(e.target.value)}
        >
          <label>
            <input
              type="radio"
              value="Cup"
              name="container"
              required={true}
              //   checked={false}
            />
            Cup
          </label>

          <label>
            <input
              type="radio"
              value="   Waffle Bowl"
              name="container"
              required={true}
              //   checked={false}
            />
            Waffle Bowl
          </label>

          <label>
            <input
              type="radio"
              value=" Dipped Waffle Bowl"
              name="container"
              required={true}
              //   checked={false}
            />
            Dipped Waffle Bowl
          </label>
        </div>
        <hr></hr>
        <ul>
          {/* {sundaeArray.map((newSundae, index) => (
      <li className="icrecreamFlavors" key={index}>
          {newSundae.icecream}
          {newSundae.toppings}
          {newSundae.size}
          {newSundae.container}
      </li>
    ))} */}
          <li>{icecream}</li>
          <li>{toppings}</li>
          <li>{size}</li>
          <li>{container}</li>
        </ul>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
