import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  [propName: string]: unknown
}

export default function Card({ children, className = '', ...others }: CardProps) {
  return (
    <div
      data-testid="card"
      className={`py-[50px] rounded-xl shadow-sm transition-all duration-300 lg:hover:shadow-md ${className} `}
      {...others}
    >
      {children}
    </div>
  )
}
