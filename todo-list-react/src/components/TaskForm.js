import React, { useState, useEffect } from "react";
import "./TaskForm.css";

const TaskForm = ({ isOpen, onClose, onSave, editingTask }) => {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");

  useEffect(() => {
    if (editingTask) {
      setTitulo(editingTask.titulo);
      setDescricao(editingTask.descricao);
    } else {
      setTitulo("");
      setDescricao("");
    }
  }, [editingTask]);

  const handleSubmit = () => {
    if (!titulo.trim()) {
      alert("O campo 'Nome' é obrigatório.");
      return;
    }
    onSave({ titulo, descricao });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{editingTask ? "Editar Tarefa" : "Adicionar Tarefa"}</h2>
        <label>Nome</label>
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <label>Descrição</label>
        <textarea
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        ></textarea>
        <div className="actions">
          <button onClick={onClose}>Fechar</button>
          <button onClick={handleSubmit}>Salvar</button>
        </div>
      </div>
    </div>
  );
};

export default TaskForm;
