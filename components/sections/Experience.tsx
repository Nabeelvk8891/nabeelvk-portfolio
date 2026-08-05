"use client";

import { motion } from "framer-motion";
import GlassCard from "../ui/GlassCard";
import { Briefcase, Calendar, GraduationCap } from "lucide-react";

const experiences = [
  {
  role: "Academic Advisor & Mentor",
  company: "Bridgeon Solutions",
  period: "2026 - Present",
  description:
    "Providing academic guidance, technical mentorship, and personalized support to interns throughout their learning journey. Leading student progress reviews, offering career and technical guidance, and helping interns strengthen their skills, discipline, and professional development.",
  tags: ["Leadership", "Mentoring", "Technical Guidance", "Student Development", "Project management", "Review Validation", "Quality Assurance"],
  icon: Briefcase,
  type: "work",
},
  {
    role: "MERN Stack Developer Intern",
    company: "Bridgeon Solutions",
    period: "2025 - 2026",
    description:
      "Gaining hands-on experience in full-stack MERN development through real applications, authentication systems, API integrations, and deployment workflows while continuously strengthening problem-solving ability.",
    tags: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "MongoDB", "Express", "AWS", "Docker", "Vercel"],
    icon: Briefcase,
    type: "work",
  },
  {
    role: "BCA — Full Stack Web Development (Elective)",
    company: "Jain University",
    period: "2026 - Current (Pursuing)",
    description:
      "Bachelor of Computer Applications focused on modern full‑stack web development, software engineering practices, and industry‑oriented practical exposure.",
    tags: ["Full Stack", "Web Dev", "System Architecture", "C", "Academic"],
    icon: GraduationCap,
    type: "education",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 md:py-32 relative">
      <div className="container px-6 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 tracking-tight">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Voyage</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto">
            Experience and academic growth shaping technical capability and professional direction.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-2 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent md:-translate-x-1/2 opacity-30" />

          <div className="space-y-14 md:space-y-16">
            {experiences.map((exp, idx) => {
              const Icon = exp.icon;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.12 }}
                  className={`relative grid md:grid-cols-2 gap-6 md:gap-14 items-center ${
                    idx % 2 === 0 ? "md:text-right" : ""
                  }`}
                >
                  <div className="absolute left-2 md:left-1/2 w-5 h-5 rounded-full bg-primary border-4 border-black transform -translate-x-1/2 z-10 shadow-[0_0_28px_var(--primary)]" />

                  <div className={idx % 2 === 0 ? "md:col-start-1" : "md:col-start-2"}>
                    <GlassCard className="p-6 md:p-8 relative overflow-hidden group hover:bg-white/5 transition-all border-white/10">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                        <div
                          className={`flex flex-col gap-2 ${
                            idx % 2 === 0 ? "md:items-end" : "md:items-start"
                          }`}
                        >
                          <h3 className="text-xl md:text-2xl font-semibold text-white group-hover:text-primary transition-colors">
                            {exp.role}
                          </h3>

                          <div className="flex items-center gap-2 text-primary font-medium text-sm">
                            <Icon size={15} />
                            <span>{exp.company}</span>
                          </div>
                        </div>

                        <div className="text-xs font-mono text-muted-foreground/70 border border-white/10 px-3 py-1 rounded bg-black/30 flex items-center gap-2 whitespace-nowrap self-start">
                          <Calendar size={12} />
                          {exp.period}
                        </div>
                      </div>

                      <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                        {exp.description}
                      </p>

                      <div
                        className={`flex flex-wrap gap-2 ${
                          idx % 2 === 0
                            ? "md:justify-end"
                            : "md:justify-start"
                        }`}
                      >
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-full bg-primary/10 text-primary border border-primary/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </GlassCard>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
