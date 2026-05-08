import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import Section from "../section-component/section";
import TitleComponent from "../title-component/title-component";

import "swiper/swiper-bundle.css";

import CaseStudyImage1 from "../../assets/case-study-img1.png";
import CaseStudyImage2 from "../../assets/case-study-img2.png";
import CaseStudyImage3 from "../../assets/case-study-img3.png";

const caseStudiesData = [
    {
        title: "Transforming E-commerce for ShopEase",
        description:
        "Developed a multi-channel marketing strategy to enhance user engagement and drive online sales for ShopEase.",
        link: "/",
        image: CaseStudyImage1,
        tags: ["E-commerce", "User Engagement", "Sales Growth"],
    },
    {
        title: "Sustainable Success for GreenEarth Organic",
        description:
        "Launched a sustainability-focused marketing campaign using content creation, influencer partnerships, and targeted ads to build brand awareness for GreenEarth Organic.",
        link: "/",
        image: CaseStudyImage2,
        tags: ["Sustainability", "Brand Awareness", "Influencer Marketing"],
    },
    {
        title: "Rebranding Excellence for Skyline Interiors",
        description:
        "Spearheaded a comprehensive rebranding campaign, including logo design, new messaging, and promotional materials, to modernize the brand’s image for Skyline Interiors.",
        link: "/",
        image: CaseStudyImage3,
        tags: ["Rebranding", "Logo Design", "Brand Modernization"],
    },
];

const CaseStudySection = () => {
    const { t } = useTranslation();
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <Section>
            <Swiper
                modules={[Pagination, EffectFade, Autoplay]}
                pagination={{
                    clickable: true,
                }}
                spaceBetween={30}
                slidesPerView={1}
                effect="fade"
                speed={2000}
                autoplay={{
                    delay: 8000,
                    disableOnInteraction: false,
                }}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                onInit={() => {
                    const swiperWrapper = document.querySelector('.swiper-wrapper');
                    swiperWrapper?.classList.add('no-fade-in');
                }}
            >
                {caseStudiesData.map((item, index) => (
                    <SwiperSlide key={index}>
                        <img
                            className={cn(
                                "w-full h-full min-h-[500px] md:min-h-[600px] object-cover transition duration-2000 ease-in-out",
                                index === activeIndex ? "blur-0" : "blur-md"
                            )}
                            src={item.image}
                            alt="Case Study Image"
                        />
                        <div className="absolute inset-0 overflow-hidden pb-20">
                            <div
                                className={cn(
                                "flex items-stretch absolute z-[2] top-0 w-[120%] h-full skew-x-[20deg] transition-transform duration-2000 ease-in-out",
                                index === activeIndex
                                    ? "left-1/2 -translate-x-1/2"
                                    : "translate-x-[150%]"
                                )}
                            >
                                <div className="bg-background opacity-30 w-full h-full border-r-[1px] border-r-white"></div>
                                <div className="bg-background opacity-10 w-full h-full"></div>
                                <div className="bg-background opacity-0 w-full h-full"></div>
                            </div>
                            <div className="container relative z-10 h-full flex items-end justify-start">
                                <div className={cn(
                                    "max-w-[600px] duration-2000 ease-in-out",
                                    index === activeIndex ? "translate-x-0 opacity-100" : "-translate-x-[150%] opacity-0"
                                )}>
                                    <div className="flex items-center flex-wrap gap-3 mb-4 md:mb-6">
                                        {item.tags.map((tag, idx) => (
                                            <div
                                                className="bg-white bg-opacity-30 py-1.5 px-3 rounded-md backdrop-blur-2xl"
                                                key={idx}
                                            >
                                                <TitleComponent type="p" size="small" className="text-white">
                                                    {t(tag)}
                                                </TitleComponent>
                                            </div>
                                        ))}
                                    </div>
                                    <TitleComponent type="h2" className="text-white">{t(item.title)}</TitleComponent>
                                    <TitleComponent type="p" className="mt-3 md:mt-6 mb-6 md:mb-10 text-white">
                                        {t(item.description)}
                                    </TitleComponent>
                                    <Link to={item.link} className="flex">
                                        <Button size="lg" variant="white">
                                        {t("Explore Work")}
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                            <div className="absolute -top-32 -end-32 w-[400px] h-[400px] rounded-full bg-primary blur-[300px]"></div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Section>
    );
};

export default CaseStudySection;
