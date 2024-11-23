import React, { useState } from 'react';
import styles from './ModalAddTarefa.module.css';
import closeIcon from '../../images/Close.svg';

function ModalAddTarefa({ isOpen, onClose, onSave }) {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');

    const handleSave = () => {
        if (titulo.trim() === "") {
            alert("O campo 'Nome' é obrigatório.");
            return;
        }
        const novaTarefa = { id: Date.now(), titulo, descricao, isChecked: false };
        onSave(novaTarefa);
        setTitulo('');
        setDescricao('');
    };

    return (
        <div className={`${styles.navBar} ${isOpen ? styles.open : ''}`}>
            <div className={styles.navBarConteudo}>
                <button className={styles.navBarBtnFechar} onClick={onClose}>
                    <img src={closeIcon} alt="Fechar" />
                </button>
                <form className={styles.navBarForms} onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <label htmlFor="tarefa_nome">Nome</label>
                        <input
                            type="text"
                            id="tarefaNome"
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="tarefa_descricao">Descrição (Opcional)</label>
                        <textarea
                            id="tarefaDescricao"
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                        ></textarea>
                    </div>
                    <div>
                        <button type="button" className={styles.tarefaBtnFechar} onClick={onClose}>Fechar</button>
                        <button type="button" className={styles.tarefaBtnSalvar} onClick={handleSave}>Salvar Tarefa</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ModalAddTarefa;
