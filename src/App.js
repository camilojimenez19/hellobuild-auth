import React, { useState } from "react";

import { Home } from "./components/Home";
import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/SignUp";
import { useAuth } from "./context/AuthContex";

const App = () => {
  const { isSignIn } = useAuth();

  const [showSignUp, setShowSignUp] = useState(false)

  /* Function reder for each component */
  const renderContent = () => {
    if(isSignIn) return <Home />
    if(showSignUp) return <SignUp setShowSignUp={setShowSignUp}/>

    return <SignIn setShowSignUp={setShowSignUp}/>
  };

  return (
    <div className="bg-green-100 h-screen flex">
      { renderContent() }
    </div>
  );
};

export default App;
