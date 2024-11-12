import "../../styles/style.css";
import React, { useState } from 'react';
import { loginAdmin } from '../api';

const LoginAdmin = () => {
  interface FormData {
    email: string;
    password: string;
  }

  const [formData, setFormData] = useState<FormData>({ email: '', password: '' });
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Проверка длины пароля
    if (name === 'password') {
      if (value.length < 8) {
        setErrors((prevErrors) => ({ ...prevErrors, password: 'Пароль должен быть не менее 8 символов' }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, password: undefined }));
      }
    }
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Проверка перед отправкой
    const newErrors: {password?: string } = {};

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
  };

  return (
    <div className="log_container">
      <a className="logo" href="">
        <img src="/src/image/logo.svg" alt="logo" />
      </a>
      <form className="login_form" onSubmit={handleFormSubmit}>
        <p className="heading_log">Войти в учетную запись</p>
        
        <div className='inputName'>
          <input
            className="log_input"
            placeholder="Логин"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
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
          />
          {errors.password && <p className="error_message">{errors.password}</p>}
        </div>

        <a href="/admins"><button className="account_button" id="enter_button">Войти</button></a>
      </form>
    </div>
  );
}

export default LoginAdmin;
