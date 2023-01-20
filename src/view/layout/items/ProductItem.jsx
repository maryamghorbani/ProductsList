import {Card} from "@/view/component/widgets";

export const ProductItem = props => {
    const {product} = props;
    return (
        <Card className="product-item">
            <div className="product-item__image">
                <img src={product.image} alt={product.title}/>
            </div>
            <div className="product-item__content">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <div className="product-item__price">
                    <span>{product.price}</span>
                </div>
            </div>
        </Card>
    );
};
