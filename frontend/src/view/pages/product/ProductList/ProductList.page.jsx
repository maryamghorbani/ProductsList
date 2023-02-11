import { useContext } from "react";
import { productContext } from "@/context/context";
import { MainHeader } from "@/view/layout/headers";
import { ProductItem } from "@/view/layout/items";
import { Button } from "@/view/component/widgets";

export const ProductListPage = props => {
    const { products } = props;
    let { setAddNewItem, handleMassDelete } = useContext(productContext);

    return (
        <div className="product-list">
            <MainHeader title="Product List">
                <Button
                    style="add-button"
                    onClick={() => setAddNewItem(true)}
                    text="ADD"
                    name="ADD"
                    value="ADD"
                />
                <Button
                    style="delete-button"
                    onClick={handleMassDelete}
                    text="MASS DELETE"
                    name="MASS DELETE"
                    value="MASS DELETE"
                />
            </MainHeader>
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
