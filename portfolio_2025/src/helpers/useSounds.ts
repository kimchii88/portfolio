import { useEffect, useRef } from "react";

export const useWithSound = (audioSource: string) => {
    const soundRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        if (typeof window === "undefined") return;

        soundRef.current = new Audio(audioSource);
    }, [audioSource]);

    const playSound = () => {
        return soundRef.current && soundRef.current.play();
    };

    return { playSound };
};
