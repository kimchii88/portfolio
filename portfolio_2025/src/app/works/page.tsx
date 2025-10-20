"use client";

import { useState } from "react";
import ScreenFadeOut from "@/components/SceneFadeOut";
import { motion } from "framer-motion";
import LeftLinedSection from "@/components/layouts/LeftLinedSection";
import { Canvas } from "@react-three/fiber";
import { Environment, Text } from "@react-three/drei";
import SpinningModel from "@/components/SpinningModel";
import RightLinedSection from "@/components/layouts/RightLinedSection";
import Image from "next/image";
import ClickableSectionText from "@/components/ClickableSectionText";
import Navbar from "@/components/Navbar";
import LoadingScreen from "@/components/LoadingScreen";
import useIsMobile from "@/helpers/useIsMobile";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function Works() {
    const [pageLoading, setPageLoading] = useState(true);
    const [fallingTransition] = useState(false);
    const isScreenMobile = useIsMobile();

    const repeatBannerText = Array.from({ length: 10 }).map((_, index) => {
        return (
            <span key={index} className="mx-10 font-anton text-6xl">
                LOOKING TO HIRE? CALL 07386801051 NOW!!!
            </span>
        );
    });

    const scrollToSection = (sectionSelected: string) => {
        const el = document.getElementById(sectionSelected);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div>
            {pageLoading && <LoadingScreen />}
            <main className="w-screen h-screen pt-20 pb-20 bg-[#faf1d9] overflow-x-hidden">
                {fallingTransition && <ScreenFadeOut isActive />}
                <Navbar />
                <div id="title-cards" className="flex md:flex-row gap-5 md:px-10 px-6 flex-col">
                    <div className="bg-[#f5a651] h-[500px] md:w-1/2 rounded-2xl flex justify-center items-center object-center flex-col">
                        <h1 className="text-[#d14538] md:text-9xl text-8xl font-coiny text-center">WORK</h1>
                        <p className="text-[#572c1c]">Some cool things I did in the past</p>
                    </div>
                    <div className="bg-[#d14538] md:h-[500px] h-[300px] md:w-1/2 rounded-2xl flex items-center flex-col px-10">
                        <h1 className="text-lg pt-5 md:pl-5 pb-1 self-start text-[#faf1d9] font-roboto">
                            {`${isScreenMobile ? "A Table of Content" : " Table of Contents"}`}
                        </h1>
                        <div className="bg-[#faf1d9] h-full w-full rounded-2xl mb-10 overflow-scroll">
                            <Canvas camera={{ position: [0, 0, 8], fov: 35 }}>
                                <Environment preset="sunset" />
                                <ambientLight intensity={0.2} />
                                {!isScreenMobile && (
                                    <>
                                        <group position={[-4, 2, -4]}>
                                            <SpinningModel
                                                url="/models/longTable/25_10_17_21_42_00_099.gltf"
                                                onClickEvent={() => scrollToSection("technologyone")}
                                            />
                                            <ClickableSectionText
                                                section="TechnologyOne"
                                                scrollToSection={() => scrollToSection("technologyone")}
                                            />
                                        </group>
                                        <group position={[0, 2, -4]}>
                                            <SpinningModel
                                                url="/models/curveTable/25_10_18_12_11_20_050.gltf"
                                                onClickEvent={() => scrollToSection("zeroflucs")}
                                            />
                                            <ClickableSectionText
                                                section="ZeroFlucs"
                                                scrollToSection={() => scrollToSection("zeroflucs")}
                                            />
                                        </group>
                                        <group position={[4, 2, -4]}>
                                            <SpinningModel
                                                url="/models/greenTable/25_10_17_21_39_52_856.gltf"
                                                onClickEvent={() => scrollToSection("shecodes")}
                                            />
                                            <ClickableSectionText
                                                section="SheCodes"
                                                scrollToSection={() => scrollToSection("shecodes")}
                                            />
                                        </group>
                                        <group position={[-4, -0.5, -4]}>
                                            <SpinningModel
                                                url="/models/circularTable/25_10_17_21_44_41_772.gltf"
                                                onClickEvent={() => scrollToSection("elipse")}
                                            />
                                            <ClickableSectionText
                                                section="Elipse"
                                                scrollToSection={() => scrollToSection("elipse")}
                                            />
                                        </group>
                                        <group position={[0, -0.5, -4]}>
                                            <SpinningModel
                                                url="/models/glassTable/25_10_18_12_13_45_839.gltf"
                                                onClickEvent={() => scrollToSection("aurora")}
                                            />
                                            <ClickableSectionText
                                                section="Aurora Foods"
                                                scrollToSection={() => scrollToSection("aurora")}
                                            />
                                        </group>
                                        <group position={[4, -0.5, -4]}>
                                            <SpinningModel
                                                url="/models/mushroomTable/25_10_18_11_55_04_284.gltf"
                                                onClickEvent={() => scrollToSection("ventures")}
                                            />
                                            <ClickableSectionText
                                                section="Ventures"
                                                scrollToSection={() => scrollToSection("ventures")}
                                            />
                                        </group>
                                        <group position={[-4, -2.6, -4]}>
                                            <SpinningModel
                                                url="/models/shortTable/25_10_17_21_43_36_878.gltf"
                                                onClickEvent={() => scrollToSection("swyftx")}
                                            />
                                            <ClickableSectionText
                                                section="Swyftx"
                                                scrollToSection={() => scrollToSection("swyftx")}
                                            />
                                        </group>
                                        <group position={[0, -2.6, -4]}>
                                            <SpinningModel
                                                url="/models/ovalTable/25_10_18_12_12_27_042.gltf"
                                                onClickEvent={() => scrollToSection("lit")}
                                            />
                                            <ClickableSectionText
                                                section="Ladies in Technology"
                                                scrollToSection={() => scrollToSection("lit")}
                                            />
                                        </group>
                                    </>
                                )}
                                <group position={isScreenMobile ? [0, -1.2, 0] : [4, -2.6, -4]}>
                                    <SpinningModel
                                        url="/models/sideTable/25_10_18_12_37_30_381.gltf"
                                        onClickEvent={() =>
                                            window.open(
                                                "https://drive.google.com/file/d/1MoWN4sct9eAQJP4bAz7rSbK8yFlGl20Z/view?usp=sharing",
                                                "_blank"
                                            )
                                        }
                                        customScale={isScreenMobile ? 0.025 : 0.009}
                                        isLoading={() => {
                                            setPageLoading(false);
                                        }}
                                    />
                                    <Text
                                        fontSize={0.3}
                                        color="#572b1c"
                                        position={[0, -0.5, 0]}
                                        onClick={() => {
                                            window.open(
                                                "https://drive.google.com/file/d/1MoWN4sct9eAQJP4bAz7rSbK8yFlGl20Z/view?usp=sharing",
                                                "_blank"
                                            );
                                        }}
                                    >
                                        Resume
                                    </Text>
                                </group>
                            </Canvas>
                        </div>
                    </div>
                </div>
                <div className=" my-8 whitespace-nowrap overflow-hidden bg-[#d14538] text-[#faf1d9] py-1">
                    <motion.div
                        animate={{ x: ["100%", "-100%"] }}
                        transition={{
                            repeat: Infinity,
                            duration: 20,
                            ease: "linear",
                        }}
                    >
                        {repeatBannerText}
                    </motion.div>
                </div>
                {!pageLoading && !isScreenMobile && (
                    <>
                        <LeftLinedSection
                            image={{
                                imageUrl: "/svgs/technologyone.svg",
                                imageAlt: "technologyOne receipt",
                                imageWidth: 650,
                                imageHeight: 850,
                            }}
                        >
                            <div className="relative w-full flex justify-center items-center py-8" id="technologyone">
                                <Image
                                    className="w-auto h-auto"
                                    src={"/images/vogue.jpg"}
                                    alt={"Vogue photo"}
                                    width={500}
                                    height={500}
                                />
                                <a
                                    href="https://www.technology1.co.uk/products/dxp-student"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute top-24 right-14 w-[250px] h-[250px]"
                                >
                                    <Image
                                        className="w-full h-full animate-spin [animation-duration:10s]
"
                                        src={"/svgs/flower.svg"}
                                        alt={"flower svg"}
                                        width={100}
                                        height={100}
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center text-white font-semibold text-sm text-center pointer-events-none">
                                        <span className="w-1/2">
                                            Check out the product I helped build at TechnologyOne! <br />
                                            [Click me]
                                        </span>
                                    </div>
                                </a>
                            </div>
                        </LeftLinedSection>
                        <RightLinedSection
                            image={{
                                imageUrl: "/svgs/zeroflucs.svg",
                                imageAlt: "zeroflucs receipt",
                                imageWidth: 650,
                                imageHeight: 850,
                            }}
                        >
                            <div className="relative w-full flex justify-center items-center py-8" id="zeroflucs">
                                <iframe
                                    width="800"
                                    height="450"
                                    src="https://embed.figma.com/proto/pobzBQL70I1q32giB84zU6/Dashboard-Mockup?node-id=252-7121&p=f&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2&show-proto-sidebar=1&embed-host=share"
                                ></iframe>
                            </div>
                        </RightLinedSection>
                        <LeftLinedSection
                            image={{
                                imageUrl: "/svgs/shecodes.svg",
                                imageAlt: "shecodes receipt",
                                imageWidth: 650,
                                imageHeight: 850,
                            }}
                        >
                            <div className="relative w-full flex justify-center items-center py-8" id="shecodes">
                                <Image
                                    className="w-auto h-auto"
                                    src={"/images/shecodes.jpg"}
                                    alt={"shecodes photo"}
                                    width={500}
                                    height={500}
                                />
                            </div>
                        </LeftLinedSection>
                        <RightLinedSection
                            image={{
                                imageUrl: "/svgs/elipse.svg",
                                imageAlt: "elipse receipt",
                                imageWidth: 650,
                                imageHeight: 850,
                            }}
                        >
                            <div className="relative w-full flex justify-center items-center py-8" id="elipse">
                                <a
                                    href="https://www.elipse.uq.edu.au/projects"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute top-10 right-0 w-[800px] h-[800px]"
                                >
                                    <Image
                                        className="w-full h-full animate-spin [animation-duration:10s]
"
                                        src={"/svgs/cloudbob.svg"}
                                        alt={"cloudbob svg"}
                                        width={100}
                                        height={100}
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center font-anton text-white font-semibold text-2xl text-center pointer-events-none">
                                        <span className="w-1/2">[Click me to see projects I&apos;ve worked on]</span>
                                    </div>
                                </a>
                            </div>
                        </RightLinedSection>
                        <LeftLinedSection
                            image={{
                                imageUrl: "/svgs/aurora.svg",
                                imageAlt: "aurora receipt",
                                imageWidth: 650,
                                imageHeight: 850,
                            }}
                        >
                            <div className="relative w-full flex justify-center items-center py-8" id="aurora">
                                <iframe
                                    width="800"
                                    height="450"
                                    src="https://embed.figma.com/proto/7uP7biZwk0poxVuhJENsb6/AuroraFoods?node-id=1-3&p=f&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A3&embed-host=share"
                                ></iframe>
                            </div>
                        </LeftLinedSection>
                        <RightLinedSection
                            image={{
                                imageUrl: "/svgs/ventures.svg",
                                imageAlt: "ventures receipt",
                                imageWidth: 650,
                                imageHeight: 850,
                            }}
                        >
                            <div className="relative w-full flex justify-center items-center py-8" id="ventures">
                                <Image
                                    className="w-auto h-auto"
                                    src={"/images/ventures.jpeg"}
                                    alt={"ventures photo"}
                                    width={500}
                                    height={500}
                                />
                            </div>
                        </RightLinedSection>
                        <LeftLinedSection
                            image={{
                                imageUrl: "/svgs/swyftx.svg",
                                imageAlt: "swyftx receipt",
                                imageWidth: 650,
                                imageHeight: 850,
                            }}
                        >
                            <div className="relative w-full flex justify-center items-center py-8" id="swyftx">
                                <iframe
                                    width="800"
                                    height="450"
                                    src="https://embed.figma.com/proto/HbrE98nfodTDlXyvL5ZBmh/DreamX?node-id=92-455&p=f&scaling=min-zoom&content-scaling=fixed&page-id=45%3A2&starting-point-node-id=92%3A455&embed-host=share"
                                ></iframe>
                            </div>
                        </LeftLinedSection>
                        <RightLinedSection
                            image={{
                                imageUrl: "/svgs/lit.svg",
                                imageAlt: "lit receipt",
                                imageWidth: 650,
                                imageHeight: 850,
                            }}
                        >
                            <div className="relative w-full flex justify-center items-center py-8" id="lit">
                                <Image
                                    className="w-auto h-auto"
                                    src={"/images/lit_instagram.jpg"}
                                    alt={"ladies in tech instagram photo"}
                                    width={500}
                                    height={500}
                                />
                            </div>
                        </RightLinedSection>
                    </>
                )}

                {isScreenMobile && (
                    <Carousel
                        className="mx-6"
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                    >
                        <CarouselContent>
                            <CarouselItem className="basis-[320px]">
                                <Image
                                    src={"/svgs/technologyone.svg"}
                                    alt={"technologyone receipt"}
                                    width={650}
                                    height={450}
                                />
                            </CarouselItem>
                            <CarouselItem className="basis-[320px]">
                                <Image src={"/svgs/zeroflucs.svg"} alt={"zeroflucs receipt"} width={650} height={450} />
                            </CarouselItem>
                            <CarouselItem className="basis-[320px]">
                                <Image src={"/svgs/elipse.svg"} alt={"elipse receipt"} width={650} height={850} />
                            </CarouselItem>
                            <CarouselItem className="basis-[320px]">
                                <Image src={"/svgs/shecodes.svg"} alt={"shecodes receipt"} width={650} height={850} />
                            </CarouselItem>
                            <CarouselItem className="basis-[320px]">
                                <Image src={"/svgs/aurora.svg"} alt={"aurora receipt"} width={650} height={850} />
                            </CarouselItem>
                            <CarouselItem className="basis-[320px]">
                                <Image src={"/svgs/ventures.svg"} alt={"ventures receipt"} width={650} height={850} />
                            </CarouselItem>
                            <CarouselItem className="basis-[320px]">
                                <Image src={"/svgs/swyftx.svg"} alt={"swyftx receipt"} width={650} height={850} />
                            </CarouselItem>
                            <CarouselItem className="basis-[320px]">
                                <Image src={"/svgs/lit.svg"} alt={"lit receipt"} width={650} height={850} />
                            </CarouselItem>
                        </CarouselContent>
                    </Carousel>
                )}
            </main>
        </div>
    );
}
