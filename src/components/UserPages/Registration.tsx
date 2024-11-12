import React, { useState } from 'react';
import '../../image/cross.svg';
import { registerUser } from '../api';
import { z } from 'zod';
import { handleNameKeyDown, handleEmailKeyDown, handlePhoneKeyDown } from '../validation';

export const FormDataVal = z.object({
  name: z.string(),
  phoneNumber: z.string(),
  email: z.string(),
  password: z.string(),
});

interface FormRegProps {
  isOpen: boolean;
  onClose: () => void;
  onRegisterSuccess: () => void;
}

const FormReg: React.FC<FormRegProps> = ({ isOpen, onClose, onRegisterSuccess }) => {
  type FormData = z.infer<typeof FormDataVal>;

  const [formData, setFormData] = useState<FormData>({
    name: '',
    phoneNumber: '+375',
    email: '',
    password: '',
  });

  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.password !== confirmPassword) {
      setErrorMessage('Пароли не совпадают');
      return;
    }
    setErrorMessage(''); // Clear the error message if passwords match
    await registerUser(formData);
    onRegisterSuccess();
  };

  return (
    <div className="modal" onClick={handleOutsideClick}>
      <div className="modal-content">
        <div id="reg">
          <p className="heading_log">Регистрация</p>
          <form className="form_con" onSubmit={handleFormSubmit}>
            <div className='inputName'>
              <input
                className="log_input"
                placeholder="Имя"
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
                placeholder="Номер телефона"
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onKeyDown={handlePhoneKeyDown}
                onChange={handleChange}
                maxLength={12}
              />
            </div>
            <div className='inputName'>
              <input
                className="log_input"
                placeholder="Логин"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onKeyDown={handleEmailKeyDown}
              />
            </div>
            <div className='inputName'>
              <input
                className="log_input"
                placeholder="Пароль"
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                minLength={6}
              />
            </div>
            <div className='inputName'>
              <input
                className="log_input"
                placeholder="Повторите пароль"
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                minLength={6}
              />
            </div>
            {errorMessage && <p className="error_message">{errorMessage}</p>}
            <button className="account_button" id="reg_btn" type="submit">Зарегистрироваться</button>
          </form>
          <button onClick={onClose}>
            <img className='cross' src="/src/image/cross.svg" alt="закрыть" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormReg;
