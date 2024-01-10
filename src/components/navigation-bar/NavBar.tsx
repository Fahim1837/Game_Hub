import { HStack } from '@chakra-ui/react'
import Logo from './Logo'
import SwitchMode from './SwitchMode'

function NavBar() {
    return (
        <HStack
            justifyContent="space-between"
            pe={4}
            mb={3}>
            <Logo />
            <SwitchMode />
        </HStack>
    )
}

export default NavBar
