import "@/assets/scss/dashboard.scss";
import {Button} from "@/view/component/widgets";

export const MainHeader = ({title}) => {
    return (
        <div className="main-header">
            <h2>{title}</h2>
            <div className="button-group">
                <Button style="add-button" text="Add New"/>
                <Button style="delete-button" text="Mass Delete"/>
            </div>
        </div>
    );
};
