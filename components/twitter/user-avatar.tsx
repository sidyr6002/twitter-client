"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "@/actions/getUser";

interface UserAvatarProps {
    image: string | undefined;
}

const UserAvatar = ({image} : UserAvatarProps) => {
    return (
        <div className="col-span-1 flex justify-center items-start h-full">
            <Avatar className="w-8 h-8 sm:w-9 sm:h-9">
                <AvatarImage
                    src={image ? image : ""}
                    className="w-full"
                />
                <AvatarFallback>
                    <svg
                        className="w-full fill-stone-900 text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a9 9 0 0 0 5-1.5 4 4 0 0 0-4-3.5h-2a4 4 0 0 0-4 3.5 9 9 0 0 0 5 1.5Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                    </svg>
                </AvatarFallback>
            </Avatar>
        </div>
    );
};

export default UserAvatar;
