import data from "./content/index";
import { useState } from "react";
import AddButton from "./components/AddButton";
import Form from "./components/Form";
import Header from "./components/Header";
import SundaeMain from "./components/SundaeMain";
import Cart from "./components/Cart";

function App() {
  const { sundaes } = data;
  const [cartItems, setCartItems] = useState([]);
  const [customizedOrder, setCustomizedOrder] = useState("start");
  

  //---------------------ADD TO CART --------------------------------------//
  const onAdd = (sundae) => {
    const exist = cartItems.find((x) => x.id === sundae.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === sundae.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...sundae, qty: 1 }]);
    }
  };

  // ------------------REMOVE FROM CART ----------------------------------//
  const onRemove = (sundae) => {
    const exist = cartItems.find((x) => x.id === sundae.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== sundae.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === sundae.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  // --------------------START A CUSTOMIZED ORDER --------------------------//

  const handleClickAddCustomizedOrder = () => {
    setCustomizedOrder("add-order");
  };

  return (
    <div className="App">
      <Header countCartItems={cartItems.length} />
      <div className="row">
        <SundaeMain sundaes={sundaes} onAdd={onAdd} />
        <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
      </div>
      <div>
        <div>
          {customizedOrder === "start" && (
            <AddButton addCustomizedOrder={handleClickAddCustomizedOrder} />
          )}

          {customizedOrder === "add-order" && <Form />}
        </div>
      </div>
    </div>
  );
}

export default App;
