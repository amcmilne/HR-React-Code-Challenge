import { useState, useEffect } from "react";
import content from "../content";

function SundaeList() {
  const [sundaes, setSundaes] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredSundaes, setFilteredSundaes] = useState([]);

  useEffect(() => {
    setSundaes(content.mysundaes.sundaes);
  }, [sundaes]);

  useEffect(() => {      
    setFilteredSundaes(
          sundaes.filter((sundae) =>
            sundae.sundae.toLowerCase().includes(search.toLowerCase())
          )
        );
  }, [search, sundaes]);

  return (
    <>
      <div className="toppings-list">       
        <form>
          <label>Search:</label>
          <input
            type="text"
            placeholder="search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <ul>
            {filteredSundaes.map((sundae, id) => (
              <SundaeDetail key={id} {...sundae} />
            ))}
          </ul>
        </form>
      </div>
    </>
  );
}
const SundaeDetail = (props) => {
  const { sundae, id } = props;

  return (
    <>
      <li>{sundae}</li>
    </>
  );
};

export default SundaeList;
