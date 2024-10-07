import { useDispatch } from "react-redux";
import { authSlice, checkingCredentials, login, logout } from "./authSlice";
import { signInWithGoogle } from "../../firebase/providers";

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
