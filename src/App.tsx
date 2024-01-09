import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/navigation-bar/NavBar'
import GameGrid from './components/main-body/GameGrid'
import GenreList from './components/side-bar/GenreList'

function App() {
    return (
        <Grid templateColumns="3">
            <GridItem
                colSpan={3}>
                <NavBar />
            </GridItem>
            <Show above="lg">
                <GridItem
                    colSpan={1}
                    h="100vh">
                    <GenreList/>
                </GridItem>
            </Show>
            <GridItem
                colSpan={{ base: 3, lg: 2 }}
                h="100vh">
                <GameGrid/>
            </GridItem>
        </Grid>
    )
}

export default App
