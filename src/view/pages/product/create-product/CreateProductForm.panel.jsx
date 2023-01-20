import { useContext } from "react";
import { productContext } from "@/context/context";
import { InputField } from "@/view/component/widgets";

export const CreateProductForm = () => {
    let { newProduct, setNewProduct, skuError, nameError, priceError, handleSubmit } =
        useContext(productContext);

    return (
        <div className="create-product-form">
            <form onSubmit={handleSubmit}>
                <div className="create-product-form__content">
                    <div className="create-product-form__content__inputs">
                        <div className="create-product-form__content__inputs__sku">
                            <InputField
                                label="Sku"
                                type="text"
                                onChange={e =>
                                    setNewProduct({ ...newProduct, sku: e.target.value })
                                }
                                errorMessage={skuError}
                            />
                        </div>
                        <div className="create-product-form__content__inputs__name">
                            <InputField
                                label="Name"
                                type="text"
                                onChange={e =>
                                    setNewProduct({
                                        ...newProduct,
                                        name: e.target.value,
                                    })
                                }
                                errorMessage={nameError}
                            />
                        </div>
                        <div className="create-product-form__content__inputs__price">
                            <InputField
                                label="Price"
                                type="number"
                                onChange={e =>
                                    setNewProduct({
                                        ...newProduct,
                                        price: e.target.value,
                                    })
                                }
                                errorMessage={priceError}
                            />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};
