import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";

export const ItemListContainer = () => {
  const productosRecibidosBackEnd = [
    {
      id: "3444AX34",
      title: "Pantalon",
      category: "Pantalones",
      pictureUrl: "https://source.unsplash.com/random/300x200/?pant",
    },
    {
      id: "3615IC99",
      title: "Remera manga corta",
      category: "Remeras",
      pictureUrl: "https://source.unsplash.com/random/300x200/?shirt",
    },
    {
      id: "4543FC21",
      title: "Remera mangas cocidas",
      category: "Remeras",
      pictureUrl: "https://source.unsplash.com/random/300x200/?tshirt",
    },
    {
      id: "5454DD22",
      title: "Camperon Miley Cyrus sacandose fotos con gendarmeria",
      category: "Hoodies",
      pictureUrl: "https://source.unsplash.com/random/300x200/?hoodie",
    },
  ];

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  const promesa = new Promise((res, rej) => {
    setTimeout(() => {
      res(productosRecibidosBackEnd);
    }, 1000);
  });

  useEffect(() => {
    promesa
      .then((prods) => {
        if (categoryId) {
          setProductos( prods.filter(producto => producto.category == categoryId));
        } else {
          setProductos(prods);
        }
      })
      .catch(() => {
        console.log("Error, solicitud rechazada");
      });
  }, [categoryId]);
  return <ItemList productos={productos}></ItemList>;
};
