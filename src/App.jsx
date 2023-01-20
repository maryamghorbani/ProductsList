import "./App.scss";
import {useEffect, useState} from "react";
import {productContext} from "@/context/context";
import axios from "axios";
import {ProductListPage} from "@/view/pages/ProductList";

function App() {
    const [products, setProducts] = useState([]);
    const [addNewItem, setAddNewItem] = useState(false);
    useEffect(() => {
        axios
            .get("https://dummyjson.com/products")
            .then(response => setProducts(response.data.products))
            .catch(err => console.log(err));
    }, []);
    
    return (
        <div className="App">
            <productContext.Provider value={{setAddNewItem}}>
                {addNewItem ? <div>add new item</div> : <ProductListPage products={products}/>}
            </productContext.Provider>
        </div>
    );
}

export default App;
