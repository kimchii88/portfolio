"use client";

export default function LoadingScreen() {
    return (
        <div className="absolute z-50 bg-[#f1dfb6] flex justify-center items-center w-screen h-screen">
            <div className="animate-pulse text-3xl font-bold text-[#e64027]">Loading...</div>
        </div>
    );
}
