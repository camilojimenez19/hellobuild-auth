import React from "react";

export const SignIn = ({ setShowSignUp }) => {

  // const [form, setForm] = useState({
  //   email: '',
  //   password: ''
  // });

  return (
    <div>
      <form>
        <input type="email" name="email" id="name"/>
        <input type="password" name="password" id="password"/>
      </form>

      <button onClick={() => setShowSignUp(true) }>create account</button>
    </div>
  );
};
