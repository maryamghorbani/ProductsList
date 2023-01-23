import { Card } from "@/view/component/widgets";

export const ProductItem = props => {
    const { product } = props;
    return (
        <Card className="product-item">
            <input className="product-item__delete-checkbox" type="checkbox" />
            <div className="product-item__content">
                <p>{product.sku}</p>
                <p>{product.name}</p>
                <div className="product-item__price">
                    <span>{product.price}$</span>
                </div>
            </div>
        </Card>
    );
};
