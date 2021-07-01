import { useState, useEffect } from "react";
import content from "../content";
//import Cart from "../components/Cart";

function SundaeList() {
  const [sundaes, setSundaes] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredSundaes, setFilteredSundaes] = useState([]);

  useEffect(() => {
    setSundaes(content.sundaes);
  }, [sundaes]);

  useEffect(() => {
    setFilteredSundaes(
      sundaes.filter((sundae) =>
        sundae.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, sundaes]);

  useEffect(() => {
    localStorage.setItem("sundae", JSON.stringify(sundaes));
  }, [sundaes]);
  //console.log(sundaes);

  return (
    <>
      <div className="toppings-list">
        <form>
          <label>Search:</label>
          <input
            type="text"
            value={search}
            placeholder="search"
            onChange={(e) => setSearch(e.target.value)}
          />

          <ul>
            {filteredSundaes.map((sundae, id) => (
              <SundaeChoice key={id} {...sundae} />
            ))}
          </ul>
        </form>
      </div>
    </>
  );
}
const SundaeChoice = (props) => {
  const { name } = props;
  //console.log(props.name);

  return (
    <>
      <div>
        <span>{name}</span>
      </div>
    </>
  );
};

export default SundaeList;
