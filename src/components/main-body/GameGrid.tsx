import { useEffect, useState } from "react"
import clientServices from "../../services/client-services"

interface Game {
    id: number,
    name: string,
    slug: string
}

function GameGrid () {
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

    return (
    <>  
        {error && (<h1>{error}</h1>)}
        {loader && (<h1>Loading...</h1>) }
    <ul>
        {game.map ((item) => <li key={item.id}>{item.name}</li>)}
    </ul>
    </>
  )
}

export default GameGrid