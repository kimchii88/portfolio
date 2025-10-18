"use client";

import { motion } from "framer-motion";

interface ScreenFadeOutProps {
    isActive: boolean;
}
export default function ScreenFade({ isActive }: ScreenFadeOutProps) {
    return isActive ? (
        <motion.div
            className="fixed inset-0 bg-black z-50 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        />
    ) : null;
}
