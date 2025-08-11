// src/pages/login/Login.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import fundo from '../../assets/8580721.jpg'

const Login = () => {
  return (
    <div className="login-background">
      <div className="login-box">
        <div className="login-content">
          <h2 className="login-title">Entrar</h2>

          <form className="login-form">
            <div className="form-group">
              <label>E-mail</label>
              <input type="email" placeholder="Digite seu e-mail" />
            </div>

            <div className="form-group">
              <label>Senha</label>
              <input type="password" placeholder="Digite sua senha" />
            </div>

            <button type="submit" className="btn-login">
              Entrar
            </button>
          </form>

          <p className="forgot-password">Esqueceu sua senha?</p>

          <p className="signup-text">
            Não tem uma conta? <span><Link to="/register">Criar conta</Link></span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;