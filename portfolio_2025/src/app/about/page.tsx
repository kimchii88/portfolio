"use client";

import { useState } from "react";
import ScreenFadeOut from "@/components/SceneFadeOut";
import ScreenFadeIn from "@/components/SceneFadeIn";

export default function About() {
    const [fallingTransition, setFallingTransition] = useState(false);

    return (
        <div>
            <main className="w-screen h-screen pt-20 pb-20 ">
                {fallingTransition ? <ScreenFadeOut isActive /> : <ScreenFadeIn isActive />}
                about page!
            </main>
        </div>
    );
}
