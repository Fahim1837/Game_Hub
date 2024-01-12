import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../../App'

interface Props {
    heading: GameQuery
}

function GameHeading({ heading }: Props) {
    let head = `${heading.platform?.name || ''} ${heading.genre?.name || ''} Games`
    return (
        <Heading
            as="h1"
            fontSize="5xl"
            m={4}>
            {head}
        </Heading>
    )
}

export default GameHeading
