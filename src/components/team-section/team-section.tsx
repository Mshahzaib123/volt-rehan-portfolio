import { useTranslation } from "react-i18next";
import Section from "../section-component/section";
import TitleComponent from "../title-component/title-component";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TeamCard from "./team-card";

import TeamImage1 from "../../assets/team-img1.png";
import TeamImage2 from "../../assets/team-img2.png";
import TeamImage3 from "../../assets/team-img3.png";

const teamMembers = [
    {
        link: "/",
        profile: TeamImage1,
        name: "John Doe",
        title: "Creative Director",
        socialLinks: [
            { link: "/", icon: FacebookOutlinedIcon },
            { link: "/", icon: TwitterIcon },
            { link: "/", icon: InstagramIcon },
            { link: "/", icon: WhatsAppIcon }
        ]
    },
    {
        link: "/",
        profile: TeamImage2,
        name: "Jane Smith",
        title: "Marketing Strategist",
        socialLinks: [
            { link: "/", icon: FacebookOutlinedIcon },
            { link: "/", icon: TwitterIcon },
            { link: "/", icon: InstagramIcon },
            { link: "/", icon: WhatsAppIcon }
        ]
    },
    {
        link: "/",
        profile: TeamImage3,
        name: "Emily Davis",
        title: "Content Specialist",
        socialLinks: [
            { link: "/", icon: FacebookOutlinedIcon },
            { link: "/", icon: TwitterIcon },
            { link: "/", icon: InstagramIcon },
            { link: "/", icon: WhatsAppIcon }
        ]
    },
    {
        link: "/",
        profile: TeamImage1,
        name: "Alex Turner",
        title: "Technical Lead",
        socialLinks: [
            { link: "/", icon: FacebookOutlinedIcon },
            { link: "/", icon: TwitterIcon },
            { link: "/", icon: InstagramIcon },
            { link: "/", icon: WhatsAppIcon }
        ]
    },
    {
        link: "/",
        profile: TeamImage2,
        name: "Sarah Lee",
        title: "Client Relations Manager",
        socialLinks: [
            { link: "/", icon: FacebookOutlinedIcon },
            { link: "/", icon: TwitterIcon },
            { link: "/", icon: InstagramIcon },
            { link: "/", icon: WhatsAppIcon }
        ]
    },
    {
        link: "/",
        profile: TeamImage3,
        name: "Michael Brown",
        title: "Social Media Expert",
        socialLinks: [
            { link: "/", icon: FacebookOutlinedIcon },
            { link: "/", icon: TwitterIcon },
            { link: "/", icon: InstagramIcon },
            { link: "/", icon: WhatsAppIcon }
        ]
    },
    {
        link: "/",
        profile: TeamImage1,
        name: "Sophia Wilson",
        title: "SEO Specialist",
        socialLinks: [
            { link: "/", icon: FacebookOutlinedIcon },
            { link: "/", icon: TwitterIcon },
            { link: "/", icon: InstagramIcon },
            { link: "/", icon: WhatsAppIcon }
        ]
    },
    {
        link: "/",
        profile: TeamImage2,
        name: "Liam Carter",
        title: "UI/UX Designer",
        socialLinks: [
            { link: "/", icon: FacebookOutlinedIcon },
            { link: "/", icon: TwitterIcon },
            { link: "/", icon: InstagramIcon },
            { link: "/", icon: WhatsAppIcon }
        ]
    }
];

const TeamSection = () => {
    const {t} = useTranslation();
    return (
        <Section className="my-10 md:my-28">
            <div className="container">
                <div className="flex flex-col gap-5 max-w-[700px] mx-auto text-center mb-5 sm:mb-8 md:mb-16">
                    <TitleComponent type="h2" className='animate-up'>
                        {t("Passionate Professionals at Your Service")}
                    </TitleComponent>
                    <TitleComponent type="p" className='animate-up'>
                        {t(
                            "Our skilled and dedicated team combines creativity and expertise to deliver innovative solutions that drive your success."
                        )}
                    </TitleComponent>
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {teamMembers.map((item, index) => (
                        <TeamCard
                            key={index}
                            link={item.link}
                            image={item.profile}
                            name={item.name}
                            title={item.title}
                            socialLinks={item.socialLinks}
                        />
                    ))}
                </div>
            </div>
        </Section>
    );
}

export default TeamSection;
