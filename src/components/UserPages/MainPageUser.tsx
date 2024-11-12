
import Header from "../elements/Header";
import CategoryContainer from "./CategoryContainer";
import "../../styles/style.css";

const MainPageUser = () => {
	return (
		<body>
			<section className="title_section">
				<div className="main_image_con">
					<img src='/src/image/img_hands_taking_pizza.png' alt="First Image" />
				</div>
				<div className="group_text_title">
					<p className="title_text">Десять лет традиций, воплощенные в идеальной пицце</p>
					<div className="group_sale">
						<p className="sale">15%</p>
						<p className="text_sale">скидка</p>
					</div>
				</div>
			</section>

			<div className="container">
				<div className="categor_main_con">
					<CategoryContainer />
					<CategoryContainer />
				</div>
			</div>
			<footer>
				<div className="footer_con">
					<a className="logo" href="">
						<img src="/src/image/logo.svg" alt="logo" />
					</a>
					<p className="footer_text">Разработано и выполнено командой №10
						в рамках проекта технологической практики в компании “Модсен”</p>
				</div>
			</footer>
		</body>
	);
}

export default MainPageUser;