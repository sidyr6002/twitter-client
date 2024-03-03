"use client";
import React from "react";
import UserAvatar from "../twitter/user-avatar";
import FeedCardSocial from "./feed-card-social";

const FeedCard = () => {
    return (
        <div className="w-full cursor-pointer grid grid-cols-10 gap-2 sm:gap-1 pt-3 p-1 border-t border-stone-600/50 hover:bg-stone-900/60 transition-all">
            <UserAvatar />
            <div className="col-span-9 text-white">
                <div className="flex items-center gap-1">
                    <span className="font-semibold tracking-tight">
                        Monkey D Luffy
                    </span>
                    <span className="tracking-tighter text-gray-500/60">
                        @monkeydluffy
                    </span>
                    <span className="font-extralight text-gray-600/50">•</span>
                    <span className="text-gray-500/60">6h</span>
                </div>
                <div className="text-sm leading-6 py-2">
                    I don't know why on earth people are suddenly asking me for
                    course reviews!! <br />I mean why? something happened
                    recently? In any case, I am not reviewing anything, I don't
                    have time for that :) Also my answer always is - Do your own
                    research before you follow anything/anyone.
                </div>
                <FeedCardSocial />
            </div>
        </div>
    );
};

export default FeedCard;
