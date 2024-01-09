import { HStack, Image, Text } from "@chakra-ui/react"
import { Genre } from "../../hooks/useGenres"

interface Props {
    line: Genre
}
function GenreLine({line}: Props) {
  return (
    <HStack px={4}>
        <Image src = {line.image_background} boxSize={12} borderRadius={10}/>
        <Text fontSize= 'xl'>{line.name}</Text>
    </HStack>
  )
}

export default GenreLine