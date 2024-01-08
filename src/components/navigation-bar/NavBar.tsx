import { HStack } from '@chakra-ui/react'
import Logo from './Logo'
import SwitchMode from './SwitchMode'

function NavBar() {
    return (
        <HStack justifyContent='space-between'>
            <Logo />
            <SwitchMode />
        </HStack>
    )
}

export default NavBar
