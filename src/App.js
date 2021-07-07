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
  const [cartItem, setCartItem] = useState();
  const [customizedOrder, setCustomizedOrder] = useState("start");
  const [editItem, setEditItem] = useState("false");

  //--------------------- Handle Adding to Cart --------------------------//

  const onAdd = (sundae) => {
    const exist = cartItems.find((x) => x.id === sundae.id);
    if (exist) {
      if (sundae.type === "custom") {
        setCartItems(
          cartItems.map((x) =>
            x.id === sundae.id
              ? {
                  ...exist,
                  option: sundae.option,
                  icecream: sundae.icecream,
                  toppings: sundae.toppings,
                  size: sundae.size,
                  container: sundae.container,
                }
              : x
          )
        );
      } else {
        setCartItems(
          cartItems.map((x) =>
            x.id === sundae.id ? { ...exist, qty: exist.qty + 1 } : x
          )
        );
      }
    } else {
      setCartItems([...cartItems, { ...sundae, qty: 1 }]);
    }
  };

  //--------------------- Handle Removing from Cart --------------------------//
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

  //--------------------- Handle Editing Cart  --------------------------//

  const onEdit = (sundae) => {
    setCustomizedOrder("false");
    setCartItem(sundae);
    setEditItem("true");
  };

  // --------------------Handle Opening Form --------------------------//

  const handleClickAddCustomizedOrder = () => {
    setCustomizedOrder("true");
  };

  return (
    <div className="container-fluid">
      <Header sundaes={sundaes} countCartItems={cartItems.length} />

      <div className="row">
        <SundaeMain sundaes={sundaes} onAdd={onAdd} />
        <Cart
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          onEdit={onEdit}
        />
      </div>
      <div>
        <div>
          {customizedOrder === "start" && (
            <AddButton addCustomizedOrder={handleClickAddCustomizedOrder} />
          )}

          {(editItem === "true" && (
            <Form onAdd={onAdd} cartItem={cartItem} />
          )) ||
            (customizedOrder === "true" && <Form onAdd={onAdd} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
