import * as React from "react";

import { IUser, AuthKind, AuthAction } from "../types";

interface IAuthContext {
  user: IUser | null;
  dispatch: React.Dispatch<AuthAction>;
}

interface IAuthContextProvider {
  children: React.ReactNode;
}

const initialState = {
  user: null,
  dispatch: () => {},
};

export const AuthContext = React.createContext<IAuthContext>(initialState);

export const authReducer = (
  state: { user: IUser | null },
  action: AuthAction
) => {
  switch (action.type) {
    case AuthKind.LOGIN:
      return { user: action.payload };
    case AuthKind.LOGOUT:
      return { user: action.payload };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }: IAuthContextProvider) => {
  const [state, dispatch] = React.useReducer(authReducer, { user: null });

  console.log("AuthContext state: ", state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
