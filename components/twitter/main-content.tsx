"use client";
import React, { useEffect, useRef } from "react";
import SideBar from "@/components/side-bar/sidebar";
import { BsTwitterX } from "react-icons/bs";
import TweetButton from "./tweet-button";
import SearchAndSuggestions from "../serach-and-suggestions/search-and-suggestions";

const MainContent = ({ children }: { children: React.ReactNode }) => {

    return (
        <div className="sm:w-[1200px] w-full flex sm:grid sm:grid-cols-10 sm:gap-2 sm:mr-9">
            <div className="bg-stone-950 max-h-svh fixed sm:sticky sm:top-0 bottom-0 left-0 w-full sm:w-auto border-t border-slate-700/50 flex flex-row sm:col-span-2 sm:flex-col xl:items-start sm:items-end py-2 px-3 text-white ">
                <div className="hidden sm:flex w-12 h-12 items-center justify-center hover:bg-slate-500/20 hover:rounded-full cursor-pointer">
                    <BsTwitterX className="h-6 w-6" />
                </div>
                <SideBar />
                <TweetButton />
            </div>
            <div className="min-h-svh h-[10000px] w-full lg:col-span-5 sm:col-span-7 sm:border-r sm:border-l border-stone-600/50">
                {children}
            </div>
            <div className="lg:col-span-3 hidden lg:flex px-2 py-3">
                <SearchAndSuggestions />
            </div>
        </div>
    );
};

export default MainContent;
