import React, { useState } from "react";

import { Home } from "./components/Home";
import { Loader } from "./components/Loader";
import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/SignUp";
import { useAuth } from "./context/AuthContex";

const App = () => {
  const { isSignIn, isLoading } = useAuth();

  const [showSignUp, setShowSignUp] = useState(false)

  if(isLoading)
    return <Loader />

  /* Function reder for each component */
  const renderContent = () => {
    if(isSignIn) return <Home />
    if(showSignUp) return <SignUp setShowSignUp={setShowSignUp}/>

    return <SignIn setShowSignUp={setShowSignUp}/>
  };

  return (
    <>
      { renderContent() }
    </>
  );
};

export default App;
