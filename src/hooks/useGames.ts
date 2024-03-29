import { GameQuery } from '../App'
import useGenericHooks from './useGenericHooks'

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
    rating_top: number
}

const useGames = (gameQuery: GameQuery) =>
    useGenericHooks<Game>(
        '/games',
        {
            params: {
                genres: gameQuery.genre?.slug,
                platforms: gameQuery.platform?.id,
                ordering: gameQuery.selectOrder,
                search: gameQuery.searchText,
            },
        },
        [gameQuery]
    )

export default useGames
