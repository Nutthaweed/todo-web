import React from 'react';
import ThemeToggle from './theme-toggle';

const Navbar: React.FC = () => {
    return (
        <div className="text-2xl flex py-10 justify-center gap-2">
            Whattodo
            <ThemeToggle />
            </div>
    )
}

export default Navbar