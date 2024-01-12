import genreData from '../data/genre-data'
export interface Genre {
    id: number
    name: string
    slug: string
    image_background: string
}

const useGenres = () => ({ data: genreData, error: null })

export default useGenres
