import { useState } from "react";
import Header from "./components/Header";
import AddButton from "./components/AddButton";
import SundaeMain from "./components/SundaeMain";
import Form from "./components/Form";
import Cart from "./components/Cart";
import data from "./content/index";

function App() {
  const { sundaes } = data;
  const title = "Sundae List:";
  const [cartItem, setCartItem] = useState([]);
  const [customizedOrder, setCustomizedOrder] = useState("start");

  // --------------------ADD SUNDAE TO CART -----------------------------

  const handleOnAdd = (sundae) => {
    const exist = cartItem.find((x) => x.id === sundae.id);
    if (exist) {
      setCartItem(
        cartItem.map((x) =>
          x.id === sundae.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItem([...cartItem, { ...sundae, qty: 1 }]);
    }
  };
  const handleOnRemove = (sundae) => {
    const exist = cartItem.find((x) => x.id === sundae.id);
    if (exist.qty === 1) {
      setCartItem(cartItem.filter((x) => x.id !== sundae.id));
    } else {
      setCartItem(
        cartItem.map((x) =>
          x.id === sundae.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  //console.log(sundaes[0].option);

  // --------------------START A CUSTOMIZED ORDER --------------------------

  const handleClickAddCustomizedOrder = () => {
    setCustomizedOrder("add-order");
  };
  return (
    <>
      <Header className="header" />
      <div className="block col-1">
        <h1 className="sundaeList">{title}</h1>
        <SundaeMain sundaes={sundaes} onAdd={handleOnAdd} />
      </div>
      <div className="block col-2">
        <div>
          {customizedOrder === "start" && (
            <AddButton addCustomizedOrder={handleClickAddCustomizedOrder} />
          )}

          {customizedOrder === "add-order" && <Form />}
          <Cart cartItem={cartItem} onAdd={handleOnAdd} onRemove={handleOnRemove} />
        </div>
      </div>
    </>
  );
}

export default App;
