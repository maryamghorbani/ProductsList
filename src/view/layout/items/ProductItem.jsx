import { Card } from "@/view/component/widgets";

export const ProductItem = props => {
    const { product } = props;

    const ENUM_PRODUCT_ATTRIBUTE = {
        dvd: `Size: ${product.size} MB`,
        book: `Weight: ${product.weight} KG`,
        furniture: `Dimension: ${product.height} x ${product.width} x ${product.length}`,
    };

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
                <p>{ENUM_PRODUCT_ATTRIBUTE[product.productType]}</p>
            </div>
        </Card>
    );
};
