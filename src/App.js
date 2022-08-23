import React from "react";

// import { authContext, useAuth } from "./context/AuthContex";
// import { Home } from "./components/Home";
import { SignIn } from "./components/SignIn";
// import { SignUp } from "./components/SignUp";

const App = () => {
  // const { user } = useAuth(authContext);

  // console.log(user)

  return <div className="bg-green-100 h-screen flex"><SignIn /></div>;
};

export default App;
