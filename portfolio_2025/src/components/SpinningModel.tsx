"use client";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { PresentationControls } from "@react-three/drei";

interface SpinningModelProps {
    url: string;
    onClickEvent?: () => void;
    uniqueKey?: string;
    isLoading?: () => void;
}

export default function SpinningModel({ url, onClickEvent, uniqueKey, isLoading }: SpinningModelProps) {
    const gltf = useGLTF(url);
    const ref = useRef<THREE.Group>(null);
    console.log("hiii");

    useEffect(() => {
        isLoading?.();
    }, [gltf.scene, isLoading]);

    useFrame(() => {
        if (ref.current) {
            ref.current.rotation.y += 0.01;
            ref.current.rotation.z = Math.sin(Date.now() * 0.002) * 0.1;
        }
    });

    return (
        <PresentationControls
            global={false} // <- this ensures only the child rotates
            polar={[-Math.PI / 4, Math.PI / 4]} // vertical limits
            snap={true}
            key={uniqueKey}
        >
            <primitive
                key={uniqueKey}
                object={gltf.scene}
                ref={ref}
                scale={new THREE.Vector3(0.009, 0.009, 0.009)}
                onClick={() => onClickEvent && onClickEvent()}
                rotation={[0, -90, 0]}
            />
        </PresentationControls>
    );
}
