"use client";

import { motion } from "framer-motion";
import GlassCard from "../ui/GlassCard";

const skills = [
    {
        category: "Frontend Development",
        items: [
            "React.js",
            "Next.js",
            "JavaScript",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion",
            "Redux Toolkit",
            "Figma"
        ],
        className: "border-primary/20",
        glow: "group-hover:shadow-[0_0_40px_rgba(0,240,255,0.15)]"
    },
    {
        category: "Backend Development",
        items: [
            "Node.js",
            "Express.js",
            "MongoDB",
            "REST APIs",
            "JWT Authentication",
            "MVC Architecture",
            "MMVC Architecture"
        ],
        className: "border-secondary/20",
        glow: "group-hover:shadow-[0_0_40px_rgba(112,0,223,0.15)]"
    },
    {
        category: "Tools & Deployment",
        items: [
            "Git / GitHub",
            "AWS ",
            "Docker ",
            "Vercel",
            "Postman",
            "Jira",
            "Clickup",
            "Figma"
        ],
        className: "border-accent/20",
        glow: "group-hover:shadow-[0_0_40px_rgba(255,0,85,0.15)]"
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-32 relative overflow-hidden">

            {/* Background Glow Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container px-6 mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 tracking-tight">
                        Technical{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                            Skills
                        </span>
                    </h2>

                    <p className="text-muted-foreground max-w-xl mx-auto text-lg font-light">
                        Focused on building modern MERN stack applications with clean architecture,
                        performance optimization, and practical deployment workflows.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skills.map((skillGroup, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                        >
                            <GlassCard
                                spotlight
                                className={`h-full group hover:-translate-y-2 transition-transform duration-500 ${skillGroup.className} ${skillGroup.glow}`}
                            >
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold mb-8 text-foreground pb-4 border-b border-white/5">
                                        {skillGroup.category}
                                    </h3>

                                    <div className="flex flex-wrap gap-3">
                                        {skillGroup.items.map((item) => (
                                            <span
                                                key={item}
                                                className="px-4 py-1.5 text-xs font-semibold tracking-wide rounded-full bg-white/5 border border-white/5 text-muted-foreground hover:text-white hover:bg-white/10 hover:border-white/20 transition-all cursor-default"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
