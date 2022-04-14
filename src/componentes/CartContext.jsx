import React, { createContext, useState } from "react";

export const context = createContext();

const { Provider } = context;

const CustomProvider = ({ children }) => {

    const [articulosCarrito, setArticulosCarrito] = useState([])

    const addArticulo = (articulo, cantidad) => {
        const arrayAux = articulosCarrito;

        // arrayAux.map((art,indice) => {
        //     if (art.id == articulo.artId) {
        //         art.cant += cantidad;
        //     }
        //     return
        // })

        arrayAux.push({ id: articulo.artId, desc: articulo.artDesc, precio: articulo.artPrecio, cant: cantidad });
        setArticulosCarrito(arrayAux);
        console.log(articulosCarrito);
        
    }
    // const deleteArticulo = () => { }



    return (
        <Provider value={{ articulosCarrito, addArticulo }}>{children}</Provider>
    )
}

export default CustomProvider;