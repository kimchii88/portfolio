import type { Metadata } from "next";
import { Geist, Geist_Mono, Coiny, Roboto, Anton } from "next/font/google";

import "../styles/globals.css";

const anton = Anton({
    variable: "--font-anton",
    weight: ["400"],
    subsets: ["latin"],
});

const coiny = Coiny({
    variable: "--font-coiny",
    weight: ["400"],
    subsets: ["latin"],
});

const roboto = Roboto({
    variable: "--font-roboto",
    weight: ["400"],
    subsets: ["latin"],
});

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Kim's Website",
    description: "A portfolio website designed by Kim Gao 2025",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${coiny.variable} ${roboto.variable} ${anton.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
