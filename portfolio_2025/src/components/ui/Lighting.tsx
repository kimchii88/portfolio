interface LightingProps {
    isMobile?: boolean;
}

export default function Lighting({ isMobile = false }: LightingProps) {
    return (
        <>
            <ambientLight intensity={2.5} color={"#ffefd6"} />
            <directionalLight position={[-1, 1, 0]} intensity={3} color={"#ffefd6"} />
            <directionalLight position={[-4, 4, 0]} intensity={2} color={"#fa6e61"} />
            {isMobile && <directionalLight position={[-1, 0, 0.8]} intensity={3} color={"#ffefd6"} />}{" "}
        </>
    );
}
