import React from "react";
import ProductCon from "../elements/ProductContainer";

interface Product {
    image: string;
    name: string;
    description: string;
    price: string;
}

const products: Product[] = [
    {
        image: "/src/image/pizza.svg",
        name: "Острая",
        description: "Острые колбаски чоризо, острый перец халапеньо, соус барбекю, митболы из говядины, томаты, сладкий перец, красный лук, моцарелла, томатный соус",
        price: "23,49"
    },
    {
        image: "/src/image/pizza.svg",
        name: "Маргарита",
        description: "Томаты, моцарелла, базилик, томатный соус",
        price: "19,99"
    },
];

const CategoryContainer: React.FC = () => {
    return ( 
        <div className="category_container">
            <a id="pizza"></a>
            <p className="title_categor">Пицца</p>
            <div className="categor_con">
                {products.map((product, index) => (
                    <ProductCon
                        key={index}
                        image={product.image}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                    />
                ))}
            </div>
        </div>
    );
}

export default CategoryContainer;