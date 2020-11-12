import React from "react";

const EmployeeCard = (props) => {
  console.log("EmployeeCard-Rendered");

  return (
    <div className="card mb-3" style={{ maxWidth: 540 + "px" }}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={props.image} className="card-img" alt={props.name} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">
              <ul>
                <li>
                  <strong>Name:</strong>
                  {props.name}
                </li>
                <li>
                  <strong>Occupation:</strong>
                  {props.occupation}
                </li>
                <li>
                  <strong>Location:</strong>
                  {props.location}
                </li>
              </ul>
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
