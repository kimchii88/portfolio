"use client";

import FileIcon from "@/components/FileIcon";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import ScreenFadeIn from "@/components/SceneFadeIn";
import { useWithSound } from "@/helpers/useSounds";
import Image from "next/image";
import { useState } from "react";

export default function Connect() {
    const [copied, setCopied] = useState(false);
    const quackSoundEffect = useWithSound("/audio/quack.mp3");
    const selectedSoundEffect = useWithSound("/audio/selected.mp3");
    const [pageLoading, setPageLoading] = useState(true);

    const onClickPhoneNumber = () => {
        setCopied(true);
        navigator.clipboard.writeText("07386801051");

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <div className="w-screen h-screen bg-[#faf1d9]">
            {pageLoading && <LoadingScreen />}

            <ScreenFadeIn isActive />
            <Navbar />
            <main className=" w-full h-full flex justify-center items-center">
                <div className="grid grid-cols-3 grid-rows-2 self-center w-1/2 h-96 z-1 mt-24 ml-52">
                    <FileIcon
                        groupScale={2.5}
                        onClickEvent={() => window.open("https://www.linkedin.com/in/kim-gao-71a295184/", "_blank")}
                        imageLink={"/models/linkedin/25_10_19_16_06_52_455.gltf"}
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
                            imageLink={"/models/phone/25_10_19_20_44_12_680.gltf"}
                            label="Phone [07386801051]"
                        />
                    </div>
                    <FileIcon
                        groupScale={2.3}
                        onClickEvent={() => (window.location.href = "mailto:kimmygao808@gmail.com")}
                        imageLink={"/models/email/25_10_19_20_35_20_450.gltf"}
                        label={`Email [kimmygao808@gmail.com]`}
                    />
                    <FileIcon
                        groupScale={1.8}
                        onClickEvent={() => quackSoundEffect.playSound()}
                        imageLink={"/models/duck/25_10_19_21_02_33_280.gltf"}
                        label="Raymond [Duck]"
                    />

                    <FileIcon
                        groupScale={3}
                        onClickEvent={() => window.open("https://github.com/kimchii88", "_blank")}
                        imageLink={"/models/github/25_10_19_16_06_26_497.gltf"}
                        label="Github [New]"
                    />
                    <FileIcon
                        groupScale={3}
                        onClickEvent={() => window.open("https://github.com/kimchi8", "_blank")}
                        imageLink={"/models/githubOld/25_10_19_16_06_26_497.gltf"}
                        label="Github [Old]"
                        setPageLoading={() => {
                            setPageLoading(false);
                        }}
                    />
                </div>
                <Image
                    className="absolute w-7/12 h-auto top-32"
                    src={"/svgs/finder.svg"}
                    alt={"finder background photo"}
                    width={150}
                    height={150}
                />
            </main>
        </div>
    );
}
