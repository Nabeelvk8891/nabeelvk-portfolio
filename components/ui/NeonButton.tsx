"use client";

import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import MagneticWrapper from "./MagneticWrapper";

interface NeonButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    variant?: "primary" | "secondary";
    icon?: React.ReactNode;
    type?: "button" | "submit" | "reset";
}

export default function NeonButton({
    children,
    onClick,
    className,
    variant = "primary",
    icon,
    type = "button",
}: NeonButtonProps) {
    const baseStyles =
        "relative px-6 py-3 rounded-full font-medium text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2 group";

    const variants = {
        primary:
            "bg-primary text-primary-foreground shadow-[0_0_20px_rgba(0,242,234,0.3)] hover:shadow-[0_0_30px_rgba(0,242,234,0.6)] hover:bg-cyan-300",
        secondary:
            "bg-transparent border border-primary/30 text-primary hover:bg-primary/10 hover:border-primary",
    };

    return (
        <MagneticWrapper strength={20}>
            <button
                type={type}
                onClick={onClick}
                className={twMerge(baseStyles, variants[variant], className)}
            >
                {children}
                {icon && (
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {icon}
                    </span>
                )}
            </button>
        </MagneticWrapper>
    );
}
