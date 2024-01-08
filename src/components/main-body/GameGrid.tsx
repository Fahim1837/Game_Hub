import UseGames from "../../hooks/useGame"

function GameGrid () {
  const {error, loader, game} = UseGames()
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