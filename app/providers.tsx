"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const ReactQueryProviders = ({ children }: { children: React.ReactNode }) => {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools />
            {children}
        </QueryClientProvider>
    );
};

export default ReactQueryProviders;
