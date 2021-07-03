import { useState } from "react";
//import IceCreamList from "./IceCreamList";
//import ToppingsList from "./ToppingsList";
import content from "../content";

function Form() {
  const [icecream, setIcecream] = useState("");
  const [toppings, setToppings] = useState("");
  const [size, setSize] = useState("");
  // const [container, setContainer] = useState("")

  const handleIcecreamChange = (e) => {
    e.preventDefault();
    setIcecream(e.target.value);
  };

  const handleToppingsChange = (e) => {
    e.preventDefault();
    setToppings(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const sundaeChoice = { icecream, toppings, size };
    // return sundaeChoice;

    console.log(sundaeChoice);
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h1>Please Choose Your Custom Options Below: </h1>

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
            {/* <li>{icecream}</li> */}
          </div>

          {/* <IceCreamList /> */}
        </div>
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
            {/* <div style={{ borderRadius: "3px", backgroundColor: "#D8BFD8" }}>
            {toppings}
          </div> */}
          </div>
          {/* <ToppingsList /> */}
        </div>

        <h2>Size:</h2>
        <select value={size} onChange={(e) => setSize(e.target.value)}>
          <option value="One Scoop">One Scoop</option>
          <option value="Two Scoops">Two Scoops</option>
          <option value="Three Scoops">Three Scoops</option>
          <option value="shareable">Shareable</option>
        </select>

        <label>Favorites</label>
        <input name="flavors" type="checkbox" value="Favorites"></input>

        <h2>Container:</h2>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="option1"
              required={true}
              //   checked={false}
            />
            Cup
          </label>
          <label>
            <input
              type="radio"
              value="option2"
              required={true}
              //   checked={false}
            />
            Waffle Bowl
          </label>
          <label>
            <input
              type="radio"
              value="option3"
              required={true}
              //   checked={false}
            />
            Dipped Waffle Bowl
          </label>
        </div>

        <p>{icecream}</p>
        <p> {toppings}</p>
        <p>{size}</p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
