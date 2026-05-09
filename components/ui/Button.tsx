import { ButtonHTMLAttributes } from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary"
}

export function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "px-4 py-2 rounded-lg font-medium transition-all duration-200 border focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 cursor-pointer"

  const variants = {
    primary:
      "bg-black text-white border-black hover:bg-gray-800 active:scale-[0.98]",
    secondary:
      "bg-white text-black border-gray-300 hover:bg-gray-100 active:scale-[0.98]",
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    />
  )
}