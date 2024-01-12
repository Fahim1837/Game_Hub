import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react'
import { FaAngleDown } from 'react-icons/fa'

interface Props {
    onSelectOrder: (val: string) => void
    selectedOrder: string | null
}

function OrderList({ onSelectOrder, selectedOrder }: Props) {
    const order = [
        { value: '', label: 'Relevance' },
        { value: 'name', label: 'Name' },
        { value: '-added', label: 'Date Added' },
        { value: '-released', label: 'Date of Release' },
        { value: '-rating', label: 'Average Rating' },
        { value: '-metacritic', label: 'Popularity' },
    ]

    let currentOrder = order.find((item) => item.value === selectedOrder)

    return (
        <Menu>
            <MenuButton
                as={Button}
                rightIcon={<FaAngleDown />}>
                Order By: {currentOrder?.label || 'Relevance'}
            </MenuButton>
            <MenuList>
                {order.map((item) => (
                    <MenuItem
                        onClick={() => onSelectOrder(item.value)}
                        key={item.value}
                        value={item.value}>
                        {item.label}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    )
}

export default OrderList
