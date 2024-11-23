import React from "react";
import TaskItem from "./TaskItem";
import "./TaskList.css";

const TaskList = ({ tasks, onEdit, onDelete, onToggle }) => {
  return (
    <section className="task-list">
      <div className="task-list-header">
        <h1>Tarefas</h1>
      </div>
      {tasks.length === 0 ? (
        <div className="no-tasks">
          <p className="first-paragraph">Você ainda não criou nenhuma tarefa</p>
          <p className="second-paragraph">Não se preocupe, suas novas tarefas irão aparecer aqui.</p>
        </div>
      ) : (
        <div className="tasks-container">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onEdit={onEdit}
              onDelete={onDelete}
              onToggle={onToggle}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default TaskList;
