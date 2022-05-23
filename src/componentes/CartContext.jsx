import React, { createContext, useState } from "react";

export const context = createContext();

const { Provider } = context;

const CustomProvider = ({ children }) => {

    const [articulosCarrito, setArticulosCarrito] = useState([])
    const [precioTotal, setPrecioTotal] = useState(0)
    const [totalArticulos, setTotalArticulos] = useState(0)

    const addArticulo = (articulo, cantidad) => {

        const arrayAux = articulosCarrito.slice();

        const ElementoBuscado = (art) => art.id === articulo.artId;
        const ubicacion = arrayAux.findIndex(ElementoBuscado)

        if (ubicacion === -1) {
            arrayAux.push({ id: articulo.artId, desc: articulo.artDesc, precio: articulo.artPrecio, cant: cantidad });
        }else{

            arrayAux[ubicacion].cant += cantidad;
        }


        setearTotales(arrayAux);
        setArticulosCarrito(arrayAux);
        
    }

    const deleteArticulo = (idArticulo) => {

        const arrayAux = articulosCarrito;

        const ElementoBuscado = (art) => art.id === idArticulo;
        const ubicacion = arrayAux.findIndex(ElementoBuscado)

        arrayAux.splice(ubicacion,1);

        setearTotales(arrayAux);
        setArticulosCarrito(arrayAux);
        
    }

    const vaciarCarrito = () =>{
        setArticulosCarrito([]);
        setPrecioTotal(0);
        setTotalArticulos(0);
    }

    const setearTotales = (productos) => {
        let cantidadTotal = 0;
        let precioTotal = 0;
        
        productos.forEach(prod => {
            cantidadTotal += prod.cant;
            precioTotal += prod.precio * prod.cant;
        });

        setPrecioTotal(precioTotal);
        setTotalArticulos(cantidadTotal);
    }

    return (
        <Provider value={{ articulosCarrito, addArticulo, totalArticulos, precioTotal, deleteArticulo, vaciarCarrito }}>{children}</Provider>
    )
}

export default CustomProvider;