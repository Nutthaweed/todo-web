import React from 'react';
import ThemeToggle from './theme-toggle';

const Navbar: React.FC = () => {
    return (
        <div className="flex font-xl">
            Whattodo
            <ThemeToggle />
            </div>
    )
}

export default Navbar