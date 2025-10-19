import Image from "next/image";

export default function Connect() {
    return (
        <div>
            <main>
                <Image
                    className="w-auto h-auto"
                    src={"/svgs/quadrant.svg"}
                    alt={"quadrant background photo"}
                    width={500}
                    height={500}
                />
            </main>
        </div>
    );
}
