import { AddOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { startNewNote } from "../../store/journal/thunks";
import { savingNote } from "../../store/journal/journalSlice";

export const AddNoteButton = () => {
  const { isSaving } = useSelector((state) => state.journal);
  const dispatch = useDispatch();

  const onClickNewNote = () => {
    dispatch(savingNote());
    dispatch(startNewNote());
  };

  return (
    <IconButton
      disabled={isSaving}
      size="large"
      sx={{
        color: "white",
        backgroundColor: "error.main",
        ":hover": {
          backgroundColor: "error.dark",
        },
        position: "fixed",
        top: { xs: "91%", md: "90.5%", lg: "90%" },
        right: { xs: "4%", md: "4%", lg: "3%" },
      }}
      className="animate__animated animate__backInUp animate__delay-1s"
      onClick={onClickNewNote}
    >
      <AddOutlined sx={{ fontSize: 30 }} />
    </IconButton>
  );
};
