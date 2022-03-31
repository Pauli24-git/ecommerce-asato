import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import Typography from "@mui/material/Typography";
import IndeterminateCheckBoxRoundedIcon from "@mui/icons-material/IndeterminateCheckBoxRounded";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

export default function ItemCount({ stock, inicial, onAdd }) {
  const [contador, setContador] = useState(inicial);

  const incrementarContador = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const reducirContador = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  const ejecutaOnAdd = () => {
    onAdd();
  };

  return (
    <Card sx={{ maxWidth: 290 }}>
      <CardActions>
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={reducirContador}
        >
          <IndeterminateCheckBoxRoundedIcon />
        </IconButton>
        <Typography>{contador}</Typography>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={incrementarContador}
        >
          <AddBoxRoundedIcon />
        </IconButton>
        <Button variant="contained" onClick={ejecutaOnAdd}>
          Agregar
        </Button>
      </CardActions>
    </Card>
  );
}
