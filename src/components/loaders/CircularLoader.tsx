import { Spinner } from '@chakra-ui/react'

function CircularLoader() {
    return (
        <Spinner
            thickness="4px"
            speed="0.3s"
            label="Loading"
            size="xl"
        />
    )
}

export default CircularLoader
