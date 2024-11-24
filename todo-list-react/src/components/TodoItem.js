import React from "react";
import styles from "./TodoItem.module.css";
import editIcon from "../assets/images/edit.svg";
import trashIcon from "../assets/images/trash.svg";

const TodoItem = ({ task, onDelete, onEdit, onToggle }) => (
  <div className={styles.tarefa}>
    <input
      type="checkbox"
      checked={task.isChecked}
      onChange={() => onToggle(task.id)}
      className={styles.checkbox}
    />
    <div
      className={`${styles.tarefaConteudo} ${
        task.isChecked ? styles.checked : ""
      }`}
    >
      <span>{task.titulo}</span>
      <span>{task.descricao}</span>
    </div>
    <div className={styles.tarefaAcoes}>
      <button onClick={() => onEdit(task.id)}>
        <img src={editIcon} alt="Editar" />
      </button>
      <button onClick={() => onDelete(task.id)}>
        <img src={trashIcon} alt="Deletar" />
      </button>
    </div>
  </div>
);

export default TodoItem;
