"use client";

import { Canvas } from "@react-three/fiber";
import SpinningModel from "@/components/SpinningModel";
import HeartIcon from "@/components/HeartIcon";
import { motion } from "framer-motion";
import FallingTransitionWrapper from "@/components/FallingTransitionWrapper";
import { Suspense, useState } from "react";
import ScreenFadeOut from "@/components/SceneFadeOut";
import ScreenFadeIn from "@/components/SceneFadeIn";
import LoadingScreen from "@/components/LoadingScreen";
import useIsMobile from "@/helpers/useIsMobile";
import Lighting from "@/components/ui/Lighting";

export default function Home() {
    const [pageLoading, setPageLoading] = useState(true);
    const [fallingTransition, setFallingTransition] = useState(false);
    const [targetRoute, setTargetRoute] = useState("");
    const isScreenMobile = useIsMobile();

    const handleTriggerFall = (route: string) => {
        setTargetRoute(route);
        setFallingTransition(true);
    };

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
                        className="absolute md:top-2/12 md:left-32 z-1 left-10 top-7/12 text-[#e64027] md:text-9xl text-xl font-coiny flex flex-col"
                    >
                        <section>
                            <h1 className="md:text-[250px] text-9xl">Hi!</h1>
                            <h1 className="md:text-[120px] text-5xl">I&apos;m Kim</h1>
                        </section>
                        <div className="md:text-4xl rounded-4xl justify-center md:mt-10">
                            Software Engineer + UX Genie
                        </div>
                        <div className="md:text-xl rounded-4xl justify-center">{`[ Now based in London! ]`}</div>
                    </motion.h1>
                )}
                {fallingTransition ? <ScreenFadeOut isActive /> : <ScreenFadeIn isActive />}
                {!isScreenMobile ? (
                    <Canvas camera={{ position: [0, 0, 8], fov: 35 }} shadows>
                        <FallingTransitionWrapper trigger={fallingTransition} route={targetRoute}>
                            <Lighting />
                            <group position={[5, -3.1, -4]}>
                                <Suspense fallback={null}>
                                    <SpinningModel
                                        url="/models/avatar/avatar_compressed.glb"
                                        isLoading={() => {
                                            setPageLoading(false);
                                        }}
                                        customScale={isScreenMobile ? 0.003 : 0.009}
                                    />
                                </Suspense>
                            </group>
                            {!isScreenMobile && (
                                <>
                                    <group position={[1, 1, 0]}>
                                        <Suspense fallback={null}>
                                            <HeartIcon
                                                url="/models/aboutMeHeart/aboutMeHeart_compressed.glb"
                                                triggerFallTransition={() => handleTriggerFall("about")}
                                                isMobile={isScreenMobile}
                                            />
                                        </Suspense>
                                    </group>
                                    <group position={[1, -0.5, 0]}>
                                        <Suspense fallback={null}>
                                            <HeartIcon
                                                url="/models/workHeart/workHeart_compressed.glb"
                                                triggerFallTransition={() => handleTriggerFall("works")}
                                                isMobile={isScreenMobile}
                                            />
                                        </Suspense>
                                    </group>
                                    <group position={[1, -2, 0]}>
                                        <Suspense fallback={null}>
                                            <HeartIcon
                                                url="/models/contactHeart/contactHeart_compressed.glb"
                                                triggerFallTransition={() => handleTriggerFall("connect")}
                                                isMobile={isScreenMobile}
                                            />
                                        </Suspense>
                                    </group>
                                </>
                            )}
                        </FallingTransitionWrapper>
                    </Canvas>
                ) : (
                    <Canvas style={{ background: "#f1dfb6" }}>
                        <FallingTransitionWrapper trigger={fallingTransition} route={targetRoute}>
                            <Lighting isMobile />
                            <group position={[-0.8, 2, 0]}>
                                <Suspense fallback={null}>
                                    <HeartIcon
                                        url="/models/aboutMeHeart/aboutMeHeart_compressed.glb"
                                        triggerFallTransition={() => handleTriggerFall("about")}
                                        isLoading={() => {
                                            setPageLoading(false);
                                        }}
                                        isMobile={isScreenMobile}
                                    />
                                </Suspense>
                            </group>
                            <group position={[-0.8, 0.5, 0]}>
                                <Suspense fallback={null}>
                                    <HeartIcon
                                        url="/models/workHeart/workHeart_compressed.glb"
                                        triggerFallTransition={() => handleTriggerFall("works")}
                                        isMobile={isScreenMobile}
                                    />
                                </Suspense>
                            </group>
                            <group position={[-0.8, -1, 0]}>
                                <Suspense fallback={null}>
                                    <HeartIcon
                                        url="/models/contactHeart/contactHeart_compressed.glb"
                                        triggerFallTransition={() => handleTriggerFall("connect")}
                                        isMobile={isScreenMobile}
                                    />
                                </Suspense>
                            </group>
                        </FallingTransitionWrapper>
                    </Canvas>
                )}
            </main>
        </div>
    );
}
