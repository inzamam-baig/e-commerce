import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Login = ({ user, validUser }) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordFilled, setPasswordFilled] = useState(true);
  const [userFilled, setUserFilled] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(username === ""){
      setUserFilled(false);
    }else if(password === ""){
      setPasswordFilled(false);
    }
    else{
      setUserFilled(true);
      setPasswordFilled(true);
      validUser(username, password);
    }
  };
  return (
    <>
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-10">
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username 
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <p
            class="text-red-500 text-xs italic"
            style={{ display: userFilled ? "None" : "block" }}
          >
            Please enter a username
          </p>
        </div>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            class="shadow apperance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p
            class="text-red-500 text-xs italic"
            style={{ display: passwordFilled ? "None" : "block" }}
          >
            Please enter a password
          </p>
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleSubmit}
          >
            Sign In
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
