import React from "react";
import "./Navbar.css";
import {Cart} from "./componentes/CartWidget"


const Navbar = (props) => {
    console.log(props.links);
    return (
        <>
        <h1>NOMBRE TIENDA ONLINE</h1>
         <nav>
             {props.links.map((element, indice) => {
                 return (
                     <a key={indice} href={element.tag}>
                         {element.link}
                     </a>
                 );
             })}
                  <Cart />
         </nav>
        
        </>
    )
}

export default Navbar;