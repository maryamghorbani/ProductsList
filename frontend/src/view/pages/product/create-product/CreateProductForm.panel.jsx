import { useContext } from "react";
import { productContext } from "@/context/context";
import { Dropdown, InputField } from "@/view/component/widgets";
import { SwitcherTypePanel } from "@/view/component/panels";

export const CreateProductForm = () => {
    let {
        newProduct,
        setNewProduct,
        skuError,
        nameError,
        priceError,
        handleSubmit,
        type,
        setType,
    } = useContext(productContext);

    return (
        <div className="create-product-form">
            <form id="product_form" onSubmit={handleSubmit}>
                <div className="create-product-form__content">
                    <div className="create-product-form__content__inputs">
                        <div className="create-product-form__content__inputs__sku">
                            <InputField
                                inputId="sku"
                                label="SKU"
                                type="text"
                                onChange={e =>
                                    setNewProduct({ ...newProduct, sku: e.target.value })
                                }
                                errorMessage={skuError}
                            />
                        </div>
                        <div className="create-product-form__content__inputs__name">
                            <InputField
                                inputId="name"
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
                                inputId="price"
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
                        <div className="create-product-form__content__inputs__type">
                            <Dropdown
                                dropdownId="productType"
                                label="Type Switcher"
                                options={[
                                    { value: "0", label: "" },
                                    {
                                        value: "dvd",
                                        label: "DVD-disc",
                                    },
                                    {
                                        value: "book",
                                        label: "Book",
                                    },
                                    {
                                        value: "furniture",
                                        label: "Furniture",
                                    },
                                ]}
                                onChange={e => {
                                    setNewProduct({
                                        ...newProduct,
                                        productType: e.target.value,
                                    });
                                    setType(e.target.value);
                                }}
                            />
                            <SwitcherTypePanel />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};
