import {useContext} from "react";
import {productContext} from "@/context/context";

export const CreateProductForm = () => {

    let {
        newProduct,
        setNewProduct,
        skuError,
        nameError,
        priceError,
        handleSubmit,
    } = useContext(productContext);

    return (
        <div className="create-product-form">
            <form onSubmit={handleSubmit}>
                <div className="create-product-form__content">
                    <div className="create-product-form__content__inputs">
                        <div className="create-product-form__content__inputs__sku">
                            <label htmlFor="sku">SKU</label>
                            <input
                                type="text"
                                id="sku"
                                placeholder="SKU"
                                onChange={e => {
                                    setNewProduct({...newProduct, sku: e.target.value});
                                }}
                            />
                            <p className="error-message">{skuError}</p>
                        </div>
                        <div className="create-product-form__content__inputs__name">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                placeholder="Name"
                                onChange={e => {
                                    setNewProduct({...newProduct, name: e.target.value});
                                }}
                            />
                            <div className="error-message">{nameError}</div>
                        </div>
                        <div className="create-product-form__content__inputs__price">
                            <label htmlFor="price">Price</label>
                            <input
                                type="text"
                                placeholder="Price"
                                onChange={e => {
                                    setNewProduct({...newProduct, price: e.target.value});
                                }}
                            />
                            <div className="error-message">{priceError}</div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};
