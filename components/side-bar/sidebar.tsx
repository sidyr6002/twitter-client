import React from "react";
import { GoHome } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { HiBell } from "react-icons/hi2";
import { MdMessage } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa6";
import { cn } from "@/lib/utils";

interface TwitterSidebarItem {
    title: string;
    icon: React.ReactNode;
    hidden?: boolean;
}

const sidebarItems: TwitterSidebarItem[] = [
    {
        title: "Home",
        icon: <GoHome />,
    },
    {
        title: "Explore",
        icon: <IoSearch />,
    },
    {
        title: "Notifications",
        icon: <HiBell />,
    },
    {
        title: "Messages",
        icon: <MdMessage />,
    },
    {
        title: "Profile",
        icon: <CgProfile />,
        hidden: true,
    },
    {
        title: "Bookmarks",
        icon: <FaRegBookmark />,
    },
    {
        title: "Settings",
        icon: <IoSettingsOutline />,
        hidden: true,
    }
]

const SideBar = () => {
    return (
        <div className="sm:mt-5 w-full sm:w-auto flex flex-row justify-between sm:flex-col gap-y-5 sm:pr-1">
            {
                sidebarItems
                    .map((item) => (
                        <div key={item.title} className={cn("flex gap-x-3 items-center w-fit py-2 pl-2 xl:pr-6 pr-2 hover:bg-slate-500/20 rounded-full cursor-pointer", item.hidden && "hidden sm:flex")}>
                            <div className="flex items-center justify-center text-2xl">{item.icon}</div>
                            <span className="text-lg hidden xl:block">{item.title}</span>
                        </div>
                    ))
            }
        </div>
    );
};

export default SideBar;
