import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionProps {
    id: string;
    title?: string;
    subtitle?: string;
    children: ReactNode;
    className?: string;
}

export default function Section({
    id,
    title,
    subtitle,
    children,
    className = "",
}: SectionProps) {
    return (
        <section id={id} className={`py-12 md:py-20 ${className}`}>
            <div className="container mx-auto px-6 md:px-12">
                {(title || subtitle) && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5 }}
                        className="mb-16 md:mb-24"
                    >
                        {title && (
                            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
                                {title}<span className="text-neon-cyan">.</span>
                            </h2>
                        )}
                        {subtitle && (
                            <p className="text-gray-400 text-lg md:text-xl max-w-2xl">
                                {subtitle}
                            </p>
                        )}
                    </motion.div>
                )}
                {children}
            </div>
        </section>
    );
}
