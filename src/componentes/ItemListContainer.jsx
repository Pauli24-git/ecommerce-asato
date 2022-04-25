import React, { useState, useEffect } from "react";
import { getDocs, collection, query, where } from "firebase/firestore"
import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";
import { db } from "../componentes/Firebase/firebase"

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
    const productsCollection = collection(db, "productos")
    const q = query(productsCollection, 
      where("category", "==", "pantalones"), 
      where("precio", ">", "100"));
    getDocs(q)
      .then((result) => {
        const docs = result.docs;
        const lista = docs.map(producto => {
          const id = producto.id
          const product = {
            id,
            ...producto.data()
          }
          return product;
        })
        console.log(lista)
        setProductos(lista)
      })
      .catch(error => {console.log(error)})
      .finally(()=>{
        setLoading(false);
      })



    /*
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
          */
  }, [categoryId]);
  return <ItemList productos={productos}></ItemList>;
};
