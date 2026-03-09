import React from "react"

type Variant = "primary" | "secondary"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
}

const base =
  "select-none inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200 cursor-pointer active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:cursor-not-allowed disabled:opacity-60"

const variants: Record<Variant, string> = {
  primary:
    "border border-sky-300/30 bg-slate-900 text-slate-100 hover:bg-sky-300/10 hover:border-sky-300/50 hover:text-white",
  secondary:
    "border border-slate-700 bg-slate-800 text-slate-200 hover:border-sky-300/40 hover:text-sky-300",
}

export default function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
  return <button className={`${base} ${variants[variant]} ${className}`} {...props} />
}