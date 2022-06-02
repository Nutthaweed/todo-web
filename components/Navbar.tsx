import React from 'react';
import { Heading } from '@chakra-ui/react'
import ThemeToggle from './theme-toggle'

const Navbar: React.FC = () => {
    return (
        <div className="flex py-10 justify-center gap-10">
            <Heading className="text-4xl">Whattodo</Heading>
            <ThemeToggle />
            </div>
    )
}

export default Navbar