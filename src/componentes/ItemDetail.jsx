import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import ItemCount from "./ItemCount";


export const ItemDetail = ({ id, desc, image, precio, stock }) => {

  const articulo = {artId:id, artDesc:desc, artPrecio:+precio};

  const [showBuyOption, setshowBuyOption] = useState(false);

  const showPurchase = () => {
    setshowBuyOption(!showBuyOption);
  };

  return (
    <Card sx={{ maxWidth: 800, maxheight: 400, m: 5 }}>
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
        <ItemCount
          stock={stock}
          art={articulo}
          inicial={1}
          onAdd={showPurchase}
          showBuyOption={showBuyOption}
        />
      </CardContent>
    </Card>
  )
}

//ItemCount(stock,articulo,showBuyOption); //lamada a la funcion

// function ItemCount(stockActual, art, inicial, mostrarOpcion){

// }