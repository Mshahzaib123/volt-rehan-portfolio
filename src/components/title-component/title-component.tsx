import React, { ReactNode } from "react";

interface TitleComponentProps {
    type?: "h1" | "h2" | "h3" | "p";
    children: ReactNode;
    size?: "extra-small" | "small" | "base" | "medium" | "large";
    weight?: "bold" | "medium" | "regular";
    className?: string;
}

const TitleComponent: React.FC<TitleComponentProps> = ({
    type = "h1",
    children,
    size = "medium",
    weight = "regular",
    className = "",
}) => {
    const headingStyles: Record<string, string> = {
        h1: "text-3xl sm:text-4xl md:text-6xl sm:leading-[48px] md:leading-[80px] font-bold",
        h2: "text-2xl sm:text-3xl md:text-5xl md:leading-[60px] font-bold",
        h3: "text-lg sm:text-2xl font-bold",
    };
    const paragraphStyles: Record<string, string> = {
        "extra-small": "text-xs",
        small: "text-sm",
        base: "text-base",
        medium: "text-base md:text-lg",
        large: "text-xl md:text-2xl",
    };
    const weightStyles: Record<string, string> = {
        bold: "font-bold",
        medium: "font-medium",
        regular: "font-normal",
    };
    const baseStyles =
        type === "p"
        ? `${paragraphStyles[size]} ${weightStyles[weight]}`
        : headingStyles[type];

    return React.createElement(
        type,
        { className: `${baseStyles} ${className}` },
        children
    );
};

export default TitleComponent;
