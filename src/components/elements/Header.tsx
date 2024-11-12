import React, { useState } from 'react';
import Modal from '../UserPages/LoginModal';
import CartModal from '../UserPages/CartModal';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const openLoginModal = () => setIsModalOpen(true);
  const closeLoginModal = () => setIsModalOpen(false);

  const openCartModal = () => setIsCartModalOpen(true);
  const closeCartModal = () => setIsCartModalOpen(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    closeLoginModal();
  };

  const handleRegisterSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const handleNavClick = (hash: string) => {
    if (window.location.pathname !== '/') {
      window.location.href = `/${hash}`;
    } else {
      window.location.hash = hash;
    }
  };

  return (
    <header className="header_c_stic">
      <nav className="container">
        <div className="header_c">
          <a className="logo" href="/" onClick={(e) => {
            e.preventDefault();
            handleNavClick('');
          }}>
            <img src="/src/image/logo.svg" alt="logo" />
          </a>
          <ul id="menu">
            <li><a href="/#pizza" onClick={(e) => {
              e.preventDefault();
              handleNavClick('#pizza');
            }}>Пицца</a></li>
            <li><a href="/#snacks" onClick={(e) => {
              e.preventDefault();
              handleNavClick('#snacks');
            }}>Закуски</a></li>
            <li><a href="/#drinks" onClick={(e) => {
              e.preventDefault();
              handleNavClick('#drinks');
            }}>Напитки</a></li>
            <li><a href="/#cocktails" onClick={(e) => {
              e.preventDefault();
              handleNavClick('#cocktails');
            }}>Коктейли</a></li>
            <li><a href="/#dessert" onClick={(e) => {
              e.preventDefault();
              handleNavClick('#dessert');
            }}>Десерты</a></li>
            <li><a href="/#sauces" onClick={(e) => {
              e.preventDefault();
              handleNavClick('#sauces');
            }}>Соусы</a></li>
          </ul>
          <button className="cart_button" onClick={openCartModal}>Корзина</button>
          <CartModal
            isOpen={isCartModalOpen}
            onClose={closeCartModal}
            onLoginSuccess={handleLoginSuccess}
            onRegisterSuccess={handleRegisterSuccess}
          />
          {isAuthenticated ? (
            <a className="account_button" href="/accountUser">Аккаунт</a>
          ) : (
            <button className="account_button" onClick={openLoginModal}>Войти</button>
          )}
          <Modal
            isOpen={isModalOpen}
            onClose={closeLoginModal}
            onLoginSuccess={handleLoginSuccess}
            onRegisterSuccess={handleRegisterSuccess}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
