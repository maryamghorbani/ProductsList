import { MainHeader } from "@/view/layout/headers";
import { CreateProductForm } from "./CreateProductForm.panel";
import { useContext } from "react";
import { productContext } from "@/context/context";
import { Button } from "@/view/component/widgets";

export const CreateProductPanel = () => {
    let { handleSubmit, setAddNewItem } = useContext(productContext);
    return (
        <div className="create-product-panel">
            <div className="create-product-panel__content">
                <MainHeader title="Product Add">
                    <Button
                        style="save-button"
                        onClick={handleSubmit}
                        text="SAVE"
                        name="SAVE"
                        value="SAVE"
                    />
                    <Button
                        style="cancel-button"
                        onClick={() => {
                            setAddNewItem(false);
                        }}
                        text="CANCEL"
                        name="CANCEL"
                        value="CANCEL"
                    />
                </MainHeader>
                <CreateProductForm />
            </div>
        </div>
    );
};
