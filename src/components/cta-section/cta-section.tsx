import { useEffect } from "react";
import { useTranslation } from "react-i18next"
import Section from "../section-component/section"
import TitleComponent from "../title-component/title-component"
import { Button } from "../ui/button";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CtaSection = () => {
    const {t} = useTranslation();
    useEffect(() => {
        const paths = document.querySelectorAll(".draw2");

        paths.forEach((path) => {
            const length = (path as SVGPathElement).getTotalLength();

            gsap.fromTo(
                path,
                { strokeDasharray: length, strokeDashoffset: length },
                {
                    strokeDashoffset: 0,
                    duration: 2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: path,
                        start: "top 60%",
                        end: "top 40%",
                        scrub: 2,
                        toggleActions: "play none none reverse",
                    },
                }
            );
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);
    return (
        <Section className="relative py-10 md:py-20 bg-background overflow-hidden">
            <div className="container relative z-10">
                <div className="flex flex-col max-w-[700px] mx-auto text-center">
                    <TitleComponent type="h2">
                        {t("Take Your Business to the Next Level!")}
                    </TitleComponent>
                    <TitleComponent type="p" className="mt-3 md:mt-6 mb-6 md:mb-10">
                        {t("Are you ready to transform your business with innovative marketing and technical solutions? Volt’s expert team is here to help you achieve outstanding results through tailored strategies and creative execution.")}
                    </TitleComponent>
                    <div className="inline-flex items-center justify-center">
                        <Button size="lg">
                            {t("Contact Us Now")}
                        </Button>
                    </div>
                </div>
            </div>
            <svg className="w-[200px] h-[200px] absolute -start-4 -bottom-4 rotate-180" width="271" height="244" viewBox="0 0 271 244" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="draw2" d="M31.5 4.5C15.0752 24.1356 8.8584 39.9366 7.49996 65.5C5.92717 95.097 13.9932 113.584 31.5 137.5C48.5701 160.819 63.5224 172.547 91 181.5C106.253 186.47 129.905 185.808 147.541 184.301C162.806 182.996 176.65 175.398 187.059 164.156L188.004 163.136C193.296 157.42 198.379 150.846 198.458 143.057C198.502 138.738 197.298 134.217 193 131.5C183.283 125.358 175.857 129.728 172.684 132.376C171.484 133.378 170.461 134.567 169.383 135.7L166.952 138.255C156.909 148.813 150.051 162.308 150.489 176.874C150.784 186.673 152.229 197.6 156.5 205C160.251 211.5 166.836 221.387 180 227.5C186.404 230.473 195 233.02 202.187 234.861C211.245 237.181 220.707 236.961 229.843 234.97C230.549 234.816 231.269 234.659 232 234.5C244.828 231.709 268 221 268 221" stroke="#E69803" stroke-width="13"/>
            </svg>
            <svg className="w-[200px] h-[200px] absolute -end-4 -top-4" width="271" height="244" viewBox="0 0 271 244" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="draw2" d="M31.5 4.5C15.0752 24.1356 8.8584 39.9366 7.49996 65.5C5.92717 95.097 13.9932 113.584 31.5 137.5C48.5701 160.819 63.5224 172.547 91 181.5C106.253 186.47 129.905 185.808 147.541 184.301C162.806 182.996 176.65 175.398 187.059 164.156L188.004 163.136C193.296 157.42 198.379 150.846 198.458 143.057C198.502 138.738 197.298 134.217 193 131.5C183.283 125.358 175.857 129.728 172.684 132.376C171.484 133.378 170.461 134.567 169.383 135.7L166.952 138.255C156.909 148.813 150.051 162.308 150.489 176.874C150.784 186.673 152.229 197.6 156.5 205C160.251 211.5 166.836 221.387 180 227.5C186.404 230.473 195 233.02 202.187 234.861C211.245 237.181 220.707 236.961 229.843 234.97C230.549 234.816 231.269 234.659 232 234.5C244.828 231.709 268 221 268 221" stroke="#E69803" stroke-width="13"/>
            </svg>
            <style>
                {`
                    @keyframes draw {
                        to {
                            stroke-dashoffset: 0;
                        }
                    }
                    .draw2 {
                        stroke-dasharray: 2000;
                        stroke-dashoffset: 2000;
                    }
                `}
            </style>
        </Section>
    )
}

export default CtaSection
