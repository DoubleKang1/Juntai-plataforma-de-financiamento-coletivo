// AdditionalRegistration.jsx
import React, { useState } from "react";
import "./AdditionalRegistration.css";

const AdditionalRegistration = ({ onAvancar }) => {
  const [tipoPessoa, setTipoPessoa] = useState("fisica");

  return (
    <div className="cadastro-complementar">
      <div className="progress-bar">
        <div className="progress-fill etapa-1"></div>
      </div>

      <h2>Só mais alguns dados ;)</h2>

      <div className="form-group">
        <label>Tipo de pessoa</label>
        <select
          value={tipoPessoa}
          onChange={(e) => setTipoPessoa(e.target.value)}
        >
          <option value="fisica">Física</option>
          <option value="juridica">Jurídica</option>
        </select>
      </div>

      <div className="form-group">
        <label>Telefone</label>
        <input type="tel" placeholder="(00) 00000-0000" />
      </div>

      {tipoPessoa === "fisica" ? (
        <>
          <div className="form-group">
            <label>CPF</label>
            <input type="text" placeholder="000.000.000-00" />
          </div>
          <div className="form-group">
            <label>Data de nascimento</label>
            <input type="date" />
          </div>
        </>
      ) : (
        <>
          <div className="form-group">
            <label>CNPJ</label>
            <input type="text" placeholder="00.000.000/0000-00" />
          </div>
          <div className="form-group">
            <label>Registro estadual</label>
            <input type="text" placeholder="Registro estadual" />
          </div>
        </>
      )}

      <div className="botoes">
        <button className="avancar" onClick={onAvancar}>Avançar</button>
      </div>
    </div>
  );
};

export default AdditionalRegistration;
