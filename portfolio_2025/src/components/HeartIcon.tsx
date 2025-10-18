"use client";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

interface HeartIconProps {
    url: string;
    triggerFallTransition: () => void;
}

export default function HeartIcon({ url, triggerFallTransition }: HeartIconProps) {
    const gltf = useGLTF(url);
    const ref = useRef<THREE.Group>(null);
    const [hovered, setHovered] = useState(false);

    // hover and rotation effect
    useFrame((state) => {
        if (ref.current) {
            if (hovered) {
                // ref.current.rotation.y += 0.01;
                const t = state.clock.getElapsedTime();
                ref.current.rotation.x += Math.sin(t * 3) * 0.03;
                ref.current.rotation.y += Math.sin(t * 3) * 0.03;
            } else {
                ref.current.rotation.x = 0;
                ref.current.rotation.y = 45.6;
            }
        }
    });

    return (
        <primitive
            ref={ref}
            object={gltf.scene}
            scale={new THREE.Vector3(0.01, 0.01, 0.01)}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
            rotation={[0, 45.6, 0]}
            onClick={triggerFallTransition}
        />
    );
}
