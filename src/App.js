import React from "react";
import { Routes, Route } from 'react-router-dom';

import { Home } from "./components/Home";
import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/SignUp";


const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn /> } />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default App;
