import "./App.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { ProductListPage } from "@/view/pages/ProductList";

function App() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios
            .get("https://dummyjson.com/products")
            .then(response => setProducts(response.data.products))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="App">
            <ProductListPage />
        </div>
    );
}

export default App;
