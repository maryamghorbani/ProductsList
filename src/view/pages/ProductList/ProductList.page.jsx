import { MainHeader } from "@/view/layout/headers";

export const ProductListPage = props => {
    const { products } = props;
    return (
        <div className="product-list">
            <MainHeader title="Product List" leftButton="Add New" rightButton="Mass Delete" />
            {/*{products.map(product => (*/}
            {/*    <ProductItem product={product} key={product.id}/>*/}
            {/*))}*/}
        </div>
    );
};
