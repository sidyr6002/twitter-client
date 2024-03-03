import { cn } from '@/lib/utils'
import React from 'react'

interface IconWithCountProps {
    children: React.ReactNode
    count?: number
    hovertext: string
    hoverBackground: string
}

const IconWithCount = (props: IconWithCountProps) => {
  const { children, count, hovertext, hoverBackground } = props;

  if (!count) {
    return (
        <span className={cn("relative before:content-[''] before:absolute before:top-[50%] before:left-[50%] before:translate-x-[-50%] before:translate-y-[-50%] before:h-full before:w-full before:p-4 before:rounded-full text-gray-500/80", hoverBackground, hovertext)}>
            {children}
        </span>
    )
  }

  return (
    <div className={cn("flex items-center gap-2 text-gray-500/80", hovertext)}>
         <span className={cn("relative before:content-[''] before:absolute before:top-[50%] before:left-[50%] before:translate-x-[-50%] before:translate-y-[-50%] before:h-full before:w-full before:p-4 before:rounded-full", hoverBackground)}>
            {children}
         </span>
         <span className="text-xs font-mono">{count}</span>
    </div>
  )
}

export default IconWithCount