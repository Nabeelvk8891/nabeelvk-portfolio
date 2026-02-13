"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import NeonButton from "../ui/NeonButton";
import { Mail, Send, MessageCircle } from "lucide-react";
import GlassCard from "../ui/GlassCard";
import ContactModal from "../ui/ContactModal";

export default function Contact() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id="contact" className="py-32 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/20 rounded-full blur-[150px] pointer-events-none opacity-20" />

            <div className="container px-6 mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto"
                >
                    <GlassCard className="p-12 md:p-16 border-primary/20 bg-black/40 backdrop-blur-xl rounded-[3rem]">
                        <div className="inline-block p-4 rounded-full bg-white/5 mb-8 animate-float">
                            <Mail size={40} className="text-primary" />
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 tracking-tight">
                            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Collab?</span>
                        </h2>

                        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
                            Whether you have a groundbreaking idea or just want to discuss the future of tech, my inbox is always open.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <NeonButton
                                onClick={() => setIsModalOpen(true)}
                                icon={<Send size={20} />}
                                className="px-10 py-4 text-base font-bold tracking-wide w-full sm:w-auto"
                            >
                                Say Hello
                            </NeonButton>

                            <a
                                href="https://wa.me/918891329097"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 hover:bg-[#25D366]/20 transition-all font-bold tracking-wide w-full sm:w-auto justify-center hover:scale-105 active:scale-95 duration-300"
                            >
                                <MessageCircle size={20} />
                                Chat on WhatsApp
                            </a>
                        </div>

                        <div className="mt-12 text-sm text-muted-foreground">
                            or email directly at <a href="mailto:nabeelvk2006@gmail.com" className="text-white hover:text-primary transition-colors underline decoration-white/20 underline-offset-4">nabeelvk2006@gmail.com</a>
                        </div>
                    </GlassCard>
                </motion.div>
            </div>

            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
}
