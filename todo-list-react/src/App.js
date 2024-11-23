import React, { useState } from "react";
import Header from "./components/Header";
import TaskList from "./components/Tasklist";
import TaskForm from "./components/TaskForm";
import "./styles/styles.css";

const App = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [isModalOpen, setModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const saveTask = (task) => {
    if (editingTask) {
      setTasks((prevTasks) =>
        prevTasks.map((t) =>
          t.id === editingTask.id ? { ...t, ...task } : t
        )
      );
    } else {
      setTasks((prevTasks) => [
        ...prevTasks,
        { ...task, id: Date.now(), isChecked: false },
      ]);
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((t) => t.id !== id));
  };

  const toggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((t) =>
        t.id === id ? { ...t, isChecked: !t.isChecked } : t
      )
    );
  };

  return (
    <div className="App">
      <Header />
      <TaskList
        tasks={tasks}
        onEdit={(id) => {
          setEditingTask(tasks.find((t) => t.id === id));
          setModalOpen(true);
        }}
        onDelete={deleteTask}
        onToggle={toggleTask}
      />
      <TaskForm
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSave={saveTask}
        editingTask={editingTask}
      />
    </div>
  );
};

export default App;
