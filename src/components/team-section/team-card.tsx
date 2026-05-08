import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import TitleComponent from "../title-component/title-component";

interface TeamCardProps{
    link: string
    image: string;
    name: string;
    title: string;
    socialLinks: Array<{
        link: string;
        icon: React.ElementType;
    }>
}

const TeamCard = ({link, image, name, title, socialLinks}:TeamCardProps) => {
    const {t} = useTranslation();
    return (
        <div className="animate-up relative rounded-xl overflow-hidden shadow-xl group">
            <Link to={link} className="flex">
                <img className="w-full h-auto object-cover" src={image} alt="profile-image" />
            </Link>
            <div className="bg-white p-5 text-center absolute bottom-0 left-0 w-full h-[105px] overflow-hidden">
                <div className="flex flex-col gap-2 relative duration-500 translate-y-0 group-hover:-translate-y-full group-hover:opacity-0">
                    <TitleComponent type="h3">
                        {t(name)}
                    </TitleComponent>
                    <TitleComponent type="p" size="base">
                        {t(title)}
                    </TitleComponent>
                </div>
                <div className="absolute top-full opacity-0 group-hover:top-1/2 group-hover:opacity-100 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full p-[24px] flex items-center justify-center flex-wrap gap-3 duration-500">
                    {socialLinks.map((item, index) => {
                        const IconComponent = item.icon;
                        return(
                            <Link to={item.link} key={index} className="flex">
                                <IconComponent className="!w-8 !h-8 text-black/[45%] duration-300 hover:text-black"/>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default TeamCard;
