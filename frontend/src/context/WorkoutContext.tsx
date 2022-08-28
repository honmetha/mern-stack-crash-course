import * as React from "react";

import { IWorkout, WorkoutKind, WorkoutAction } from "../types";

interface IWorkoutContext {
  workouts: IWorkout[];
  dispatch: React.Dispatch<WorkoutAction>;
}

interface IWorkoutsContextProvider {
  children: React.ReactNode;
}

const initialState = {
  workouts: [],
  dispatch: () => {},
};

export const WorkoutsContext =
  React.createContext<IWorkoutContext>(initialState);

export const workoutsReducer = (
  state: { workouts: IWorkout[] },
  action: WorkoutAction
) => {
  switch (action.type) {
    case WorkoutKind.SET_WORKOUTS:
      return {
        workouts: action.payload,
      };
    case WorkoutKind.CREATE_WORKOUT:
      return {
        workouts: [action.payload, ...state.workouts],
      };
    case WorkoutKind.DELETE_WORKOUT:
      return {
        workouts: state.workouts.filter(
          (workout: IWorkout) => workout._id !== action.payload._id
        ),
      };
    default:
      return state;
  }
};

export const WorkoutsContextProvider = ({
  children,
}: IWorkoutsContextProvider) => {
  const [state, dispatch] = React.useReducer(workoutsReducer, { workouts: [] });

  return (
    <WorkoutsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WorkoutsContext.Provider>
  );
};
