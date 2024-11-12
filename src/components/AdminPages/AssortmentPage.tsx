import "../../styles/style.css";
import React, { useState } from 'react';
import HeaderAdmin from "../elements/HeaderAdmin";
import AssortmentTableAdmin from "../elements/AssortmentTableAdmin";
import Modal from "./AddCategory";

const AssortmentPageAdmin = ({ className = '' }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const data = [
        { id: 1, category: 'Product1', count: 'Count 1' },
        { id: 2, category: 'Product2', count: 'Count 2' },
    ];

    return (
        <body>
            <HeaderAdmin />
            <AssortmentTableAdmin products={data} />
            <button className="account_button" id="add_button" onClick={openModal}>Добавить категорию</button>
            <Modal isOpen={isModalOpen} onClose={closeModal} />
        </body>
    );
};

export default AssortmentPageAdmin;