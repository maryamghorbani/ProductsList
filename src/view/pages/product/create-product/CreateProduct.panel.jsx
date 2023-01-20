import { MainHeader } from "@/view/layout/headers";
import { CreateProductForm } from "./CreateProductForm.panel";
import { useContext } from "react";
import { productContext } from "@/context/context";

export const CreateProductPanel = props => {
    let { handleSubmit } = useContext(productContext);
    return (
        <div className="create-product-panel">
            <div className="create-product-panel__content">
                <MainHeader
                    title="Product Add"
                    leftButtonStyle="save-button"
                    rightButtonStyle="cancel-button"
                    leftButton="SAVE"
                    rightButton="CANCEL"
                    onClickLeftButton={handleSubmit}
                    onClickRightButton={() => {
                        console.log("right button clicked");
                    }}
                />
                <CreateProductForm />
            </div>
        </div>
    );
};
