import { useDispatch } from "react-redux";
import { authSlice, checkingCredentials, login, logout } from "./authSlice";
import {
  loginWithEmailPassword,
  registerUserWithPassword,
  signInWithGoogle,
} from "../../firebase/providers";

export const chekingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoolgeSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await signInWithGoogle();
    if (!result.ok) {
      dispatch(logout(result.errorMessage));
    }
    dispatch(login(result));
  };
};

export const startCreatingUserWithEmailAndPassord = ({
  email,
  password,
  displayName,
}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const { ok, uid, photoURL, errorMessage } = await registerUserWithPassword({
      email,
      password,
      displayName,
    });

    if (!ok) return dispatch(logout({ errorMessage }));
    dispatch(login({ uid, email, displayName, photoURL }));
  };
};

export const startLoginWithEmailPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const { ok, uid, displayName, photoURL, errorMessage } =
      await loginWithEmailPassword({
        email,
        password,
      });

    if (!ok) return dispatch(logout({ errorMessage }));

    dispatch(login({ uid, email, displayName, photoURL }));
  };
};
