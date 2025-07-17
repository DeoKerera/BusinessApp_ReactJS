import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase.js";
import "../index.css";
import LoginIlu from "../images/login-ilu.png";
// import CreateAccount from "../pages/CreateAccount.jsx";
import { Link } from "react-router-dom";

import { FaShopify } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

function IconButton({ children, text, iconColor, ...props }) {
  return (
    <button
      {...props}
      className="text-lg border text-stone-600 flex justify-center items-center gap-x-2 w-full sm:w-1/2 py-3 text-blue my-3"
    >
      {children}
      <div className="font-semibold text-base text-gray-500">{text}</div>
    </button>
  );
}

function IconInput({ children, placeholder, type, value, onChange }) {
  return (
    <div className="flex items-center w-full h-12 border mt-4 px-3 rounded-md bg-white">
      <div className="mr-2 text-gray-500">{children}</div>
      <input
        type={type}
        placeholder={placeholder}
        className="flex-1 bg-transparent outline-none text-sm"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const provider = new GoogleAuthProvider();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
    } catch (error) {
      console.error(error);
      alert("Login failed");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      alert("Google login successful!");
    } catch (error) {
      console.error(error);
      alert("Google login failed");
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-screen bg-slate-50">
      <div className="form-container flex flex-col lg:flex-row w-full rounded-2xl overflow-hidden drop-shadow-xl border max-w-screen-xl">
        <div className="form-section w-full lg:w-1/2 px-6 sm:px-12 py-12">
          <div className="logo-wrap flex just-left gap-x-1 items-center">
            <FaShopify className="text-blue text-2xl" />
            <span>UGA Shop</span>
          </div>
          <h1 className="text-3xl font-semibold mt-6 opacity-80 text-neutral-900">
            Login to your UGA Shop Account
          </h1>
          <p className="text-black opacity-60 mt-3">
            Welcome back! Select method to login
          </p>
          <div className="auth-btns flex justify-between gap-x-5 mt-8 ">
            <IconButton text="Google" onClick={handleGoogleLogin}>
              <FcGoogle />
            </IconButton>
            <IconButton text="Apple">
              <FaApple />
            </IconButton>
          </div>
          <span className=" block text-center opacity-70 mt-6 mb-10 text-gray-800">
            or continue with Email and Password
          </span>

          <IconInput
            placeholder="Email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          >
            <MdOutlineMailOutline />
          </IconInput>

          <IconInput
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          >
            <RiLockPasswordLine />
          </IconInput>

          <div className="flex justify-between items-center mt-3">
            <div>
              <input type="checkbox" />
              <span className="text-neutral-500"> Remember me</span>
            </div>
            <div className="item">
              <a href="#" className="text-blue">
                Forgot Password
              </a>
            </div>
          </div>
          <p className="text-center mt-6 text-neutral-500">
            Don't have an account?
            <Link to="/signup" className="text-blue">
              {" "}
              Create an account
            </Link>
          </p>

          <button
            onClick={handleLogin}
            className="bg-blue text-white w-full py-3 rounded mt-5 text-xl"
          >
            Login
          </button>
        </div>

        <div className="illustration-section w-full lg:w-1/2 bg-blue hidden sm:block">
          <div className="illu-wrap">
            <img src={LoginIlu} alt="" />
          </div>
          <div className="bottom-section-wrap text-center">
            <h2 className="text-white text-2xl font-bold mb-1">
              UGA Shop is your all in one marketplace
            </h2>
            <p className="text-white mb-8">
              Everything you need easily accessible here!
            </p>
          </div>
          <div className="dots flex justify-center items-center gap-x-3 mb-8">
            <div className="dot w-2 h-2 bg-white rounded-2xl block"></div>
            <div className="dot w-2 h-2 bg-white rounded-2xl block"></div>
            <div className="dot w-2 h-2 bg-white rounded-2xl block"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
