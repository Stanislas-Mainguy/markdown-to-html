import React, { useState } from 'react';
import './SideMenu.css';

const SideMenu = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <>
            <div className={`side-menu ${isOpen ? 'open' : 'closed'}`}>
                <button className="toggle-button" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? '<' : '>'}
                </button>
                {isOpen && (
                    <div className="menu-content">
                        <h2>Tools</h2>
                        <ul>
                            <li>Calculator (Coming Soon)</li>
                            <li>Currency Converter (Coming Soon)</li>
                            <li>Weather App (Coming Soon)</li>
                        </ul>
                    </div>
                )}
            </div>
            {!isOpen && (
                <button className="open-button" onClick={() => setIsOpen(true)}>
                    Open Menu
                </button>
            )}
        </>
    );
};

export default SideMenu;
