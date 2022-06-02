import React from 'react'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ThemeToggle: React.FC = () => {
   const { toggleColorMode } = useColorMode()

   return (
       <IconButton aria-label='Toggle mode' 
       onClick={toggleColorMode}
       colorScheme={useColorModeValue('cyan' , 'purple')}
       icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
       isRound='true'
       >

       </IconButton>
   )
}

export default ThemeToggle