import React from 'react';

const Changeableselecter = ({ options, defaultValue, disabled, name, value, onChange, placeholder, customBgColor }) => {
    // Function to return background color based on the selected value
    const getBackgroundColor = (color) => {
        switch (color) {
            case 'yellow':
                return 'bg-yellow-300'; // Tailwind yellow background
            case 'white':
                return 'bg-white'; // White background
            case 'rose':
                return 'bg-rose-300'; // Tailwind rose background
            case 'gold':
                return 'bg-yellow-500'; // Tailwind gold background
            default:
                return 'bg-[rgb(239,244,251)]'; // Default background color
        }
    };

    return (
        <select
            name={name}
            value={value}
            onChange={onChange}
            disabled={disabled}
            defaultValue={defaultValue}
            className={`w-full rounded border border-[var(--border-color)] py-3 px-4 text-black focus:border-[var(--primary-color)] focus-visible:outline-none placeholder:capitalize ${getBackgroundColor(value)}`}
        >
            {placeholder && (
                <option value="" disabled>
                    {placeholder}
                </option>
            )}
            {options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default Changeableselecter;
