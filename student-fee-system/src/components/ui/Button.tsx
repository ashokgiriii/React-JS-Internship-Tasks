
interface ButtonProps {
  text: string
  onClick?: () => void
  className?: string
  type?: "submit" | "button"
}
const Button = ({ text,type, onClick, className }: ButtonProps) => {


  return (
    <button type={type} className={`cursor-pointer hover:bg-black p-2 px-10 bg-gray-900  text-white text-sm rounded-full tracking-wider   ${className}`} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button