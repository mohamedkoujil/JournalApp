import { Link as RouterLink } from "react-router-dom";
import { Button, TextField, Typography } from "@mui/material";
import { display, Grid } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";

const formData = {
  email: "",
  password: "",
  displayName: "",
};

const formValidations = {
  email: [(value) => value.includes("@"), "El correo debe tener una @"],
  password: [
    (value) => value.length > 5,
    "La contraseña debe tener al menos 6 caracteres",
  ],
  displayName: [
    (value) => value.length >= 1,
    "El nombre debe tener al menos un caracter",
  ],
};

export const RegisterPage = () => {
  const {
    displayName,
    email,
    password,
    onInputChange,
    formState,
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid,
  } = useForm(formData, formValidations);

  const [formSubmitted, setFormSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) {
      setFormSubmitted(true);
      return;
    }
    console.log("form is valid");
  };

  return (
    <AuthLayout title="Register">
      <form onSubmit={onSubmit}>
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
              label="Full Name"
              variant="outlined"
              placeholder="John Doe"
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}
            />
          </Grid>

          <Grid item size={12}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              placeholder="example@example.com"
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
            />
          </Grid>

          <Grid item size={12}>
            <TextField
              type="password"
              fullWidth
              label="Password"
              variant="outlined"
              placeholder="Password"
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
            />
          </Grid>

          <Grid container spacing={2} size={12}>
            <Grid item size={{ xs: 12 }}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                //type="submit"
                fullWidth
              >
                Create account
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
                Already have an account?{" "}
                <Link component={RouterLink} color="inherit" to="/auth/login">
                  Login
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
