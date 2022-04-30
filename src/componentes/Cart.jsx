import React, { useContext, useState, useEffect } from "react";
import { context } from "./CartContext"
import Button from "@mui/material/Button";
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "../componentes/Firebase/firebase";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const Cart = () => {

  const { articulosCarrito, totalArticulos, precioTotal, deleteArticulo } = useContext(context);
  const [mostrarVolverAlInicio, setmostrarVolverAlInicio] = useState(true)
  const [idVenta, setIdVenta] = useState(0)

  const [nombre, setNombre] = useState()
  const [apellido, setApellido] = useState()
  const [email, setEmail] = useState()

  const cargarNombre = (e) => {
    setNombre(e.target.value);
  }

  const cargarApellido = (e) => {
    setApellido(e.target.value);
  }

  const cargarEmail = (e) => {
    setEmail(e.target.value);
  }

  const finalizarCompra = () => {
    debugger
    // if (nombre !== "" && apellido !== "" && email !== "") {
    //   const ventaCollection = collection(db, "ventas");
    //   addDoc(ventaCollection, {
    //     comprador:{Nombre:nombre,Apellido:apellido,Email:email},
    //     items: articulosCarrito,
    //     date: serverTimestamp(),
    //     total: precioTotal,
    //   }).then((result) => {
    //     setIdVenta(result.id);
    //   });
    // }else{
    //   alert("Debe completar todos los campos.")
    // }
    const comp = {Nombre:nombre,Apellido:apellido,Email:email};

    const ventaCollection = collection(db, "ventas");
    addDoc(ventaCollection, {
      comprador: comp,
      items: articulosCarrito,
      date: serverTimestamp(),
      total: precioTotal,
    }).then((result) => {
      setIdVenta(result.id);
    });
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const handlerClickEliminar = (id) => {
    deleteArticulo(id);
  }

  return (
    <>
      <Stack>
        <Item>
          {articulosCarrito.map((articulo) => {
            return <Stack direction="row" spacing={{ xs: 2, md: 3 }} >
              <Item>{articulo.desc}</Item>
              <Item>{articulo.precio}</Item>
              <Item>Cant. {articulo.cant}</Item>
              <Item><Button variant="contained" onClick={() => handlerClickEliminar(articulo.id)}>Eliminar</Button></Item>
            </Stack>
          })
          }
        </Item>

        <Item>
          {mostrarVolverAlInicio ? (
            <Stack direction="row" spacing={{ xs: 2, md: 3 }} >
              <Item> Total: {precioTotal}</Item>
              <Item>Cant: {totalArticulos}</Item>
            </Stack>) : (
            <Link to="/"><Button variant="contained">Volver al inicio</Button></Link>
          )
          }
        </Item>

        <Item>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="nombre"  value={nombre} label="Ingrese su nombre" variant="outlined" onBlur={cargarNombre} />
            <TextField id="apellido" value={apellido} label="Ingrese su apellido" variant="outlined" onBlur={cargarApellido} />
            <TextField id="email" value={email} label="Ingrese su email" variant="outlined" onBlur={cargarEmail} />

            <Item><Button variant="contained" onClick={() => finalizarCompra()} >Finalizar Compra</Button></Item>

          </Box>
        </Item>
      </Stack>
    </>
  );
};