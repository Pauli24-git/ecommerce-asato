import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { CartWidget } from "./CartWidget";
import { MainLogo } from "./MainLogo";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  const categories = [
    { name: "Remeras", route: "categories/remeras", id:1 },
    { name: "Pantalones", route: "categories/pantalones", id:2 },
    { name: "Hoodies", route: "categories/Hoodies", id:3 },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <NavLink to="/">
            <MainLogo />
          </NavLink>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Ecommerce Asato Paula
          </Typography>
          {categories.map((links)=>{
                        return(<Button key={links.id} color="inherit" component={NavLink} to={links.route}>{links.name}</Button>)
          })}
          <CartWidget />
        </Toolbar>
      </AppBar>
    </Box>
  );
};