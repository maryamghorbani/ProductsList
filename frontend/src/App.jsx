import { useEffect, useState } from "react";
import { productContext } from "@/context/context";
import { productService } from "../api-assets/employee.service";

function App() {
    const header = {
        padding: "0.5rem 1rem",
        color: "#11132c",
        borderBottom: "2px solid #eee",
        display: "flex",
        justifyContent: "space-between",
    };
    const headerTitle = {
        fontSize: "1.8rem",
        fontWeight: "600",
    };
    const headerButtonGroup = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };
    const button = {
        fontSize: "0.8rem",
        padding: "0.5rem 1.5rem",
        border: "none",
        borderRadius: "0.4rem",
        cursor: "pointer",
        margin: "0 0.5rem",
    };
    const addButton = {
        color: "#fff",
        backgroundColor: "#9b9ca8",
    };
    const deleteButton = {
        color: "#fff",
        backgroundColor: "#e04f4f",
    };
    const saveButton = {
        color: "#fff",
        backgroundColor: "#3f4aaf",
    };
    const cancelButton = {
        color: "#fff",
        backgroundColor: "#9b9ca8",
    };
    const footer = {
        color: "#11132c",
        backgroundColor: "#fff",
        padding: "0.5rem",
        position: "fixed",
        bottom: "0",
        left: "0",
        width: "100%",
        borderTop: "2px solid #eee",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };
    const item = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "1rem",
        border: "2px solid #eee",
        borderRadius: "0.4rem",
        textAlign: "center",
    };
    const gridTemplate = {
        marginTop: "3rem",
        marginBottom: "10rem",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(20rem, 1fr))",
        gridGap: "1rem",
        padding: "0.5rem",
    };
    const deleteCheckBox = {
        display: "flex",
        alignSelf: "flex-start",
    };
    const inputBox = {
        display: "flex",
        margin: "0 auto",
        padding: "0.5rem",
        fontSize: "0.8rem",
        color: "#11132c",
    };
    const inputField = {
        display: "flex",
        flexDirection: "column",
        width: "100%",
    };
    const input = {
        flex: "1",
        padding: "0.5rem",
        borderRadius: "0.4rem",
        border: "1px solid #eee",
    };
    const inputLabel = {
        width: "8rem",
        fontSize: "0.8rem",
        padding: "0.5rem",
        textAlign: "left",
    };
    const errorMessages = {
        fontSize: "0.7rem",
        color: "#fa3030",
    };

    const [products, setProducts] = useState([]);
    const [addNewItem, setAddNewItem] = useState(false);
    const [newProduct, setNewProduct] = useState({
        sku: "",
        name: "",
        price: "",
        productType: "",
        size: null,
        weight: null,
        height: null,
        length: null,
        width: null,
        isChecked: null,
    });
    const [skuError, setSkuError] = useState("");
    const [nameError, setNameError] = useState("");
    const [priceError, setPriceError] = useState("");
    const [typeError, setTypeError] = useState("");
    const [sizeError, setSizeError] = useState("");
    const [weightError, setWeightError] = useState("");
    const [dimensionError, setDimensionError] = useState("");
    const [type, setType] = useState("");

    let options = [
        { value: "0", label: "" },
        {
            value: "dvd",
            label: "DVD",
        },
        {
            value: "book",
            label: "Book",
        },
        {
            value: "furniture",
            label: "Furniture",
        },
    ];

    const ENUM_PRODUCT_TYPE = {
        dvd: (
            <div className="book-panel" style={{ width: "100%" }}>
                <div className="input-field" style={inputBox}>
                    <label htmlFor="size" style={inputLabel}>
                        Size (MB)
                    </label>
                    <div className="input-field__input" style={inputField}>
                        <input
                            id="size"
                            type="number"
                            style={input}
                            onChange={e =>
                                setNewProduct({
                                    ...newProduct,
                                    size: parseInt(e.target.value),
                                })
                            }
                        />
                        <div className="error-message" style={errorMessages}>
                            {sizeError}
                        </div>
                    </div>
                </div>
                <h5>Please, provide disc space in MB</h5>
            </div>
        ),
        book: (
            <div className="book-panel">
                <div className="input-field" style={inputBox}>
                    <label htmlFor="weight" style={inputLabel}>
                        Weight (KG)
                    </label>
                    <div className="input-field__input" style={inputField}>
                        <input
                            id="weight"
                            type="number"
                            style={input}
                            onChange={e =>
                                setNewProduct({
                                    ...newProduct,
                                    weight: parseInt(e.target.value),
                                })
                            }
                        />
                        <div className="error-message" style={errorMessages}>
                            {weightError}
                        </div>
                    </div>
                </div>
                <h5>Please, provide weight in KG</h5>
            </div>
        ),
        furniture: (
            <div className="furniture-panel">
                <div className="input-field" style={inputBox}>
                    <label htmlFor="height" style={inputLabel}>
                        Height (CM)
                    </label>
                    <div className="input-field__input" style={inputField}>
                        <input
                            id="height"
                            type="number"
                            style={input}
                            onChange={e =>
                                setNewProduct({ ...newProduct, height: parseInt(e.target.value) })
                            }
                        />
                        <div className="error-message" style={errorMessages}>
                            {dimensionError}
                        </div>
                    </div>
                </div>
                <div className="input-field" style={inputBox}>
                    <label htmlFor="width" style={inputLabel}>
                        Width (CM)
                    </label>
                    <div className="input-field__input" style={inputField}>
                        <input
                            id="width"
                            type="number"
                            style={input}
                            onChange={e =>
                                setNewProduct({ ...newProduct, width: parseInt(e.target.value) })
                            }
                        />
                        <div className="error-message" style={errorMessages}>
                            {dimensionError}
                        </div>
                    </div>
                </div>
                <div className="input-field" style={inputBox}>
                    <label htmlFor="length" style={inputLabel}>
                        Length (CM)
                    </label>
                    <div className="input-field__input" style={inputField}>
                        <input
                            id="length"
                            type="number"
                            style={input}
                            onChange={e => {
                                setNewProduct({
                                    ...newProduct,
                                    length: parseInt(e.target.value),
                                });
                            }}
                        />
                        <div className="error-message" style={errorMessages}>
                            {dimensionError}
                        </div>
                    </div>
                </div>
                <h5>Please, provide dimension</h5>
            </div>
        ),
    };

    const handleSubmit = e => {
        e.preventDefault();
        productService
            .saveProduct(newProduct)
            .then(res => {
                if (!res.data.error) {
                    getProduct();
                    setAddNewItem(false);
                } else {
                    if (newProduct.sku === "") {
                        setSkuError(res.data.message);
                    } else {
                        setSkuError("");
                    }
                    if (res.data.message === "Duplicate SKU") {
                        setSkuError(res.data.message);
                    }
                    if (newProduct.name === "") {
                        setNameError(res.data.message);
                    } else {
                        setNameError("");
                    }
                    if (newProduct.price === "") {
                        setPriceError(res.data.message);
                    } else {
                        setPriceError("");
                    }
                    if (newProduct.type === "") {
                        setTypeError(res.data.message);
                    } else {
                        setTypeError("");
                    }
                    if (newProduct.weight === null) {
                        setWeightError(res.data.message);
                    } else {
                        setWeightError("");
                    }
                    if (
                        newProduct.height === null ||
                        newProduct.length === null ||
                        newProduct.width === null
                    ) {
                        setDimensionError(res.data.message);
                    } else {
                        setDimensionError("");
                    }
                    if (newProduct.size === null) {
                        setSizeError(res.data.message);
                    } else {
                        setSizeError("");
                    }
                }
            })

            .catch(err => {
                console.log("err", err);
            });
    };

    const handleMassDelete = () => {
        let arrayIds = [];
        products.forEach(product => {
            if (product.isChecked) {
                arrayIds.push(product.id);
            }
        });
        productService.massDelete(arrayIds).then(res => {
            getProduct();
        });
    };

    const getProduct = () => {
        productService.getAllProducts().then(res => {
            setProducts(res.data);
        });
    };

    useEffect(() => {
        getProduct();
    }, []);

    return (
        <div className="App" style={{ fontFamily: "sans-serif" }}>
            <productContext.Provider
                value={{
                    setAddNewItem,
                    newProduct,
                    setNewProduct,
                    skuError,
                    nameError,
                    priceError,
                    typeError,
                    sizeError,
                    weightError,
                    dimensionError,
                    handleSubmit,
                    type,
                    setType,
                    handleMassDelete,
                }}
            >
                {addNewItem ? (
                    <div className="create-product-panel__content">
                        <div className="main-header" style={header}>
                            <p className="title" style={headerTitle}>
                                Product Add
                            </p>
                            <div className="button-group" style={headerButtonGroup}>
                                <button
                                    style={{ ...button, ...saveButton }}
                                    className="add-button"
                                    onClick={handleSubmit}
                                    name="Save"
                                    value="Save"
                                >
                                    Save
                                </button>
                                <button
                                    style={{ ...button, ...cancelButton }}
                                    className="delete-button"
                                    onClick={() => setAddNewItem(false)}
                                    name="CANCEL"
                                    value="CANCEL"
                                >
                                    CANCEL
                                </button>
                            </div>
                        </div>
                        <form
                            id="product_form"
                            onSubmit={handleSubmit}
                            style={{ marginTop: "4rem" }}
                        >
                            <div className="create-product-form__content">
                                <div className="create-product-form__content__inputs">
                                    <div className="create-product-form__content__inputs__sku">
                                        <div
                                            className="input-field"
                                            style={{ ...inputBox, width: "40%" }}
                                        >
                                            <label htmlFor="sku" style={inputLabel}>
                                                SKU
                                            </label>
                                            <div className="input-field__input" style={inputField}>
                                                <input
                                                    id="sku"
                                                    type="text"
                                                    style={input}
                                                    onChange={e =>
                                                        setNewProduct({
                                                            ...newProduct,
                                                            sku: e.target.value,
                                                        })
                                                    }
                                                />
                                                <div
                                                    className="error-message"
                                                    style={errorMessages}
                                                >
                                                    {skuError}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="create-product-form__content__inputs__name">
                                        <div
                                            className="input-field"
                                            style={{ ...inputBox, width: "40%" }}
                                        >
                                            <label htmlFor="name" style={inputLabel}>
                                                Name
                                            </label>
                                            <div className="input-field__input" style={inputField}>
                                                <input
                                                    id="name"
                                                    type="text"
                                                    style={input}
                                                    onChange={e =>
                                                        setNewProduct({
                                                            ...newProduct,
                                                            name: e.target.value,
                                                        })
                                                    }
                                                />
                                                <div
                                                    className="error-message"
                                                    style={errorMessages}
                                                >
                                                    {nameError}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="create-product-form__content__inputs__price">
                                        <div
                                            className="input-field"
                                            style={{ ...inputBox, width: "40%" }}
                                        >
                                            <label htmlFor="price" style={inputLabel}>
                                                Price
                                            </label>
                                            <div className="input-field__input" style={inputField}>
                                                <input
                                                    id="price"
                                                    type="text"
                                                    style={input}
                                                    onChange={e =>
                                                        setNewProduct({
                                                            ...newProduct,
                                                            price: e.target.value,
                                                        })
                                                    }
                                                />
                                                <div
                                                    className="error-message"
                                                    style={errorMessages}
                                                >
                                                    {priceError}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="create-product-form__content__inputs__type"
                                        style={{
                                            width: "40%",
                                            margin: "0 auto",
                                            padding: "0.5rem",
                                            fontSize: "0.8rem",
                                            color: "#11132c",
                                        }}
                                    >
                                        <label className="dropdown__label" style={inputLabel}>
                                            Type Switcher
                                        </label>
                                        <select
                                            id="productType"
                                            className="dropdown__select"
                                            onChange={e => {
                                                setNewProduct({
                                                    ...newProduct,
                                                    productType: e.target.value,
                                                });
                                                setType(e.target.value);
                                            }}
                                        >
                                            {options.map(option => (
                                                <option value={option.value} key={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                        <div className="switcher-type">
                                            {ENUM_PRODUCT_TYPE[type]}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                ) : (
                    <div className="product-list">
                        <div className="main-header" style={header}>
                            <p className="title" style={headerTitle}>
                                Product Add
                            </p>
                            <div className="button-group" style={headerButtonGroup}>
                                <button
                                    style={{ ...button, ...addButton }}
                                    className="add-button"
                                    onClick={() => setAddNewItem(true)}
                                    name="ADD"
                                    value="ADD"
                                >
                                    ADD
                                </button>
                                <button
                                    style={{ ...button, ...deleteButton }}
                                    className="delete-button"
                                    onClick={handleMassDelete}
                                    name="MASS DELETE"
                                    value="MASS DELETE"
                                >
                                    MASS DELETE
                                </button>
                            </div>
                        </div>
                        <div className="product-list__content" style={gridTemplate}>
                            {products.length > 0 ? (
                                products.map(product => {
                                    const ENUM_PRODUCT_ATTRIBUTE = {
                                        dvd: `Size: ${product.size} MB`,
                                        book: `Weight: ${product.weight} KG`,
                                        furniture: `Dimension: ${product.height} x ${product.width} x ${product.length}`,
                                    };
                                    return (
                                        <div className="card product-item" style={item}>
                                            <input
                                                style={deleteCheckBox}
                                                className="delete-checkbox"
                                                type="checkbox"
                                                value={product.id}
                                                name={product.id}
                                                onChange={e => {
                                                    product.isChecked = e.target.checked;
                                                }}
                                            />
                                            <div className="product-item__content">
                                                <h4>{product.sku.toUpperCase()}</h4>
                                                <p>{product.name}</p>
                                                <div className="product-item__price">
                                                    <span>{product.price}$</span>
                                                </div>
                                                <p>{ENUM_PRODUCT_ATTRIBUTE[product.productType]}</p>
                                            </div>
                                        </div>
                                    );
                                })
                            ) : (
                                <p> No product found :(</p>
                            )}
                        </div>
                    </div>
                )}
                <div className="main-footer" style={footer}>
                    <p className="title">This is footer</p>
                </div>
            </productContext.Provider>
        </div>
    );
}

export default App;
