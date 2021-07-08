import { useState, useEffect } from "react";
import content from "../content";
import Button from "react-bootstrap/Button";
import { v4 as uuidv4 } from "uuid";

function Form(props) {
  let type = "custom";
  const { onAdd, cartItem } = props;
  const [icecream, setIcecream] = useState("");
  const [toppings, setToppings] = useState("");
  const [size, setSize] = useState("");
  const [container, setContainer] = useState("");
  const [option, setSundaeName] = useState("");
  const [id, setID] = useState(uuidv4());

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
    const sundaeObject = {
      id,
      type,
      option,
      icecream,
      toppings,
      size,
      container,
    };
    onAdd(sundaeObject);
    setID("");
    setSundaeName("");
    setIcecream("");
    setToppings("");
    setSize("");
    setContainer("");
  };
  // -------------------------- Reload Form for Edits ---------------------//
  useEffect(() => {
    if (typeof cartItem != "undefined") {
      setIcecream(cartItem.icecream);
      setToppings(cartItem.toppings);
      setSize(cartItem.size);
      setContainer(cartItem.container);
      setSundaeName(cartItem.option);
      setID(cartItem.id);
    }
  }, [cartItem]);

  return (
    <article id="form" className="form needs-validation" nonvalidate="true">
      <form onSubmit={(e) => handleSubmit(e.target.reset)}>
        <h1>Create Your Own!</h1>
        <div className="customSundaeName">
          <label className="form-label" forhtml="validationName">
            Name Your Sundae:
          </label>
          <div className="input-group">
            <input
              className="form-control"
              id="validationName"
              required
              type="text"
              placeholder="Choose Your Name"
              aria-label="default input example"
              value={option}
              onChange={handleNameChange}
            />
          </div>
        </div>
        <div className="icecreamOptions" id="flavors">
          <h2>Flavors:</h2>
          <div className="icecream-list">
            <label>Select:</label>
            <select
              className="form-select"
              onChange={handleIcecreamChange}
              value={icecream}
            >
              <option value="">Select a flavor</option>
              {content.icecream.map((flavors) => (
                <option
                  className="icrecreamFlavors"
                  key={flavors.id}
                  value={flavors.flavor}
                >
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
            <select
              className="form-select"
              onChange={handleToppingsChange}
              value={toppings}
            >
              <option value="">Select a topping</option>
              {content.toppings.map((types) => (
                <option
                  className="toppingsOption"
                  key={types.id}
                  value={types.type}
                >
                  {types.type}
                </option>
              ))}
            </select>
          </div>
        </div>
        <hr></hr>
        <div className="sizeOptions" id="size">
          <h2>Size:</h2>
          <div className="size-list">
            <label>Select:</label>
            <select
              className="form-select"
              onChange={handleSizeChange}
              value={size}
            >
              <option value="">Select a size</option>
              {content.size.map((options) => (
                <option
                  className="sizeOptions"
                  key={options.id}
                  value={options.option}
                >
                  {options.option}
                </option>
              ))}
            </select>
          </div>
        </div>
        <hr></hr>

        <h2>
          Container:
          <abbr title="This field is mandatory" aria-label="required"></abbr>
        </h2>
        <div id="container" value={container} onChange={handleContainerChange}>
          {content.container.map((options) => (
            <>
              <input
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                key={options.id}
                value={options.option}
              ></input>{" "}
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                {options.option}
              </label>{" "}
            </>
          ))}
        </div>

        <hr></hr>
        <div className="row">
          <div className="col-2">
            <ul className="fa-ul">
              <li key={option.id}>
                <span className="fa-li">
                  <i className="fas fa-ice-cream"></i>
                </span>
                {option}
              </li>
              <li key={icecream.id}>
                <span className="fa-li">
                  <i className="fas fa-ice-cream"></i>
                </span>
                {icecream}
              </li>
              <li key={toppings.id}>
                <span className="fa-li">
                  <i className="fas fa-ice-cream"></i>
                </span>
                {toppings}
              </li>
              <li key={size.id}>
                <span className="fa-li">
                  <i className="fas fa-ice-cream"></i>
                </span>
                {size}
              </li>
              <li key={container.id}>
                <span className="fa-li">
                  <i className="fas fa-ice-cream"></i>
                </span>
                {container}
              </li>
            </ul>
          </div>
          <div className="col-2 text-right">
            <span
              className="d-inline-block"
              tabIndex="0"
              data-toggle="tooltip"
              title="Please Make All Selections Before Submitting"
            >
              <Button
                type="submit"
                onClick={() => handleSubmit()}
                disabled={
                  option.length === 0
                    ? true
                    : false || icecream.length === 0
                    ? true
                    : false || toppings.length === 0
                    ? true
                    : false || size.length === 0
                    ? true
                    : false || container.length === 0
                    ? true
                    : false
                }
              >
                <i className="fas fa-plus"> Submit Order</i>
              </Button>
            </span>
          </div>
        </div>
      </form>
    </article>
  );
}

export default Form;
