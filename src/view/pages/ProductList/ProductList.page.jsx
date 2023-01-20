import { MainHeader } from "@/view/layout/headers";
import { ProductItem } from "@/view/layout/items";

export const ProductListPage = props => {
    const { products } = props;
    return (
        <div className="product-list">
            <MainHeader title="Product List" leftButton="Add New" rightButton="Mass Delete" />
            <div className="product-list__content">
                {products.map(product => (
                    <ProductItem product={product} key={product.id} />
                ))}
            </div>
        </div>
    );
};
