import React, { useState } from 'react';
import "../../styles/style.css";
import { submitProduct } from '../api';
import { handlePriceKeyDown, handleDescriptionKeyDown, handleNameKeyDown } from '../validation';
import { z } from 'zod';

export const FormDataVal = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number()
});


type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  
  type FormData = z.infer<typeof FormDataVal>;

  const [formData, setFormData] = useState<FormData>({
    name: '',
    description: '',
    price: 0
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'price' ? (value === '' ? '' : parseFloat(value)) : value
    });
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      FormDataVal.parse(formData); // Validate formData using zod schema
      await submitProduct(formData);
      console.log('Product submitted successfully');
    } catch (error) {
      console.error('Error submitting product:', error);
    }
  };

  const handleAddProduct = () => {
    onClose();
  };

  return (
    <div className="modal" onClick={handleOutsideClick}>
      <div className="modal-content">
        <div id="modal_admin">
          <p className="heading_log">Добавить новый товар</p>
          <form className="form_con" onSubmit={handleFormSubmit}>
            <div className='inputName'>
              <input
                className="log_input"
                placeholder="Название"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onKeyDown={handleNameKeyDown}
              />
            </div>
            <div className='inputName'>
              <input
                className="log_input"
                placeholder="Описание"
                type="text"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                onKeyDown={handleDescriptionKeyDown}
              />
            </div>
            <div className='inputName'>
              <input
                className="log_input"
                placeholder="Цена"
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                onKeyDown={handlePriceKeyDown}
                step="0.01"
              />
            </div>
            <button
              className="account_button"
              id="add_product_button"
              type="submit"
              onClick={handleAddProduct}
            >
              Добавить товар
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
