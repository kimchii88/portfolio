import { useEffect, useState } from "react";

export default function useIsMobile() {
    const mobileScreenSize = 760;

    const [isScreenMobile, setIsScreenMobile] = useState(false);
    useEffect(() => {
        const handleChange = () => {
            setIsScreenMobile(window.innerWidth <= mobileScreenSize);
        };
        handleChange();
        window.addEventListener("resize", handleChange);

        return () => window.removeEventListener("resize", handleChange);
    }, []);

    return isScreenMobile;
}
