import React from "react";

const SearchField = (props) => {
  console.log("SearchField-Rendered");


  return (
    <form className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Employee Name"
        aria-label="Employee Name"
        aria-describedby="button-addon2"
        onChange={(event) => props.searchEmployee(event)}

      />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            Search
          </button>
        </div>
    </form>

/* <div>
<form className="form-inline">
  <div className="form-group mx-sm-3 mb-2">
    <label for="inputPassword2" className="sr-only">Employee</label>
    <input type="password" className="form-control" id="inputPassword2" placeholder="Employee"/>
  </div>
  <button type="submit" className="btn btn-primary mb-2" onClick={() => props.searchEmployee()}>Search Employee</button>
</form>
</div> */



  );
};

export default SearchField;
