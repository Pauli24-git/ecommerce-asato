import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import Typography from '@mui/material/Typography';
import IndeterminateCheckBoxRoundedIcon from '@mui/icons-material/IndeterminateCheckBoxRounded';
import Container from '@mui/material/Container';


export default function ItemCount({ stock, inicial, children }) {

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

    return (
        <Container>
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
            <Typography>
                {contador}
            </Typography>

            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={reducirContador}
            >
                <IndeterminateCheckBoxRoundedIcon />
            </IconButton>

            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
                Agregar al carrito
            </IconButton>
        </Container>
    );
}