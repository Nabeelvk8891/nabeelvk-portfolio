"use client";

import { motion } from "framer-motion";
import GlassCard from "../ui/GlassCard";
import { Github, ArrowUpRight, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    title: "Panikkaran Job Portal",
    description:
      "Daily wages job platform connecting workers and employers. MERN stack with authentication, dashboards and deployment.",
    tags: ["React", "Node.js", "MongoDB", "Express", "AWS"],
    github: "https://github.com/nabeelvk8891",
    image:
      "https://res.cloudinary.com/donfeoqjx/image/upload/v1770983233/Screenshot_2026-02-09_104654_t8kueq.png",
  },
  {
    title: "Zeyora E-Commerce",
    description:
      "Modern MERN ecommerce platform with admin panel, authentication and optimized performance UI.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/nabeelvk8891",
    image:
      "https://res.cloudinary.com/donfeoqjx/image/upload/v1770983349/1_gqm0dc.jpg",
  },
  {
    title: "JBR Hijabs Landing",
    description:
      "Business landing page with modern UI, responsive design and performance optimization.",
    tags: ["Next.js", "Tailwind", "Responsive UI"],
    github: "https://github.com/nabeelvk8891",
    image:
      "https://res.cloudinary.com/donfeoqjx/image/upload/v1770983518/Screenshot_2026-02-13_172139_msstjn.png",
  },
];

export default function Projects() {
  const [preview, setPreview] = useState<string | null>(null);

  return (
    <section id="projects" className="py-32 relative">
      <div className="container px-6 mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured Projects
          </h2>

          <p className="text-muted-foreground max-w-xl mx-auto">
            Real-world applications built with modern full-stack tools,
            focusing on performance, clean UI and scalable architecture.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">

          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <GlassCard className="group h-full flex flex-col overflow-hidden border border-white/10 bg-black/40 rounded-3xl transition-all duration-500 will-change-transform hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)]">

                {/* IMAGE */}
                <div
                  className="relative h-56 w-full overflow-hidden cursor-pointer isolate"
                  onClick={() => setPreview(project.image)}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-105"
                  />

                  {/* Desktop Hover Buttons */}
                  <div className="hidden md:flex absolute inset-0 items-center justify-center gap-4 bg-black/60 backdrop-blur-md opacity-0 transition-opacity duration-500 group-hover:opacity-100">

                    <button
                      onClick={() => setPreview(project.image)}
                      className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-sm font-medium transition"
                    >
                      Preview
                    </button>

                    <a
                      href={project.github}
                      target="_blank"
                      className="flex items-center gap-2 px-5 py-2 rounded-xl border border-primary text-primary hover:bg-primary/10 transition"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6 flex flex-col flex-grow">

                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center justify-between">
                    {project.title}
                    <ArrowUpRight size={18} />
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  {/* TAGS */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-[10px] uppercase rounded-full bg-white/5 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* MOBILE BUTTONS */}
                  <div className="flex gap-3 md:hidden">
                    <button
                      onClick={() => setPreview(project.image)}
                      className="flex-1 py-2 text-sm rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
                    >
                      Preview
                    </button>

                    <a
                      href={project.github}
                      target="_blank"
                      className="flex-1 flex items-center justify-center gap-2 py-2 text-sm rounded-xl border border-primary text-primary hover:bg-primary/10 transition"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </div>

                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* PREVIEW MODAL */}
      {preview && (
        <div className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-xl flex items-center justify-center p-6">

          <button
            onClick={() => setPreview(null)}
            className="absolute top-6 right-6 text-white hover:text-primary transition"
          >
            <X size={32} />
          </button>

          <div className="relative w-full max-w-6xl h-[75vh]">
            <Image
              src={preview}
              alt="Preview"
              fill
              className="object-contain rounded-2xl"
            />
          </div>

        </div>
      )}
    </section>
  );
}
