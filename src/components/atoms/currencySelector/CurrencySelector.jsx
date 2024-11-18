import React from 'react';
import './CurrencySelector.css';

const CurrencySelector = ({ value, onChange }) => {
    return (
        <select className="currency-selector" value={value} onChange={onChange}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="JPY">JPY</option>
        </select>
    );
};

export default CurrencySelector;
