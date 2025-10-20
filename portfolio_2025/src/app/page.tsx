"use client";

import { Canvas } from "@react-three/fiber";
import SpinningModel from "@/components/SpinningModel";
import { Environment } from "@react-three/drei";
import HeartIcon from "@/components/HeartIcon";
import { motion } from "framer-motion";
import FallingTransitionWrapper from "@/components/FallingTransitionWrapper";
import { useEffect, useState } from "react";
import ScreenFadeOut from "@/components/SceneFadeOut";
import ScreenFadeIn from "@/components/SceneFadeIn";
import LoadingScreen from "@/components/LoadingScreen";
import useIsMobile from "@/helpers/useIsMobile";

export default function Home() {
    const [pageLoading, setPageLoading] = useState(true);
    const [fallingTransition, setFallingTransition] = useState(false);
    const [targetRoute, setTargetRoute] = useState("");
    const isScreenMobile = useIsMobile();

    const handleTriggerFall = (route: string) => {
        setTargetRoute(route);
        setFallingTransition(true);
    };

    console.log(isScreenMobile);

    return (
        <div className="min-h-screen w-full h-full bg-[#f1dfb6]">
            {pageLoading && <LoadingScreen />}
            <main className="w-screen h-screen md:pt-20 pb-20">
                {!pageLoading && (
                    <motion.h1
                        initial={{ x: -300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                        }}
                        className="absolute md:top-2/12 md:left-32 left-10 top-7/12 text-[#e64027] md:text-9xl text-xl font-coiny flex flex-col"
                    >
                        <section>
                            <h1 className="md:text-[250px] text-9xl">Hi!</h1>
                            <h1 className="md:text-[120px] text-5xl">I&apos;m Kim</h1>
                        </section>
                        <div className="md:text-4xl rounded-4xl justify-center md:mt-10">
                            Software Engineer + UX Genie
                        </div>
                        <div className="md:text-xl rounded-4xl justify-center">{`[ Now based in London! ]`}</div>
                        {isScreenMobile && <div className=" pt-4">{`Scroll down for more info...`}</div>}{" "}
                    </motion.h1>
                )}
                {fallingTransition ? <ScreenFadeOut isActive /> : <ScreenFadeIn isActive />}
                <Canvas camera={{ position: [0, 0, 8], fov: 35 }}>
                    <FallingTransitionWrapper trigger={fallingTransition} route={targetRoute}>
                        <Environment preset="sunset" />
                        <ambientLight intensity={0.6} />
                        <group position={isScreenMobile ? [0, 0.1, 0] : [5, -3.1, -4]}>
                            <SpinningModel
                                url="/models/avatar/25_10_16_20_04_03_331.gltf"
                                isLoading={() => {
                                    setPageLoading(false);
                                }}
                                customScale={isScreenMobile ? 0.003 : 0.009}
                            />
                        </group>
                        {!isScreenMobile && (
                            <>
                                <group position={[1, 1, 0]}>
                                    <HeartIcon
                                        url="/models/aboutMeHeart/25_10_17_10_08_55_416.gltf"
                                        triggerFallTransition={() => handleTriggerFall("about")}
                                    />
                                </group>
                                <group position={[1, -0.5, 0]}>
                                    <HeartIcon
                                        url="/models/workHeart/25_10_17_10_16_24_253.gltf"
                                        triggerFallTransition={() => handleTriggerFall("works")}
                                    />
                                </group>
                                <group position={[1, -2, 0]}>
                                    <HeartIcon
                                        url="/models/contactHeart/25_10_17_10_05_54_960.gltf"
                                        triggerFallTransition={() => handleTriggerFall("connect")}
                                    />
                                </group>
                            </>
                        )}
                    </FallingTransitionWrapper>
                </Canvas>
                {isScreenMobile && (
                    <Canvas style={{ background: "#f1dfb6" }}>
                        <Environment preset="sunset" />
                        <ambientLight intensity={0.6} />
                        <group position={[0, 1, 0]}>
                            <HeartIcon
                                url="/models/aboutMeHeart/25_10_17_10_08_55_416.gltf"
                                triggerFallTransition={() => handleTriggerFall("about")}
                            />
                        </group>
                        <group position={[0, -0.8, 0]}>
                            <HeartIcon
                                url="/models/workHeart/25_10_17_10_16_24_253.gltf"
                                triggerFallTransition={() => handleTriggerFall("works")}
                            />
                        </group>
                        <group position={[0, -2.5, 0]}>
                            <HeartIcon
                                url="/models/contactHeart/25_10_17_10_05_54_960.gltf"
                                triggerFallTransition={() => handleTriggerFall("connect")}
                            />
                        </group>
                    </Canvas>
                )}
            </main>
        </div>
    );
}
