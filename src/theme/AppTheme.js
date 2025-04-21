import { Css } from "@mui/icons-material";
import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { purpleTheme } from "./purpleTheme";

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={purpleTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
