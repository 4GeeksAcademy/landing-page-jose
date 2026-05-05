import React from "react";


export const Version = ({ setGrid }) => {
  return (
    <div className="dropdown">
      <button className="btn btn-primary dropdown-toggle"  data-bs-toggle="dropdown">
        <span className="me-2">📱</span>
        Grid
      </button>
 
      <ul className="dropdown-menu">
        <li><button className="dropdown-item" onClick={() => setGrid(1)}>1</button></li>
        <li><button className="dropdown-item" onClick={() => setGrid(2)}>2</button></li>
        <li><button className="dropdown-item" onClick={() => setGrid(3)}>3</button></li>
        <li><button className="dropdown-item" onClick={() => setGrid(4)}>4</button></li>
      </ul>
    </div>
  );
};