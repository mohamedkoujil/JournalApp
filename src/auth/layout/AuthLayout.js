import { Typography } from "@mui/material";
import { Grid } from "@mui/material"; // Ensure you're importing from the correct module

export const AuthLayout = ({ children, title = "" }) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
    >
      <Grid
        item
        className="box-shadow"
        sx={{
          width: { xs: "100%", sm: "50%", md: "35%", lg: "25%" },
          backgroundColor: "white",
          borderRadius: 2,
          p: 3,
        }}
      >
        <Typography variant="h5" sx={{ mb: 1 }}>
          {title}
        </Typography>
        {/* Children */}
        {children}
      </Grid>
    </Grid>
  );
};
