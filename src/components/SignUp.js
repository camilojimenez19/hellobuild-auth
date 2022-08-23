import { async } from "@firebase/util";
import React, { useState } from "react";
import { useAuth } from "../context/AuthContex";
import { firabaseError } from "../helpers/firabaseErros";
import { useForm } from "../hooks/useForm";

export const SignUp = ({ setShowSignUp }) => {

  const [error, setError] = useState();

  /* Hook auth */
  const { signUp, setIsSignIn } = useAuth();

  const { email, password, onChange } = useForm({
    email: "",
    password: "",
  });

  /* Handle change for inputs */
  const handleChange = ({ target: { name, value } }) => {
    onChange(value, name);
  };

  /* Handle for submut SignUp */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if(email === "" && password === "")
      return setError("Email and password are required");

    try {
      await signUp(email, password);
      setIsSignIn(true);
    } catch (error) {
      const errorCode = error.code;
      const message = firabaseError(errorCode)
      setError(message);
    }
  };

  return (
    <>
      { error && <p>{error}</p>}

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="email_test@hellobuld.co"
          onChange={handleChange}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="*********"
          onChange={handleChange}
        />

        <button>SignUp</button>
      </form>
      <button onClick={() => setShowSignUp(false) }>SignIn</button>
    </>
  );
};
