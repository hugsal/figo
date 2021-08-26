import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";

import { startLoginEmailPassword } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";

import "./loginScreen.css";

export const LoginScreen = () => {
  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    email: "",
    password: "",
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLoginEmailPassword(email, password));
  };

  return (
    <>
      <h3 className="auth__title">Login</h3>

      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Email"
          name="email"
          className="auth__input"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input"
          value={password}
          onChange={handleInputChange}
        />
        <button type="submit" className="btn btn-primary btn-block">
          Login
        </button>
        <br />
        <br />
        <Link to="/auth/register" className="link">
          Create new account
        </Link>
      </form>
    </>
  );
};
