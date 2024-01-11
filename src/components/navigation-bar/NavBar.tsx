import { HStack } from '@chakra-ui/react'
import Logo from './Logo'
import SwitchMode from './SwitchMode'
import SearchBar from './SearchBar'

function NavBar() {
    return (
        <HStack
            justifyContent="space-between"
            pe={4}
            ms={2}
            mb={3}>
            <Logo />
            <SearchBar/>
            <SwitchMode />
        </HStack>
    )
}

export default NavBar
