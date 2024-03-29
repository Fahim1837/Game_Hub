import noImg from '../assets/no-image-placeholder.webp'

function cropImg(url: string) {
    if (!url) return noImg

    let target = 'media/'
    let index = url.indexOf(target) + target.length
    let cropper = 'crop/600/400/'
    return url.slice(0, index) + cropper + url.slice(index)
}

export default cropImg
