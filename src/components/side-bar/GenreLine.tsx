import { HStack, Image, Link } from "@chakra-ui/react"
import { Genre } from "../../hooks/useGenres"

interface Props {
    line: Genre
    onSelectGenre: (line: Genre) => void
}
function GenreLine({line, onSelectGenre}: Props) {

  return (
    <HStack px={4} onClick={() => onSelectGenre (line)}>
        <Image src = {line.image_background}  boxSize={12} borderRadius={10}/>
        <Link fontSize= 'xl' >{line.name}</Link>
    </HStack>
  )
}

export default GenreLine