import { ReactNode } from "react";
import Image from "next/image";

export interface Section {
    children?: ReactNode;
    image?: ImageObject;
}

export interface ImageObject {
    imageUrl: string;
    imageAlt: string;
    imageWidth: number;
    imageHeight: number;
}

export default function LeftLinedSection({ children, image }: Section) {
    return (
        <div id="content-section-left-lined" className="flex flex-row min-h-[400px] bg-[#f5a651]">
            <div id="images" className="bg-red-500 min-w-[350px] flex justify-center p-32 px-32">
                {image && (
                    <Image
                        src={image.imageUrl}
                        alt={image.imageAlt}
                        width={image.imageWidth}
                        height={image.imageHeight}
                    />
                )}
            </div>
            {children}
        </div>
    );
}
