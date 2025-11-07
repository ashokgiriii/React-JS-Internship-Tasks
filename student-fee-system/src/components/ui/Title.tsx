
interface TitleProps {
    text: string,
    className?: string
}
const Title = ({ text, className }: TitleProps) => {
    return (
        <span className={className}>{text}</span>
    )
}

export default Title