import React, { useState, useEffect } from "react";
import { getDocs, collection, query, where } from "firebase/firestore"
import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";
import { db } from "../componentes/Firebase/firebase"

export const ItemListContainer = () => {


  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    const productsCollection = collection(db, "productos")
    let q;
    
    if (categoryId) {
      q = query(productsCollection,   where("category", "==", categoryId));
    }else{
      q = query(productsCollection);
    }

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
      .catch(error => { console.log(error) })
      .finally(() => {
        setLoading(false);
      })
  }, [categoryId]);
  
  return <ItemList productos={productos}></ItemList>;
};
