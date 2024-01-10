import { useEffect, useState } from "react";
import clientServices from "../services/client-services";

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

function useGames () {
const [game, setGame] = useState <Game[]> ([])
  const [error, setError] = useState ('')
  const [loader, setLoader] = useState (false)
  useEffect(() => {

    setLoader (true)
    const req = clientServices.get('/games')
    
    req.then ((res) => {
        setGame(res.data.results)
        setLoader(false)
    })
        .catch ((err) => {
            setError (err.message)
            setLoader (false)
        })
  }, [])
  return {game, error, loader}
}

export default useGames