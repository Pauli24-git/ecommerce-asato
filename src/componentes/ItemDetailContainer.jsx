import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";



export default function ItemDetailContainer(){
    const [producto, setProducto] = useState({});

    const infoProducto = {desc:"Pantalon de Jean tiro alto, color celeste lavado con blanco", precio:"$2400.00"}

    const promesa = new Promise((res, rej) => {
      setTimeout(() => {
        res(infoProducto);
      }, 2000);
    });
  
    useEffect(() => {
      promesa
        .then((prod) => {
          setProducto(prod);
        })
        .catch(() => {
          console.log("Error, solicitud rechazada");
        });
    }, []);

    return(
        <ItemDetail prod={producto}/>
    )
}