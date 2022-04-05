import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";

export default function ItemListContainer() {
  const productosRecibidosBackEnd = [
    {
      id: "3444AX34",
      title: "Pantalon",
      price: 2400,
      pictureUrl: "https://source.unsplash.com/random/300x200/?jeans",
    },
    {
      id: "3615IC99",
      title: "Remera manga corta",
      price: 1300,
      pictureUrl: "https://source.unsplash.com/random/300x200/?shirt",
    },
    {
      id: "4543FC21",
      title: "Remera manga larga",
      price: 1900,
      pictureUrl: "https://source.unsplash.com/random/300x200/?tshirt",
    },
    {
      id: "5454DD22",
      title: "Camperon invierno - otoño",
      price: 7699,
      pictureUrl: "https://source.unsplash.com/random/300x200/?hoodie",
    },
  ];

  const [productos, setProductos] = useState([]);

  const promesa = new Promise((res, rej) => {
    setTimeout(() => {
      res(productosRecibidosBackEnd);
    }, 3000);
  });

  useEffect(() => {
    promesa
      .then((prods) => {
        setProductos(prods);
      })
      .catch(() => {
        console.log("Error, solicitud rechazada");
      });
  }, []);

  return (
    <ItemList productos={productos}></ItemList>
  );
}
