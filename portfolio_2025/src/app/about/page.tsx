"use client";

import ScreenFadeIn from "@/components/SceneFadeIn";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import BobbleItemWrapper from "@/components/BobbleItemWrapper";
import Link from "next/link";
import Filmstrip from "@/components/Filmstrip";
import useIsMobile from "@/helpers/useIsMobile";
import { useEffect, useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";

export default function About() {
    const [hasMounted, setHasMounted] = useState(false);
    const isScreenMobile = useIsMobile();
    const [pageLoading, setPageLoading] = useState(true);

    useEffect(() => {
        setHasMounted(true);
    }, []);
    if (!hasMounted) return null;

    if (isScreenMobile === null) return null;
    return (
        <div className="bg-sunshine w-screen min-h-[100dvh] md:min-h-fit md:h-screen overflow-x-hidden md:pb-0 overflow-y-auto">
            {pageLoading && <LoadingScreen />}
            {!pageLoading && <Navbar />}
            <ScreenFadeIn isActive />
            <main className=" py-20 md:h-screen md:block relative flex flex-col items-center justify-start z-10">
                <div className="relative z-0 flex flex-col md:h-full">
                    <motion.div
                        id="about me magazine text"
                        className="md:absolute md:top-0 md:left-[18vw] z-2 relative items-center left-1/6 min-w-[250px]"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                            type: "spring",
                            bounce: 0.25,
                        }}
                    >
                        <BobbleItemWrapper>
                            <Image src={"/svgs/about.svg"} alt={"about magazine text"} width={250} height={250} />
                            <Image
                                className="absolute left-10"
                                src={"/svgs/me.svg"}
                                alt={"me magazine text"}
                                width={150}
                                height={150}
                            />
                        </BobbleItemWrapper>
                    </motion.div>

                    <div className="relative w-full max-w-[1400px] h-full self-center">
                        <motion.div
                            id="stickers container"
                            className="absolute z-1 inset-0"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                                type: "spring",
                                bounce: 0.25,
                            }}
                        >
                            <div className="flex justify-start">
                                <div className="absolute md:flex top-[35%] left-[10%] hidden">
                                    <BobbleItemWrapper>
                                        <Image
                                            src={"/images/picnic/donut.png"}
                                            alt={"donut"}
                                            width={200}
                                            height={200}
                                        />
                                    </BobbleItemWrapper>
                                </div>
                                <div className="hidden md:flex md:absolute md:bottom-[8%] md:left-[10%] left-3 -bottom-24">
                                    <BobbleItemWrapper>
                                        <Filmstrip
                                            isLoading={() => {
                                                setPageLoading(false);
                                            }}
                                        />
                                    </BobbleItemWrapper>
                                </div>
                            </div>
                            <div className=" md:flex justify-end pr-34 hidden">
                                <div className="absolute bottom-[25%] right-[15%]">
                                    <BobbleItemWrapper>
                                        <Image
                                            src={"/images/picnic/coffee.png"}
                                            alt={"coffee cup"}
                                            width={150}
                                            height={150}
                                        />
                                    </BobbleItemWrapper>
                                </div>
                                <div className="absolute top-7 right-[15%]">
                                    <BobbleItemWrapper>
                                        <Link
                                            href="#"
                                            onClick={() => {
                                                window.location.href = "mailto:kimmygao808@gmail.com";
                                            }}
                                        >
                                            <Image
                                                className="rotate-12"
                                                src={"/svgs/hiringFruitSticker.svg"}
                                                alt={"hiring fruit sticker"}
                                                width={250}
                                                height={250}
                                            />
                                        </Link>
                                    </BobbleItemWrapper>
                                </div>
                                <div className="absolute -bottom-10 right-[15%]">
                                    <BobbleItemWrapper>
                                        <Image
                                            className="rotate-45"
                                            src={"/svgs/fairybread.svg"}
                                            alt={"fairybread"}
                                            width={150}
                                            height={150}
                                        />
                                    </BobbleItemWrapper>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {isScreenMobile ? (
                        <div className=" flex justify-center flex-col">
                            <Image src={"/svgs/aboutMeNote.svg"} alt={"about me note"} width={900} height={900} />
                            <div className="left-3 relative -top-20">
                                <BobbleItemWrapper>
                                    <Filmstrip isLoading={() => setPageLoading(false)} />
                                </BobbleItemWrapper>
                            </div>
                        </div>
                    ) : (
                        <Image
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
                            src={"/svgs/picnicRug.svg"}
                            alt={"picnic rug photo"}
                            width={900}
                            height={900}
                        />
                    )}
                </div>
            </main>
        </div>
    );
}
