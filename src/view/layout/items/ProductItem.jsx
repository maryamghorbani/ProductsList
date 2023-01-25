import { Card } from "@/view/component/widgets";

export const ProductItem = props => {
    const { product } = props;

    return (
        <Card className="product-item">
            <input
                className="product-item__delete-checkbox"
                type="checkbox"
                value={product.id}
                name={product.id}
                onChange={e => {
                    product.isChecked = e.target.checked;
                }}
            />
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
