import React from "react";
import "./Login.css";
import logologin from "./logol.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="App">
      <div className="loginContainer">
        <img src={logologin} alt="logo" className="logos" />
        <p className="text">
          Bienvenue sur l'application <br />
          NOZ collaborateurs !
        </p>
        <div className="input-container">
          <input placeholder="email" type="text" name="uname" required />
        </div>
        <div className="input-container">
          <input type="password" placeholder="password" name="pass" required />
        </div>

        <button className="loginBut" onClick={handleClick}>
          <p>Se connecter</p>
        </button>
        <div className="signup">
          <p>
            Pas encore de compte ? <a href="SignUp">Inscrivez-vous...</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
