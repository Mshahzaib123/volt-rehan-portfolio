import TitleComponent from "../title-component/title-component"
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

interface PricingCardProps {
    title: string;
    desc: string;
    price: number;
    features: { text: string; disabled?: boolean }[];
    recomended?: boolean;
}

const PricingCard = ({title, desc, price, features, recomended}: PricingCardProps) => {
    const {t} = useTranslation();
    return (
        <div className={cn(
            "p-5 md:p-8 md:pt-7 flex flex-col justify-between gap-10 rounded-xl relative",
            recomended ? "bg-primary shadow-2xl mt-8 md:mt-0" : "bg-background shadow-md"
        )}>
            {recomended && (
                <div className="py-1 px-3 bg-primary rounded-sm absolute -top-[34px] start-1/2 -translate-x-1/2">
                    <TitleComponent type="p" size="base" className="text-white">{t("Recommended")}</TitleComponent>
                </div>
            )}
            <div className="flex flex-col gap-5">
                <div className="text-center">
                    <TitleComponent type="h3" className={recomended ? "text-white" : ""}>
                        {t(title)}
                    </TitleComponent>
                    <TitleComponent type="p" className={cn(
                        "mt-3 mb-5",
                        recomended ? "text-white" : ""
                    )}>
                        {t(desc)}
                    </TitleComponent>
                    <p className={cn(
                        "text-2xl sm:text-3xl md:text-5xl md:leading-[60px] font-bold",
                        recomended ? "text-white" : ""
                    )}>
                        ${price}/M
                    </p>
                </div>
                <div className="flex flex-col gap-3">
                    {features.map((item, index) => (
                        <div className={cn(
                            "flex gap-3",
                            item.disabled && "opacity-40"
                        )} key={index}>
                            <CheckOutlinedIcon 
                                className={cn(
                                    "!w-[24px] !h-[24px]",
                                    recomended ? "text-white" : "text-primary"
                                )}
                            />
                            <TitleComponent type="p" className={cn(
                                "flex-1",
                                recomended ? "text-white" : ""
                            )}>
                                {t(item.text)}
                            </TitleComponent>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex">
                <Button variant={recomended ? "white" : "outline"} size="lg" className="w-full">
                    {t("Choose Plan")}
                </Button>
            </div>
        </div>
    )
}

export default PricingCard;
