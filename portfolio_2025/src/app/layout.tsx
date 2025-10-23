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

export const metadata: Metadata = {
    title: "Kim's Website",
    description: "A portfolio website designed by Kim Gao 2025",
    icons: {
        icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👀</text></svg>",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${coiny.variable} ${roboto.variable} ${anton.variable} antialiased`}>
            <body>{children}</body>
        </html>
    );
}
