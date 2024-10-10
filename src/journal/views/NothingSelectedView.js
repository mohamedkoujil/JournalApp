import { StarOutline } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material"; // Update import to use the correct path
import React from "react";

export const NothingSelectedView = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        minHeight: "90.5vh",
        backgroundColor: "primary.main",
        padding: 4,
        borderRadius: 3,
      }}
      className="animate__animated animate__fadeIn animate__faster"
    >
      <Grid item>
        <StarOutline sx={{ fontSize: 100, color: "white" }} />
      </Grid>
      <Grid item>
        <Typography color="white" variant="h5" align="center">
          Selecciona o crea una entrada
        </Typography>
      </Grid>
    </Grid>
  );
};
