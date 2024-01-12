import { Image, ImageProps } from '@chakra-ui/react'
import bull from '../../assets/bulls-eye.webp'
import meh from '../../assets/meh.webp'
import thumbs from '../../assets/thumbs-up.webp'

interface Props {
    rating: number
}

function GameEmoji({ rating }: Props) {
    let emojiMap: { [key: number]: ImageProps } = {
        3: { src: meh, alt: 'meh', boxSize: 45 },
        4: { src: thumbs, alt: 'Thumbs- Up', boxSize: 45 },
        5: { src: bull, alt: 'Exceptional', boxSize: 55 },
    }
    return (
        <Image
            {...emojiMap[rating]}
            mt={2}
        />
    )
}

export default GameEmoji
