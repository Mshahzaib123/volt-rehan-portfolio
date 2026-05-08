import React from "react";
import { cn } from "@/lib/utils"
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import TitleComponent from "../title-component/title-component";

interface BlogCardProps {
    type1?: boolean;
    className?: string;
    link: string;
    image: string;
    tags: string[];
    date: string;
    title: string;
    desc: string;
}

const BlogCard = ({type1, className, link, image, tags, date, title, desc}:BlogCardProps) => {
    const {t} = useTranslation(); 
    return (
        <div className={cn(
            type1 ? "flex items-center gap-6" : "flex flex-col gap-6",
            className
        )}>
            <Link to={link} className={cn(
                "flex",
                type1 && "w-1/2" 
            )}>
                <img className="w-full object-cover rounded-xl" src={image} alt="blog-image" />
            </Link>
            <div className={cn(
                "flex flex-col",
                type1 && "w-1/2 flex-1" 
            )}>
                <div className="flex items-center flex-wrap gap-2">
                    {tags.map((item, index) => (
                        <React.Fragment key={index}>
                            <TitleComponent 
                                type="p" 
                                size="base" 
                                weight="bold" 
                                className="text-primary"
                            >
                                {t(item)}
                            </TitleComponent>
                            {index < tags.length - 1 && (
                                <span className="text-primary">•</span>
                            )}
                        </React.Fragment>
                    ))}
                    <span className="text-primary">•</span>
                    <TitleComponent type="p" size="base" weight="bold" className="opacity-40">
                        {date}
                    </TitleComponent>
                </div>
                <TitleComponent type="h3" className="mt-2 mb-4">
                    {t(title)}
                </TitleComponent>
                <TitleComponent type="p">
                    {t(desc)}
                </TitleComponent>
            </div>
        </div>
    )
}

export default BlogCard
