import "./button.css"
import React from "react"
import ArrowOutward from "../assets/images/ArrowOutward.svg"

type ButtonProps = {
    href?: string;
    type?: "button" | "submit" | "reset";
    variant?: "primary" | "secondary";
    className?: string;
    children: React.ReactNode;
};
const Button: React.FC<ButtonProps> =  ({
    href,
    type = "button",
    variant = "primary",
    className = "",
    children,
    }) => {
    const baseClass= 
    variant === "primary"
    ? "border-btn"
    : "solid-btn";

    const classes = `${baseClass} ${className}`;

    const content =
    variant === "primary" ? (
        <span className="border-btn-inner">{children}</span>
    ) : (
        <>
        {children}
        <img src={ArrowOutward.src} alt=""/>
        </>
    );
    if (href) {
        return (
            <a href={href} className={classes}>
                {content}
            </a>
        );
    }
    return (
        <button type={type} className={classes}>
            {content}
        </button>
    );
}
export default Button;