import { useContext } from "react";
import { productContext } from "@/context/context";
import { InputField } from "@/view/component/widgets";

export const DvdPanel = () => {
    let { newProduct, setNewProduct, sizeError } = useContext(productContext);
    return (
        <div className="book-panel">
            <InputField
                inputId="size"
                label="Size (MB)"
                type="number"
                onChange={e => setNewProduct({ ...newProduct, size: e.target.value })}
                errorMessage={sizeError}
            />
            <h5>Please, provide disc space in MB</h5>
        </div>
    );
};
