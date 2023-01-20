import "@/assets/scss/dashboard.scss";
import {Button} from "@/view/component/widgets";

export const MainHeader = ({title, leftButton, rightButton, addNewItem}) => {
    return (
        <div className="main-header">
            <h1>{title}</h1>
            <div className="button-group">
                <Button style="add-button" onClick={addNewItem} text={leftButton}/>
                <Button style="delete-button" text={rightButton}/>
            </div>
        </div>
    );
};
