import { Inter } from "next/font/google";
import { Flowbite, ThemeModeScript } from "flowbite-react";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "BOCAH KOST",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <ThemeModeScript />
            </head>
            <body className={`${inter.className} bg-white text-gray-600 antialiased dark:bg-gray-900 dark:text-gray-400`}>{children}</body>
        </html>
    );
}
