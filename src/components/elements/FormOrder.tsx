import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { z } from 'zod';
import { handleNameKeyDown, handlePhoneKeyDown } from '../validation';

export const FormDataVal = z.object({
  name: z.string(),
  phoneNumber: z.string(),
  paymentMethod: z.string()
});

const paymentOptions = [
  'Картой на сайте',
  'Картой в пиццерии',
  'Наличными'
];

const MyForm = () => {
  type FormData = z.infer<typeof FormDataVal>;

  const [formData, setFormData] = useState<FormData>({
    name: '',
    phoneNumber: '+375',
    paymentMethod: ''
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prevFormData => ({ ...prevFormData, paymentMethod: event.target.value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://your-server-endpoint.com/api/payment-method', formData);
      console.log('Server response:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='inputName'>
        <label className='field_text' htmlFor="name">Имя</label>
        <input className="field_input" type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} onKeyDown={handleNameKeyDown} />
      </div>
      <div className='inputName'>
        <label className='field_text' htmlFor="phoneNumber">Номер телефона</label>
        <input className="field_input" type="tel" id="phoneNumber" name="phoneNumber"
          value={formData.phoneNumber}
          onKeyDown={handlePhoneKeyDown}
          onChange={handleInputChange}
          maxLength={12} 
        />
      </div>
      <div className='history_con'>
        <p className="placing_an_order">Способ оплаты</p>
        <div className='checkbox_con'>
          {paymentOptions.map(option => (
            <div key={option} className="radio-option">
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value={option}
                  checked={formData.paymentMethod === option}
                  onChange={handleRadioChange}
                />
                {option}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className='btn_con_order'>
        <button className='back_btn'>Вернуться к корзине</button>
        <button className='placing_an_order_btn' type="submit">Оформить заказ</button>
      </div>
    </form>
  );
};

export default MyForm;
