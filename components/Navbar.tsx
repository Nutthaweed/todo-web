import React from 'react';
import { Heading } from '@chakra-ui/react'
import ThemeToggle from './theme-toggle'

const Navbar: React.FC = () => {
    return (
        <div className="flex py-10 justify-center gap-10">
            <Heading className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-600">Whattodo</Heading>
            <ThemeToggle />
            </div>
    )
}

export default Navbar