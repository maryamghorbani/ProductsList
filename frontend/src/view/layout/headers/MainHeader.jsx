import "@/assets/scss/dashboard.scss";

export const MainHeader = props => {
    let { title, children } = props;
    return (
        <div className="main-header">
            <p className="title">{title}</p>
            <div className="button-group">{children}</div>
        </div>
    );
};
