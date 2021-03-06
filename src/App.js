import data from "./content/index";
import { useState } from "react";
import OpenForm from "./components/OpenForm";
//import CloseForm from "./components/CloseForm";
import Form from "./components/Form";
import Header from "./components/Header";
import SundaeMain from "./components/SundaeMain";
import Cart from "./components/Cart";
//import Footer from "./components/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  const { sundaes } = data;
  const [cartItems, setCartItems] = useState([]);
  const [cartItem, setCartItem] = useState();
  const [customizedOrder, setCustomizedOrder] = useState("start");
  //const [orderComplete, setOrderComplete] = useState("finish");
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

  const handleClickOpenForm = () => {
    setCustomizedOrder("true");
  };

  //---------------------Handle Close Form -----------------------------//

  // const handleClickCloseForm = () => {
  //   setOrderComplete("true");
  //   setCustomizedOrder('false');
  //   setEditItem("false");
  // };

  return (
    <Container fluid="md">
      <Row>
        <Header sundaes={sundaes} countCartItems={cartItems.length} />
      </Row>
      <Row>
        <Col id="classic"  xs={12} md={8}>
          <SundaeMain sundaes={sundaes} onAdd={onAdd} />
        </Col>
        <Col  xs={12} md={4}>
          <Cart
            cartItems={cartItems}
            onAdd={onAdd}
            onRemove={onRemove}
            onEdit={onEdit}
          />
        </Col>
      </Row>
      <div>
        <div>
          {customizedOrder === "start" && (
            <OpenForm addCustomizedOrder={handleClickOpenForm} />
          )}
          {(editItem === "true" && (
            <Form onAdd={onAdd} cartItem={cartItem} />
          )) ||
            (customizedOrder === "true" && <Form onAdd={onAdd} />)}

          {/* {orderComplete === "finish" && (
            <CloseForm haveCustomOrder={handleClickCloseForm} />
          )} */}
        </div>
      </div>
      {/* <Footer /> */}
    </Container>
  );
}

export default App;
