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
      className={`px-[10px] py-[10px] lg:py-[20px] border border-neutral-200 dark:border-neutral-800 flex dark:bg-black/35 flex-col lg:flex-row h-full rounded-lg shadow-md transition-all duration-300 lg:hover:shadow-md ${className} `}
      {...others}
    >
      {children}
    </div>
  )
}
