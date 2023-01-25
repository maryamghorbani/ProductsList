import { useContext } from "react";
import { productContext } from "@/context/context";
import { MainHeader } from "@/view/layout/headers";
import { ProductItem } from "@/view/layout/items";

export const ProductListPage = props => {
    const { products } = props;
    let { setAddNewItem, handleMassDelete } = useContext(productContext);

    return (
        <div className="product-list">
            <MainHeader
                title="Product List"
                leftButtonStyle="add-button"
                rightButtonStyle="delete-button"
                leftButton="ADD NEW"
                rightButton="MASS DELETE"
                onClickLeftButton={() => setAddNewItem(true)}
                onClickRightButton={handleMassDelete}
            />
            <div className="product-list__content">
                {products.map(product => (
                    <ProductItem product={product} key={product.id} />
                ))}
            </div>
        </div>
    );
};
