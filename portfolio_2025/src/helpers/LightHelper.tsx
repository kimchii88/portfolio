// import { DirectionalLightHelper } from "three";
// import { useRef, useEffect } from "react";
// import { useThree } from "@react-three/fiber";
// import * as THREE from "three";

// export function LightHelper() {
//     const lightRef = useRef<THREE.DirectionalLight>(null);
//     const { scene } = useThree();

//     useEffect(() => {
//         let helper: DirectionalLightHelper | undefined;

//         if (lightRef.current) {
//             const helper = new DirectionalLightHelper(lightRef.current, 1, "hotpink");
//             scene.add(helper);
//         }

//         return () => {
//             if (helper) {
//                 scene.remove(helper);
//             }
//         };
//     }, [scene]);

//     return <directionalLight ref={lightRef} position={[5, 5, 5]} intensity={1} castShadow />;
// }
