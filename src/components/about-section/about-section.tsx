import { useTranslation } from "react-i18next"
import Section from "../section-component/section"
import TitleComponent from "../title-component/title-component"
import { Button } from "../ui/button";

import CircleShape from '../../assets/circle-shape.png'
import AboutImage from '../../assets/about-image.png'
import BulbImage from '../../assets/light-bulb.png'
import ChartImage from '../../assets/chart-shape.png'

const AboutSection = () => {
    const {t} = useTranslation();
    return (
        <Section className="relative py-10 md:py-28 overflow-hidden">
            <div className="container relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-6">
                    <div className="relative w-full lg:w-2/5 flex items-center justify-center">
                        <div className="w-[80%] relative z-10">
                            <img className="about-image-up w-full object-contain rounded-xl" src={AboutImage} alt="about-image" />
                            <img className="about-shape-scale absolute -top-16 -end-16 w-[150px] h-[150px] rotate-45 animate-[move_5s_linear_infinite]" src={BulbImage} alt="bulb-image" />
                            <img className="about-shape-scale absolute -bottom-0 -start-16 w-[150px] h-[150px]" src={ChartImage} alt="chart-image" />
                        </div>
                        <img 
                            className="about-circle-scale absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-contain" 
                            src={CircleShape} 
                            alt="circle shape"
                        />
                    </div>
                    <div className="flex flex-col lg:w-1/2 about-content-in">
                        <TitleComponent type="h2">
                            {t("Empowering Growth Through Marketing and Technology")}
                        </TitleComponent>
                        <TitleComponent type="p" className="mt-3 md:mt-6 mb-6 md:mb-10">
                            {t(
                                "Volt for Marketing Services is a marketing and advertising company specializing in providing comprehensive services in marketing and technology. We help startups and established businesses achieve their goals and excel in their fields by promoting their services professionally and effectively, ensuring they stand out to their target audience with unparalleled professionalism."
                            )}
                        </TitleComponent>
                        <div className="inline-flex">
                            <Button size="lg">
                                {t("Read More")}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='about-background-in absolute top-0 start-0 w-full md:w-3/5 h-full flex justify-end bg-background overflow-hidden'>
                <h2 className='text-[200px] whitespace-nowrap font-extrabold opacity-5 rotate-90'>VOLT VOLT</h2>
            </div>
            <style>
                {`
                    @keyframes move {
                        0%{
                            transform: rotate(0deg);
                        }
                        50% {
                            transform: rotate(20deg);
                        }
                        100%{
                            transform: rotate(0deg);
                        }
                    }
                `}
            </style>
        </Section>
    )
}

export default AboutSection
