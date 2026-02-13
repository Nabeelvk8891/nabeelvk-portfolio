"use client";

import { motion, useScroll, useTransform, useMotionValue, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Code, Server, Database, Cloud, Terminal, Globe, Cpu, Layers, Box, GitBranch, Wind, Layout } from "lucide-react";
import { useEffect, useState } from "react";

const techStackTicker = [
    { name: "JavaScript", icon: <Code size={32} /> },
    { name: "React", icon: <Globe size={32} /> },
    { name: "Node.js", icon: <Server size={32} /> },
    { name: "MongoDB", icon: <Database size={32} /> },
    { name: "AWS", icon: <Cloud size={32} /> },
    { name: "Next.js", icon: <Layers size={32} /> },
    { name: "TypeScript", icon: <Terminal size={32} /> },
    { name: "Tailwind", icon: <Wind size={32} /> },
    { name: "Bootstrap", icon: <Layout size={32} /> },
    { name: "Git", icon: <GitBranch size={32} /> },
    { name: "Docker", icon: <Box size={32} /> },
];

const rotatingTitles = ["NABEEL VK", "DEVELOPER", "MERN STACK"];

export default function Hero() {

    /* --- hydration safe mount flag --- */
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    /* keep your scroll motion but prevent SSR mismatch */
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);

    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (!mounted) return;
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % rotatingTitles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [mounted]);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        mouseX.set(clientX / innerWidth);
        mouseY.set(clientY / innerHeight);
    };

    function LiveClock() {
        const [time, setTime] = useState("");

        useEffect(() => {
            if (!mounted) return;

            const update = () => {
                const now = new Date();
                setTime(
                    now.toLocaleTimeString("en-GB", {
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                    })
                );
            };

            update();
            const interval = setInterval(update, 1000);

            return () => clearInterval(interval);
        }, []);

        return (
            <span
                suppressHydrationWarning
                className="font-mono text-muted-foreground tracking-widest tabular-nums"
            >
                {mounted ? time : "00:00:00"}
            </span>
        );
    }

    if (!mounted) return null;

    return (
        <section
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]"
            onMouseMove={handleMouseMove}
        >

            {/* Background Typography */}
            <div className="absolute inset-x-0 top-44 md:top-[52%] md:-translate-y-1/2 flex items-center justify-center z-0 pointer-events-none select-none overflow-hidden">

                <AnimatePresence mode="wait">
                    <motion.h1
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 0.9, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-[16vw] sm:text-[14vw] md:text-[10vw] lg:text-[13vw] font-bold text-white leading-none tracking-tighter whitespace-nowrap"
                    >
                        {rotatingTitles[index]}
                    </motion.h1>
                </AnimatePresence>

            </div>

            {/* Ambient Background */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#101010] to-[#050505] opacity-80" />
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-primary/5 rounded-full opacity-20 animate-pulse-slow" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-secondary/5 rounded-full opacity-20 animate-pulse-slow delay-1000" />
            </div>

            <div className="container relative z-10 h-full flex flex-col justify-center min-h-screen pb-20 pt-32 px-6 md:px-12">

                <motion.div
                    className="absolute top-6 left-4 md:left-auto md:right-12 md:top-20 z-20"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <div className="px-4 py-2 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.4)] text-right">

                        <div className="flex items-center gap-2 justify-end mb-1">
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.7)]" />
                            <p className="text-xs md:text-sm text-white tracking-wider uppercase font-semibold">
                                Dev Mode Active
                            </p>
                        </div>

                        <p className="text-sm md:text-base font-mono text-muted-foreground tracking-widest">
                            <LiveClock />
                        </p>

                    </div>
                </motion.div>

                <motion.div
                    className="absolute top-32 left-6 md:left-12 z-20 hidden md:block text-left"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h1 className="text-5xl font-bold text-white tracking-tight mb-2">
                        Muhammed Nabeel VK
                    </h1>
                    <p className="text-xl text-muted-foreground font-light tracking-wide">
                        MERN Stack Developer
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center h-full">

                    <motion.div
                        className="md:col-span-4 order-2 md:order-1 text-center md:text-left flex justify-center md:block"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <p className="text-muted-foreground/80 font-light text-base md:text-lg leading-relaxed tracking-wide max-w-xs md:max-w-none mx-auto md:mx-0">
                            <span className="block md:hidden leading-snug">
                                Build. Refine. Repeat.<br />
                                That’s the rhythm.
                            </span>

                            <span className="hidden md:block">
                                Creating thoughtful web experiences through code.<br />
                                MERN stack developer exploring the balance between logic, design, and usability.<br />
                                Always building, always refining.
                            </span>
                        </p>
                    </motion.div>

                    <div className="md:col-span-4 order-1 md:order-2 relative h-[50vh] md:h-[70vh] flex items-end justify-center">
                        <motion.div
                            className="relative z-10 h-full w-auto max-w-full flex items-end"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
                            <img
                                src="https://res.cloudinary.com/donfeoqjx/image/upload/v1770972882/IMG_9266_sy2pwv.png"
                                alt="Nabeel VK"
                                className="h-full w-auto object-contain drop-shadow-2xl"
                                style={{
                                    maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                                    WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
                                }}
                            />
                        </motion.div>
                    </div>

<motion.div
    className="
        md:col-span-4 order-3 md:order-3
        
        flex flex-col items-center md:items-end
        text-center md:text-right
        
        mt-6 md:mt-0
        pb-24 md:pb-0
    "
    initial={{ opacity: 0, x: 30 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.6 }}
>
    <div className="block md:hidden mb-6">
        <h1 className="text-3xl font-bold text-white tracking-tight">
            Muhammed Nabeel VK
        </h1>
        <p className="text-base text-muted-foreground">
            MERN Stack Developer
        </p>
    </div>

    <div className="flex gap-6">
        <SocialLink icon={<Github size={22} />} href="https://github.com/nabeelvk8891" />
        <SocialLink icon={<Linkedin size={22} />} href="https://www.linkedin.com/in/muhammed-nabeel-vk/" />
        <SocialLink icon={<Mail size={22} />} href="mailto:nabeelvk2006@gmail.com" />
    </div>
</motion.div>

                    

                </div>
            </div>

            {/* Resume CTA */}
<div className="absolute bottom-28 md:bottom-36 left-0 right-0 md:left-auto md:right-20 flex justify-center md:justify-end px-6 md:px-0 z-20">

    <a
        href="https://drive.google.com/file/d/1kqHvaIJapHRdLzzeMjYPVzZWNS9Nv9xT/view?usp=drive_link"
        download
        className="
w-full max-w-xs md:max-w-none md:w-auto
flex items-center justify-center
px-8 py-3.5

rounded-2xl
bg-white/10 backdrop-blur-xl
border border-white/20

text-white text-sm md:text-base
font-semibold tracking-wide

shadow-[0_10px_30px_rgba(0,0,0,0.4)]

transition-all duration-300 ease-out

hover:bg-white/20
hover:border-white/40
hover:shadow-[0_15px_40px_rgba(255,255,255,0.15)]
hover:-translate-y-1
active:translate-y-0
"

    >
        Access Resume File →
    </a>

</div>

            



            {/* Tech Ticker */}
            <div className="absolute bottom-0 left-0 w-full py-6 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-transparent z-30 overflow-hidden pointer-events-none">
                <div className="relative flex overflow-x-hidden w-full">
                    <motion.div
                        className="flex gap-16 items-center whitespace-nowrap px-16 will-change-transform"
                        animate={{ x: "-50%" }}
                        transition={{ duration: 40, ease: "linear", repeat: Infinity }}
                    >
                        {[...techStackTicker, ...techStackTicker, ...techStackTicker, ...techStackTicker].map((tech, i) => (
                            <div key={i} className="text-white/20 hover:text-white/60 transition-colors duration-300 transform">
                                {tech.icon}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            
            
        </section>
    );
}

function SocialLink({ icon, href }: { icon: any, href: string }) {
    return (
        <a href={href} className="text-white/40 hover:text-white transition-all hover:scale-110 active:scale-95 duration-200">
            {icon}
        </a>
    );
}
