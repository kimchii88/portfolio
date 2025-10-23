import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const currentPath = usePathname();

    const underlineActivePathClass = (path: string) => {
        return currentPath.replace("/", "") === path
            ? "border-b-2 border-brown"
            : "hover:cursor-pointer border-b-2 border-transparent hover:border-brown transition duration-300";
    };

    return (
        <ul className="fixed z-24 top-5 left-1/2 transform -translate-x-1/2 flex flex-row bg-eggYellow border-3 border-brown rounded-4xl w-fit px-5 py-2 gap-10 font-roboto text-brown font-bold ">
            <Link href={"/"} className={underlineActivePathClass("")}>
                Home
            </Link>
            <Link href={"about"} className={underlineActivePathClass("about")}>
                About
            </Link>
            <Link href={"works"} className={underlineActivePathClass("works")}>
                Works
            </Link>
            <Link href={"connect"} className={underlineActivePathClass("connect")}>
                Connect
            </Link>
        </ul>
    );
}
