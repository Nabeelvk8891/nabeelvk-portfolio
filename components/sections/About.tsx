"use client";

import { motion } from "framer-motion";
import { Code, Server, Smartphone, Zap } from "lucide-react";
import GlassCard from "../ui/GlassCard";

const features = [
    {
        icon: <Code className="text-primary" size={32} />,
        title: "Frontend Development",
        description:
            "Building clean, responsive interfaces using React, Next.js, and Tailwind with strong focus on usability and performance."
    },
    {
        icon: <Server className="text-secondary" size={32} />,
        title: "Backend Development",
        description:
            "Developing scalable backend systems with Node.js, Express, MongoDB, authentication flows, and REST APIs."
    },
    {
        icon: <Smartphone className="text-accent" size={32} />,
        title: "Full Stack Projects",
        description:
            "Creating complete MERN applications from frontend UI to backend logic, database integration, and deployment."
    },
    {
        icon: <Zap className="text-yellow-400" size={32} />,
        title: "Performance Focus",
        description:
            "Optimizing applications for speed, clean structure, and smooth user experience across devices."
    }
];

export default function About() {
    return (
        <section id="about" className="py-32 relative">
            <div className="container px-6 mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Bio Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold font-heading mb-8 tracking-tight">
                            Beyond the{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                Code
                            </span>
                        </h2>

                        <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
                            <p>
                                I'm a MERN stack developer focused on building modern, practical web
                                applications. My journey started from curiosity about how the web
                                works and gradually evolved into developing full-stack projects and
                                refining real-world coding skills.
                            </p>

                            <p>
                                I enjoy working across both frontend and backend, creating clean
                                user interfaces while designing efficient APIs and data flows. My
                                approach emphasizes simplicity, performance, and maintainable code.
                            </p>

                            <p>
                                Outside development, I continuously explore new technologies,
                                improve workflows, and experiment with better ways to build scalable
                                web applications.
                            </p>
                        </div>
                    </motion.div>

                    {/* Feature Grid */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                            >
                                <GlassCard
                                    hoverEffect
                                    className="p-6 h-full flex flex-col items-start gap-4 border-primary/10"
                                >
                                    <div className="p-3 rounded-xl bg-white/5 w-fit border border-white/5 text-foreground">
                                        {feature.icon}
                                    </div>

                                    <h3 className="text-xl font-bold text-foreground">
                                        {feature.title}
                                    </h3>

                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {feature.description}
                                    </p>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
