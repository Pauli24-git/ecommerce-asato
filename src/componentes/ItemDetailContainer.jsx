import React, { useState, useEffect } from "react";
import {ItemDetail} from "./ItemDetail";
import { useParams } from "react-router-dom";
import { LoadingScreen } from "./LoadingScreen";



export const ItemDetailContainer = () =>{
    const [producto, setProducto] = useState({});
    const [loading, setLoading] = useState(true);

    const productosRecibidosBackEnd = [
      {
        id: "3444AX34",
        title: "Pantalon",
        category: "Pantalones",
        pictureUrl: "https://source.unsplash.com/random/300x200/?pant",
        precio: "3000",
        stock: 20
      },
      {
        id: "3615IC99",
        title: "Remera manga corta",
        category: "Remeras",
        pictureUrl: "https://source.unsplash.com/random/300x200/?shirt",
        precio: "5600",
        stock: 10
      },
      {
        id: "4543FC21",
        title: "Remera mangas cocidas",
        category: "Remeras",
        pictureUrl: "https://source.unsplash.com/random/300x200/?tshirt",
        precio: "2000",
        stock: 20
      },
      {
        id: "5454DD22",
        title: "Camperon",
        category: "Hoodies",
        pictureUrl: "https://source.unsplash.com/random/300x200/?hoodie",
        precio: "15000",
        stock: 3
      },
    ];

    const { productId } = useParams();

    const promesa = new Promise((res, rej) => {
      setTimeout(() => {
        res(productosRecibidosBackEnd);
      }, 2000);
    });
  
    useEffect(() => {
      promesa
        .then((prod) => {
          setProducto(prod.filter((producto) => producto.id == productId));
        })
        .catch(() => {
          console.log("Error, solicitud rechazada");
        })
        .finally(() => {
          setLoading(false);
        });
    }, []);


    return(
        <>
        {loading ? (
          <LoadingScreen />
        ) : (
          <ItemDetail id={producto[0].id} desc={producto[0].title} image={producto[0].pictureUrl} precio={producto[0].precio} stock={producto[0].stock} />
        )}
      </>
    )
}