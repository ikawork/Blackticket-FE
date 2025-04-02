"use client";
import { ModalPrivider } from "@/context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React, { useState } from "react";
const Providers = ({ children }: { children: React.ReactNode }) => {
    const [queryClient] = useState(() => {
        return new QueryClient({
            defaultOptions: {
                queries: {
                    staleTime: 10 * 60 * 1000,
                },
            },
        });
    });

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <ModalPrivider>{children}</ModalPrivider>
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </>
    );
};

export default Providers;
