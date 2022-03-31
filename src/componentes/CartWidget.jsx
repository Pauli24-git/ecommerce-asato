import * as React from "react";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function CartWidget() {
  return (
    <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      sx={{ mr: 2 }}
    >
      <ShoppingCartIcon />
    </IconButton>
  );
}
