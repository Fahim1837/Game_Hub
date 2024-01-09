import { Stack } from "@chakra-ui/react"
import useGenres from "../../hooks/useGenres"
import GenreLine from "./GenreLine"

function GenreList() {
    const {genre, error, loader} = useGenres()
  return (
    <>  
        {error && (<h1>{error}</h1>)}
        {loader && (<h1>Loading...</h1>)}

        <Stack>
            {genre.map((item) => <GenreLine line={item} key={item.id}/>)}
        </Stack>
    </>
  )
}

export default GenreList