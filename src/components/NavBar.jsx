import React from "react";
import SearchField from "./SearchField";

const NavBar = (props) => {
  console.log("NavBar-Rendered");

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Employee Directory</span>
        <SearchField 
        searchEmployee={props.searchEmployee}
        />
      </nav>
      
    </div>
  );
};

export default NavBar;
