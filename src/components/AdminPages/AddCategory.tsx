import React, { useState } from 'react';
import "../../styles/style.css";
import { submitCategory } from '../api';
import {handleNameKeyDown } from '../validation';
import {z} from 'zod';

export const FromDataVal= z.object({
  name: z.string()
});

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};


const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log('Clicked outside');
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  type FormData = z.infer<typeof FromDataVal>;

  const [formData, setFormData] = useState<FormData>({
    name: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value 
    });
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await submitCategory(formData);
  };

  const handleAddProduct = () => {
    onClose();
  };

  return (
    <div className="modal" onClick={handleOutsideClick}>
      <div className="modal-content" id="categoty_admin">
        <div id="modal_admin">
          <p className="heading_log">Добавить новую категорию</p>
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
            <button
              className="account_button"
              id="add_product_button"
              type="submit"
              onClick={handleAddProduct}
            >
              Добавить категорию
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
