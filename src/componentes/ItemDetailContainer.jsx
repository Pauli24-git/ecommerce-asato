import React, { useState, useEffect } from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import { LoadingScreen } from "./LoadingScreen";
import { db } from "../componentes/Firebase/firebase";
import { doc, getDoc, collection } from "firebase/firestore";



export const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);

  const { productId } = useParams();
  useEffect(() => {

    const productsCollection = collection(db, "productos");
    const refDoc = doc(productsCollection, productId);
    getDoc(refDoc)
      .then((result) => {
        setProducto(result.data());
      })
      .catch(error => { console.log(error) })
      .finally(() => {
        setLoading(false);
      })
  }, [productId])

  return (
    <>{loading ? (
      <LoadingScreen />
    ) : (
      <ItemDetail id={productId} desc={producto.title} image={producto.pictureUrl} precio={producto.precio} stock={producto.stock} />
    )};
    </>
  );
};