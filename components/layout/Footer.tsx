"use client";

import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full py-8 mt-20 border-t border-white/5 bg-black/20 backdrop-blur-sm">
            <div className="container px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6 mx-auto max-w-6xl">

                <div className="text-center md:text-left">
                    <h3 className="text-lg font-bold text-white">Muhammed Nabeel vk</h3>
                 
                    <p className="text-sm text-muted-foreground mt-2">
                        Building digital experiences that defy gravity.
                    </p>
                </div>

                <div className="flex gap-6">
                    <Link href="https://github.com/nabeelvk8891" className="text-muted-foreground hover:text-primary transition-colors">
                        <Github size={20} />
                        <span className="sr-only">GitHub</span>
                    </Link>
                    <Link href="https://www.linkedin.com/in/muhammed-nabeel-vk/" className="text-muted-foreground hover:text-primary transition-colors">
                        <Linkedin size={20} />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                 
                    <Link href="mailto:nabeelvk2006@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                        <Mail size={20} />
                        <span className="sr-only">Email</span>
                    </Link>
                </div>

                <div className="text-xs text-muted-foreground text-center md:text-right">
                    <p>&copy; {currentYear}Muhammed Nabeel vk. All rights reserved.</p>
                    <p>Designed & Built with Next.js</p>
                </div>
            </div>
        </footer>
    );
}
