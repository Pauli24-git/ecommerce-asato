import React, { useContext, useState, useEffect } from "react";
import { context } from "./CartContext";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../componentes/Firebase/firebase";
import TextField from "@mui/material/TextField";
import { IdPurchase } from "../componentes/IdPurchase";

export const Cart = () => {
  const {
    articulosCarrito,
    totalArticulos,
    precioTotal,
    deleteArticulo,
    vaciarCarrito,
  } = useContext(context);
  const [idVenta, setIdVenta] = useState(0);
  const [mostrarId, setMostrarId] = useState(false);

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");

  const DespuesDeSetearId = (res) => {
    debugger;
    vaciarCarrito();
    setIdVenta(res);
    setMostrarId(true);
  };

  const finalizarCompra = () => {
    debugger;
    const comp = {
      Nombre: nombre,
      Apellido: apellido,
      Email: email,
    };
    if (
      nombre !== "" &&
      apellido !== "" &&
      email !== "" &&
      articulosCarrito.length > 0
    ) {
      const ventaCollection = collection(db, "ventas");
      addDoc(ventaCollection, {
        comprador: comp,
        items: articulosCarrito,
        date: serverTimestamp(),
        total: precioTotal,
      }).then((result) => {
        DespuesDeSetearId(result.id);
      });
    } else {
      alert(
        "Debe completar todos los campos y tener alguna rticulo ingresado para realizar la compra."
      );
    }
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const handlerClickEliminar = (id) => {
    deleteArticulo(id);
  };

  return (
    <>
      {mostrarId ? (
        <IdPurchase id={idVenta} />
      ) : (
        <>
          <Stack>
            <Item>
              {articulosCarrito.map((articulo) => {
                return (
                  <Stack direction="row" spacing={{ xs: 2, md: 3 }}>
                    <Item>{articulo.desc}</Item>
                    <Item>{articulo.precio}</Item>
                    <Item>Cant. {articulo.cant}</Item>
                    <Item>
                      <Button
                        variant="contained"
                        onClick={() => handlerClickEliminar(articulo.id)}
                      >
                        Eliminar
                      </Button>
                    </Item>
                  </Stack>
                );
              })}
              <Item> Total: {precioTotal}</Item>
              <Item>Cant: {totalArticulos}</Item>
            </Item>
          </Stack>

          <TextField
            name="nombre"
            label="Ingrese su nombre"
            variant="outlined"
            onChange={(e) => {
              setNombre(e.target.value);
            }}
          />
          <TextField
            name="apellido"
            label="Ingrese su apellido"
            variant="outlined"
            onChange={(e) => {
              setApellido(e.target.value);
            }}
          />
          <TextField
            name="email"
            label="Ingrese su email"
            variant="outlined"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <Button variant="contained" onClick={finalizarCompra}>
            Finalizar Compra
          </Button>
        </>
      )}
    </>
  );
};
