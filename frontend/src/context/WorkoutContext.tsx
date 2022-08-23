import * as React from "react";

interface IWorkoutsContextProvider {
  children: React.ReactNode;
}

export const WorkoutsContext = React.createContext<null>(null);

export const WorkoutsContextProvider = ({
  children,
}: IWorkoutsContextProvider) => {
  return (
    <WorkoutsContext.Provider value={null}>{children}</WorkoutsContext.Provider>
  );
};
