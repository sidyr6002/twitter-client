import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import ReactQueryProviders from "./providers";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const session = await auth();

    return (
        <SessionProvider session={session}>
            <html lang="en">
                <body className={cn("max-w-svw overflow-x-hidden overflow-y-scroll flex bg-stone-950 text-background", inter.className)}>
                    <ReactQueryProviders>{children}</ReactQueryProviders>
                </body>
            </html>
        </SessionProvider>
    );
}
