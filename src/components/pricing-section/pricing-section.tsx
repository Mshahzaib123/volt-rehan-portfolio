import { useTranslation } from "react-i18next"
import Section from "../section-component/section"
import TitleComponent from "../title-component/title-component"
import PricingCard from "./pricing-card";

const pricingPlans = [
    {
        title: "Basic Plan",
        desc: "A simple plan for starting businesses",
        price: 59,
        features: [
            { text: "Basic marketing strategies" },
            { text: "Social media management" },
            { text: "Goal setting and problem analysis" },
            { 
                text: "Monthly performance report",
                disabled: true 
            },
            { 
                text: "Commitment to customer satisfaction with goal setting and problem analysis", 
                disabled: true 
            },
            { 
                text: "Basic understanding of client needs for tailored solutions",
                disabled: true 
            },
        ],
    },
    {
        title: "Standard Plan",
        desc: "Nice plan for ongoing businesses",
        price: 79,
        features: [
            { text: "Advanced marketing campaigns" },
            { text: "Planning and strategizing for scalable solutions" },
            { text: "Basic technical support" },
            { text: "Campaign monitoring and optimization" },
            { text: "Detailed monitoring of marketing campaigns for enhanced outcomes" },
            { 
                text: "Idea preparation tailored to client needs and marketing goals", 
                disabled: true 
            },
        ],
    },
    {
        title: "Advance Plan",
        desc: "Great plan for enterprise businesses",
        price: 99,
        features: [
            { text: "Fully customized marketing and technical strategies" },
            { text: "Dedicated project manager" },
            { text: "Comprehensive IT solutions" },
            { text: "Regular innovation workshops and consultations" },
            { text: "Innovative design phase utilizing cutting-edge technologies" },
            { text: "Implementation and monitoring with a focus on quality results" },
        ],
    },
];

const PricingSection = () => {
    const {t} = useTranslation();
    return (
        <Section className="my-10 md:my-28">
            <div className="container">
                <div className="flex flex-col gap-5 max-w-[700px] mx-auto text-center mb-5 sm:mb-8 md:mb-16">
                    <TitleComponent type="h2" className="animate-up">
                        {t("Flexible Plans Tailored According to Your Needs")}
                    </TitleComponent>
                    <TitleComponent type="p" className="animate-up">
                        {t(
                            "Volt offers competitive pricing packages for marketing and technical solutions to help businesses of all sizes achieve their goals."
                        )}
                    </TitleComponent>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {pricingPlans.map((item, index) => (
                        <PricingCard
                            key={index}
                            title={item.title}
                            desc={item.desc}
                            price={item.price}
                            features={item.features}
                            recomended={index == 1}
                        />
                    ))}
                </div>
            </div>
        </Section>
    )
}

export default PricingSection;
