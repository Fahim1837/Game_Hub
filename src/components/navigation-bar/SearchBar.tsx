import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'

interface Props {
    onSearch: (text: string) => void
}

function SearchBar({ onSearch }: Props) {
    const inputRef = useRef<HTMLInputElement>(null)
    return (
        <form
            onSubmit={(event) => {
                event.preventDefault()
                if (inputRef.current) onSearch(inputRef.current.value)
            }}>
            <InputGroup>
                <InputLeftElement children={<BsSearch />} />
                <Input
                    ref={inputRef}
                    placeholder="Search Games ..."
                    borderRadius={20}
                    variant="filled"
                />
            </InputGroup>
        </form>
    )
}

export default SearchBar
