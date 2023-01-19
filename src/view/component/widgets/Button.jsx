export const Button = (props) => {
    const {text, onClick, style} = props;
    return (
        <button className={style} onClick={onClick}>{text}</button>
    );
}