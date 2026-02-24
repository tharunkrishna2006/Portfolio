"use client";

import { motion } from "framer-motion";
import { skills } from "@/data";
import Section from "@/components/layout/Section";

export default function Skills() {
    const categories = [
        { title: "Frontend", items: skills.frontend },
        { title: "Backend", items: skills.backend },
        { title: "Tools & Cloud", items: skills.tools },
    ];

    return (
        <Section id="skills" title="Skills" subtitle="Technologies and tools I work with daily.">
            <div className="grid md:grid-cols-3 gap-8">
                {categories.map((category, index) => (
                    <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="glass rounded-2xl p-8"
                    >
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="w-8 h-px bg-neon-cyan" />
                            {category.title}
                        </h3>

                        <div className="flex flex-wrap gap-3">
                            {category.items.map((skill, i) => (
                                <motion.div
                                    key={skill}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-dark-bg border border-white/5 hover:border-neon-cyan hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300 cursor-default text-gray-300 hover:text-white"
                                >
                                    <div className="w-1.5 h-1.5 rounded-full bg-neon-purple/50 group-hover:bg-neon-cyan animate-pulse transition-colors duration-300" />
                                    {skill}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
