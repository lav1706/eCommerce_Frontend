import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../redux/Apicalls";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <div className="w-screen h-screen relative ">
      <img
        src="https://images.unsplash.com/photo-1622101865681-91085c46c890?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="w-screen h-screen bg-cover flex items-center justify-center;
        background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
      ) z-0 "
      />
      <div className="absolute z-30 w-2/5 p-5 bg-blue-200 top-[15%] left-[30%] mobile:w-4/5 mobile:left-[10%]">
        <h1 className="text-2xl font-light">SIGN IN</h1>
        <form className="flex flex-col">
          <input
            placeholder="username"
            type="text"
            className="flex-1 min-w-[40%] mx-0 my-2.5 p-2.5"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            placeholder="password"
            type="password"
            className="flex-1 min-w-[40%] mx-0 my-2.5 p-2.5"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="w-2/5 bg-[teal] text-[white] cursor-pointer mb-2.5 px-5 py-[15px] border-[none]"
            onClick={handleClick}
            disabled={isFetching}
          >
            LOGIN
          </button>
          {error && (
            <span className="text-red-600">Something went wrong...</span>
          )}
          <Link
            to="#"
            className="text-xs underline cursor-pointer mx-0 my-[5px]"
          >
            DO NOT YOU REMEMBER THE PASSWORD?
          </Link>
          <Link
            to="/register"
            className="text-xs underline cursor-pointer mx-0 my-[5px]"
          >
            CREATE A NEW ACCOUNT
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
