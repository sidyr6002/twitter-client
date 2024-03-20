import MainContent from "@/components/twitter/main-content";
import NavBar from "@/components/nav-bar/navbar";
import React from "react";
import ReactQueryProviders from "../providers";
import {
    dehydrate,
    HydrationBoundary,
    QueryClient,
} from "@tanstack/react-query";
import { getCurrentUser } from "@/actions/getUser";
import { assert } from "console";

interface Props {
    children: React.ReactNode;
}

const HomeLayout = async ({ children }: Props) => {
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery({
        queryKey: ["currentUser"],
        queryFn: getCurrentUser,
    });
    const dehydratedState = dehydrate(queryClient);

    return (
        <HydrationBoundary state={dehydratedState}>
            <div className="w-screen max-w-svw flex">
                <NavBar />
                <div className="w-full flex justify-center">
                    <MainContent>{children}</MainContent>
                </div>
            </div>
        </HydrationBoundary>
    );
};

export default HomeLayout;
