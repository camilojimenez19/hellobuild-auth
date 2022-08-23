import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth";
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
  const [isLoading, setIsLoading] = useState(true);

  const [user, setUser] = useState(null);

  /* Create a new user with email and password */
  const signUp = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  /* SignIn user */
  const signIn = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
    setIsSignIn(true);
  };

  /* Logout sesion */
  const logout = () => signOut(auth);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setIsSignIn(true);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <authContext.Provider
      value={{
        user,
        isSignIn,
        isLoading,
        setIsSignIn,
        signUp,
        signIn,
        logout
      }}
    >
      {children}
    </authContext.Provider>
  );
};
