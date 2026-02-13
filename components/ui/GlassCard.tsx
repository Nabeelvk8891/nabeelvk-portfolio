"use client";

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
    spotlight?: boolean;
}

export default function GlassCard({
    children,
    className,
    hoverEffect = false,
    spotlight = false,
}: GlassCardProps) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            className={twMerge(
                clsx(
                    "glass-card rounded-2xl relative overflow-hidden transition-all duration-300 group",
                    hoverEffect && "hover:border-primary/20",
                    className
                )
            )}
            onMouseMove={spotlight ? handleMouseMove : undefined}
        >
            {spotlight && (
                <motion.div
                    className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                    style={{
                        background: useMotionTemplate`
              radial-gradient(
                650px circle at ${mouseX}px ${mouseY}px,
                rgba(0, 240, 255, 0.1),
                transparent 80%
              )
            `,
                    }}
                />
            )}
            <div className="relative z-10 h-full">{children}</div>
        </div>
    );
}
