
interface ProductProps {
    image: string;
    name: string;
    description: string;
    price: string;
}

const ProductCon: React.FC<ProductProps> = ({ image, name, description, price }) => {
    return (
        <div className="product_con">
            <div>
                <img className="product_image" src={image} alt={name} />
                <p className="product_name">{name}</p>
                <p className="product_description">{description}</p>
            </div>
            <div className="group_price_add">
                <p className="product_price">{price} руб.</p>
                <button className="add_to_cart">Добавить</button>
            </div>
        </div>
    );
}

export default ProductCon;