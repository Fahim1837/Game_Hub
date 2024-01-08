import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/navigation-bar/NavBar'

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
                    h="100vh"
                    bg="green.300">
                    aside
                </GridItem>
            </Show>
            <GridItem
                colSpan={{ base: 3, lg: 2 }}
                h="100vh"
                bg="green.400">
                main
            </GridItem>
        </Grid>
    )
}

export default App
