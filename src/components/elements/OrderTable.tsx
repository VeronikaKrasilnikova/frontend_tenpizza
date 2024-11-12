import React, { useState } from 'react';

interface DataRow {
    id: number;
    productName: string;
    quantity: number;
    price: string;
}

const AssortmentTableAdmin = () => {
    const initialData: DataRow[] = [
        { id: 1, productName: 'острая', quantity: 1, price: '23,49 руб.' },
        { id: 2, productName: 'сладкая', quantity: 1, price: '25,99 руб.' },
    ];

    const [data, setData] = useState<DataRow[]>(initialData);

    const handleIncrease = (id: number) => {
        setData((prevData) =>
            prevData.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const handleDecrease = (id: number) => {
        setData((prevData) =>
            prevData.map((item) =>
                item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
            )
        );
    };

    const handleDelete = (id: number) => {
        setData((prevData) => prevData.filter((item) => item.id !== id));
    };

    return (
        <div className="table_order_cart_container">
            <table id="table_cart_orders">
            
                <tbody>
                    {data.map((row) => (
                        <tr key={row.id}>
                            <td>{row.productName}</td>
                            <td>
                                <button className="count" onClick={() => handleDecrease(row.id)}>
                                    <img src="/src/image/minus.svg" alt="decrease" />
                                </button>
                            </td>
                            <td>{row.quantity}</td>
                            <td>
                                <button className="count" onClick={() => handleIncrease(row.id)}>
                                    <img src="/src/image/plus.svg" alt="increase" />
                                </button>
                            </td>
                            <td>{row.price}</td>
                            <td>
                                <button className="delete_button" onClick={() => handleDelete(row.id)}>
                                    <img src="/src/image/delete.svg" alt="delete" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AssortmentTableAdmin;
