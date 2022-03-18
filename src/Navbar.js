import React from "react";
import "./Navbar.css";
import logo from "./imagenes/logoTienda.png"


const Navbar = () => {
    return (
        <>
        <h1>NOMBRE TIENDA ONLINE</h1>
        <nav>
            <img src={logo}></img>
            <a href="#">Sobre Nosotros</a>
            <a href="#">Productos</a>
            <a href="#">¿Como Comprar?</a>
            <a href="#">Contacto</a>
        </nav>
        </>
    )
}

export default Navbar;