import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        document.documentElement.classList.add(`theme-${savedTheme}`);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.classList.remove(`theme-${theme}`);
        document.documentElement.classList.add(`theme-${newTheme}`);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <button 
            onClick={toggleTheme} 
            className="p-2 text-black bg-white dark:text-white dark:bg-black"
            aria-label="Toggle theme"
            
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
