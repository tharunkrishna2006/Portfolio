"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";
import aboutPhoto from "@/about-photo.jpeg";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center pt-20 overflow-hidden"
        >
            {/* Background Neon Glows */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[80px] -z-10 transform-gpu" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-[80px] -z-10 transform-gpu" />

            <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="order-2 md:order-1"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-block px-4 py-1.5 mb-6 border border-neon-cyan/30 rounded-full bg-neon-cyan/5 text-neon-cyan text-sm font-medium tracking-wide"
                    >
                        Available for new projects
                    </motion.div>
                    <motion.h1
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
                        }}
                        className="text-5xl md:text-7xl font-bold leading-tight mb-6"
                    >
                        <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="inline-block mr-3">Hi,</motion.span>
                        <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="inline-block mr-3">I'm</motion.span>
                        <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="inline-block">{personalInfo.name.split(" ")[0]}</motion.span>
                        <br />
                        <motion.span
                            variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}
                            transition={{ type: "spring", stiffness: 100 }}
                            className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple mt-2"
                        >
                            {personalInfo.title}
                        </motion.span>
                    </motion.h1>
                    <p className="text-xl text-gray-400 mb-10 max-w-lg leading-relaxed">
                        {personalInfo.subtitle}
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#projects"
                            className="group relative flex items-center gap-2 bg-neon-cyan text-dark-bg px-8 py-4 rounded-lg font-bold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-2">View Projects <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /></span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                        </a>
                        <a
                            href="#contact"
                            className="flex items-center gap-2 glass px-8 py-4 rounded-lg font-bold text-white hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] border border-white/10 hover:border-white/30 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            Contact Me
                        </a>
                    </div>
                </motion.div>

                {/* Image / Graphic */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="order-1 md:order-2 flex justify-center md:justify-end"
                >
                    <div className="relative w-72 h-72 md:w-[400px] md:h-[400px] group">
                        <motion.div
                            animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-0 bg-gradient-to-br from-neon-cyan to-neon-purple rounded-full blur-[50px] -z-10 group-hover:opacity-80 transition-opacity duration-500 transform-gpu will-change-transform"
                        />
                        <div className="relative w-full h-full rounded-full border-2 border-white/10 glass overflow-hidden flex items-center justify-center">
                            <Image src={aboutPhoto} alt={personalInfo.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" priority />
                        </div>

                        {/* Decorative elements */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute top-10 -left-10 glass p-4 rounded-2xl border border-white/10"
                        >
                            <div className="text-neon-cyan font-bold leading-none">{personalInfo.yearsOfExperience}+</div>
                            <div className="text-xs text-gray-400 mt-1">Years Exp.</div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
