import React from "react"
import CustomImage from "@/src/components/ui/CustomImage"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string
    iconSrc?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className = "", iconSrc, ...props }, ref) => {
        return (
            <div className="flex flex-col gap-2">
                <div className="p-2 items-center border border-gray-200 rounded-md w-full flex">
                    {iconSrc && (
                        <CustomImage
                            src={iconSrc}
                            width={20}
                            height={20}
                            alt="input icon"
                            className="h-[20px] mr-2"
                        />
                    )}
                    <input
                        ref={ref}
                        className={`outline-none py-2 px-4 text-sm w-full ${className}`}
                        {...props}
                    />
                </div>
            </div>
        )
    }
)

Input.displayName = "Input"
export default Input
