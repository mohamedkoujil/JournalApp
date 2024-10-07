import { AddOutlined, MailOutline } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import React from "react";
import JournalLayout from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography variant="h1">asdad</Typography> */}
      <NothingSelectedView />
      {/* note page */}
      {/* <NoteView /> */}

      <IconButton
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": {
            backgroundColor: "error.dark",
          },
          position: "fixed",
          top: { xs: "92%", md: "92%", lg: "90%" },
          right: { xs: "4%", md: "4%", lg: "3%" },
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};
