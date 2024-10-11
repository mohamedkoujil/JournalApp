import { Box } from "@mui/system";
import React, { useState } from "react";
import { NavBar, SideBar } from "../components";
import { Toolbar } from "@mui/material";

const drawerWidth = 240;
const navbarHeight = 64;

const JournalLayout = ({ children }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <SideBar
        drawerWidth={drawerWidth}
        navbarHeight={navbarHeight}
        open={open}
        toggleOpen={toggleOpen}
      />
      <NavBar
        drawerWidth={drawerWidth}
        navbarHeight={navbarHeight}
        open={open}
        toggleOpen={toggleOpen}
      />

      <Box component="main" sx={{ flexGrow: 1, p: 1.5 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default JournalLayout;
