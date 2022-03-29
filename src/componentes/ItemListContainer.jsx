import React from "react";
import Typography from '@mui/material/Typography';


export const Item = (props) => {
  return (
<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
  {props.mensaje}
</Typography>
)}