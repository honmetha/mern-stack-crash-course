import * as React from "react";

import { IWorkout, WorkoutKind } from "../types";

interface WorkoutAction {
  type: WorkoutKind;
  payload: IWorkout;
}

interface WorkoutContextInterface {
  workouts: IWorkout[];
  dispatch: React.Dispatch<{ type: string; payload: JSON }>;
}

interface IWorkoutsContextProvider {
  children: React.ReactNode;
}

export const WorkoutsContext =
  React.createContext<WorkoutContextInterface | null>(null);

// fix typescript type
export const workoutsReducer = (state: any, action: WorkoutAction) => {
  switch (action.type) {
    case "SET_WORKOUTS":
      return {
        workouts: action.payload,
      };
    case "CREATE_WORKOUT":
      return {
        workouts: [action.payload, ...state],
      };
    default:
      return state;
  }
};

export const WorkoutsContextProvider = ({
  children,
}: IWorkoutsContextProvider) => {
  const [state, dispatch] = React.useReducer(workoutsReducer, {
    workouts: null,
  });

  return (
    <WorkoutsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WorkoutsContext.Provider>
  );
};
