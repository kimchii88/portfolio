"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
    const [showScrollToTop, setShowScrollToTop] = useState(false);

    useEffect(() => {
        const scrollContainer = document.querySelector("[data-scroll-container]") || window;

        const handleScroll = () => {
            const scrollTop = scrollContainer === window ? window.scrollY : (scrollContainer as HTMLElement).scrollTop;
            setShowScrollToTop(scrollTop > window.innerHeight);
        };

        scrollContainer.addEventListener("scroll", handleScroll);
        return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTop = () => {
        const scrollContainer = document.querySelector("[data-scroll-container]") || window;
        if (scrollContainer === window) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            (scrollContainer as HTMLElement).scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <button
            onClick={scrollTop}
            className={`${
                !showScrollToTop && "hidden"
            } fixed bottom-10 right-10 z-50 bg-eggYellow text-brown font-bold font-roboto px-5 py-2 rounded-4xl border-3 border-brown hover:bg-brown hover:text-eggYellow hover:cursor-pointer transition-colors duration-200`}
        >
            Scroll to Top
        </button>
    );
}
