import React, { useContext } from "react";
import { AuthContext } from "../authContext";
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const { authenticate } = useContext(AuthContext);
  const navigate = useNavigate();

  const login = () => {
    const password = Math.random().toString(36).substring(7);
    authenticate('user1', password);
    navigate('/fantasy');
  };

  return (
    <>
      <h2>Login page</h2>
      <p>You must log in to view the protected pages </p>
      <button onClick={login}>Submit</button>
    </>
  );
};

export default LoginPage;
