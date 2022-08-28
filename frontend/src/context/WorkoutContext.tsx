import * as React from "react";

import { IWorkout, WorkoutKind } from "../types";

interface WorkoutAction {
  type: WorkoutKind;
  payload: IWorkout;
}

interface WorkoutContextInterface {
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
  React.createContext<WorkoutContextInterface>(initialState);

// fix typescript type
export const workoutsReducer = (state: any, action: WorkoutAction) => {
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
