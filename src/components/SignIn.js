import React from "react";
import { useAuth } from "../context/AuthContex";

export const SignIn = () => {

  const {user} = useAuth();

  console.log(user)

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
    </div>
  );
};
