import { Text } from "@react-three/drei";

interface ClickableSectionTextProps {
    section: string;
    scrollToSection: () => void;
}

export default function ClickableSectionText({ section, scrollToSection }: ClickableSectionTextProps) {
    return (
        <Text
            fontSize={0.3}
            color="#572b1c"
            position={[0, -0.5, 0]}
            onClick={() => {
                scrollToSection();
            }}
        >
            {section}
        </Text>
    );
}
