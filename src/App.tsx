import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  
	return (
		<Grid templateColumns='3' >
			<GridItem colSpan={3}  bg= 'green.200' >menu</GridItem>
			<Show above="lg">
			<GridItem colSpan={1} h='100vh' bg= 'green.300' >aside</GridItem>
			</Show>
			<GridItem colSpan={{base: 3, lg: 2}} h='100vh' bg= 'green.400' >main</GridItem>
		</Grid>

		)
}

export default App;
