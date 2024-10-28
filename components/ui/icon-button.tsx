
import { cn } from '@/lib/utils'
import React from 'react'


export type Props = {
    onClick: () => void,
    icon: React.ReactElement,
    className?: string
}

const IconButton = (props: Props) => {
    const { onClick, icon, className } = props


  return (
    <button onClick={onClick} 
        className={cn("rounded-full flex flex-items bg-white border shadow-md p-2 hover:scale-110 transition", className)}>
        {icon}
    </button>   
  )
}

export default IconButton
