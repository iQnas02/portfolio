import React, { useState } from 'react';
import './Toolbar.css';

const Toolbar = ({ onMenuClick }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const handleItemClick = (section) => {
        onMenuClick(section);
        setIsOpen(false);
    };
    return (
        <div className="toolbar-container">
            <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <nav className={`menu ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li onClick={() => handleItemClick('home')}>HOME</li>
                    <li onClick={() => handleItemClick('portfolio')}>PORTFOLIO</li>
                    <li onClick={() => handleItemClick('history')}>HISTORY</li>
                    <li onClick={() => handleItemClick('chat')}>CHAT</li>
                    <li onClick={() => handleItemClick('contact')}>CONTACT</li>
                    <li onClick={() => handleItemClick('light')}>LIGHT VERSION</li>
                </ul>
            </nav>
        </div>
    );
};

export default Toolbar;
