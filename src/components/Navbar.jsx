import React from "react";
import Navitem from "./Navitem"


function Navbar(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
            <div className="container">
            <a className="navbar-brand" href="/Home"><i className="fab fa-react fa-lg"></i> Bloggy</a>
    <ul className="navbar-nav ml-auto">
      <Navitem navname="Home"/>
      <Navitem navname="Compose"/>
    </ul>
  </div>
</nav>

        </div>
    )
}


export default Navbar;