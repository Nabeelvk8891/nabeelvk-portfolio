"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { Home, User, Code, Briefcase, Mail, Menu, X } from "lucide-react";

const navItems = [
    { name: "Home", href: "#hero", icon: <Home size={18} /> },
    { name: "About", href: "#about", icon: <User size={18} /> },
    { name: "Work", href: "#projects", icon: <Code size={18} /> },
    { name: "Exp", href: "#experience", icon: <Briefcase size={18} /> },
    { name: "Contact", href: "#contact", icon: <Mail size={18} /> },
];

export default function CornerNavigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState("Home");
    const [isHidden, setIsHidden] = useState(false);
    const { scrollY } = useScroll();

    // Smart Auto-Hide Logic
    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setIsHidden(true);
        } else {
            setIsHidden(false);
        }
    });

    // Handle Scroll Spy - Improved Accuracy
    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => item.href.substring(1));

            // Find the section currently in view
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // Check if section top is near the viewport top (approx 1/3 viewport height)
                    // or if the bottom is still substantially visible
                    return rect.top <= 300 && rect.bottom >= 100;
                }
                return false;
            });

            if (current) {
                const activeItem = navItems.find(item => item.href.substring(1) === current);
                if (activeItem) setActive(activeItem.name);
            } else if (window.scrollY < 50) {
                // Fallback to Home if at the very top
                setActive("Home");
            }
        };
        window.addEventListener("scroll", handleScroll);
        // Trigger once on mount
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Desktop: Smart Horizontal Floating Pill (Top-Left) */}
            <motion.div
                variants={{
                    visible: { y: 0, opacity: 1 },
                    hidden: { y: -100, opacity: 0 }
                }}
                animate={isHidden ? "hidden" : "visible"}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="hidden md:flex fixed top-6 left-6 z-50 items-center"
            >
                <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-full p-1.5 flex items-center gap-1 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-white/20 transition-all duration-300">

                    {/* Brand Icon / Home Trigger */}
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mr-2 border border-white/5">
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    </div>

                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setActive(item.name)}
                            className="relative px-5 py-2.5 rounded-full text-sm font-medium transition-colors"
                        >
                            {active === item.name && (
                                <motion.div
                                    layoutId="bubble-active"
                                    className="absolute inset-0 bg-white/10 rounded-full border border-white/5 shadow-[0_0_15px_rgba(255,255,255,0.05)]"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <span className={`relative z-10 transition-colors duration-300 ${active === item.name ? "text-white" : "text-muted-foreground hover:text-white"}`}>
                                {item.name}
                            </span>
                        </Link>
                    ))}
                </div>
            </motion.div>

            {/* Mobile: Keep Existing Toggle */}
            <div className="md:hidden fixed top-6 right-6 z-50">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white shadow-lg active:scale-95 transition-transform"
                >
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: -20, x: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: -20, x: 20 }}
                            className="absolute top-16 right-0 w-48 bg-black/90 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl origin-top-right p-2"
                        >
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => { setActive(item.name); setIsOpen(false); }}
                                    className={`
                                        flex items-center gap-3 px-4 py-3 rounded-xl transition-colors
                                        ${active === item.name ? "bg-white/10 text-white" : "text-muted-foreground hover:bg-white/5 hover:text-white"}
                                    `}
                                >
                                    {item.icon}
                                    <span className="text-sm font-medium">{item.name}</span>
                                </Link>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}
