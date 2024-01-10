import { Badge } from "@chakra-ui/react"
import { Game } from "../../hooks/useGames"

interface Props {
    critic: Game
}

function MetaCritic({critic}: Props) {
    let color 
    if (critic.metacritic > 75) color = 'green'
    else if (critic.metacritic > 60) color = 'yellow'
    else color = 'red'
    
  return (
    <Badge colorScheme={color} fontSize= '16px' borderRadius={6}>{critic.metacritic}</Badge>
    )
}

export default MetaCritic