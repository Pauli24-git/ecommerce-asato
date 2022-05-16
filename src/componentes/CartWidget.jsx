import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from '@mui/material/Badge';
import { context } from "./CartContext"
import { Link } from "react-router-dom";


export const CartWidget = () => {

  const { totalArticulos } = useContext(context);

  return (
    <Link to="/Cart">
      <IconButton
        size="large"
        edge="start"
        color="secondary"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <Badge badgeContent={totalArticulos} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </Link>
  );
}