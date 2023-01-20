import {useContext} from "react";
import {productContext} from "@/context/context";
import {MainHeader} from "@/view/layout/headers";
import {ProductItem} from "@/view/layout/items";

export const ProductListPage = props => {
    const {products} = props;
    let {setAddNewItem} = useContext(productContext);

    return (
        <div className="product-list">
            <MainHeader title="Product List" leftButton="Add New" rightButton="Mass Delete"
                        addNewItem={() => setAddNewItem(true)}/>
            <div className="product-list__content">
                {products.map(product => (
                    <ProductItem product={product} key={product.id}/>
                ))}
            </div>
        </div>
    );
};
