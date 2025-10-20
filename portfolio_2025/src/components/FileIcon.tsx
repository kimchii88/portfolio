import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import SpinningModel from "./SpinningModel";

interface FileIconProps {
    groupScale: number;
    imageLink: string;
    onClickEvent: () => void;
    label: string;
    setPageLoading?: (loadingState: boolean) => void;
}

export default function FileIcon({ imageLink, onClickEvent, groupScale, label, setPageLoading }: FileIconProps) {
    return (
        <div
            className="flex flex-col text-center justify-center hover:cursor-pointer w-[120px] h-[120px] items-center"
            onClick={() => onClickEvent()}
        >
            <div className="h-[100px] w-[100px] self-center">
                <Canvas camera={{ position: [1, 0, 8], fov: 35 }}>
                    <Environment preset="sunset" />
                    <ambientLight intensity={0.6} />
                    <group scale={groupScale} position={[0, -2, 0]}>
                        <SpinningModel
                            url={imageLink}
                            isLoading={() => {
                                if (setPageLoading) setPageLoading(false);
                            }}
                        />
                    </group>
                </Canvas>
            </div>
            <h1 className="text-center w-fit">{label}</h1>
        </div>
    );
}
