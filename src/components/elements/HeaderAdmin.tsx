const HeaderAdmin = ({ className = '' }) => {
    return (
        <header>
        <nav className="header_a">
                <a className="logo" href="">
                    <img src="/src/image/logo.svg" alt="logo" />
                </a>
                <ul className="menu_a">
                    <li><a href="/admins">Заказы</a></li>
                    <li><a href="/assortment">Ассортимент</a></li>
                </ul>
                <a href="/loginAdmin"><button className="account_button">Выйти</button></a>
        </nav>
    </header>
    );
  };
  
  export default HeaderAdmin;