import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { Button, TextField, Typography } from "@mui/material";
import { Grid } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";

export const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <form>
        <Grid
          container
          spacing={2}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item size={12}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              placeholder="example@example.com"
            />
          </Grid>

          <Grid item size={12}>
            <TextField
              fullWidth
              label="Password"
              variant="outlined"
              placeholder="Password"
            />
          </Grid>

          <Grid container spacing={2} size={12}>
            <Grid item size={{ xs: 12, md: 6 }}>
              <Button
                variant="contained"
                color="primary"
                //type="submit"
                fullWidth
              >
                Login
              </Button>
            </Grid>
            <Grid item size={{ xs: 12, md: 6 }}>
              <Button
                variant="contained"
                color="primary"
                //type="submit"
                fullWidth
              >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>

            <Grid
              container
              direction="row"
              justifyContent="end"
              size={12}
              spacing={1}
            >
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Don't have an account?{" "}
                <Link
                  component={RouterLink}
                  color="inherit"
                  to="/auth/register"
                >
                  Register
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
