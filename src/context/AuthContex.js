import { createContext, useContext } from "react";

/* Create context */
export const authContext = createContext();

/* Custom Hook for auth */
export const useAuth = () => {
    const context = useContext(authContext);
    if (!context) throw new Error('There is not auth provider')
    return context
}

/* Set provider for context */
export const AuthProvider = ({children}) => {
  const user = {
    isSignIn: false,
  };

  return (
    <authContext.Provider
      value={{
        user,
      }}
    >
      {children}
    </authContext.Provider>
  );
};
