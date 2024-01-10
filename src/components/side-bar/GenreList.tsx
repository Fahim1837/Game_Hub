import { Stack } from "@chakra-ui/react"
import useGenres, { Genre } from "../../hooks/useGenres"
import GenreLine from "./GenreLine"
import CircularLoader from "../loaders/CircularLoader"

interface Props {
  onSelectGenre: (line: Genre) => void 
}

function GenreList({onSelectGenre}: Props) {
    const {data, error, loader} = useGenres()
  return (
    <>  
        {error && (<h1>{error}</h1>)}
        {loader && <CircularLoader/>}

        <Stack>
            {data.map((item) => <GenreLine onSelectGenre={(line) => onSelectGenre(line)} line={item} key={item.id}/>)}
        </Stack>
    </>
  )
}

export default GenreList