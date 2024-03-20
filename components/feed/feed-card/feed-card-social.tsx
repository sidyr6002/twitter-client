import React from "react";
import {
    FaRetweet,
    FaRegHeart,
    FaRegComment,
    FaRegBookmark,
    FaArrowUpFromBracket,
} from "react-icons/fa6";
import IconWithCount from "../feed-icon/icon-with-count";

const FeedCardSocial = () => {
    return (
        <div className="flex justify-between py-2 pl-1 pr-3">
            <IconWithCount
                count={13}
                hovertext="hover:text-sky-600"
                hoverBackground="before:hover:bg-sky-900/20"
            >
                <FaRegComment className="w-4 h-4" />
            </IconWithCount>
            <IconWithCount
                count={13}
                hovertext="hover:text-pink-600"
                hoverBackground="before:hover:bg-pink-900/20"
            >
                <FaRetweet className="w-4 h-4" />
            </IconWithCount>
            <IconWithCount
                count={13}
                hovertext="hover:text-red-600"
                hoverBackground="before:hover:bg-red-900/20"
            >
                <FaRegHeart className="w-4 h-4" />
            </IconWithCount>
            <div className="flex items-center gap-3">
                <IconWithCount
                    hovertext="hover:text-sky-600"
                    hoverBackground="before:hover:bg-sky-900/20"
                >
                    <FaRegBookmark className="w-4 h-4" />
                </IconWithCount>
                <IconWithCount
                    hovertext="hover:text-sky-600"
                    hoverBackground="before:hover:bg-sky-900/20"
                >
                    <FaArrowUpFromBracket className="w-4 h-4" />
                </IconWithCount>
            </div>
        </div>
    );
};

export default FeedCardSocial;
