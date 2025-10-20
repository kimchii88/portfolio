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
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link
                rel="icon"
                href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👀</text></svg>"
            />
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${coiny.variable} ${roboto.variable} ${anton.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
