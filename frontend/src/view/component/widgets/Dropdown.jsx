export const Dropdown = props => {
    const { label, options, onChange, errorMessage, dropdownId } = props;
    return (
        <div className="dropdown">
            <label className="dropdown__label">{label}</label>
            <select id={dropdownId} className="dropdown__select" onChange={onChange}>
                {options.map(option => (
                    <option value={option.value} key={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {errorMessage && <p className="dropdown__error-message">{errorMessage}</p>}
        </div>
    );
};
