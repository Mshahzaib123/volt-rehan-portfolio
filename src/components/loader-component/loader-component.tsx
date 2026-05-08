import { useEffect } from "react";
import { gsap } from "gsap";

import LoaderImage from "../../assets/loader-img.png"

const LoaderComponent = () => {
    useEffect(() => {
        gsap.to(".loader-img", {
            opacity: 0,
            duration: 0.5,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
        });
    }, []);
    return (
        <div className="fixed w-full h-full flex items-center justify-center z-[999] bg-background">
            <img className="w-[150px] h-[150px] object-contain loader-img" src={LoaderImage} alt="loader-img" />
        </div>
    )
}

export default LoaderComponent
