export const Button = props => {
    const { text, onClick, style, name, value } = props;
    return (
        <button className={style} name={name} value={value} onClick={onClick} type="button">
            {text}
        </button>
    );
};
