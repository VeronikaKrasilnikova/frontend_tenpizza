import React, { useState } from 'react';
import FormReg from './Registration';
import { loginUser } from '../api';
import { z } from 'zod';
import { handleEmailKeyDown } from '../validation';

export const FormDataVal = z.object({
  email: z.string(),
  password: z.string(),
});

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: () => void;
  onRegisterSuccess: () => void;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onLoginSuccess, onRegisterSuccess }) => {
  const [isRegModalOpen, setIsRegModalOpen] = useState(false);

  const openRegModal = () => {
    setIsRegModalOpen(true);
    onClose();
  };

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  type FormData = z.infer<typeof FormDataVal>;

  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: ''
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
    await loginUser(formData);
  };

  return (
    <>
      {isOpen && (
        <div className="modal" onClick={handleOutsideClick}>
          <div className="modal-content">
            <div id="log_in">
              <p className="heading_log">Войти в учетную запись</p>
              <form className="form_con" onSubmit={handleFormSubmit}>
                <div className='inputName'>
                  <input className="log_input" placeholder="Логин" type="email" id="email" name="email" value={formData.email}
                    onKeyDown={handleEmailKeyDown} onChange={handleChange} />
                </div>
                <div className='inputName'>
                  <input className="log_input" placeholder="Пароль" type="password" id="password" name="password" value={formData.password}
                    onKeyDown={handleEmailKeyDown} onChange={handleChange} minLength={6} />
                </div>
                <button className="account_button" id="login_button" type="submit">Войти</button>
              </form>
              <div className='ckeck_in_con'>
                <span className='check_in_text'>Впервые на сайте?</span>
                <button onClick={openRegModal} className="account_button" id="check_in_btn">Зарегистрироваться</button>
              </div>
            </div>
          </div>
        </div>
      )}
      {isRegModalOpen && (
        <FormReg
          isOpen={isRegModalOpen}
          onClose={() => setIsRegModalOpen(false)}
          onRegisterSuccess={onRegisterSuccess}
        />
      )}
    </>
  );
};

export default Modal;
