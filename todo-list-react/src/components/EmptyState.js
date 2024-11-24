import React from "react";
import styles from "./EmptyState.module.css";

const EmptyState = () => (
  <div className={styles.emptyState}>
    <p className={styles.primeiroParagrafo}>
      Você ainda não criou nenhuma tarefa
    </p>
    <p className={styles.segundoParagrafo}>
      Não se preocupe, suas novas tarefas irão aparecer aqui.
    </p>
  </div>
);

export default EmptyState;
