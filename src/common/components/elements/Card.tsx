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
      className={`px-[10px] py-[17px] lg:py-[20px] flex flex-col lg:flex-row h-full rounded-xl shadow-sm transition-all duration-300 lg:hover:shadow-md ${className} `}
      {...others}
    >
      {children}
    </div>
  )
}
