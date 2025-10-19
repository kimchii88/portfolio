import { motion } from "framer-motion";
import Image from "next/image";
import { ReactNode } from "react";

interface BobbleItemProps {
    children: ReactNode;
}
export default function BobbleItemWrapper({ children }: BobbleItemProps) {
    return (
        <motion.div
            animate={{ rotate: [1.5, -1.5, 1.5] }}
            transition={{
                repeat: Infinity,
                duration: 8,
                ease: "easeInOut",
            }}
            whileHover={{
                x: [0, -10, 0],
                y: [0, -10, 0],
                transition: {
                    duration: 0.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                },
            }}
            style={{ transformOrigin: "center center" }}
        >
            {children}
        </motion.div>
    );
}
