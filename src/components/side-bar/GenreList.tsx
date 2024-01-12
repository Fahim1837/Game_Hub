import { Heading, Stack } from '@chakra-ui/react'
import useGenres, { Genre } from '../../hooks/useGenres'
import GenreLine from './GenreLine'
import CircularLoader from '../loaders/CircularLoader'

interface Props {
    onSelectGenre: (line: Genre) => void
    selectedGenre: Genre | null
}

function GenreList({ selectedGenre, onSelectGenre }: Props) {
    const { data, error, loader } = useGenres()
    return (
        <>
            {error && <h1>{error}</h1>}
            {loader && <CircularLoader />}
            <Heading
                px={4}
                fontSize="3xl"
                my={3}>
                Genres
            </Heading>
            <Stack>
                {data.map((item) => (
                    <GenreLine
                        selectedGenre={selectedGenre}
                        onSelectGenre={(line) => onSelectGenre(line)}
                        line={item}
                        key={item.id}
                    />
                ))}
            </Stack>
        </>
    )
}

export default GenreList
