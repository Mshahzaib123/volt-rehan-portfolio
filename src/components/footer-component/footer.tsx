import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import TitleComponent from "../title-component/title-component";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import LogoImage from "../../assets/logo-footer.png";

const Footer = () => {
    const {t} = useTranslation();
    return (
        <footer className='relative py-10 md:py-28 overflow-hidden bg-background-dark'>
            <div className="container">
                <div className="grid grid-cols-12 gap-6 gap-y-10 lg:gap-y-6">
                    <div className="col-span-12 sm:col-span-3 md:col-span-4 lg:col-span-2 flex sm:flex-col flex-wrap gap-3 gap-x-5">
                        {[
                            {
                                link: "",
                                text: "Home",
                            },
                            {
                                link: "",
                                text: "About",
                            },
                            {
                                link: "",
                                text: "Services",
                            },
                            {
                                link: "",
                                text: "Portfolio",
                            },
                            {
                                link: "",
                                text: "Faqs",
                            },
                            {
                                link: "",
                                text: "Blogs",
                            }
                        ].map((item, index) => (
                            <a 
                                href={item.link}
                                key={index}
                                className="text-xl font-medium text-white duration-300 hover:text-primary hover:underline"
                            >
                                {t(item.text)}
                            </a>
                        ))}
                    </div>
                    <div className="col-span-12 sm:col-span-9 md:col-span-8 lg:col-span-5 lg:pe-8 flex flex-col gap-6">
                        <Link to="/" className="flex">
                            <img className="h-[56px] w-auto object-contain" src={LogoImage} alt="logo-image" />
                        </Link>
                        <TitleComponent type="p" size="base" className="text-white/[75%]">
                            {t("Volt for Marketing Services specializes in innovative marketing and technical solutions, empowering businesses to achieve their goals with creativity, professionalism, and a results-driven approach.")}
                        </TitleComponent>
                    </div>
                    <div className="col-span-12 lg:col-span-5">
                        <TitleComponent type="h3" className="text-white">
                            {t("Get Exclusive Marketing Tips and Insights for Business Growth")}
                        </TitleComponent>
                        <form className="flex flex-col sm:flex-row md:items-center gap-6 mt-5 sm:mt-8 mb-10">
                            <Input
                                wrapperStyles="flex-1"
                                className="ps-0 border-x-0 border-t-0 rounded-none py-4 text-white focus-visible:border-white"
                                name="email"
                                type="email"
                                placeholder={t("Your Email Address")}
                            />
                            <Button size="lg">
                                {t("Subscribe")}
                            </Button>
                        </form>
                        <div className="flex items-center flex-wrap gap-6">
                            {[
                                {
                                    link: "/",
                                    icon: FacebookOutlinedIcon
                                },
                                {
                                    link: "/",
                                    icon: TwitterIcon
                                },
                                {
                                    link: "/",
                                    icon: InstagramIcon
                                },
                                {
                                    link: "/",
                                    icon: WhatsAppIcon
                                }
                            ].map((item, index) => {
                                const IconComponent = item.icon;
                                return(
                                    <Link to={item.link} key={index} className="flex">
                                        <IconComponent className="!w-8 !h-8 text-white/[65%] duration-300 hover:text-white"/>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="mt-10 md:mt-28 flex flex-col lg:flex-row lg:text-start text-center items-center justify-between gap-3">
                    <p className="text-base font-normal text-white">
                        {t("Volt Copyright © 2024. All right reserved.")}
                    </p>
                    <div className="flex items-center justify-center flex-wrap gap-4 gap-y-2">
                        <a href="#" className="text-base font-normal text-white hover:text-primary hover:underline">{t("Privacy Policy")}</a>
                        <a href="#" className="text-base font-normal text-white hover:text-primary hover:underline">{t("Terms & Conditions")}</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
