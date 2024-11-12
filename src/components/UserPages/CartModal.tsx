import React, { useState, useEffect } from 'react';
import Modal from './LoginModal';
import OrderTable from '../elements/OrderTable';
import '../../styles/style.css'; // Импортируем CSS-файл

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: () => void;
  onRegisterSuccess: () => void;
};

const CartModal: React.FC<ModalProps> = ({ isOpen, onClose, onLoginSuccess, onRegisterSuccess }) => {
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    if (isOpen) {
      setIsCartModalOpen(true);
      requestAnimationFrame(() => {
        setAnimationClass('open');
      });
    } else {
      setAnimationClass('close');
    }
  }, [isOpen]);

  const handleAnimationEnd = () => {
    if (animationClass === 'close') {
      setIsCartModalOpen(false);
    }
  };

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <>
      {isCartModalOpen && (
        <div className={`cartmodal ${animationClass}`} onClick={handleOutsideClick} onAnimationEnd={handleAnimationEnd}>
          <div className="modal-content_cart">
            <div id="cart_con">
              <p className="cart_name">Корзина</p>
              <hr className="line" />
              <div className="cart_order_con_main">
                <div className="checkbox_con">
                  <OrderTable />
                </div>
                <div className="order_con_btn">
                  <hr className="line" />
                  <div className="order_con">
                    <span className="price_text">Сумма заказа</span>
                    <span className="total_price">46,98 руб</span>
                  </div>
                  <button onClick={openLoginModal} id="checkout_btn">Оформить заказ</button>
                </div>
              </div>
            </div>
            <button onClick={onClose}><img className="cross1" src="/src/image/cross.svg" alt="закрыть" /></button>
          </div>
        </div>
      )}
      {isLoginModalOpen && (
        <Modal
          isOpen={isLoginModalOpen}
          onClose={closeLoginModal}
          onLoginSuccess={onLoginSuccess}
          onRegisterSuccess={onRegisterSuccess}
        />
      )}
    </>
  );
};

export default CartModal;
