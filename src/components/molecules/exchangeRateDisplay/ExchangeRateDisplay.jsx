import React from 'react';
import './ExchangeRateDisplay.css';

const ExchangeRateDisplay = ({ currency, rate }) => {
    return (
        <span className="exchange-rate-display">
            {currency} → EUR: {rate ? rate.toFixed(2) : 'Loading...'}
        </span>
    );
};

export default ExchangeRateDisplay;
