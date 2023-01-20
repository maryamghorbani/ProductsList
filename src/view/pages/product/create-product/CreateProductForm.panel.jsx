import { useContext } from "react";
import { productContext } from "@/context/context";

export const CreateProductForm = props => {
    const { createProduct, setAddNewItem } = props;

    let {
        sku,
        setSku,
        name,
        setName,
        price,
        setPrice,
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
                                value={sku}
                                onChange={e => setSku(e.target.value)}
                            />
                            <p className="error-message">{skuError}</p>
                        </div>
                        <div className="create-product-form__content__inputs__name">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                            <div className="error-message">{nameError}</div>
                        </div>
                        <div className="create-product-form__content__inputs__price">
                            <label htmlFor="price">Price</label>
                            <input
                                type="text"
                                placeholder="Price"
                                value={price}
                                onChange={e => setPrice(e.target.value)}
                            />
                            <div className="error-message">{priceError}</div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};
