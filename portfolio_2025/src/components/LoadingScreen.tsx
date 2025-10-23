"use client";

export default function LoadingScreen() {
    return (
        <div className="absolute z-50 bg-eggYellow flex justify-center items-center w-screen h-screen">
            <div className="animate-pulse text-3xl font-bold text-tomato">Loading...</div>
        </div>
    );
}
