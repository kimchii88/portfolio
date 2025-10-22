"use client";

import FileIcon from "@/components/FileIcon";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import ScreenFadeIn from "@/components/SceneFadeIn";
import useIsMobile from "@/helpers/useIsMobile";
import { useWithSound } from "@/helpers/useSounds";
import Image from "next/image";
import { useState } from "react";

export default function Connect() {
    const [copied, setCopied] = useState(false);
    const quackSoundEffect = useWithSound("/audio/quack.mp3");
    const selectedSoundEffect = useWithSound("/audio/selected.mp3");
    const [pageLoading, setPageLoading] = useState(true);
    const isScreenMobile = useIsMobile();

    const onClickPhoneNumber = () => {
        setCopied(true);
        navigator.clipboard.writeText("07386801051");

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <div className="w-screen h-screen bg-[#faf1d9] overflow-x-hidden pb-40 md:pb-0">
            {pageLoading && <LoadingScreen />}
            <ScreenFadeIn isActive />
            <Navbar />
            <main className=" w-full h-full flex justify-center items-center relative ">
                <div className="relative w-[90vw] max-w-[900px] aspect-[4/5] md:aspect-[16/10]">
                    {!isScreenMobile && (
                        <Image
                            fill
                            className="object-contain"
                            priority
                            src={"/svgs/finder.svg"}
                            alt={"finder background photo"}
                        />
                    )}

                    <div className="absolute top-32 pb-44 inset-0 grid gap-10 mb-32 md:pb-0 md:grid-cols-3 md:grid-rows-2 md:gap-[4vw] place-items-center md:h-5/12 self-center md:w-9/12 md:left-32 md:top-10">
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
                {/* <div className="grid md:grid-cols-3 md:grid-rows-2 self-center md:w-1/2 md:h-96 z-1 md:mt-24 md:ml-52 gap-20 mt-[500px] pb-20 ">
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
                {!isScreenMobile && (
                    <Image
                        className="absolute w-[900px] h-auto top-24"
                        src={"/svgs/finder.svg"}
                        alt={"finder background photo"}
                        width={150}
                        height={150}
                    />
                )} */}
            </main>
        </div>
    );
}
