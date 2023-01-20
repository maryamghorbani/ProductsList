export const InputField = props => {
    const { label, placeholder, type, onChange, errorMessage } = props;
    return (
        <div className="input-field">
            <label htmlFor={label}>{label}</label>
            <input type={type} placeholder={placeholder} onChange={onChange} />
            <div className="error-message">{errorMessage}</div>
        </div>
    );
};