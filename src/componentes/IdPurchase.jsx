import * as React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export const IdPurchase = ({ id }) => {
  return (
    <>
      <h1>El id de su compra es {id}</h1>
      <Link to="/">
        <Button variant="contained">Volver al inicio</Button>
      </Link>
    </>
  );
};