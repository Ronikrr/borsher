// Submit.jsx
import React from "react";

const Primary = ({ label, value, onClick, disabled }) => {
    return (
        <button
            type="submit"
            value={value}
            onClick={onClick}
            disabled={disabled}
            className="flex justify-center px-6 py-2 font-medium text-white border rounded border-[rgb(60,80,224)] bg-[rgb(60,80,224)] hover:shadow-1 "
        >
            {label || 'Submit'}
        </button>
    );
};

export default Primary;
