import React from "react";
import { Link } from "react-router-dom";
function Menu() {
  return (
    <div>
   <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
       <div className="container-fluid">
          <a className="navbar-brand" href="/">Bienvenidos a Employee-Database</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
             <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                    <Link className="nav-link text-center" to="/">Inicio</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-center" to="/crear">Nuevo</Link>
                </li>
             </ul>
          </div>
       </div>
    </nav>
 </div>
  );
}

export default Menu;
