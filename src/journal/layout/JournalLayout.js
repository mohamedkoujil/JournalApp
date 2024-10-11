import { Box } from "@mui/system";
import React, { useState } from "react";
import { NavBar, SideBar } from "../components";
import { Toolbar } from "@mui/material";

const drawerWidth = 240;

const JournalLayout = ({ children }) => {
  // const [open, setOpen] = useState(initialState);

  return (
    <Box sx={{ display: "flex" }}>
      <NavBar drawerWidth={drawerWidth} />
      <SideBar drawerWidth={drawerWidth} />

      <Box component="main" sx={{ flexGrow: 1, p: 1.5 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default JournalLayout;
