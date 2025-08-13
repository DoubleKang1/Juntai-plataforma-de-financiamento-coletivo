import React, { useState } from "react";
import "./CreateCampaign.css";

const CreateCampaign = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    goal: "",
    startDate: "",
    endDate: "",
    ageRange: "",
    category: "",
    images: [],
  });

  const [modal, setModal] = useState({ visible: false, action: "" });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "images") {
      setFormData({ ...formData, images: Array.from(files) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (action) => {
    setModal({ visible: true, action });
  };

  const handleConfirm = () => {
    if (modal.action === "create") {
      console.log("Criando campanha:", formData);
      // Aqui você pode integrar com API
    } else {
      console.log("Cancelando cadastro");
      // Resetar formulário ou redirecionar
      setFormData({
        title: "",
        description: "",
        goal: "",
        startDate: "",
        endDate: "",
        ageRange: "",
        category: "",
        images: [],
      });
    }
    setModal({ visible: false, action: "" });
  };

  const handleCloseModal = () => setModal({ visible: false, action: "" });

  return (
    <div className="campaign-page">
      <div className="campaign-form-container">
        <h1>Criar campanha</h1>
        <form>
          <label>
            Título:
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </label>

          <label>
            Descrição:
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </label>

          <label>
            Valor da meta:
            <input
              type="number"
              name="goal"
              value={formData.goal}
              onChange={handleChange}
            />
          </label>

          <label>
            Data de início:
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
            />
          </label>

          <label>
            Data de fim:
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
            />
          </label>

          <label>
            Faixa etária:
            <select
              name="ageRange"
              value={formData.ageRange}
              onChange={handleChange}
            >
              <option value="">Selecione</option>
              <option value="0-12">0-12 anos</option>
              <option value="13-18">13-18 anos</option>
              <option value="19-25">19-25 anos</option>
              <option value="26-40">26-40 anos</option>
              <option value="40+">40+ anos</option>
            </select>
          </label>

          <label>
            Categoria:
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
            />
          </label>

          <label>
            Imagens:
            <input
              type="file"
              name="images"
              multiple
              onChange={handleChange}
            />
          </label>

          <div className="button-group">
            <button
              type="button"
              className="cancel-btn"
              onClick={() => handleSubmit("cancel")}
            >
              Cancelar
            </button>
            <button
              type="button"
              className="create-btn"
              onClick={() => handleSubmit("create")}
            >
              Criar
            </button>
          </div>
        </form>
      </div>

      {modal.visible && (
        <div
    className="modal-overlay"
    onClick={handleCloseModal} // clique fora fecha o modal
  >
    <div
      className="modal"
      onClick={(e) => e.stopPropagation()} // evita fechar ao clicar dentro do modal
    >
      <p>
        {modal.action === "create"
          ? "Deseja realmente criar a campanha?"
          : "Deseja realmente cancelar?"}
      </p>
      <div className="modal-buttons">
        <button className="cancel-btn" onClick={handleCloseModal}>
          Não
        </button>
        <button className="create-btn" onClick={handleConfirm}>
          Sim
        </button>
      </div>
    </div>
  </div>
      )}
    </div>
  );
};

export default CreateCampaign;
