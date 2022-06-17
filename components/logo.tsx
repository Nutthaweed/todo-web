import React from 'react'
import Image from 'next/image'
import { useColorModeValue } from '@chakra-ui/react'

const Logo: React.FC = () => {
    const LogoImage = `/images/whattodo${useColorModeValue('light','dark')}.png`
    return(
        <span className="inline-flex items-center">
           <Image src={LogoImage} width="50" height="50" alt="logo"/>
        </span>
    )
}

export default Logo