import NavigationBlock from "../elements/NavigationBlock";
import OrdersTableAdmin from "../elements/OrdersTableAdmin";
import HeaderAdmin from "../elements/HeaderAdmin";
import "../../styles/style.css";

const MainPageAdmin = () => {
	return (
		<body>
			<HeaderAdmin />
			<NavigationBlock />
			<OrdersTableAdmin />
			<div className="amount_block">
				<p className="total_amount">Итоговая сумма:</p>
				<p className="total_payment">Итого оплачено:</p>
			</div>

		</body>
	);
}

export default MainPageAdmin;