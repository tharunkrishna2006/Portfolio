"use client";

import { motion } from "framer-motion";
import { projects } from "@/data";
import Section from "@/components/layout/Section";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

export default function Projects() {
    return (
        <Section id="projects" title="Featured Projects" subtitle="A selection of my recent work.">
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -5, scale: 1.02 }}
                        className="glass rounded-2xl overflow-hidden group flex flex-col border border-white/10 hover:border-neon-cyan/50 hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] transition-all duration-300"
                    >
                        {/* Image Placeholder */}
                        <div className="relative h-64 overflow-hidden bg-dark-bg">
                            <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue/40 to-neon-purple/20 group-hover:opacity-50 transition-opacity duration-500 z-10" />

                            {project.image ? (
                                <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                            ) : (
                                <div className="w-full h-full bg-dark-surface flex items-center justify-center relative z-0 transform group-hover:scale-110 transition-transform duration-700">
                                    <span className="text-gray-600 tracking-widest uppercase">Project Image {project.id}</span>
                                </div>
                            )}
                        </div>

                        {/* Content */}
                        <div className="p-8 flex flex-col flex-grow relative">
                            <div className="absolute top-0 right-8 transform -translate-y-1/2 glass border-neon-cyan/20 px-4 py-1 rounded-full">
                                <span className="text-neon-cyan text-xs font-mono font-bold">0{project.id}</span>
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                                {project.description}
                            </p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="flex gap-4 mt-auto">
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm font-medium hover:text-neon-cyan transition-colors"
                                >
                                    <ExternalLink size={16} /> Live Demo
                                </a>
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm font-medium hover:text-white transition-colors"
                                >
                                    <Github size={16} /> Repository
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
