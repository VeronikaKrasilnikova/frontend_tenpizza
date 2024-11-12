import "../../styles/style.css";

import React, { useState } from 'react';
import HeaderAdmin from "../elements/HeaderAdmin";
import ProductsTableAdmin from "../elements/ProductsTableAdmin";
import Modal from './AddProductPage';


const MainPageAdmin = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const data = [
        { id: 1, product: 'Product1', price: 'Price 1', description: 'Description 1' },
        { id: 2, product: 'Product2', price: 'Price 2', description: 'Description 2' },
    ];

    
    return (
        <body>
            <HeaderAdmin />
            <div className="container_block">
                <div className="nav_row">
                    <div className="sequence_of_pages">
                    <a href="/assortment"><p>Категории</p></a>
                        <img src="/src/image/arrow_next.svg" alt="delete" />
                        <p>Пиццы</p>
                    </div>
                    <input type="text" placeholder="Поиск" className="search_container" /></div>
            </div>
            <ProductsTableAdmin products={data} />
            <button className="account_button" id="add_button" onClick={openModal}>Добавить товар</button>
            <Modal isOpen={isModalOpen} onClose={closeModal} />
        </body>
    );
}

export default MainPageAdmin;