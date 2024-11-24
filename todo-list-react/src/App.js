import React, { useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Modal from "./components/Modal";
import "./index.css";

const App = () => {
  const [editingTask, setEditingTask] = useState(null);

  return (
    <div className="app">
      <Header />
      <TodoList
        onEditTask={(task) => setEditingTask(task)}
      />
      {editingTask && (
        <Modal
          task={editingTask}
          onSave={(updatedTask) => {
            setEditingTask(null);
            // Save logic
          }}
          onClose={() => setEditingTask(null)}
        />
      )}
    </div>
  );
};

export default App;
