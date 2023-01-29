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
                {products.length > 0 ? (
                    products.map(product => <ProductItem key={product.id} product={product} />)
                ) : (
                    <p> No product found :(</p>
                )}
            </div>
        </div>
    );
};
