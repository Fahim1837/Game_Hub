import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import usePlatforms from '../../hooks/usePlatforms'
import { FaAngleDown } from 'react-icons/fa'
import { Platform } from '../../hooks/useGames'

interface Props {
    onSelectPlatform: (platform: Platform) => void
    selectedPlatform: Platform | null
}

function PlatformList({ onSelectPlatform, selectedPlatform }: Props) {
    const { data } = usePlatforms()

    return (
        <Menu>
            <MenuButton
                as={Button}
                rightIcon={<FaAngleDown />}>
                {selectedPlatform?.name || 'Platforms'}
            </MenuButton>
            <MenuList>
                {data.map((item) => (
                    <MenuItem
                        key={item.id}
                        onClick={() => onSelectPlatform(item)}>
                        {item.name}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    )
}

export default PlatformList
