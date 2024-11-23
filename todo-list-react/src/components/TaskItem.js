import React from "react";
import "./TaskItem.css";
import editIcon from "../assets/images/edit.svg";
import deleteIcon from "../assets/images/trash.svg";

const TaskItem = ({ task, onEdit, onDelete, onToggle }) => {
  return (
    <div className="task-item">
      <input
        type="checkbox"
        checked={task.isChecked}
        onChange={() => onToggle(task.id)}
      />
      <div className={`task-content ${task.isChecked ? "checked" : ""}`}>
        <span>{task.titulo}</span>
        <span>{task.descricao}</span>
      </div>
      <div className="task-actions">
        <button onClick={() => onEdit(task.id)}>
          <img src={editIcon} alt="Editar" />
        </button>
        <button onClick={() => onDelete(task.id)}>
          <img src={deleteIcon} alt="Deletar" />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
