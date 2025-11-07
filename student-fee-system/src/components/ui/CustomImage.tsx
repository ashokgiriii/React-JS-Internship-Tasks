import Image from "next/image"
interface LogoProps {
    src: string,
    alt: string,
    width: number,
    height: number
    className?: string
}
const CustomImage = ({ src, alt, width, height, className }: LogoProps) => {
    return (
        <Image
            src={`/icons/${src}`}
            width={width}
            height={height}
            alt={alt}
            className={`w-10 h-10  ${className}`}
        />
    )
}

export default CustomImage