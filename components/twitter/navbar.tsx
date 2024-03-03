import React from 'react'
import { BsTwitterX } from "react-icons/bs";
import { MdOutlineSettings } from "react-icons/md";

const NavBar = () => {
  return (
    <div className="sm:hidden bg-inherit text-background absolute top-0 left-0 h-12 w-svw px-3 py-2 flex justify-between items-center">
        <div className="w-8 h-8 rounded-full overflow-hidden">
            <img src="https://avatars.pfptown.com/585/luffy-pfp-1651.png" alt="Profile Picture" />
        </div>
        <div>
            <BsTwitterX className="w-7 h-7"/>
        </div>
        <div className='mr-2'>
            <MdOutlineSettings className="w-6 h-6"/>
        </div>
    </div>
  )
}

export default NavBar