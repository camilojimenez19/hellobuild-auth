import { createContext, useContext, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../auth/firabase";

/* Create context */
export const authContext = createContext();

/* Custom Hook for auth */
export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("There is not auth provider");
  return context;
};

/* Set provider for context */
export const AuthProvider = ({ children }) => {
  
  const [isSignIn, setIsSignIn] = useState(false);
  
  /* App state info */
  // const user = {
  //   isSignIn,
  // };

  /* Create a new user with email and password */
  const signUp = (email, password) => createUserWithEmailAndPassword(auth, email, password);
  
  /* SignIn user */
  const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);

  return (
    <authContext.Provider
      value={{
        isSignIn,
        setIsSignIn,
        signUp,
        signIn
      }}
    >
      {children}
    </authContext.Provider>
  );
};
