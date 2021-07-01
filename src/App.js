import { useState } from "react";
import Header from "./components/Header";
import AddButton from "./components/AddButton";
import SundaeList from "./components/SundaeList";
import Form from "./components/Form";

function App() {
  const title = "Sundae List:";
  const [customizedOrder, setCustomizedOrder] = useState("start");

  const handleClickAddCustomizedOrder = () => {
    setCustomizedOrder("add-order");
  };
  return (
    <>
      <Header />
      <div className="content">
        <h1>{title}</h1>
        <SundaeList />
      </div>
      <div className="App">
        <div>
          {customizedOrder === "start" && (
            <AddButton addCustomizedOrder={handleClickAddCustomizedOrder} />
          )}

          {customizedOrder === "add-order" && <Form />}
        </div>
      </div>
    </>
  );
}

export default App;
