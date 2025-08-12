// src/pages/register/Register.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  return (
    <div className="register-background">
      <div className="register-box">
        <div className="register-content">
          <h2 className="register-title">Cadastro</h2>

         <form className="register-form">
  <div className="form-group-row">
    <div className="form-group">
      <label>Nome</label>
      <input type="text" placeholder="Digite seu nome" />
    </div>
    <div className="form-group">
      <label>Sobrenome</label>
      <input type="text" placeholder="Digite seu sobrenome" />
    </div>
  </div>

  <div className="form-group">
    <label>E-mail</label>
    <input type="email" placeholder="Digite seu e-mail" />
  </div>

  <div className="form-group password-group">
    <label>Senha</label>
    <input type="password" placeholder="Digite sua senha" />
    <span className="password-icon">👁</span>
  </div>

  <div className="form-group password-group">
    <label>Confirme sua senha</label>
    <input type="password" placeholder="Confirme sua senha" />
    <span className="password-icon">👁</span>
  </div>

  <div className="form-group">
    <div id="recaptcha"></div>
  </div>

  <div className="form-group terms">
  <label>
    <input type="checkbox" />
    Eu li e concordo com os termos de uso e a política de privacidade
  </label>
</div>

  <button type="submit" className="btn-register">Cadastrar</button>

  <p className="login-text">
    Já possui uma conta? <Link to="/login">Entrar</Link>
  </p>
</form>
        </div>
      </div>
    </div>
  );
};

export default Register;
