import { useEffect, useState } from "react"
import clientServices from "../services/client-services"

export interface Genre {
    id: number,
    name: string,
    slug: string
    image_background: string
}

function useGenres () {
    const [genre, setGenre] = useState <Genre[]> ([])
    const [error, setError] = useState ('')
    const [loader, setLoader] = useState (false)

    useEffect (() => {
        setLoader (true)
        const req = clientServices.get('/genres')

        req.then ((res) => {
            setGenre (res.data.results)
            setLoader (false)
        })
        req.catch ((err) => {
            setError (err.message)
            setLoader (false)
        })
    }, [])

    return {genre, error, loader}
}

export default useGenres