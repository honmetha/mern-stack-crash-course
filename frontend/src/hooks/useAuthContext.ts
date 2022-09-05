import * as React from "react";

import { AuthContext } from "../context/AuthContext";

export const useAuthContext = () => {
  const context = React.useContext(AuthContext);

  if (!context) {
    throw Error("useAuthContext must be used inside an AuthContextProvider");
  }

  return context;
};
