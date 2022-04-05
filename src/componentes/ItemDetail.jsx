import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { CardActions } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";


export default function ItemDetail({prod}){
    const [expanded, setExpanded] = useState(false);

    const ExpandMore = styled((props) => {
      const { expand, ...other } = props;
      return <IconButton {...other} />;
    })(({ theme, expand }) => ({
      transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    }));
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    return (
    <CardContent>
    <CardActions>
      <Typography variant="h6">Mas informacion</Typography>
      <ExpandMore
        expand={expanded}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </ExpandMore>
    </CardActions>
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
        <Typography paragraph>
          Descripcion: {prod.desc}
        </Typography>
        <Typography paragraph>
          Precio: {prod.precio}
        </Typography>
      </CardContent>
    </Collapse>
  </CardContent>
  )
}
