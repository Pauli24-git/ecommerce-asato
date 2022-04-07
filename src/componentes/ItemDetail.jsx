import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import  ItemCount  from "./ItemCount";


export const ItemDetail = ({id, desc, image, precio, stock}) =>{

    console.log(id);

    return (
      <Card sx={{ maxWidth: 800, maxheight:400, m: 5 }}>
      <CardMedia
        component="img"
        alt="producto"
        spacing="10"
        height="300"
        src={image}
      />
      <CardContent>
        <Typography gutterBottom variant="p" component="div">
          Articulo: {desc}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography gutterBottom variant="p" component="div">
          precio: {precio}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography gutterBottom variant="p" component="div">
          Id: {id}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography gutterBottom variant="p" component="div">
          Stock: {stock}
        </Typography>
      </CardContent>
      <CardContent>
        <ItemCount stock={stock} inicial={1} />
      </CardContent>
    </Card>
  )
}