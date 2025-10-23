"use client";

import FileIcon from "@/components/FileIcon";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import ScreenFadeIn from "@/components/SceneFadeIn";
import useIsMobile from "@/helpers/useIsMobile";
import { useWithSound } from "@/helpers/useSounds";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Connect() {
    const [hasMounted, setHasMounted] = useState(false);
    const [copied, setCopied] = useState(false);
    const quackSoundEffect = useWithSound("/audio/quack.mp3");
    const selectedSoundEffect = useWithSound("/audio/selected.mp3");
    const [pageLoading, setPageLoading] = useState(true);
    const isScreenMobile = useIsMobile();

    useEffect(() => {
        setHasMounted(true);
    }, []);
    if (!hasMounted) return null;

    if (isScreenMobile === null) return null;

    const onClickPhoneNumber = () => {
        setCopied(true);
        navigator.clipboard.writeText("07386801051");

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <div className="w-screen min-h-[100dvh] bg-eggYellow overflow-hidden">
            {pageLoading && <LoadingScreen />}
            <ScreenFadeIn isActive />
            <Navbar />
            <main
                className={`relative flex flex-col justify-center items-center overflow-hidden md:overflow-auto md:h-screen`}
            >
                <div
                    className={`relative w-[90vw] max-w-[900px] py-20 md:py-0 md:aspect-[16/10] flex flex-col justify-center overflow-y-scroll md:overflow-auto`}
                >
                    {!isScreenMobile && (
                        <Image
                            fill
                            className="object-contain"
                            priority
                            src={"/svgs/finder.svg"}
                            alt={"finder background photo"}
                        />
                    )}

                    <div
                        className={`${
                            pageLoading ? "min-h-0 h-0" : "min-h-[100dvh] md:min-h-[35dvh] "
                        }  overflow-hidden md:absolute inset-0 grid grid-cols-1 gap-10 md:grid-cols-3 md:grid-rows-2 md:gap-[4vw] place-items-center md:h-5/12 self-center md:w-9/12 md:left-36 md:top-5`}
                    >
                        <FileIcon
                            groupScale={2.5}
                            onClickEvent={() => window.open("https://www.linkedin.com/in/kim-gao-71a295184/", "_blank")}
                            imageLink={"/models/linkedin/linkedin_compressed.glb"}
                            label="Linkedin"
                            setPageLoading={() => {
                                setPageLoading(false);
                            }}
                        />
                        <div>
                            {copied && <p> Number Copied!</p>}
                            <FileIcon
                                groupScale={1.2}
                                onClickEvent={() => {
                                    selectedSoundEffect.playSound();
                                    onClickPhoneNumber();
                                }}
                                imageLink={"/models/phone/phone_compressed.glb"}
                                label="Phone [07386801051]"
                            />
                        </div>
                        <FileIcon
                            groupScale={2}
                            onClickEvent={() => (window.location.href = "mailto:kimmygao808@gmail.com")}
                            imageLink={"/models/email/email_compressed.glb"}
                            label={`Email [kimmygao808@gmail.com]`}
                        />
                        <FileIcon
                            groupScale={1.8}
                            onClickEvent={() => quackSoundEffect.playSound()}
                            imageLink={"/models/duck/duck_compressed.glb"}
                            label="Raymond [Duck]"
                        />

                        <FileIcon
                            groupScale={3}
                            onClickEvent={() => window.open("https://github.com/kimchii88", "_blank")}
                            imageLink={"/models/github/github_compressed.glb"}
                            label="Github [New]"
                        />
                        <FileIcon
                            groupScale={3}
                            onClickEvent={() => window.open("https://github.com/kimchi8", "_blank")}
                            imageLink={"/models/githubOld/github_old_compressed.glb"}
                            label="Github [Old]"
                            setPageLoading={() => {
                                setPageLoading(false);
                            }}
                        />
                    </div>
                </div>
            </main>
        </div>
    );
}
