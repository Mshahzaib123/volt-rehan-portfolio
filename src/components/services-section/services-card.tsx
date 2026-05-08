import TitleComponent from "../title-component/title-component"

import qomaShape from "../../assets/qoma-shape.png"

interface ServicesCardProps {
    data: Array<{
        icon: React.ElementType;
        title: string;
        desc: string;
    }>
}

const ServicesCard = ({data}:ServicesCardProps) => {
    return (
        <>
            {data.map((item, index) => {
                const IconComponent = item.icon;
                return(
                    <div 
                        className="animate-up p-5 md:p-8 rounded-xl relative bg-background group"
                        key={index}
                    >
                        <div className="flex flex-col gap-5 relative z-10">
                            <div className="flex items-center gap-5">
                                <div className="flex items-center justify-center w-[60px] md:w-[80px] h-[60px] md:h-[80px] bg-white duration-300 group-hover:bg-primary rounded-full">
                                    <IconComponent className="!w-8 md:!w-[44px] !h-8 md:!h-[44px] group-hover:text-white" />
                                </div>
                                <TitleComponent type="h3" className="flex-1">
                                    {item.title}
                                </TitleComponent>
                            </div>
                            <TitleComponent type="p">
                                {item.desc}
                            </TitleComponent>
                        </div>
                        <img className="absolute top-4 end-4 w-[34px] h-[34px]" src={qomaShape} alt="qoma icon" />
                    </div>
                )
            })}
        </>
    )
}

export default ServicesCard
