import React, { useState } from 'react';
import "../../styles/style.css";
import Header from "../elements/Header";
import OrderTable from "../elements/History_of_order";
import { z } from 'zod';
import { handleNameKeyDown, handlePhoneKeyDown } from '../validation';

export const FormDataVal = z.object({
    name: z.string(),
    phoneNumber: z.string(),
    email: z.string()
});

const MyForm = () => {

    type FormData = z.infer<typeof FormDataVal>;

    const [formData, setFormData] = useState<FormData>({
        name: '',
        phoneNumber: '+375',
        email: ''
    });


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch('https://example.com/api/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const result = await response.json();
            console.log('Success:', result);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <body>
            <Header />
            <div className='container'>
                <p className="placing_an_order">Личный кабинет</p>
                <form onSubmit={handleSubmit}>
                    <div className='inputName'>
                        <label className='field_text' htmlFor="name">Имя</label>
                        <div className="form">
                            <input className="field_input" type="text" id="name" name="name" 
                            value={formData.name} 
                            onChange={handleChange} 
                            onKeyDown={handleNameKeyDown}/>
                            <button className='change_btn' type="submit">Изменить</button>
                        </div>
                    </div>
                    <div className='inputName'>
                        <label className='field_text' htmlFor="phoneNumber">Номер телефона</label>
                        <div className="form">
                            <input className="field_input" type="tel" id="phoneNumber" name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                onKeyDown={handlePhoneKeyDown}
                                maxLength={12}
                            />
                            <button className='change_btn' type="submit">Изменить</button>
                        </div></div>
                    <div className='inputName'>
                        <label className='field_text'>Электронная почта</label>
                        <div className='email'></div>
                    </div>

                </form>
                <div className='history_con'>
                    <p className="placing_an_order">История заказов</p>
                    <div className='checkbox_con'>
                        <OrderTable />
                    </div>
                </div>
                <button className='placing_an_order_btn' id="go_out_btn" >Выйти из аккаунта</button>
            </div>
        </body>
    );
};

export default MyForm;
