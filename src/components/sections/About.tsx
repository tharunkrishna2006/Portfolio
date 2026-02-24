"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data";
import Section from "@/components/layout/Section";
import { Download } from "lucide-react";
import Image from "next/image";
import aboutPhoto from "@/about-photo.jpeg";

export default function About() {
    return (
        <Section id="about" title="About Me" subtitle="A brief introduction to who I am and what I do.">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
                }}
                className="glass p-8 md:p-12 rounded-3xl grid md:grid-cols-2 gap-12 items-center"
            >
                {/* Left Side: Photo/Visual */}
                <motion.div
                    variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}
                    className="relative"
                >
                    <motion.div
                        animate={{ y: [-10, 10, -10] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="aspect-square max-w-md mx-auto relative rounded-2xl overflow-hidden glass group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent z-10" />
                        <Image src={aboutPhoto} alt="About Tharun" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                    </motion.div>

                    {/* Decorative outline offset */}
                    <motion.div
                        animate={{ y: [-5, 15, -5] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute inset-0 border border-neon-cyan/20 rounded-2xl max-w-md mx-auto translate-x-4 translate-y-4 -z-10"
                    />
                </motion.div>

                {/* Right Side: Content */}
                <div className="space-y-6">
                    <motion.div variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }} className="space-y-6 text-gray-300 leading-relaxed text-lg">
                        {personalInfo.bio.split("\n\n").map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </motion.div>

                    <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} className="mt-10 grid grid-cols-2 gap-6">
                        <div>
                            <h4 className="text-white font-bold text-xl mb-1">Name</h4>
                            <p className="text-gray-400">{personalInfo.name}</p>
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-xl mb-1">Email</h4>
                            <p className="text-gray-400 truncate">
                                <a href={`mailto:${personalInfo.email}`} className="hover:text-neon-cyan transition-colors">
                                    {personalInfo.email}
                                </a>
                            </p>
                        </div>
                    </motion.div>

                    <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} className="mt-10">
                        <a
                            href="/resume.pdf" // Placeholder path for resume
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 glass border-neon-cyan/50 px-8 py-4 rounded-lg font-bold text-neon-cyan hover:bg-neon-cyan hover:text-dark-bg hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300"
                        >
                            <Download size={20} /> Download Resume
                        </a>
                    </motion.div>
                </div>
            </motion.div>
        </Section>
    );
}
