import Image from "next/image";
import { Section } from "./LeftLinedSection";

export default function RightLinedSection({ children, image }: Section) {
    return (
        <div id="content-section-right-lined" className="flex flex-row-reverse min-h-[400px] bg-eggYellow">
            <div id="images" className="bg-primaryBlue min-w-[350px] flex justify-center p-32 px-32">
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
