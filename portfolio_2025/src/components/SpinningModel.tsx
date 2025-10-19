"use client";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import * as THREE from "three";
import { PresentationControls } from "@react-three/drei";

interface SpinningModelProps {
    url: string;
    onClickEvent?: () => void;
}

export default function SpinningModel({ url, onClickEvent }: SpinningModelProps) {
    const gltf = useGLTF(url);
    const ref = useRef<THREE.Group>(null);
    const router = useRouter();
    const [hovered, setHovered] = useState(false);

    useFrame(() => {
        if (ref.current) {
            ref.current.rotation.y += 0.01;
            ref.current.rotation.z = Math.sin(Date.now() * 0.002) * 0.1;

            // if (hovered) {
            //     ref.current.rotation.x = Math.sin(Date.now() * 0.01) * 0.1;
            // } else {
            //     ref.current.rotation.x = 0;
            // }
        }
    });

    return (
        <PresentationControls
            global={false} // <- this ensures only the child rotates
            polar={[-Math.PI / 4, Math.PI / 4]} // vertical limits
            snap={true}
        >
            <primitive
                object={gltf.scene}
                ref={ref}
                scale={new THREE.Vector3(0.009, 0.009, 0.009)}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
                onClick={() => onClickEvent && onClickEvent()}
                rotation={[0, -90, 0]}
            />
        </PresentationControls>
    );
}
