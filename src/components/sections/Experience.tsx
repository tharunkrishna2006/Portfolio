"use client";

import { motion } from "framer-motion";
import { experience } from "@/data";
import Section from "@/components/layout/Section";

export default function Experience() {
    return (
        <Section id="experience" title="Experience" subtitle="My professional journey and career highlights.">
            <div className="relative max-w-4xl mx-auto">
                {/* Vertical Glowing Timeline Line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-neon-cyan via-neon-purple/50 to-transparent transform md:-translate-x-1/2 z-0 shadow-[0_0_15px_rgba(0,240,255,0.4)]" />

                <div className="space-y-12">
                    {experience.map((exp, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, x: isEven ? 50 : -50, y: 20 }}
                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                                className={`relative flex flex-col md:flex-row items-center justify-between z-10 ${isEven ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Timeline Node */}
                                <div className="absolute left-[-5px] md:left-1/2 w-3 h-3 bg-neon-cyan rounded-full border-4 border-dark-bg transform md:-translate-x-1/2 mt-6 md:mt-0 shadow-[0_0_10px_rgba(0,240,255,0.8)]" />

                                {/* Content Card */}
                                <div className={`w-full md:w-[45%] pl-8 md:pl-0 ${isEven ? "md:pr-12 md:text-right" : "md:pl-12 text-left"}`}>
                                    <div className="glass p-8 rounded-2xl hover:border-neon-cyan/50 transition-colors duration-300 group">
                                        <span className="text-neon-cyan font-mono text-sm tracking-widest uppercase mb-2 block">
                                            {exp.duration}
                                        </span>
                                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-neon-cyan transition-colors">
                                            {exp.role}
                                        </h3>
                                        <h4 className="text-lg text-gray-400 mb-6 font-medium">
                                            {exp.company}
                                        </h4>

                                        <ul className={`space-y-3 text-gray-400 ${isEven ? "md:mr-0 md:ml-auto" : ""} text-left`}>
                                            {exp.description.map((item, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <span className="text-neon-cyan mt-1.5">•</span>
                                                    <span className="leading-relaxed">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </Section>
    );
}
