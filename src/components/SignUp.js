import React, { useState } from "react";

import { useAuth } from "../context/AuthContex";
import { firabaseError } from "../helpers/firabaseErros";
import { useForm } from "../hooks/useForm";
import { Alert } from "./Alert";

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
    setError("");

    if (email === "" && password === "")
      return setError("Email and password are required");

    try {
      await signUp(email, password);
      setIsSignIn(true);
      setShowSignUp(false);
    } catch (error) {
      const errorCode = error.code;
      const message = firabaseError(errorCode);
      console.log(error);
      setError(message);
    }
  };

  return (
    <div className="d-flex login justify-content-center align-items-center flex-column">
      {/* Alert */}
      {error && <Alert message={error} />}

      {/* <div className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4"> */}
      <div className="login-container mb-5">
        <h2 className="text-center mb-4 text-uppercase">SignUp</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-2">
            <label htmlFor="email">
              Email
            </label>
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="email_test@hellobuld.co"
              onChange={handleChange}
              autoComplete="false"
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="password">
              Password
            </label>
            <input
              className="form-control"
              type="password"
              name="password"
              id="password"
              placeholder="*********"
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary btn-block w-100 mb-2">
            SignUp
          </button>
        </form>

      </div>

      <div className="text-center mx-auto redirect">
        <a href="/#" onClick={() => setShowSignUp(false)}>Do you already have an account?</a>
      </div>
    </div>
  );
};
