"use client";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface HeartIconProps {
    url: string;
    triggerFallTransition: () => void;
    isLoading?: () => void;
    isMobile: boolean;
}

export default function HeartIcon({ url, triggerFallTransition, isLoading, isMobile }: HeartIconProps) {
    const gltf = useGLTF(url);
    const ref = useRef<THREE.Group>(null);
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        isLoading?.();
    }, [gltf.scene, isLoading]);

    useEffect(() => {
        document.body.style.cursor = hovered ? "pointer" : "auto";
        return () => {
            document.body.style.cursor = "auto";
        };
    }, [hovered]);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (ref.current) {
            if (!isMobile) {
                if (hovered) {
                    ref.current.rotation.x += Math.sin(t * 3) * 0.03;
                    ref.current.rotation.y += Math.sin(t * 3) * 0.03;
                } else {
                    ref.current.rotation.x = 0;
                    ref.current.rotation.y = 45.3;
                }
            } else {
                ref.current.rotation.z += Math.sin(t * 3) * 0.0001;
                ref.current.rotation.y += Math.sin(t * 3) * -0.008;
            }
        }
    });

    return (
        <primitive
            ref={ref}
            object={gltf.scene}
            scale={0.004}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
            rotation={[0, 45.3, 0]}
            onClick={() => triggerFallTransition()}
        />
    );
}
