//import { useState, useEffect } from "react";
// import SundaeChoice from "./SundaeChoice";
import React from "react"; 
import SundaeChoice from "./SundaeChoice";

//-------------------------------- FIND SUNDAE BY SEARCH ----------------------------------------

export default function SundaeList(props) {
  const { sundaes, onAdd } = props;

  return (
    <main className="block col-2" id="classic">
      <h1>Classic Sundaes</h1>
      <div className="row">
        {sundaes.map((sundae) => (
          <SundaeChoice key={sundae.id} sundae={sundae} onAdd={onAdd} />
        ))}
      </div>
    </main>
  );
}

//   //-------------------------------- FUTURE IMPLEMENTATION----------------------------------------

// function SundaeList(props) {
//   const { sundaes, handleOnAdd } = props;
//   const title = "Sundae List:";
//   const [search, setSearch] = useState("");
//   const [filteredSundaes, setFilteredSundaes] = useState([]);


//   useEffect(() => {
//     setFilteredSundaes(
//       sundaes.filter((sundae) =>
//         sundae.option.toLowerCase().includes(search.toLowerCase())
//       )
//     );
//   }, [search, sundaes]);
//   // console.log(sundaes[0].option);

//   return (
//     <main className="block col-3">
//       <h1 className="sundaeList">{title}</h1>
//       <div className="row">
//         <form>
//           <div className="search-bar">
//             <label>Search:</label>
//             <input
//               type="text"
//               value={search}
//               placeholder="search"
//               onChange={(e) => setSearch(e.target.value)}
//             />
//           </div>
//           <div className="row">
//             <ul className="col-1">
//               {filteredSundaes.map((sundae) => (
//                 <SundaeChoice
//                   key={sundae.id}
//                   option={sundae}
//                   handleOnAdd={handleOnAdd}
//                 />
//               ))}
//             </ul>
//           </div>
//         </form>
//       </div>
//     </main>
//   );
// }

// export default SundaeList;
