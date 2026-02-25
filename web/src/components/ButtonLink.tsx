import React from "react"

type Variant = "primary" | "secondary"

type ButtonLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant
}

const base =
  "inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-200"

const variants: Record<Variant, string> = {
  primary:
    "border border-sky-500/40 bg-slate-900 text-slate-100 hover:bg-sky-500/20 hover:border-sky-400 hover:text-white",
  secondary:
    "border border-slate-700 bg-slate-800 text-slate-200 hover:border-sky-500/40 hover:text-sky-300",
}

export default function ButtonLink({
  variant = "primary",
  className = "",
  ...props
}: ButtonLinkProps) {
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...props} />
  )
}