import { useContext } from "react";
import { productContext } from "@/context/context";
import { InputField } from "@/view/component/widgets";

export const BookPanel = () => {
    let { newProduct, setNewProduct, weightError } = useContext(productContext);
    return (
        <div className="book-panel">
            <InputField
                inputId="weight"
                label="Weight (KG)"
                type="number"
                onChange={e => setNewProduct({ ...newProduct, weight: parseInt(e.target.value) })}
                errorMessage={weightError}
            />
            <h5>Please, provide weight in KG</h5>
        </div>
    );
};
