import React, { useContext, useState } from "react";
import { context } from "./CartContext"
import Button from "@mui/material/Button";
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";

export const Cart = () => {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const { articulosCarrito, totalArticulos, precioTotal, deleteArticulo } = useContext(context);
  const [mostrarVolverAlInicio, setmostrarVolverAlInicio] = useState(true)


  const handlerClickEliminar = (id) => {
    deleteArticulo(id);
  }
  
  return (
    <>
      {articulosCarrito.map((articulo) => {
        return <Stack direction="row" spacing={{ xs: 2, md: 3 }} >
          <Item>{articulo.desc}</Item>
          <Item>{articulo.precio}</Item>
          <Item>Cant. {articulo.cant}</Item>
          <Item><Button variant="contained" onClick={() => handlerClickEliminar(articulo.id)}>Eliminar</Button></Item>
        </Stack>
      })
      }
      {mostrarVolverAlInicio ? (
        <Stack direction="row" spacing={{ xs: 2, md: 3 }} >
          <Item> Total: {precioTotal}</Item>
          <Item>Cant: {totalArticulos}</Item>
        </Stack>) : (
          <Link to="/"><Button variant="contained">Volver al inicio</Button></Link>
        )
      }
    </>
  );
};


// arrayAux.push({ id: articulo.artId, desc: articulo.artDesc, precio: articulo.artPrecio, cant: cantidad });


