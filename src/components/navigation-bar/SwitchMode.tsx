import { FormControl, FormLabel, Switch, useColorMode } from '@chakra-ui/react'

function SwitchMode() {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <FormControl
            display="flex"
            alignItems="center"
            width="auto"
            whiteSpace= {{md:'nowrap'}}>
            <FormLabel
                htmlFor="dark"
                mb="0">
                Dark Mode
            </FormLabel>
            <Switch
                isChecked={colorMode === 'dark'}
                onChange={() => toggleColorMode()}
                id="dark"
            />
        </FormControl>
    )
}

export default SwitchMode
