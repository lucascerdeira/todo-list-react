import React, { useState, useEffect } from "react";
import styles from "./Modal.module.css";

const Modal = ({ task, onSave, onClose }) => {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");

  useEffect(() => {
    if (task) {
      setTitulo(task.titulo || "");
      setDescricao(task.descricao || "");
    } else {
      setTitulo("");
      setDescricao("");
    }
  }, [task]);

  const handleSave = () => {
    if (!titulo.trim()) {
      alert("O campo 'Nome' é obrigatório.");
      return;
    }
    onSave({ titulo, descricao });
  };

  return (
    <div className={`${styles.navBar} ${styles.open}`}>
      <div className={styles.navBarConteudo}>
        <button className={styles.navBarBtnFechar} onClick={onClose}>
          Fechar
        </button>
        <form className={styles.navBarForms}>
          <div>
            <label htmlFor="tarefa_nome">Nome: </label>
            <input
              type="text"
              id="tarefa_nome"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="tarefa_descricao">Descrição (Opcional)</label>
            <textarea
              id="tarefa_descricao"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
          </div>
          <div className={styles.buttons}>
            <button type="button" onClick={onClose} className={styles.cancel}>
              Fechar
            </button>
            <button type="button" onClick={handleSave} className={styles.save}>
              Salvar Tarefa
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
