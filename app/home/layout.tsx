import MainContent from '@/components/twitter/main-content'
import NavBar from '@/components/twitter/navbar'
import React from 'react'

interface Props {
    children: React.ReactNode
}

const HomeLayout = ({children} : Props) => {
  return (
    <div className='w-screen max-w-svw flex'>
        <NavBar />
        <div className="w-full flex justify-center">
            <MainContent>{children}</MainContent>
        </div>
    </div>
  )
}

export default HomeLayout