import { HStack, Image, Link } from '@chakra-ui/react'
import { Genre } from '../../hooks/useGenres'

interface Props {
    line: Genre
    selectedGenre: Genre | null
    onSelectGenre: (line: Genre) => void
}
function GenreLine({ line, onSelectGenre, selectedGenre }: Props) {
    let fontWeight
    if (line.id === selectedGenre?.id) fontWeight = 'bold'
    else fontWeight = 'normal'

    return (
        <HStack
            px={4}
            onClick={() => onSelectGenre(line)}
            fontWeight={fontWeight}>
            <Image
                src={line.image_background}
                boxSize={12}
                borderRadius={10}
                objectFit= 'cover'
            />
            <Link fontSize="xl" whiteSpace= 'normal'>{line.name}</Link>
        </HStack>
    )
}

export default GenreLine
