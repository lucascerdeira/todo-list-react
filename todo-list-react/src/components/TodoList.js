import React, { useState, useEffect } from "react";
import styles from "./TodoList.module.css";
import TodoItem from "./TodoItem";
import EmptyState from "./EmptyState";
import Modal from "./Modal";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tarefasLista")) || [];
    setTasks(storedTasks);
  }, []);

  const saveTasks = (updatedTasks) => {
    setTasks(updatedTasks);
    localStorage.setItem("tarefasLista", JSON.stringify(updatedTasks));
  };

  const addTask = (task) => {
    saveTasks([...tasks, { id: Date.now(), ...task, isChecked: false }]);
  };

  const editTask = (id, updatedTask) => {
    saveTasks(
      tasks.map((task) => (task.id === id ? { ...task, ...updatedTask } : task))
    );
    setEditingTask(null);
  };

  const deleteTask = (id) => {
    saveTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    saveTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isChecked: !task.isChecked } : task
      )
    );
  };

  const handleOpenModal = (task = null) => {
    setEditingTask(task); // Define a tarefa a ser editada (ou null para nova)
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setEditingTask(null);
    setIsModalOpen(false);
  };

  return (
    <section className={styles.tarefas}>
      <div className={styles.tarefasHeader}>
        <h1>Tarefas</h1>
      </div>
      {tasks.length === 0 ? (
        <EmptyState />
      ) : (
        <div className={styles.tarefasComConteudo}>
          {tasks.map((task) => (
            <TodoItem
              key={task.id}
              task={task}
              onDelete={deleteTask}
              onEdit={() => handleOpenModal(task)} // Abre modal para editar
              onToggle={toggleTask}
            />
          ))}
        </div>
      )}
      <button
        className={styles.tarefasBtnAdd}
        onClick={() => handleOpenModal()} // Reseta tarefa para adicionar nova
      >
        + Adicionar tarefas
      </button>

      {isModalOpen && (
        <Modal
          task={editingTask}
          onSave={(newTask) => {
            if (editingTask) {
              editTask(editingTask.id, newTask); // Edita tarefa
            } else {
              addTask(newTask); // Adiciona nova tarefa
            }
            handleCloseModal();
          }}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
};

export default TodoList;
