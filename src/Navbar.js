import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import CartWidget from './componentes/CartWidget'

export default function ButtonAppBar() {
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <CartWidget/>
          <Button color="inherit">Inicio</Button>
          <Button color="inherit">Productos</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
       </>
  );
}
