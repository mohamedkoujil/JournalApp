import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, Grid2, TextField, Typography } from "@mui/material";
import { border } from "@mui/system";
import { ImageGallery } from "../components";

export const NoteView = () => {
  return (
    <Grid2
      container
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 1 }}
    >
      <Grid2 item>
        <Typography fontSize={39} fontWeight="light">
          28 de agosto, 2023
        </Typography>
      </Grid2>

      <Grid2 item>
        <Button color="primary" sx={{ padding: 1 }}>
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
        />
      </Grid2>

      <ImageGallery />
    </Grid2>
  );
};
