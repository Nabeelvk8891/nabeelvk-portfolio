"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Home, User, Code, Briefcase, Mail, Menu, X } from "lucide-react";
import MagneticWrapper from "../ui/MagneticWrapper";

const navItems = [
    { name: "Home", href: "#hero", icon: <Home size={18} /> },
    { name: "About", href: "#about", icon: <User size={18} /> },
    { name: "Work", href: "#projects", icon: <Code size={18} /> },
    { name: "Exp", href: "#experience", icon: <Briefcase size={18} /> },
    { name: "Contact", href: "#contact", icon: <Mail size={18} /> },
];

export default function NavigationDock() {
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState("Home");
    const [isScrolled, setIsScrolled] = useState(false);

    // Helper to handle scroll state for aesthetics
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 100);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed bottom-10 inset-x-0 z-50 flex justify-center pointer-events-none">
            <motion.div
                layout
                className="pointer-events-auto relative"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
            >
                {/* The Core Capsule */}
                <motion.div
                    layout
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    className={`
            bg-black/40 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)]
            flex items-center justify-center overflow-hidden
            ${isOpen ? "px-3 py-3 rounded-[2rem]" : "w-14 h-14 rounded-full cursor-pointer hover:bg-white/5"}
          `}
                >
                    <AnimatePresence mode="popLayout">
                        {!isOpen ? (
                            /* Idle State - "System Core" Icon */
                            <motion.div
                                key="idle"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.5 }}
                                transition={{ duration: 0.3 }}
                                className="flex items-center justify-center text-white/80"
                            >
                                {/* Futuristic Menu Icon */}
                                <div className="relative w-5 h-5 flex flex-col justify-between items-center group">
                                    <span className="w-full h-0.5 bg-current rounded-full transition-all group-hover:w-3" />
                                    <span className="w-3 h-0.5 bg-current rounded-full transition-all group-hover:w-full" />
                                    <span className="w-full h-0.5 bg-current rounded-full transition-all group-hover:w-3" />
                                </div>
                            </motion.div>
                        ) : (
                            /* Expanded State - The Dock */
                            <motion.nav
                                key="open"
                                initial={{ opacity: 0, filter: "blur(10px)" }}
                                animate={{ opacity: 1, filter: "blur(0px)" }}
                                exit={{ opacity: 0, filter: "blur(10px)" }}
                                transition={{ duration: 0.4 }}
                                className="flex items-center gap-2"
                            >
                                {navItems.map((item) => (
                                    <MagneticWrapper key={item.name} strength={15}>
                                        <Link
                                            href={item.href}
                                            onClick={() => setActive(item.name)}
                                            className={`
                        relative px-4 py-2 rounded-full flex items-center justify-center transition-all duration-300
                      `}
                                        >
                                            {/* Active Indicator (Glow Backdrop) */}
                                            {active === item.name && (
                                                <motion.div
                                                    layoutId="nav-glow"
                                                    className="absolute inset-0 bg-white/10 rounded-full border border-white/5 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                                />
                                            )}

                                            <span className={`relative z-10 text-sm font-medium flex items-center gap-2 ${active === item.name ? "text-white" : "text-muted-foreground hover:text-white"}`}>
                                                {item.icon}
                                                {/* Text only visible on hover or active? Let's keep icons + text for clarity in this expanded mode for rare feel */}
                                                <motion.span
                                                    initial={{ width: 0, opacity: 0 }}
                                                    animate={{ width: "auto", opacity: 1 }}
                                                    className="overflow-hidden whitespace-nowrap hidden md:block" // Text only on desktop for space
                                                >
                                                    {item.name}
                                                </motion.span>
                                            </span>
                                        </Link>
                                    </MagneticWrapper>
                                ))}
                            </motion.nav>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Ambient Ring showing "Active" state when closed - Optional futuristic detail */}
                {!isOpen && (
                    <motion.div
                        layoutId="nav-ring"
                        className="absolute inset-0 rounded-full border border-primary/30 animate-pulse-slow pointer-events-none"
                    />
                )}
            </motion.div>
        </div>
    );
}
