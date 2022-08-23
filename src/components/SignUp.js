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
    setError('');

    if(email === "" && password === "")
      return setError("Email and password are required");

    try {
      await signUp(email, password);
      setIsSignIn(true);
      setShowSignUp(false);
    } catch (error) {
      const errorCode = error.code;
      const message = firabaseError(errorCode)
      console.log(error)
      setError(message);
    }
  };

  return (
    <div className="w-full max-w-xs m-auto">
      {/* Alert */}
      {error && <Alert message={error} />}

      <div className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
        <h2 className="text-center font-bold uppercase text-xl font-sans mb-4">SignUp</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-fold mb-2"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              name="email"
              placeholder="email_test@hellobuld.co"
              onChange={handleChange}
              autocomplete={false}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-fold mb-2"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              name="password"
              id="password"
              placeholder="*********"
              onChange={handleChange}
            />
          </div>

          <button className="w-full bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 mb-2 rounded  focus:outline-none focus:shadow-outline">
            SignUp
          </button>
        </form>

      </div>

      <div className="text-center text-gray-500 mx-auto">
        <button onClick={() => setShowSignUp(false)}>Do you already have an account?</button>
      </div>
    </div>
  );
};
