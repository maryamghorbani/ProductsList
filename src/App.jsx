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
        type: "",
    });
    const [skuError, setSkuError] = useState("");
    const [nameError, setNameError] = useState("");
    const [priceError, setPriceError] = useState("");
    const [typeError, setTypeError] = useState("");
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
        console.log(newProduct);
    };

    useEffect(() => {
        axios
            .get("https://dummyjson.com/products")
            .then(response => setProducts(response.data.products))
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
                    handleSubmit,
                }}
            >
                {addNewItem ? <CreateProductPanel /> : <ProductListPage products={products} />}
            </productContext.Provider>
        </div>
    );
}

export default App;
