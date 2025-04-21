import {
  DeleteOutline,
  SaveOutlined,
  UploadOutlined,
} from "@mui/icons-material";
import {
  Button,
  Grid,
  Grid2,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { border } from "@mui/system";
import { ImageGallery } from "../components";
import { useForm } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useRef, useState } from "react";
import { setActiveNote } from "../../store/journal/journalSlice";
import {
  startDeletingNote,
  startSavingNote,
  startUploadingFiles,
} from "../../store/journal/thunks";
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
  }, [date]);

  const fileInputRef = useRef();
  const [prevFormState, setPrevFormState] = useState(formState);

  useEffect(() => {
    if (JSON.stringify(formState) !== JSON.stringify(prevFormState)) {
      dispatch(setActiveNote(formState));
      setPrevFormState(formState);
    }
  }, [formState, prevFormState, dispatch]);

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire("Nota actualizada", messageSaved, "success");
    }
  }, [messageSaved]);

  const onSaveNote = () => {
    dispatch(startSavingNote());
  };

  const onFileInputChange = ({ target }) => {
    if (target.files.length === 0) return;

    dispatch(startUploadingFiles(target.files));
  };
  console.log(note);

  const onDelete = async () => {
    const result = await Swal.fire({
      title: "¿Estás seguro?",
      text: "No podrás revertir esta acción",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, borrar",
    });

    if (result.isConfirmed) {
      dispatch(startDeletingNote());
    }
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
        <input
          type="file"
          multiple
          onChange={onFileInputChange}
          style={{ display: "none" }}
          ref={fileInputRef}
        />
        <IconButton
          color="primary"
          disabled={isSaving}
          onClick={() => fileInputRef.current.click()}
        >
          <UploadOutlined />
        </IconButton>
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
          required
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

      <Grid2
        container
        size={12}
        display="flex"
        justifyContent="flex-end"
        sx={{ mb: 1 }}
      >
        <Button onClick={onDelete} color="error" disabled={isSaving}>
          <DeleteOutline />
          Borrar
        </Button>
      </Grid2>

      <ImageGallery images={note.imageUrls} />
    </Grid2>
  );
};
