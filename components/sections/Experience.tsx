"use client";

import { motion } from "framer-motion";
import GlassCard from "../ui/GlassCard";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
   {
    role: "MERN Stack Developer Intern",
    company: "Bridgeon Solutions",
    period: "2025 - Present",
    description:
        "Gaining hands-on experience in full-stack MERN development by working on real-world applications, authentication systems, API integration, and deployment workflows. Continuously learning through company guidance, practical exposure, and dedicated self-study to strengthen both technical and problem-solving skills.",
    tags: ["React", "Node.js", "MongoDB", "Express", "AWS"]
},

    
    
];


export default function Experience() {
    return (
        <section id="experience" className="py-32 relative">
            <div className="container px-6 mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 tracking-tight">
                        Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Voyage</span>
                    </h2>
                </motion.div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent md:-translate-x-1/2 opacity-30" />

                    <div className="space-y-16">
                        {experiences.map((exp, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                className={`relative grid md:grid-cols-2 gap-8 md:gap-16 items-center ${idx % 2 === 0 ? "md:text-right" : "md:flex-row-reverse"}`}
                            >
                                {/* Timeline Node */}
                                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-black box-content transform -translate-x-1/2 z-10 shadow-[0_0_20px_var(--primary)]" />

                                {/* Content (Alternating) */}
                                <div className={`${idx % 2 === 0 ? "md:col-start-1 md:pr-8" : "md:col-start-2 md:pl-8"} md:contents`}>
                                    <div className={idx % 2 === 0 ? "md:col-start-1" : "md:col-start-2"}>
                                        <GlassCard className="p-8 relative overflow-hidden group hover:bg-white/5 transition-colors border-white/5">
                                            <div className={`flex flex-col gap-2 mb-4 ${idx % 2 === 0 ? "md:items-end" : "md:items-start"}`}>
                                                <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{exp.role}</h3>
                                                <div className="flex items-center gap-2 text-primary font-medium text-sm">
                                                    <Briefcase size={14} />
                                                    <span>{exp.company}</span>
                                                </div>
                                            </div>

                                            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                                {exp.description}
                                            </p>

                                            <div className={`flex flex-wrap gap-2 ${idx % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                                                {exp.tags.map(tag => (
                                                    <span key={tag} className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-primary/10 text-primary border border-primary/20">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className={`absolute top-6 right-6 text-xs font-mono text-muted-foreground/50 border border-white/5 px-2 py-1 rounded bg-black/20 flex items-center gap-2 ${idx % 2 === 0 && "md:left-6 md:right-auto"}`}>
                                                <Calendar size={12} />
                                                {exp.period}
                                            </div>
                                        </GlassCard>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
