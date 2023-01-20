import { Card } from "@/view/component/widgets";

export const ProductItem = props => {
    const { product } = props;
    return (
        <Card className="product-item">
            <div className="product-item__content">
                <input className="product-item__delete-checkbox" type="checkbox" />
                <p>{product.id}</p>
                <p>{product.title}</p>
                <div className="product-item__price">
                    <span>{product.price}$</span>
                </div>
            </div>
        </Card>
    );
};
