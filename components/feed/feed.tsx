import React from 'react'

const feed = ({children} : {children: React.ReactNode}) => {
  return (
    <div className="w-full">
        {children}
    </div>
  )
}

export default feed