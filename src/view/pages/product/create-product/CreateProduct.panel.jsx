import { MainHeader } from "@/view/layout/headers";

export const CreateProductPanel = props => {
    return (
        <div className="create-product-panel">
            <div className="create-product-panel__content">
                <MainHeader
                    title="Product Add"
                    leftButtonStyle="save-button"
                    rightButtonStyle="cancel-button"
                    leftButton="SAVE"
                    rightButton="CANCEL"
                    onClickLeftButton={() => {
                        console.log("left button clicked");
                    }}
                    onClickRightButton={() => {
                        console.log("right button clicked");
                    }}
                />
                {/*<CreateProductForm createProduct={createProduct} setAddNewItem={setAddNewItem} />*/}
            </div>
        </div>
    );
};
