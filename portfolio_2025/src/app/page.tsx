"use client";

import { Canvas } from "@react-three/fiber";
import SpinningModel from "@/components/SpinningModel";
import { Environment, OrbitControls } from "@react-three/drei";
import HeartIcon from "@/components/HeartIcon";
import { motion } from "framer-motion";
import { Stars } from "@react-three/drei";
import FallingTransitionWrapper from "@/components/FallingTransitionWrapper";
import { useState } from "react";
import ScreenFadeOut from "@/components/SceneFadeOut";
import ScreenFadeIn from "@/components/SceneFadeIn";

export default function Home() {
    const [fallingTransition, setFallingTransition] = useState(false);
    const [targetRoute, setTargetRoute] = useState("");

    const handleTriggerFall = (route: string) => {
        console.log("clicked");
        setTargetRoute(route);
        setFallingTransition(true);
    };

    return (
        <div className="min-h-screen w-full h-full  bg-[#5e7fde]">
            <main className="w-screen h-screen pt-20 pb-20 ">
                <motion.h1
                    initial={{ x: -300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                    }}
                    className="absolute top-2/12 left-32 text-[#fce3fc] text-9xl z-10 font-coiny flex flex-col "
                >
                    <section>
                        <h1 className="text-[250px]">Hi!</h1>
                        <h1>I&apos;m Kim</h1>
                    </section>
                    <div className="text-4xl rounded-4xl justify-center mt-10">Software Engineer + UX Genie</div>
                    <div className="text-xl rounded-4xl justify-center">{`[ Now based in London! ]`}</div>
                </motion.h1>
                {fallingTransition ? <ScreenFadeOut isActive /> : <ScreenFadeIn isActive />}

                <Canvas camera={{ position: [0, 0, 8], fov: 35 }}>
                    <FallingTransitionWrapper trigger={fallingTransition} route={targetRoute}>
                        <Stars
                            radius={10} // how far stars are from center
                            depth={50} // how thick the starfield is
                            count={1000} // number of stars
                            factor={4} // size factor
                            saturation={0}
                            fade={true}
                            speed={1} // animation speed
                        />
                        <OrbitControls />
                        <Environment preset="sunset" />
                        <ambientLight intensity={0.2} />
                        <group position={[5, -3.1, -4]}>
                            <SpinningModel url="/models/avatar/25_10_16_20_04_03_331.gltf" />
                        </group>
                        <group position={[2, 2, -15]}>
                            <HeartIcon
                                url="/models/aboutMeHeart/25_10_17_10_08_55_416.gltf"
                                triggerFallTransition={() => handleTriggerFall("about")}
                            />
                        </group>
                        <group position={[2, -2, -15]}>
                            <HeartIcon
                                url="/models/contactHeart/25_10_17_10_05_54_960.gltf"
                                triggerFallTransition={() => handleTriggerFall("about")}
                            />
                        </group>
                        <group position={[2, -6, -15]}>
                            <HeartIcon
                                url="/models/workHeart/25_10_17_10_16_24_253.gltf"
                                triggerFallTransition={() => handleTriggerFall("works")}
                            />
                        </group>
                    </FallingTransitionWrapper>
                </Canvas>
            </main>
        </div>
    );
}
