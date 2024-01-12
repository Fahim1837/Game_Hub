import { HStack } from '@chakra-ui/react'
import Logo from './Logo'
import SwitchMode from './SwitchMode'
import SearchBar from './SearchBar'

interface Props {
    onSearch: (text: string) => void
}

function NavBar({ onSearch }: Props) {
    return (
        <HStack
            justifyContent="space-between"
            pe={4}
            ms={2}
            mb={3}>
            <Logo />
            <SearchBar onSearch={onSearch} />
            <SwitchMode />
        </HStack>
    )
}

export default NavBar
