import React, { useState } from "react";
import { Item } from "./Item"
import Grid from '@mui/material/Grid';

export const ItemList = ({ productos }) => {

    return (
        <Grid container spacing={2}>

            {productos.map((producto, indice) => {
                return (

                    <Grid item xs={4}>

                        <Item id={producto.id} title={producto.title} image={producto.pictureUrl} />
                    </Grid>

                )
            })}
        </Grid>
    );
}