import { ReactNode } from "react";

interface SectionProps {
    children: ReactNode;
    id?: string;
    className?: string;
}

const Section: React.FC<SectionProps> = ({ children, id, className }) => {
    return (
        <section id={id} className={className}>
            {children}
        </section>
    );
};

export default Section;
