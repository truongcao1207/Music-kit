import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const newUser = {
      email: email,
      password: password,
      username: username,
    };
  };
  return (
    <div className="flex flex-col items-center justify-center mt-8 rounded-xl h-[400px] mw-[20%] bg-main-200 text-center">
      <div className="font-bold text-2xl"> Sign up </div>
      <form className="flex flex-col items-start justify-start mt-4 text-sm font-semibold w-[200px]">
        <label>EMAIL</label>
        <input
          type="text"
          placeholder="Enter your email"
          className="border-none p-1 m-1 rounded w-full"
          onChange={(e) => setEmail(e.target.value)}
        />
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
          type="submit "
          className="cursor-pointer borer-none seft-center mt-4 text-base p-3 rounded text-white bg-main-500"
        >
          Create account
        </button>
      </form>
    </div>
  );
};

export default Register;
