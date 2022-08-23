import React, { useState } from "react";

import { useAuth } from "../context/AuthContex";
import { firabaseError } from "../helpers/firabaseErros";
import { useForm } from "../hooks/useForm";

export const SignIn = ({ setShowSignUp }) => {

  const [error, setError] = useState();

  /* Hook auth */
  const { signIn } = useAuth();

  const { email, password, onChange } = useForm({
    email: "",
    password: "",
  });

  /* Handle change for inputs */
  const handleChange = ({ target: { name, value } }) => {
    onChange(value, name);
  };

  /* Handle for submut signin */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if(email === "" && password === "")
      return setError("Email and password are required");

    try {
      await signIn(email, password);
    } catch (error) {
      const errorCode = error.code;
      const message = firabaseError(errorCode);
      console.log(error)
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

        <button>SignIn</button>
      </form>
      <button onClick={() => setShowSignUp(true) }>create account</button>
    </>
  );
};
