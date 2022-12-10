import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const newUser = {
      username: username,
      password: password,
    };
  };
  return (
    <div className="flex flex-col items-center justify-center mt-2 rounded-xl h-[400px] mw-[20%] bg-main-200">
      <div className="font-bold text-2xl"> Log in</div>
      <form className="flex flex-col items-start justify-start mt-4 text-sm font-semibold w-[200px] ">
        <label>USERNAME</label>
        <input
          type="text"
          placeholder="Enter your username"
          className="border-none p-1 m-1 rounded w-full"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>PASSWORD</label>
        <input
          type="password"
          placeholder="Enter your password"
          className="border-none p-1 m-1 rounded w-full"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="cursor-pointer borer-none seft-center mt-4 text-base p-3 rounded text-white bg-main-500"
        >
          Continue
        </button>
      </form>
      <div className="m-4 text-base"> Don't have an account yet? </div>
      <Link
        className="no-underline cursor-pointer  text-main-500 font-bold"
        to="/register"
      >
        Register one for free
      </Link>
    </div>
  );
};

export default Login;
