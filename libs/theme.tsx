import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
    global: props => ({
        bg: mode('#f0e7db', '#202023')(props)
    })
}

const fonts = {
    heading: "Bahnschrift",
    body: "bahnschrift"
}

const config = {
    InitialColorMode: 'dark',
    useSystenColorMode: true
}

const theme = extendTheme({ styles, fonts, config })

export default theme