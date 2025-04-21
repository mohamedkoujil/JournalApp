import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { Alert, Button, TextField, Typography } from "@mui/material";
import { Grid } from "@mui/system";
import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import {
  chekingAuthentication,
  startGoolgeSignIn,
  startLoginWithEmailPassword,
} from "../../store/auth/thunks";
import { useDispatch, useSelector } from "react-redux";

const formData = {
  email: "",
  password: "",
};

export const LoginPage = () => {
  const { status, errorMessage } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const { email, password, onInputChange } = useForm(formData);

  const isAthenticating = useMemo(() => status === "checking", [status]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(startLoginWithEmailPassword({ email, password }));
  };

  const onGoogleSignIn = () => {
    dispatch(startGoolgeSignIn());
  };

  return (
    <AuthLayout title="Login">
      <form
        onSubmit={onSubmit}
        className="animate__animated animate__fadeIn animate__faster"
      >
        <Grid
          container
          spacing={2}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item="true" size={12}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={email}
              variant="outlined"
              placeholder="example@example.com"
              onChange={onInputChange}
            />
          </Grid>

          <Grid item="true" size={12}>
            <TextField
              fullWidth
              type="password"
              label="Password"
              name="password"
              value={password}
              variant="outlined"
              placeholder="Password"
              onChange={onInputChange}
            />
          </Grid>

          <Grid container spacing={2} size={12}>
            <Grid item="true" display={errorMessage ? "flex" : "none"}>
              <Alert severity="error">{errorMessage}</Alert>
            </Grid>

            <Grid item="true" size={{ xs: 12, md: 6 }}>
              <Button
                disabled={isAthenticating}
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                Login
              </Button>
            </Grid>
            <Grid item="true" size={{ xs: 12, md: 6 }}>
              <Button
                disabled={isAthenticating}
                variant="contained"
                color="primary"
                onClick={onGoogleSignIn}
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
