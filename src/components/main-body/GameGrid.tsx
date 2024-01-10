import { SimpleGrid } from '@chakra-ui/react'
import useGames, { Platform } from '../../hooks/useGames'
import GameCard from './GameCard'
import SkeletonLoader from '../loaders/SkeletonLoader'
import { Genre } from '../../hooks/useGenres'

interface Props {
    selectedGenre: Genre | null
    selectedPlatform: Platform | null
}
function GameGrid({ selectedGenre, selectedPlatform }: Props) {
    const { error, loader, data } = useGames(selectedGenre, selectedPlatform)
    return (
        <>
            {error && <h1>{error}</h1>}
            {loader && <SkeletonLoader />}

            <SimpleGrid
                columns={{ base: 1, md: 2, lg: 3 }}
                gap={10}
                px={4}>
                {data.map((item) => (
                    <GameCard
                        card={item}
                        key={item.id}
                    />
                ))}
            </SimpleGrid>
        </>
    )
}

export default GameGrid
