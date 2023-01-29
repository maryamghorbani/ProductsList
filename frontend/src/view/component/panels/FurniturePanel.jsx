import { InputField } from "@/view/component/widgets";
import { useContext } from "react";
import { productContext } from "@/context/context";

export const FurniturePanel = () => {
    let { newProduct, setNewProduct, dimensionError } = useContext(productContext);
    return (
        <div className="furniture-panel">
            <InputField
                inputId="height"
                label="Height (CM)"
                type="number"
                onChange={e => setNewProduct({ ...newProduct, height: parseInt(e.target.value) })}
                errorMessage={dimensionError}
            />
            <InputField
                inputId="width"
                label="Width (CM)"
                type="number"
                onChange={e => setNewProduct({ ...newProduct, width: parseInt(e.target.value) })}
                errorMessage={dimensionError}
            />
            <InputField
                inputId="length"
                label="Length (CM)"
                type="number"
                onChange={e => setNewProduct({ ...newProduct, length: parseInt(e.target.value) })}
                errorMessage={dimensionError}
            />
            <h5>Please, provide dimension</h5>
        </div>
    );
};
