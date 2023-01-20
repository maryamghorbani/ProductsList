import "@/assets/scss/dashboard.scss";
import { Button } from "@/view/component/widgets";

export const MainHeader = props => {
    let {
        title,
        leftButton,
        rightButton,
        leftButtonStyle,
        rightButtonStyle,
        onClickLeftButton,
        onClickRightButton,
    } = props;
    return (
        <div className="main-header">
            <h1>{title}</h1>
            <div className="button-group">
                <Button style={leftButtonStyle} onClick={onClickLeftButton} text={leftButton} />
                <Button style={rightButtonStyle} onClick={onClickRightButton} text={rightButton} />
            </div>
        </div>
    );
};
