import { Platform } from './useGames'
import useGenericHooks from './useGenericHooks'

const usePlatforms = () => useGenericHooks<Platform>('/platforms/lists/parents')

export default usePlatforms
