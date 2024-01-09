import {SimpleGrid } from "@chakra-ui/react"
import useGames from "../../hooks/useGames"
import GameCard from "./GameCard"

function GameGrid () {
  const {error, loader, game} = useGames()
    return (
    <>  
        {error && (<h1>{error}</h1>)}
        {loader && (<h1>Loading...</h1>) }

    <SimpleGrid columns={{base:1, md:2, lg: 3 }} gap={10} px={4}>
       {game.map ((item) => <GameCard  card={item} key={item.id}/>)}
    </SimpleGrid>
    
    </>
  )
}

export default GameGrid