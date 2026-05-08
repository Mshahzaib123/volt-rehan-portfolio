import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next"
import Section from "../section-component/section"
import TitleComponent from "../title-component/title-component"
import BlogCard from "./blog-card";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

import BlogImage1 from "../../assets/blog-img1.png"
import BlogImage2 from "../../assets/blog-img2.png"
import BlogImage3 from "../../assets/blog-img3.png"

const blogData = [
    {
        title: "5 Proven Marketing Strategies to Boost Engagement",
        tags: ["Marketing", "Engagement"],
        date: "Nov 20, 2024",
        description: "Discover impactful marketing techniques that enhance customer engagement and drive results.",
        link: "/",
        image: BlogImage1,
    },
    {
        title: "Top 10 Tech Trends to Watch in 2024",
        tags: ["Technology", "Trends"],
        date: "Oct 15, 2024",
        description: "Stay ahead in the tech world with insights into groundbreaking innovations and advancements.",
        link: "/",
        image: BlogImage2,
    },
    {
        title: "Creative Problem-Solving for Business Success",
        tags: ["Business", "Strategy"],
        date: "Sep 10, 2024",
        description: "Explore unique approaches and strategies to tackle business challenges effectively.",
        link: "/",
        image: BlogImage3,
    },
    {
        title: "Success Stories: Transformative Marketing Campaigns",
        tags: ["Success Stories", "Marketing"],
        date: "Aug 25, 2024",
        description: "Dive into real-world examples of marketing campaigns that achieved exceptional results.",
        link: "/",
        image: BlogImage1,
    },
    {
        title: "The Future of Digital Marketing: Key Predictions",
        tags: ["Digital Marketing", "Predictions"],
        date: "Jul 18, 2024",
        description: "Uncover predictions shaping the future of digital marketing and how to leverage them.",
        link: "/",
        image: BlogImage2,
    },
    {
        title: "Understanding Client Needs: A Guide for Tech Professionals",
        tags: ["Client Needs", "Tech"],
        date: "Jun 30, 2024",
        description: "Learn how to effectively identify and meet client requirements in the tech industry.",
        link: "/",
        image: BlogImage3,
    },
];

const BlogSection = () => {
    const {t} = useTranslation();
    const [screenSize, setScreenSize] = useState({
        isDesktop: window.innerWidth > 992,
        isMobile: window.innerWidth < 768,
    });

    useEffect(() => {
        const handleResize = () => {
            setScreenSize({
                isDesktop: window.innerWidth > 992,
                isMobile: window.innerWidth < 768,
            });
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <Section className="my-10 md:my-28">
            <div className="container">
                <div className="flex flex-col gap-5 max-w-[700px] mx-auto text-center mb-5 sm:mb-8 md:mb-16">
                    <TitleComponent type="h2" className="animate-up">
                        {t("Stay Ahead with Industry Trends and Expert Tips")}
                    </TitleComponent>
                    <TitleComponent type="p" className="animate-up">
                        {t(
                            "Explore strategies, trends, and success stories that inspire and inform."
                        )}
                    </TitleComponent>
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-5 lg:grid-rows-2 gap-6'>
                    {blogData.slice(0, 3).map((item, index) => (
                        <BlogCard
                            key={index}
                            className={cn(
                                "animate-up",
                                index === 0 ? "col-span-2 lg:col-span-2 lg:row-span-2" : "col-span-3 lg:col-span-3 lg:row-span-1"
                            )}
                            type1={
                                screenSize.isMobile
                                    ? false
                                    : screenSize.isDesktop
                                    ? index === 0
                                        ? false
                                        : true
                                    : true
                            }
                            link={item.link}
                            image={item.image}
                            tags={item.tags}
                            date={item.date}
                            title={item.title}
                            desc={item.description}
                        />
                    ))}
                </div>
                <div className="animate-up flex items-center justify-center mt-5 sm:mt-8 md:mt-16">
                    <Button size="lg">
                        {t("Load More")}
                    </Button>
                </div>
            </div>
        </Section>
    )
}

export default BlogSection
