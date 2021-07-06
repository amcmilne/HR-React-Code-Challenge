import React from "react";

function Header() {
  return (
    <header
      className="header block row center"
      style={{ backgroundColor: "#D2B48C" }}
    >
      <div>
        <h1 className="main-title" style={{ color: "#696969" }}>
          {" "}
          Sundae...
        </h1>
        <h2 className="sub-title" style={{ color: "#F5F5F5" }}>
          our favorite day of the week
        </h2>
      </div>
    </header>
  );
}

export default Header;
