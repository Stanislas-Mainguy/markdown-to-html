import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CurrencySelector from '../../atoms/currencySelector/CurrencySelector';
import WeatherDisplay from '../../molecules/weatherDisplay/WeatherDisplay';
import ExchangeRateDisplay from '../../molecules/exchangeRateDisplay/ExchangeRateDisplay';
import './HeaderInfo.css';

const HeaderInfo = () => {
    const [currency, setCurrency] = useState('USD');
    const [exchangeRate, setExchangeRate] = useState(null);
    const [weather, setWeather] = useState({ temp: '', condition: '' });

    useEffect(() => {
        const fetchExchangeRate = async () => {
            try {
                const response = await axios.get(
                    `https://api.exchangerate.host/latest?base=${currency}&symbols=EUR`
                );
                setExchangeRate(response.data.rates.EUR);
            } catch (error) {
                console.error('Error fetching exchange rate:', error);
            }
        };
        fetchExchangeRate();
    }, [currency]);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?q=Paris&units=metric&appid=YOUR_API_KEY`
                );
                setWeather({
                    temp: response.data.main.temp,
                    condition: response.data.weather[0].description,
                });
            } catch (error) {
                console.error('Error fetching weather:', error);
            }
        };
        fetchWeather();
    }, []);

    return (
        <div className="header-info">
            <CurrencySelector value={currency} onChange={(e) => setCurrency(e.target.value)} />
            <ExchangeRateDisplay currency={currency} rate={exchangeRate} />
            <WeatherDisplay temp={weather.temp} condition={weather.condition} />
        </div>
    );
};

export default HeaderInfo;
