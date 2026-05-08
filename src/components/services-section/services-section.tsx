import { useTranslation } from "react-i18next";
import Section from "../section-component/section"
import ServicesCard from "./services-card"
import TitleComponent from "../title-component/title-component";
import AutoGraphOutlinedIcon from '@mui/icons-material/AutoGraphOutlined';
import FindReplaceOutlinedIcon from '@mui/icons-material/FindReplaceOutlined';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import MonitorOutlinedIcon from '@mui/icons-material/MonitorOutlined';
import Groups3OutlinedIcon from '@mui/icons-material/Groups3Outlined';
import LightbulbCircleOutlinedIcon from '@mui/icons-material/LightbulbCircleOutlined';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';

const ServicesData = [
    {
        icon: AutoGraphOutlinedIcon,
        title: "Problem Analysis and Goal Setting",
        desc: "Our marketing plans begin with thoroughly analyzing the problem and defining the goals to be achieved.",
    },
    {
        icon: FindReplaceOutlinedIcon,
        title: "Planning and Finding Solutions",
        desc: "After identifying the problem and setting goals, we move to the next step: finding appropriate solutions to achieve satisfactory outcomes.",
    },
    {
        icon: BoltOutlinedIcon,
        title: "Strategizing",
        desc: "Every problem has a unique solution. We select effective strategies tailored to the specific needs of each client.",
    },
    {
        icon: MonitorOutlinedIcon,
        title: "Implementation and Monitoring",
        desc: "After establishing a solid foundation, our team executes marketing plans both technically and creatively. We then monitor the results of advertising campaigns to ensure their success.",
    },
    {
        icon: Groups3OutlinedIcon,
        title: "Understanding Client Needs",
        desc: "We execute appropriate solutions by thoroughly understanding the client’s needs before taking any steps.",
    },
    {
        icon: LightbulbCircleOutlinedIcon,
        title: "Idea Preparation",
        desc: "Based on client requirements, we develop tailored ideas and provide suitable solutions.",
    },
    {
        icon: DesignServicesOutlinedIcon,
        title: "Design Phase",
        desc: "In this stage, our team harnesses all their skills to execute planned ideas to perfection.",
    },
]

const ServicesSection = () => {
    const {t} = useTranslation();
    return (
        <Section className="py-10 md:py-28 relative overflow-hidden">
            <div className="container relative z-10">
                <div className="grid lg:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-5">
                        <TitleComponent type="h2" className="animate-up">
                            {t("Discover Our Comprehensive Services")}
                        </TitleComponent>
                        <TitleComponent type="p" className="animate-up">
                            {t(
                                "Volt offers expert marketing and technical solutions, tailored to achieve your goals efficiently."
                            )}
                        </TitleComponent>
                    </div>
                    <ServicesCard
                        data={ServicesData}
                    />
                </div>
            </div>
            <svg className="w-[200px] h-[200px] absolute -end-4 -top-4" width="271" height="244" viewBox="0 0 271 244" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="draw" d="M31.5 4.5C15.0752 24.1356 8.8584 39.9366 7.49996 65.5C5.92717 95.097 13.9932 113.584 31.5 137.5C48.5701 160.819 63.5224 172.547 91 181.5C106.253 186.47 129.905 185.808 147.541 184.301C162.806 182.996 176.65 175.398 187.059 164.156L188.004 163.136C193.296 157.42 198.379 150.846 198.458 143.057C198.502 138.738 197.298 134.217 193 131.5C183.283 125.358 175.857 129.728 172.684 132.376C171.484 133.378 170.461 134.567 169.383 135.7L166.952 138.255C156.909 148.813 150.051 162.308 150.489 176.874C150.784 186.673 152.229 197.6 156.5 205C160.251 211.5 166.836 221.387 180 227.5C186.404 230.473 195 233.02 202.187 234.861C211.245 237.181 220.707 236.961 229.843 234.97C230.549 234.816 231.269 234.659 232 234.5C244.828 231.709 268 221 268 221" stroke="#E69803" stroke-width="13"/>
            </svg>
            <style>
                {`
                    @keyframes draw {
                        to {
                            stroke-dashoffset: 0;
                        }
                    }
                    .draw {
                        stroke-dasharray: 2000;
                        stroke-dashoffset: 2000;
                    }
                `}
            </style>
        </Section>
    )
}

export default ServicesSection
