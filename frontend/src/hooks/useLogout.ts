import { useAuthContext } from "./useAuthContext";
import { AuthKind } from "../types";

export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = () => {
    // remove user from storage
    localStorage.removeItem("user");

    // dispatch logout action
    dispatch({ type: AuthKind.LOGOUT });
  };

  return { logout };
};
