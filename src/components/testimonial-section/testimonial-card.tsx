import { Link } from "react-router-dom";
import TitleComponent from "../title-component/title-component"
import { useTranslation } from "react-i18next";
import StarIcon from '@mui/icons-material/Star';
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
    comment: string;
    link: string;
    profile: string;
    name: string;
    position: string;
}

const TestimonialCard = ({comment, link, profile, name, position}:TestimonialCardProps) => {
    const {t} = useTranslation();
    return (
        <div className="animate-up p-5 md:p-8 md:pt-7 flex flex-col justify-between gap-8 rounded-xl bg-background">
            <div className="flex flex-col gap-5">
                <div className="flex items-center gap-2">
                    {Array(5).fill(0).map((_, index) => (
                        <StarIcon 
                            key={index} 
                            className={cn(
                                "!w-[20px] !h-[20px] text-primary",
                                index >= 3 && "opacity-40"
                            )} 
                        />
                    ))}
                </div>
                <TitleComponent type="p">
                    {t(comment)}
                </TitleComponent>
            </div>
            <Link to={link} className="bg-white p-4 md:p-6 flex items-center gap-4 rounded-xl">
                <img className="w-[64px] h-[64px] rounded-full object-cover" src={profile} alt="profile image" />
                <div className="flex flex-col gap-1">
                    <TitleComponent type="p" size="base" weight="bold">
                        {t(name)}
                    </TitleComponent>
                    <TitleComponent type="p" size="base" weight="medium" className="opacity-40">
                        {t(position)}
                    </TitleComponent>
                </div>
            </Link>
        </div>
    )
}

export default TestimonialCard
