import React, { useState } from 'react';
import { handlePriceKeyDown, handleDescriptionKeyDown, handleNameKeyDown } from '../validation';

type Product = {
    id: number;
    product: string;
    price: number | '';
    description: string;
};

type ProductsTableAdminProps = {
    products: Product[];
};

const ProductsTableAdmin: React.FC<ProductsTableAdminProps> = ({ products }) => {
    const [data, setData] = useState(products);
    const [editingId, setEditingId] = useState<number | null>(null);
    const [editFormData, setEditFormData] = useState<Product>({
        id: 0,
        product: '',
        price: '',
        description: ''
    });

    // Обработчик изменения данных при редактировании
    const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEditFormData({ ...editFormData, [name]: value });
    };

    // Обработчик сохранения изменений
    const handleSaveEdit = (id: number) => {
        const newData = data.map(item => {
            if (item.id === id) {
                return { ...item, ...editFormData };
            }
            return item;
        });
        setData(newData);
        setEditingId(null); 
        setEditFormData({ id: 0, product: '', price: '', description: '' }); 
    };

    // Обработчик отмены редактирования
    const handleCancelEdit = () => {
        setEditingId(null); 
        setEditFormData({ id: 0, product: '', price: '', description: '' }); 
    };

    if (!data) {
        return null;
    }

    return (
        <div className="table_container">
            <table className="table_orders" id="table_products">
                <thead>
                    <tr>
                        <th>Название товара</th>
                        <th>Стоимость</th>
                        <th>Описание</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row) => (
                        <tr key={row.id}>
                            <td>{editingId === row.id ? (
                                <input className='log_input' id='edit_input'
                                    type="text"
                                    name="product"
                                    value={editFormData.product}
                                    onChange={handleEditChange}
                                    onKeyDown={handleNameKeyDown}
                                />
                            ) : row.product}</td>
                            <td>{editingId === row.id ? (
                                <input className='log_input' id='edit_input'
                                    type="number"
                                    name="price"
                                    value={editFormData.price}
                                    onChange={handleEditChange}
                                    onKeyDown={handlePriceKeyDown}
                                    step="0.01"
                                />
                            ) : row.price}</td>
                            <td>{editingId === row.id ? (
                                <input className='log_input' id='edit_input'
                                    type="text"
                                    name="description"
                                    value={editFormData.description}
                                    onChange={handleEditChange}
                                    onKeyDown={handleDescriptionKeyDown}
                                />
                            ) : row.description}</td>
                            <td>
                                {editingId === row.id ? (
                                    <>
                                        <button className="save_button" onClick={() => handleSaveEdit(row.id)}>Сохранить</button>
                                        <button className="save_button" onClick={handleCancelEdit}>Отмена</button>
                                    </>
                                ) : (
                                    <button className="edit_button" onClick={() => {
                                        setEditingId(row.id);
                                        setEditFormData({ ...row });
                                    }}>Редактировать</button>
                                )}
                            </td>
                            <td><button className="delete_button"><img src="/src/image/delete_button.svg" alt="delete" /></button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductsTableAdmin;
