import { Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import NavBar from './components/navigation-bar/NavBar'
import GameGrid from './components/main-body/GameGrid'
import GenreList from './components/side-bar/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/useGenres'
import PlatformList from './components/main-body/PlatformList'
import OrderList from './components/main-body/OrderList'
import { Platform } from './hooks/useGames'

export interface GameQuery {
    genre: Genre
    platform: Platform
    selectOrder: string | null
}

function App() {
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

    return (
        <Grid templateColumns="3">
            <GridItem colSpan={3}>
                <NavBar />
            </GridItem>
            <Show above="lg">
                <GridItem
                    colSpan={1}
                    h="100vh">
                    <GenreList
                        selectedGenre= {gameQuery.genre}
                        onSelectGenre= {(genre) => setGameQuery({ ...gameQuery, genre })}
                    />
                </GridItem>
            </Show>
            <GridItem
                colSpan={{ base: 3, lg: 2 }}
                h="100vh">
                <HStack mb={4} ms={4} spacing={4}>
                    <PlatformList
                        onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })}
                        selectedPlatform={gameQuery.platform}
                    />
                    <OrderList 
                    selectedOrder={gameQuery.selectOrder}
                    onSelectOrder={(selectOrder) => setGameQuery({...gameQuery, selectOrder})}/>
                </HStack>
                <GameGrid gameQuery={gameQuery} />
            </GridItem>
        </Grid>
    )
}

export default App
