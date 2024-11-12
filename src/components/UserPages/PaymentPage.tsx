import FormOrder from "../elements/FormOrder";
import Header from "../elements/Header";
import "../../styles/style.css";

const PaymentPage = () => {
    return ( 
        <body>
            <Header/>
            <div className="container">
            <p className="placing_an_order">Оформление заказа</p>
            <FormOrder/>
            </div>
        </body>
        
     );
}
 
export default PaymentPage;