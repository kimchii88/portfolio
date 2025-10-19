import { useFrame } from "@react-three/fiber";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface FallingTransitionWrapperProps {
    children: React.ReactNode;
    route: string;
    trigger: boolean;
    onComplete?: () => void;
}

export default function FallingTransitionWrapper({
    children,
    route,
    trigger,
    onComplete,
}: FallingTransitionWrapperProps) {
    const [falling, setFalling] = useState(false);
    const router = useRouter();

    const sceneRef = useRef<THREE.Group>(null);

    useFrame((state, delta) => {
        if (falling && sceneRef.current) {
            console.log("true");
            // state.camera.position.y -= 0.1;
            // state.camera.lookAt(0, 0, 0);

            sceneRef.current.position.y -= 10 * delta;
        }
    });

    useEffect(() => {
        if (trigger && !falling) {
            setFalling(true);
            setTimeout(() => {
                onComplete?.();
                router.push(route);
            }, 1000); // match to duration of fall
        }
    }, [falling, onComplete, route, router, trigger]);

    return <group ref={sceneRef}>{children}</group>;
}
