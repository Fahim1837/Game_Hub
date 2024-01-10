import useGenericHooks from "./useGenericHooks";

export interface Platform {
    id: number,
    name: string,
    slug: string
}

export interface Game {
    id: number,
    name: string,
    slug: string,
    background_image: string,
    metacritic: number,
    parent_platforms: {platform: Platform } []
}

const useGames = () => useGenericHooks <Game> ('/games')

export default useGames