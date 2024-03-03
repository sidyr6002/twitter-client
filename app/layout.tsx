import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import NavBar from "@/components/twitter/navbar";
import MainContent from "@/components/twitter/main-content";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("max-w-svw flex bg-stone-950", inter.className)}>
        <NavBar />
        <div className="w-full flex justify-center">
            <MainContent>{children}</MainContent>
        </div>
      </body>
    </html>
  );
}
