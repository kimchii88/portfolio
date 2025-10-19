"use client";

import ScreenFadeIn from "@/components/SceneFadeIn";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import BobbleItemWrapper from "@/components/BobbleItemWrapper";
import Link from "next/link";

export default function About() {
    return (
        <div className="bg-[#F5A651]">
            <main className="w-screen h-screen pt-10 pb-20 ">
                {<ScreenFadeIn isActive />}
                <Navbar />

                <div className="relative z-0 w-screen h-screen flex overflow-hidden bg-[#F5A651]">
                    <motion.div
                        className="absolute top-5 left-48 self-center center z-2"
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

                    <motion.div
                        className="absolute z-1 w-full h-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                            type: "spring",
                            bounce: 0.25,
                        }}
                    >
                        <div className="w-full h-full flex justify-start ">
                            <div className="absolute top-[35%] left-[10%]">
                                <BobbleItemWrapper>
                                    <Image src={"/images/picnic/donut.png"} alt={"donut"} width={200} height={200} />
                                </BobbleItemWrapper>
                            </div>
                            <div className="absolute top-[55%] left-[15%]">
                                <BobbleItemWrapper>
                                    <Image
                                        className="rotate-12"
                                        src={"/images/picnic/bag.png"}
                                        alt={"bag"}
                                        width={200}
                                        height={200}
                                    />
                                </BobbleItemWrapper>
                            </div>
                        </div>
                        <div className="w-full h-full flex justify-end pr-34">
                            <div className="absolute bottom-[35%] right-[15%]">
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
                            <div className="absolute bottom-14 right-[15%]">
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

                        {/* <BobbleItemWrapper>
                            <Image
                                className="absolute top-24 left-44 rotate-12"
                                src={"/images/picnic/donut.png"}
                                alt={"donut"}
                                width={300}
                                height={300}
                            />
                        </BobbleItemWrapper>
                        <BobbleItemWrapper>
                            <Image
                                className="absolute top-40 left-44 rotate-12"
                                src={"/images/picnic/bag.png"}
                                alt={"bag cup"}
                                width={300}
                                height={300}
                            />
                        </BobbleItemWrapper> */}
                    </motion.div>
                    <Image
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
                        src={"/svgs/picnicRug.svg"}
                        alt={"picnic rug photo"}
                        width={900}
                        height={900}
                    />
                </div>
            </main>
        </div>
    );
}
