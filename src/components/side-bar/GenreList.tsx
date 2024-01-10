import { Stack } from "@chakra-ui/react"
import useGenres from "../../hooks/useGenres"
import GenreLine from "./GenreLine"
import CircularLoader from "../loaders/CircularLoader"

function GenreList() {
    const {data, error, loader} = useGenres()
  return (
    <>  
        {error && (<h1>{error}</h1>)}
        {loader && <CircularLoader/>}

        <Stack>
            {data.map((item) => <GenreLine line={item} key={item.id}/>)}
        </Stack>
    </>
  )
}

export default GenreList