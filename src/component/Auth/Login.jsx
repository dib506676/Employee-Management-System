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
    <div className="flex min-h-screen w-full items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-md rounded-xl border-2 border-emerald-500 p-6 sm:p-8 md:p-12 lg:p-20">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center space-y-4 sm:space-y-6"
        >
          <input
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
            value={email}
            required
            className="w-full rounded-full text-white outline-none bg-transparent text-base sm:text-lg lg:text-xl px-4 sm:px-5 py-2 sm:py-3 border-emerald-600 border-2 placeholder:text-gray-500"
            type="email"
            placeholder="Enter your email"
          />
          <input
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
          value={password}
            className="w-full rounded-full text-white outline-none bg-transparent text-base sm:text-lg lg:text-xl px-4 sm:px-5 py-2 sm:py-3 border-emerald-500 border-2 placeholder:text-gray-500"
            type="password"
            placeholder="Enter your password"
          />
          <button className="w-full rounded-full border-none text-white outline-none text-base sm:text-lg lg:text-xl py-2 sm:py-3 bg-emerald-500 hover:bg-emerald-600 transition-colors duration-200 font-bold mt-4 sm:mt-6 lg:mt-7">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
