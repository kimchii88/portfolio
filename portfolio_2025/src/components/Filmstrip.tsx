import Image from "next/image";
import { useEffect, useState } from "react";

interface FilmstripProps {
    isLoading: () => void;
}
export default function Filmstrip({ isLoading }: FilmstripProps) {
    const photos = [
        "/photos/cute.png",
        "/photos/nice_smile.png",
        "/photos/puffy.png",
        "/photos/shock.png",
        "/photos/soft_smile.png",
        "/photos/shocked.png",
        "/photos/smiley.png",
        "/photos/thinking.png",
        "/photos/waving.png",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [imagesLoaded, setImagesLoaded] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev: number) => (prev + 1) % photos.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [photos.length]);

    useEffect(() => {
        if (imagesLoaded > 3) isLoading?.();
    }, [imagesLoaded, isLoading]);

    const displayRange = [currentIndex, (currentIndex + 1) % photos.length, (currentIndex + 2) % photos.length];

    return (
        <div className="bg-white flex flex-row w-fit gap-3 py-2 pl-2 pr-8 -rotate-3">
            {displayRange.map((item) => {
                return (
                    <div key={item}>
                        <Image
                            src={photos[item]}
                            alt="image of me"
                            width={100}
                            height={100}
                            onLoadingComplete={() => {
                                setImagesLoaded((prev) => prev + 1);
                            }}
                        />
                    </div>
                );
            })}
        </div>
    );
}
