import React from 'react';
import './WeatherDisplay.css';

const WeatherDisplay = ({ temp, condition }) => {
    return (
        <span className="weather-display">
            Weather: {temp}°C, {condition}
        </span>
    );
};

export default WeatherDisplay;
