import useGenericHooks from './useGenericHooks'
import { Genre } from './useGenres'

export interface Platform {
    id: number
    name: string
    slug: string
}

export interface Game {
    id: number
    name: string
    slug: string
    background_image: string
    metacritic: number
    parent_platforms: { platform: Platform }[]
}

const useGames = (
    selectedGenre: Genre | null,
    selectedPlatform: Platform | null
) =>
    useGenericHooks<Game>(
        '/games',
        {
            params: {
                genres: selectedGenre?.slug,
                platforms: selectedPlatform?.id,
            },
        },
        [selectedGenre?.slug, selectedPlatform?.id]
    )

export default useGames
