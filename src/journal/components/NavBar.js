import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { Grid } from "@mui/system";
import React from "react";
import { useDispatch } from "react-redux";
import { startLogout } from "../../store/auth/thunks";

export const NavBar = ({ drawerWidth, open, toggleOpen, navbarHeight }) => {
  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(startLogout());
  };

  return (
    <AppBar
      position="fixed"
      //starts below the navbar
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
      className="animate__animated animate__slideInDown"
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          sx={{ mr: 2, display: { sm: "none" } }}
          onClick={toggleOpen}
        >
          <MenuOutlined />
        </IconButton>

        {/* space between container */}
        <Grid
          container
          size={12}
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography noWrap variant="h6" component={"div"}>
            Journal App
          </Typography>

          <IconButton color="error" onClick={onLogOut}>
            <LogoutOutlined />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
