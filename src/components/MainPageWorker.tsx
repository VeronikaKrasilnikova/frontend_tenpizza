import NavigationBlock from "./elements/NavigationBlock";
import OrdersTableAdmin from "./elements/OrdersTableAdmin";
import "../styles/style.css";

const MainPageAdmin = () => {
	return (
		<body>
			 <header>
        <nav className="header_a">
                <a className="logo" href="">
                    <img src="/src/image/logo.svg" alt="logo" />
                </a>
                <a href="/loginAdmin"><button className="account_button" id="acc_worker">Выйти</button></a>
        </nav>
    </header>
			<NavigationBlock />
			<OrdersTableAdmin />
		</body>
	);
}

export default MainPageAdmin;