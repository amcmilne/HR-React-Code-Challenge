import React from "react";
import IceCreamList from "./IceCreamList";
import ToppingsList from "./ToppingsList";

function Form() {
  return (
    <div className="form">
      <h1>Please Choose Your Custom Options Below: </h1>
      <div className="icecreamOptions" id="myflavors">
        <h2>Flavors:</h2>

        <IceCreamList />
      </div>
      <div className="toppingsOptions" id="mytoppings">
        <h2>Toppings:</h2>

        <ToppingsList />
      </div>

      <form>
        <h2>Size:</h2>
        <select>
          <option value="small">One Scoop</option>
          <option value="medium">Two Scoops</option>
          <option value="large">3 Scoops</option>
          <option value="shareable">Shareable</option>
        </select>
      </form>
      <form>
        <label>Favorites</label>
        <input name="flavors" type="checkbox" value="Favorites"></input>
      </form>
      <form>
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
      </form>
      <button type="submit">Submit</button>
    </div>
  );
}

export default Form;
