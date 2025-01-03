import React from "react";

const Bestoption = ({ options, defaultValue, disabled, name, value, onChange, placeholder }) => {
    return (
        <select
            name={name}
            value={value}
            onChange={onChange}
            disabled={disabled}
            defaultValue={defaultValue}
            className='w-full rounded border border-[var(--border-color)] bg-[rgb(239,244,251)] py-3 px-4 text-black focus:border-[var(--primary-color)] focus-visible:outline-none placeholder:capitalize '
        >
            {placeholder && (
                <option value="" disabled>
                    {placeholder}
                </option>
            )}
            {options.map((option, index) => (
                <option
                    key={index}
                    value={option.value}
                    className={['10k', '14k', '18k', '22k', '24k'].includes(option.value) ? 'font-bold' : ''}
                >
                    {option.label}
                </option>
            ))}
        </select>
    );
};
export default Bestoption;