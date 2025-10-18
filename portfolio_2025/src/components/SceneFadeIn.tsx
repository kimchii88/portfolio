"use client";

import { motion } from "framer-motion";

interface ScreenFadeInProps {
    isActive: boolean;
}
export default function ScreenFadeIn({ isActive }: ScreenFadeInProps) {
    return isActive ? (
        <motion.div
            className="fixed inset-0 bg-black z-50 pointer-events-none"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1 }}
        />
    ) : null;
}
