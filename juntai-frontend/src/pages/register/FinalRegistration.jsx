import React, { useState } from "react";
import "./FinalRegistration.css";

const FinalRegistration = ({ onVoltar, onConfirmar }) => {
  const [fotoPerfil, setFotoPerfil] = useState(null);

  const handleFotoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFotoPerfil(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className="final-cadastro">
      <h2>Finalize seu cadastro</h2>

      <div className="form-group">
        <label>CEP</label>
        <input type="text" placeholder="00000-000" />
      </div>

      <div className="form-group">
        <label>Endereço</label>
        <input type="text" placeholder="Rua, Avenida, etc." />
      </div>

      <div className="form-group">
        <label>Número da casa</label>
        <input type="text" placeholder="Número" />
      </div>

      <div className="form-group">
        <label>Bairro</label>
        <input type="text" placeholder="Bairro" />
      </div>

      <div className="form-group">
        <label>Cidade</label>
        <input type="text" placeholder="Cidade" />
      </div>

      <div className="form-group">
        <label>Estado</label>
        <input type="text" placeholder="Estado" />
      </div>

      <div className="form-group">
        <label>País</label>
        <input type="text" placeholder="País" />
      </div>

      <div className="form-group foto-perfil-group">
        <label>Foto de perfil</label>
        <input type="file" accept="image/*" onChange={handleFotoChange} />
        {fotoPerfil && (
          <img
            src={fotoPerfil}
            alt="Foto de perfil"
            className="preview-foto-perfil"
          />
        )}
      </div>

      <div className="botoes">
        <button className="btn-voltar" onClick={onVoltar}>
          Voltar
        </button>
        <button className="btn-confirmar" onClick={onConfirmar}>
          Confirmar
        </button>
      </div>
    </div>
  );
};

export default FinalRegistration;
