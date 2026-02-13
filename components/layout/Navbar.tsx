"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Github, Linkedin, Mail, FileText } from "lucide-react";
import NeonButton from "../ui/NeonButton";
import MagneticWrapper from "../ui/MagneticWrapper";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Work", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 50);
    });

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`fixed top-0 inset-x-0 z-50 flex justify-center py-6 transition-all duration-500 pointer-events-none ${scrolled ? "py-4" : "py-6"}`}
        >
            <div className={`pointer-events-auto relative flex items-center gap-2 transition-all duration-500 ${scrolled ? "bg-black/60 glass-nav rounded-full px-4 py-2 border border-white/10 shadow-2xl backdrop-blur-xl" : "bg-transparent px-6 py-4"}`}>

                {/* Logo - Compressed on scroll */}
                <Link href="/" className={`${scrolled ? "mr-4" : "mr-8"} relative group`}>
                    <MagneticWrapper strength={10} className="flex items-center gap-1">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-black text-sm">
                            N
                        </div>
                        {!scrolled && (
                            <span className="font-heading font-bold text-lg tracking-tight group-hover:text-primary transition-colors">
                                Nabeel<span className="text-primary">.dev</span>
                            </span>
                        )}
                    </MagneticWrapper>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <MagneticWrapper key={link.name} strength={15}>
                            <Link
                                href={link.href}
                                className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-white transition-colors rounded-full hover:bg-white/5"
                            >
                                {link.name}
                            </Link>
                        </MagneticWrapper>
                    ))}
                </nav>

                {/* Divider */}
                <div className={`hidden md:block w-px bg-white/10 mx-2 h-6 ${scrolled ? "block" : "hidden"}`} />

                {/* Actions */}
                <div className="hidden md:flex items-center gap-3">
                    <MagneticWrapper strength={10}>
                        <Link href="#" className="p-2 text-muted-foreground hover:text-primary transition-colors">
                            <Github size={18} />
                        </Link>
                    </MagneticWrapper>
                    <MagneticWrapper strength={10}>
                        <Link href="#" className="p-2 text-muted-foreground hover:text-primary transition-colors">
                            <Linkedin size={18} />
                        </Link>
                    </MagneticWrapper>

                    <NeonButton className="ml-2 px-4 py-2 text-xs" variant={scrolled ? "primary" : "secondary"} icon={<FileText size={14} />}>
                        Resume
                    </NeonButton>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -20 }}
                    className="absolute top-24 left-4 right-4 p-6 glass-card rounded-3xl z-50 flex flex-col items-center gap-6 md:hidden pointer-events-auto border border-white/10 bg-black/90"
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors w-full text-center py-2"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="w-full h-px bg-white/10" />
                    <div className="flex gap-6">
                        <Link href="https://github.com" target="_blank" className="p-2 hover:text-primary transition-colors"><Github size={24} /></Link>
                        <Link href="https://linkedin.com" target="_blank" className="p-2 hover:text-primary transition-colors"><Linkedin size={24} /></Link>
                        <Link href="mailto:contact@nabeel.dev" className="p-2 hover:text-primary transition-colors"><Mail size={24} /></Link>
                    </div>
                </motion.div>
            )}
        </motion.header>
    );
}
