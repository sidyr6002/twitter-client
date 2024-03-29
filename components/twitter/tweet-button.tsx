import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import UserAvatar from "./user-avatar";
import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "@/actions/getUser";

const TweetButton = () => {
    const {data: currentUser } = useQuery({
        queryKey: ["currentUser"],
        queryFn: async () => await getCurrentUser(),
    })

    console.log("Current User", currentUser);

    return (
        <div className="hidden grow sm:flex flex-col mt-5 xl:w-full w-fit justify-between">
            <button className="bg-sky-600 hover:bg-sky-500 text-white h-11 w-11 xl:w-full rounded-full py-auto">
                <span className="hidden xl:block font-semibold text-sm">
                    Post
                </span>
                <div className="flex items-center justify-center">
                    <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="xl:hidden w-5 h-5"
                    >
                        <g>
                            <path
                                className="fill-sky-100"
                                d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z"
                            ></path>
                        </g>
                    </svg>
                </div>
            </button>

            <div className="w-full flex hover:bg-slate-500/20 xl:py-2 xl:px-2 rounded-full">
                <div className="xl:w-3/12 flex items-center justify-start">
                    <UserAvatar image={currentUser?.data?.getCurrentUser?.profilePicture ? currentUser.data.getCurrentUser.profilePicture : ""}/>
                </div>
                <div className="w-8/12 hidden xl:flex items-center">
                    <div className="text-white flex flex-col gap-[0.5px] overflow-hidden">
                        <span className="text-sm font-bold whitespace-nowrap">
                            {currentUser?.data?.getCurrentUser?.firstName + " " + currentUser?.data?.getCurrentUser?.lastName}
                        </span>
                        <span className="text-xs text-gray-500 tracking-wider">
                            @monkeydluffy
                        </span>
                    </div>
                </div>
                <div className="w-1/12 hidden xl:flex items-center justify-end">
                    <HiOutlineDotsHorizontal />
                </div>
            </div>
        </div>
    );
};

export default TweetButton;
