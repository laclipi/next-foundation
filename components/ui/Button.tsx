import { ButtonHTMLAttributes } from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary"
}

export function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
  const baseStyles =
    "px-4 py-2 rounded-lg font-medium transition border"

  const variants = {
    primary: "bg-black text-white hover:bg-gray-800",
    secondary: "bg-white text-black border-gray-300 hover:bg-gray-100",
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    />
  )
}