import { useAuthContext } from "./useAuthContext";
import { useWorkoutsContext } from "./useWorkoutsContext";
import { AuthKind, WorkoutKind } from "../types";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: workoutsDispatch } = useWorkoutsContext();

  const logout = () => {
    // remove user from storage
    localStorage.removeItem("user");

    // dispatch logout action
    dispatch({ type: AuthKind.LOGOUT });
    workoutsDispatch({ type: WorkoutKind.SET_WORKOUTS, payload: [] });
  };

  return { logout };
};
