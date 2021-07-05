import { useState, useEffect } from "react";
//import IceCreamList from "./IceCreamList";
//import ToppingsList from "./ToppingsList";
import content from "../content";
import Button from "react-bootstrap/Button";
import { v4 as uuidv4 } from "uuid";

function Form(props) {
  // let key = {index};
  let id = uuidv4();
  let type = "custom";
  const { onAdd, cartItem } = props;
  const [icecream, setIcecream] = useState("");
  const [toppings, setToppings] = useState("");
  const [size, setSize] = useState("");
  const [container, setContainer] = useState("");
  const [option, setSundaeName] = useState("");

  const [editingItem, setEditingItem] = useState("true");

  useEffect(() => {
    if (typeof cartItem != "undefined") {
      console.log(editingItem);
      console.log(cartItem);
      setSundaeName(
        cartItem.option,
        cartItem.icecream,
        cartItem.toppings,
        cartItem.size,
        cartItem.container
      );
      setEditingItem("false");
    }
  }, [cartItem, editingItem]);

  if (
    typeof cartItem != "undefined" &&
    cartItem !== "classic" &&
    editingItem === "true"
  ) {
    console.log(editingItem);
    console.log(cartItem);
    setSundaeName(
      cartItem.option,
      cartItem.icecream,
      cartItem.toppings,
      cartItem.size,
      cartItem.container
    );
    setEditingItem("false");
  }
  //----------------Handle Name Selection -----------------------//
  const handleNameChange = (e) => {
    e.preventDefault();
    setSundaeName(e.target.value);
  };
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
  // --------------Handle Size Selection -------------------------//
  const handleSizeChange = (e) => {
    e.preventDefault();
    setSize(e.target.value);
  };
  // --------------Handle Container Selection -----------------------//
  const handleContainerChange = (e) => {
    e.preventDefault();
    setContainer(e.target.value);
  };
  // -------------Handle Submit Selections ------------------------//
  const handleSubmit = (e) => {
    let sundaeObject = {
      id,
      type,
      option,
      icecream,
      toppings,
      size,
      container,
    };
    onAdd(sundaeObject);
  };

  return (
    <div className="form">
      <form onSubmit={(e) => handleSubmit(e.target.reset)}>
        <h1>Create Your Own!</h1>

        <div className="customSundaeName">
          <label>Name Your Sundae:</label>
          <input
            className="form-control"
            type="text"
            placeholder="Choose Your Name"
            aria-label="default input example"
            value={option}
            onChange={handleNameChange}
          />
        </div>

        <div className="icecreamOptions" id="flavors">
          <h2>Flavors:</h2>

          <div className="icecream-list">
            <label>Select:</label>
            <select className="form-select" onChange={handleIcecreamChange}>
              <option placeholder="Choices" value={icecream}></option>
              {content.icecream.map((flavors) => (
                <option className="icrecreamFlavors" key={flavors.id}>
                  {flavors.flavor}
                </option>
              ))}
            </select>
          </div>
        </div>
        <hr></hr>
        <div className="toppingsOptions" id="toppings">
          <h2>Toppings:</h2>
          <div className="toppings-list">
            <label>Select:</label>
            <select className="form-select" onChange={handleToppingsChange}>
              <option value={toppings}></option>
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
        <select
          className="form-select"
          value={size}
          onChange={handleSizeChange}
        >
          <option value="One Scoop">One Scoop</option>
          <option value="Two Scoops">Two Scoops</option>
          <option value="Three Scoops">Three Scoops</option>
          <option value="shareable">Shareable</option>
        </select>
        <hr></hr>
        <h2>Container:</h2>

        <div
          className="container"
          value={container}
          onChange={handleContainerChange}
        >
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              value="Cup"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              //   checked={false}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Cup
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              value="Waffle Bowl"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              //   checked={false}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Waffle Bowl
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              value=" Dipped Waffle Bowl"
              name="flexRadioDefault"
              id="flexRadioDefault3"
              //   checked={false}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault3">
              Dipped Waffle Bowl
            </label>
          </div>
        </div>
        <hr></hr>
        <div className="row">
          <div className="col-2">
            <ul className="fa-ul">
              <li>
                <span className="fa-li">
                  <i className="fas fa-ice-cream"></i>
                </span>
                {option}
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-ice-cream"></i>
                </span>
                {icecream}
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-ice-cream"></i>
                </span>
                {toppings}
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-ice-cream"></i>
                </span>
                {size}
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-ice-cream"></i>
                </span>
                {container}
              </li>
            </ul>
          </div>
          <div className="col-2 text-right">
            <Button
              className="btn-responsive"
              onClick={() => handleSubmit()}
              variant="warning"
              size="sm"
              type="reset"
            >
              <i className="fas fa-plus"> Submit Order</i>
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
