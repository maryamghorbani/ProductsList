import "./App.scss";
import { useEffect, useState } from "react";
import { productContext } from "@/context/context";
import axios from "axios";
import { ProductListPage } from "@/view/pages/product/ProductList";
import { CreateProductPanel } from "@/view/pages/product/create-product/CreateProduct.panel";

function App() {
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

    const handleSubmit = e => {
        e.preventDefault();

        axios
            .post("http://localhost/product/saveApi", newProduct)
            .then(res => {
                if (!res.data.error) {
                    getProduct();
                    setAddNewItem(false);
                }
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
        axios
            .post("http://localhost/product/delete", { id: arrayIds })
            .then(data => {
                console.log(data);
                getProduct();
            })
            .catch(err => {
                console.log("err", err);
            });
    };

    const getProduct = () => {
        axios
            .get("http://localhost/product/get")
            .then(response => setProducts(response.data))
            .catch(err => console.log(err));
    };

    useEffect(() => {
        getProduct();
    }, []);

    return (
        <div className="App">
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
                {addNewItem ? <CreateProductPanel /> : <ProductListPage products={products} />}
            </productContext.Provider>
        </div>
    );
}

export default App;
