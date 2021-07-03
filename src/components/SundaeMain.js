import React from "react";
import SundaeChoice from "./SundaeChoice";

export default function Main(props) {
  const { sundaes, onAdd } = props;
  return (
    <main className="block col-2">
      <h2>Sundaes</h2>
      <div className="row">
        {sundaes.map((sundae) => (
          <SundaeChoice key={sundae.id} sundae={sundae} onAdd={onAdd} />
        ))}
      </div>
    </main>
  );
}
