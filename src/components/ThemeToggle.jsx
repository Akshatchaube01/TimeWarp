import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        applyTheme(savedTheme);
    }, []);

    const applyTheme = (selectedTheme) => {
        document.documentElement.classList.remove(`theme-${theme}`);
        document.documentElement.classList.add(`theme-${selectedTheme}`);
        localStorage.setItem('theme', selectedTheme);
    };

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        applyTheme(newTheme);
    };

    return (
        <button 
            onClick={toggleTheme} 
            className="p-2 text-gray-900 dark:text-gray-100"
            aria-label="Toggle theme"
            style={{ backgroundColor: 'transparent', border: 'none' }}
        >
            {theme === 'light' ? (
                <i className="ri-sun-fill text-2xl"></i>
            ) : (
                <i className="ri-moon-fill text-2xl"></i>
            )}
        </button>
    );
};

export default ThemeToggle;
