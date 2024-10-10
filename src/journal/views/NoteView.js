import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, Grid2, TextField, Typography } from "@mui/material";
import { border } from "@mui/system";
import { ImageGallery } from "../components";
import { useForm } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
import { setActiveNote } from "../../store/journal/journalSlice";
import { startSavingNote } from "../../store/journal/thunks";
import Swal from "sweetalert2";

export const NoteView = () => {
  const dispatch = useDispatch();
  const {
    active: note,
    messageSaved,
    isSaving,
  } = useSelector((state) => state.journal);

  const { title, body, date, onInputChange, formState } = useForm(note);

  const dateString = useMemo(() => {
    return new Date(date).toUTCString();
  });

  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);

  useEffect(() => {
    messageSaved.length > 0 &&
      Swal.fire("Nota actualizada", messageSaved, "success");
  }, [messageSaved]);

  const onSaveNote = () => {
    dispatch(startSavingNote());
  };

  return (
    <Grid2
      container
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 1 }}
      className="animate__animated animate__fadeIn animate__faster"
    >
      <Grid2 item="true">
        <Typography fontSize={39} fontWeight="light">
          {dateString}
        </Typography>
      </Grid2>

      <Grid2 item="true">
        <Button
          color="primary"
          sx={{ padding: 1 }}
          onClick={onSaveNote}
          disabled={isSaving}
        >
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid2>

      <Grid2 container size={12} sx={{ mb: 1 }}>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Ingrese un titulo"
          label="Titulo"
          sx={{ border: "none", mb: 1 }}
          name="title"
          value={title}
          onChange={onInputChange}
        />
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Que paso hoy?"
          label="Descripción"
          sx={{ border: "none" }}
          multiline
          minRows={4}
          name="body"
          value={body}
          onChange={onInputChange}
        />
      </Grid2>

      <ImageGallery />
    </Grid2>
  );
};
