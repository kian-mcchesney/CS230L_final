import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Book</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/add">Add</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/update">Update</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default navbar;