import React, { useState } from "react";
import Item from "./Item"

export default function ItemList({ productos }) {

    return (
        <>
            {productos.map((producto,indice) => {
                return <Item id={producto.id} title={producto.title} price={producto.price} image={producto.pictureUrl}/>
            })}
        </>
  );
}