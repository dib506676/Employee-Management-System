import React, { useState } from "react";

function Login({handleLogIn}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogIn(email,password)

    setEmail("")
    setPassword("")
  };

  

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="rounded-xl border-2 border-emerald-500 p-20">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
            value={email}
            required
            className="rounded-full text-white outline-none bg-transparent text-xl px-5 py-3 border-emerald-600 border-2 placeholder:text-gray-500"
            type="email"
            placeholder="Enter your email"
          />
          <input
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
          value={password}
            className="rounded-full text-white outline-none bg-transparent text-xl px-5 py-3 border-emerald-500 border-2 mt-3 placeholder:text-gray-500"
            type="password"
            placeholder="Enter your password"
          />
          <button className="rounded-full border-none text-white outline-none w-full text-xl py-2 bg-emerald-500 font-bold placeholder:text-white mt-7">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
