import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export const Item = ({ id, title, image }) => {
  const route = "/product/" + id;
  const onAdd = () => {
    alert("Agregado");
  };

  return (
    <Card sx={{ maxWidth: 345, m: 5 }}>
      <CardMedia
        component="img"
        alt="producto"
        spacing="10"
        height="140"
        src={image}
      />
      <CardContent>
        <Typography gutterBottom variant="p" component="div">
          Articulo: {title}
        </Typography>
      </CardContent>
      <Button component={Link} to={route}> Mas informacion</Button>
    </Card>

  );
}
