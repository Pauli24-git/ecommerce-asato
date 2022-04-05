import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import ItemCount from "./ItemCount";
import ItemDetailContainer from "./ItemDetailContainer";


export default function Item({ id, title, price, image }) {
  const onAdd = () => { alert("Agregado") }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="producto"
        spacing="10"
        height="140"
        src={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Articulo:  {title}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Precio: $ {price}
        </Typography>
      </CardContent>
      <ItemDetailContainer />
      <CardContent>
      </CardContent>
      <ItemCount stock={20} inicial={1} onAdd={onAdd} />
    </Card>
  );
}