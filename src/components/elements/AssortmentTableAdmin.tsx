import React, { useState } from 'react';
import {handleNameKeyDown } from '../validation';

type Product = {
    id: number;
    category: string;
    count: number;
};

type ProductsTableAdminProps = {
    products: Product[];
};

const ProductsTableAdmin: React.FC<ProductsTableAdminProps> = ({ products }) => {
    const [data, setData] = useState(products);
    const [editingId, setEditingId] = useState<number | null>(null); 
    const [editFormData, setEditFormData] = useState<Partial<Product>>({}); 

    
    const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEditFormData({ ...editFormData, [name]: value });
    };

    const handleSaveEdit = (id: number) => {
        const newData = data.map(item => {
            if (item.id === id) {
                return { ...item, ...editFormData };
            }
            return item;
        });
        setData(newData);
        setEditingId(null); 
        setEditFormData({});
    };

    const handleCancelEdit = () => {
        setEditingId(null);
        setEditFormData({});
    };

    if (!data) {
        return null; 
    }

    return (
        <div className="table_container">
            <table className="table_orders" id="table_assortment">
                <thead>
                    <tr>
                        <th>Название категории</th>
                        <th>Количество товаров</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row) => (
                        <tr key={row.id}>
                            <td>
                                {editingId === row.id ? (
                                    <input
                                        className='log_input'
                                        id='edit_input'
                                        type="text"
                                        name="category"
                                        value={editFormData.category || row.category} 
                                        onChange={handleEditChange}
                                        onKeyDown={handleNameKeyDown}
                                    />
                                ) : (
                                    row.category
                                )}
                            </td>
                            <td>{row.count}</td>
                            <td>
                                {editingId === row.id ? (
                                    <>
                                        <button className="save_button" onClick={() => handleSaveEdit(row.id)}>Сохранить</button>
                                        <button className="save_button" onClick={handleCancelEdit}>Отмена</button>
                                    </>
                                ) : (
                                    <button
                                        className="edit_button"
                                        onClick={() => {
                                            setEditingId(row.id);
                                            setEditFormData({ ...row }); 
                                        }}
                                    >
                                        Редактировать
                                    </button>
                                )}
                            </td>
                            <td>
                                <button className="delete_button">
                                    <img src="/src/image/delete_button.svg" alt="delete" />
                                </button>
                            </td>
                            <td><a href="/products">
                                <button className="catalog_button">
                                    <img src="/src/image/catalog.svg" alt="delete" />
                                </button></a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductsTableAdmin;
