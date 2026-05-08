import { useTranslation } from 'react-i18next'
import Section from '../section-component/section'
import TitleComponent from '../title-component/title-component'
import TestimonialCard from './testimonial-card';

import ProfileImag1 from "../../assets/profile-img1.png"
import ProfileImag2 from "../../assets/profile-img2.png"
import ProfileImag3 from "../../assets/profile-img3.png"
import ProfileImag4 from "../../assets/profile-img4.png"
import ProfileImag5 from "../../assets/profile-img5.png"

const testimonialsData = [
    {
        link: "/",
        profile: ProfileImag1,
        name: "Sarah Johnson",
        position: "Marketing Manager",
        comment: "Volt for Marketing Services helped us redefine our marketing strategy, achieving a 45% increase in leads within just three months. Their team's professionalism and creativity are unmatched!",
    },
    {
        link: "/",
        profile: ProfileImag2,
        name: "Michael Rodriguez",
        position: "CEO of Techify",
        comment: "The team at Volt provided exceptional technical support and marketing solutions. Their ability to understand our needs and deliver effective results is commendable!",
    },
    {
        link: "/",
        profile: ProfileImag3,
        name: "Emma Wilson",
        position: "Founder of GreenSprout",
        comment: "Working with Volt was a game-changer for our business. Their strategic insights and innovative campaigns helped us stand out in a competitive market.",
    },
    {
        link: "/",
        profile: ProfileImag4,
        name: "James Lee",
        position: "Product Manager",
        comment: "Volt’s expertise in blending technology and marketing ensured the success of our product launch. Their dedication to our goals was truly impressive.",
    },
    {
        link: "/",
        profile: ProfileImag5,
        name: "Olivia Brown",
        position: "Owner of Artisan",
        comment: "The team at Volt brought our vision to life. Their creative marketing campaigns significantly boosted our online presence and sales.",
    },
    {
        link: "/",
        profile: ProfileImag1,
        name: "William Carter",
        position: "Director at Nexus",
        comment: "Volt's innovative approach and consistent support have been instrumental in our growth. Their team goes above and beyond to deliver results that exceed expectations.",
    },
];


const TestimonialSection = () => {
    const {t} = useTranslation();
    return (
        <Section className="my-10 md:my-28">
            <div className="container">
                <div className="flex flex-col gap-5 max-w-[700px] mx-auto text-center mb-5 sm:mb-8 md:mb-16">
                    <TitleComponent type="h2" className='animate-up'>
                        {t("Trusted by Most Popular Companies in the World")}
                    </TitleComponent>
                    <TitleComponent type="p" className='animate-up'>
                        {t(
                            "Our clients' success stories speak for themselves. See how we've helped businesses achieve their goals through innovative marketing and technical solutions."
                        )}
                    </TitleComponent>
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {testimonialsData.map((item, index) => (
                        <TestimonialCard
                            key={index}
                            comment={item.comment}
                            link={item.link}
                            profile={item.profile}
                            name={item.name}
                            position={item.position}
                        />
                    ))}
                </div>
            </div>
        </Section>
    )
}

export default TestimonialSection
