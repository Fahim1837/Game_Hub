import useGenericHooks from './useGenericHooks'

export interface Genre {
    id: number
    name: string
    slug: string
    image_background: string
}

const useGenres = () => useGenericHooks<Genre>('/genres')

export default useGenres
