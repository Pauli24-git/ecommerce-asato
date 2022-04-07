import * as React from "react";
import IconButton from "@mui/material/IconButton";
import CheckroomIcon from '@mui/icons-material/Checkroom';

export const MainLogo = () => {
  return (
    <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      sx={{ mr: 2 }}
    >
      <CheckroomIcon sx={{ fontSize: 60 }}/>
    </IconButton>
  );
}