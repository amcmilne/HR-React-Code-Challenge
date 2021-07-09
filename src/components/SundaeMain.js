import React from "react";
import SundaeContent from "./SundaeContent";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function SundaeList(props) {
  const { sundaes, onAdd } = props;

  return (
    <Container fluid>
      <div className="sundae-list">
        <h1 className="sundae-list">Classic Sundaes</h1>
      </div>

      <Row>
        <Col>
          <main className="" id="classic">
            <strong>
              <p
                style={{ fontSize: "20px", textAlign: "center" }}
                className="sundae-classic"
              >
                Choose from the list of Classic Sundaes:
              </p>
            </strong>

            <div className="">
              {sundaes.map((sundae) => (
                <SundaeContent key={sundae.id} sundae={sundae} onAdd={onAdd} />
              ))}
            </div>
          </main>
        </Col>
      </Row>
    </Container>
  );
}

//-------------------------------- FUTURE IMPLEMENTATION----------------------------------------
//-------------------------------- FIND SUNDAE BY SEARCH ----------------------------------------

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
