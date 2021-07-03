import { useState, useEffect } from "react";
import SundaeChoice from "./SundaeChoice";

function SundaeList(props) {
  const { sundaes, handleOnAdd } = props;
  const [search, setSearch] = useState("");
  const [filteredSundaes, setFilteredSundaes] = useState([]);

  //-------------------------------- FIND SUNDAE BY SEARCH ----------------------------------------
  useEffect(() => {
    setFilteredSundaes(
      sundaes.filter((sundae) =>
        sundae.option.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, sundaes]);
  console.log(sundaes[0].option);

  // -----------------------------------SET TO LOCAL STORAGE --------------------------------------

  useEffect(() => {
    localStorage.setItem("sundae", JSON.stringify(sundaes));
  }, [sundaes]);

  return (
    <>
      <div className="toppings-list">
        <form>
          <div className="search-bar">
            <label>Search:</label>
            <input
              type="text"
              value={search}
              placeholder="search"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div>
          <ul>
            {filteredSundaes.map((sundae, id) => (
              <SundaeChoice key={id} {...sundae} onAdd={handleOnAdd} />
            ))}
          </ul>
          </div>
        </form>
      </div>
    </>
  );
}

export default SundaeList;
