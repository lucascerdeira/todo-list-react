import React, { useState } from 'react';
import Logo from './components/layouts/Logo';
import SemTarefas from './components/pages/SemTarefas';
import ModalAddTarefa from './components/pages/ModalAddTarefa';
import './index.css';

function App() {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <div>
            <Logo />
            <SemTarefas onAddTaskClick={handleOpenModal} />
            <ModalAddTarefa isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
    );
}

export default App;
