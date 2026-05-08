import { ReactNode, useEffect } from "react"
import { useTranslation } from "react-i18next";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface AnimationProps{
    children: ReactNode;
}

gsap.registerPlugin(ScrollTrigger);

const Animation = ({ children }: AnimationProps) => {
    const { i18n } = useTranslation();
    const isRtl = i18n.dir() === 'rtl';
    useEffect(() => {
        const animateScaleElements = document.querySelectorAll('.animate-scale');
        const animateUpElements = document.querySelectorAll('.animate-up');
        const animateDownElements = document.querySelectorAll('.animate-down');
        const animateLeftElements = document.querySelectorAll('.animate-left');
        const animateRightElements = document.querySelectorAll('.animate-right');
        animateScaleElements.forEach((element) => {
            gsap.fromTo(element,
                {
                    scale: 0,
                    opacity: 0,
                },
                {
                    scale: 1,
                    opacity: 1,
                    ease: 'power2.out',
                    duration: 1,
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 80%',
                        end: 'bottom 45%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        });
        animateUpElements.forEach((element) => {
            gsap.fromTo(element,
                {
                    y: 200,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 75%',
                        end: 'bottom 40%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        });
        animateDownElements.forEach((element) => {
            gsap.fromTo(element,
                {
                    y: -100,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: .8,
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 80%',
                        end: 'bottom 45%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        });
        animateLeftElements.forEach((element) => {
            gsap.fromTo(element,
                {
                    x: isRtl ? "50%" : "-50%",
                    opacity: 0,
                },
                {
                    x: "0",
                    opacity: 1,
                    duration: .8,
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 80%',
                        end: 'bottom 45%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        });
        animateRightElements.forEach((element) => {
            gsap.fromTo(element,
                {
                    x: isRtl ? "-50%" : "50%",
                    opacity: 0,
                },
                {
                    x: "0",
                    opacity: 1,
                    duration: .8,
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 80%',
                        end: 'bottom 45%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        });
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [isRtl]);
    useEffect(() => {
        gsap.fromTo(".about-background-in", 
            { 
                x: "-100%",
                opacity: 0,
            },
            { 
                x: "0%",
                opacity: 1,
                duration: 0.8,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: ".about-background-in",
                    start: 'top 80%',
                    end: 'bottom 45%',
                    toggleActions: 'play none none reverse',
                },
            }
        );
        gsap.fromTo(".about-circle-scale", 
            { 
                scale: 0,
                y: "-50%",
                opacity: 0,
            },
            { 
                scale: 1,
                y: "-50%",
                opacity: 1,
                duration: 0.6,
                delay: 0.4,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: ".about-circle-scale",
                    start: 'top 80%',
                    end: 'bottom 45%',
                    toggleActions: 'play none none reverse',
                },
            }
        );
        gsap.fromTo(".about-image-up", 
            {
                y: 150,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                delay: 0.8,
                scrollTrigger: {
                    trigger: ".about-image-up",
                    start: 'top 80%',
                    end: 'bottom 45%',
                    toggleActions: 'play none none reverse',
                },
            }
        );
        gsap.fromTo(".about-shape-scale", 
            {
                scale: 0,
                opacity: 0,
            },
            {
                scale: 1,
                opacity: 1,
                duration: 0.6,
                delay: 0.8,
                scrollTrigger: {
                    trigger: ".about-shape-scale",
                    start: 'top 80%',
                    end: 'bottom 45%',
                    toggleActions: 'play none none reverse',
                },
            }
        );
        gsap.fromTo(".about-content-in", 
            { 
                x: "120%",
                opacity: 0,
            },
            { 
                x: "0%",
                opacity: 1,
                duration: 0.5,
                delay: 1,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: ".about-content-in",
                    start: 'top 80%',
                    end: 'bottom 45%',
                    toggleActions: 'play none none reverse',
                },
            }
        );
    }, []);
    useEffect (()=>{
        gsap.to(".draw", {
            strokeDashoffset: 0,
            duration: 6,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".draw",
                start: "top 50%",
                end: "top 60%",
                scrub: false,
                toggleActions: 'play none none reverse',
            }
        });
    }, []);
    return (
        <>
            {children}
        </>
    )
}

export default Animation
