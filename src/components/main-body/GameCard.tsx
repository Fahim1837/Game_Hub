import { Card, CardBody, Image } from "@chakra-ui/react"
import { Game } from "../../hooks/useGames"

interface Props {
  card: Game
}
function GameCard ({card}: Props) {
  return (
    <Card borderRadius={8} overflow= 'hidden'>
        <Image src= {card.background_image} />
        <CardBody fontSize='3xl' fontWeight= 'bold'>
        {card.name}
        </CardBody>
    </Card>
    )
}

export default GameCard