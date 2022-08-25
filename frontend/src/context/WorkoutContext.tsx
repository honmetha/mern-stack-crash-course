import * as React from "react";

interface IWorkoutsContextProvider {
  children: React.ReactNode;
}

// fix typescript type
export const WorkoutsContext = React.createContext<any>(null);

// fix typescript type
export const workoutsReducer = (state: any, action: any) => {
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
    <WorkoutsContext.Provider value={{ state, dispatch }}>
      {children}
    </WorkoutsContext.Provider>
  );
};
