import React from 'react';
import styles from './SemTarefas.module.css';
import addImage from '../../images/add.svg';

function SemTarefas({ onAddTaskClick }) {
    return (
        <section className={styles.tarefas}>
            <div className={styles.tarefasHeader}>
                <h1>Tarefas</h1>
            </div>
            <div className={styles.tarefasSemConteudo}>
                <p className={styles.primeiroParagrafo}>Você ainda não criou nenhuma tarefa</p>
                <p className={styles.segundoParagrafo}>Não se preocupe, suas novas tarefas irão aparecer aqui.</p>
            </div>
            <button className={styles.tarefasBtnAdd} onClick={onAddTaskClick}>
                <img src={addImage} alt="" />
                <span>Adicionar tarefas</span>
            </button>
        </section>
    );
}

export default SemTarefas;
