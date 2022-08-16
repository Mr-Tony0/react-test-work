import React from "react";
import {NavLink} from "react-router-dom"

function ListTemplate(props) { 
    return(
    <li>
        <NavLink to={'/edit/'+ props.id}>{props.name}</NavLink>
    </li>
    );
}
export default ListTemplate;