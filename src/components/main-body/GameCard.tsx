import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react'
import { Game } from '../../hooks/useGames'
import GameIcons from './GameIcons'
import MetaCritic from './MetaCritic'
import cropImg from '../../services/image-services'

interface Props {
    card: Game
}
function GameCard({ card }: Props) {
    return (
        <Card
            borderRadius={8}
            overflow="hidden"
            w="100%">
            <Image src={cropImg(card.background_image)} />
            <CardBody>
                <Heading
                    fontSize="3xl"
                    fontWeight="bold">
                    {card.name}
                </Heading>

                <HStack
                    justifyContent="space-between"
                    mt={3}>
                    <GameIcons
                        icon={card.parent_platforms.map((p) => p.platform)}
                    />
                    <MetaCritic critic={card} />
                </HStack>
            </CardBody>
        </Card>
    )
}

export default GameCard
