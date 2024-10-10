import { AddOutlined, MailOutline } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import React from "react";
import JournalLayout from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";
import { AddNoteButton } from "../components";
import { useSelector } from "react-redux";

export const JournalPage = () => {
  const { active } = useSelector((state) => state.journal);

  return (
    <JournalLayout>
      {!!active ? <NoteView /> : <NothingSelectedView />}

      <AddNoteButton />
    </JournalLayout>
  );
};
