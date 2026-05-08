import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom";
import Section from "../section-component/section"
import TitleComponent from "../title-component/title-component"

import ClientLogo1 from "../../assets/company-logo-1.png"
import ClientLogo2 from "../../assets/company-logo-2.png"
import ClientLogo3 from "../../assets/company-logo-3.png"
import ClientLogo4 from "../../assets/company-logo-4.png"
import ClientLogo5 from "../../assets/company-logo-5.png"

const ClientData = [
    {
        link: "/",
        logo: ClientLogo1
    },
    {
        link: "/",
        logo: ClientLogo2
    },
    {
        link: "/",
        logo: ClientLogo3
    },
    {
        link: "/",
        logo: ClientLogo4
    },
    {
        link: "/",
        logo: ClientLogo5
    }
]

const ClientSection = () => {
    const {t} = useTranslation();
    return (
        <Section className="mb-10 md:mb-28">
            <div className="container">
                <div className="flex flex-col gap-5 max-w-[700px] mx-auto text-center mb-5 sm:mb-8 md:mb-16">
                    <TitleComponent type="h2" className="animate-up">
                        {t("Trusted by Most Popular Companies in the World")}
                    </TitleComponent>
                    <TitleComponent type="p" className="animate-up">
                        {t(
                            "We’ve helped businesses of all sizes grow with innovative marketing and technical solutions. Here are some of the clients we've had the privilege to work with."
                        )}
                    </TitleComponent>
                </div>
                <div className="flex items-center justify-between gap-6">
                    {ClientData.map((item, index) => (
                        <Link to={item.link} key={index} className="flex items-center justify-center h-[80px] p-5 rounded-xl group">
                            <img className="w-full h-full object-contain opacity-20 duration-300 group-hover:opacity-100" src={item.logo} alt="client logo" />
                        </Link>
                    ))}
                </div>
            </div>
        </Section>
    )
}

export default ClientSection
