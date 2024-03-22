import React from "react";
import NavBar from "./NavBar";

const Modelli = () => {
  return (
    <div className="container-fluid">
      <NavBar />
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Card 1</h5>
              <p className="card-text">Contenuto della card 1...</p>
            </div>
          </div>
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Card 2</h5>
              <p className="card-text">Contenuto della card 2...</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <ul className="list-group">
            <li className="list-group-item">Elemento 1</li>
            <li className="list-group-item">Elemento 2</li>
            <li className="list-group-item">Elemento 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Modelli;
