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
        if (newProduct.sku === "") {
            setSkuError("Please, submit required data");
        } else {
            setSkuError("");
        }
        if (newProduct.name === "") {
            setNameError("Please, submit required data");
        } else {
            setNameError("");
        }
        if (newProduct.price === "") {
            setPriceError("Please, submit required data");
        } else {
            setPriceError("");
        }
        if (newProduct.type === "") {
            setTypeError("Please, submit required data");
        } else {
            setTypeError("");
        }
        if (newProduct.weight === null) {
            setWeightError("Please, provide weight");
        } else {
            setWeightError("");
        }
        if (newProduct.height === null || newProduct.length === null || newProduct.width === null) {
            setDimensionError("Please, provide dimensions");
        } else {
            setDimensionError("");
        }
        if (newProduct.size === null) {
            setSizeError("Please, provide size");
        } else {
            setSizeError("");
        }

        axios
            .post("http://localhost/product/saveApi", newProduct, {
                headers: [
                    "Access-Control-Allow-Origin: *",
                    "Access-Control-Allow-Credentials:true",
                ],
            })
            .then(res => {
                console.log("res", res);
                console.log("data", res.data);
            })
            .catch(err => {
                console.log("err", err);
            });
    };

    const handleMassDelete = () => {
        let arrayIds = [];
        products.map(product => {
            if (product.isChecked) {
                arrayIds.push(product.id);
            }
        });
        axios
            .delete("http://localhost/product/saveApi", {
                data: {
                    ids: arrayIds,
                },
            })
            .then(res => {
                console.log("res", res);
            })
            .catch(err => {
                console.log("err", err);
            });
        // const filteredProducts = products.filter(product => !product.isChecked);
        // setProducts(filteredProducts);
    };

    useEffect(() => {
        axios
            .get("http://localhost/product/get")
            .then(response => setProducts(response.data))
            .catch(err => console.log(err));
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
