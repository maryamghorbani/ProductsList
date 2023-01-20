export const InputField = props => {
    const { label, placeholder, type, onChange, errorMessage, inputId } = props;
    return (
        <div className="input-field">
            <label htmlFor={label}>{label}</label>
            <div className="input-field__input">
                <input id={inputId} type={type} placeholder={placeholder} onChange={onChange} />
                <div className="error-message">{errorMessage}</div>
            </div>
        </div>
    );
};
