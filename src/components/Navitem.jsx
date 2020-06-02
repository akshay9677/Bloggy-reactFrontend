import React from "react";
import {NavLink} from "react-router-dom"

function Navitem(props){
   
    return(
        <div>
        <NavLink to={props.navname}>
        <li className="nav-item active">
        <div className="nav-link">{props.navname}</div>
      </li>
        </NavLink>
            
        </div>
    )
}

export default Navitem;