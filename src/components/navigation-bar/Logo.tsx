import { Image } from '@chakra-ui/react'
import logo from '../../assets/logo.webp'

function Logo() {
    return (
        <Image
            src={logo}
            boxSize={16}
        />
    )
}

export default Logo
