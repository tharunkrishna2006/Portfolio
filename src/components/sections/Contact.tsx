"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Mail, Phone } from "lucide-react";
import { personalInfo, socialLinks } from "@/data";
import Section from "@/components/layout/Section";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                alert("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            } else {
                alert("Failed to send message. Please ensure your .env.local file is configured correctly.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("An error occurred. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Section id="contact" title="Get In Touch" subtitle="Have a project in mind or just want to say hi? Let's connect.">
            <div className="grid lg:grid-cols-5 gap-12">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                    className="lg:col-span-2 space-y-8"
                >
                    <div className="glass p-8 rounded-2xl">
                        <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-neon-cyan/10 text-neon-cyan shrink-0">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium text-gray-400 mb-1">Email</h4>
                                    <a href={`mailto:${personalInfo.email}`} className="text-white hover:text-neon-cyan transition-colors">
                                        {personalInfo.email}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-neon-purple/10 text-neon-purple shrink-0">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium text-gray-400 mb-1">Location</h4>
                                    <p className="text-white">Coimbatore, Tamil Nadu</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="glass p-8 rounded-2xl mt-8">
                        <h3 className="text-2xl font-bold text-white mb-6">Connect</h3>
                        <div className="flex flex-wrap gap-6">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.name}
                                        className="text-gray-400 hover:text-neon-cyan hover:-translate-y-1 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(0,240,255,0.8)] transition-all duration-300"
                                    >
                                        <Icon size={28} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="lg:col-span-3"
                >
                    <form onSubmit={handleSubmit} className="glass p-8 rounded-2xl">
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2 transition-colors duration-300">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    onFocus={(e) => e.target.previousElementSibling?.classList.add('text-neon-cyan')}
                                    onBlur={(e) => e.target.previousElementSibling?.classList.remove('text-neon-cyan')}
                                    className="w-full bg-dark-bg/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all duration-300"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2 transition-colors duration-300">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    onFocus={(e) => e.target.previousElementSibling?.classList.add('text-neon-cyan')}
                                    onBlur={(e) => e.target.previousElementSibling?.classList.remove('text-neon-cyan')}
                                    className="w-full bg-dark-bg/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all duration-300"
                                    placeholder="Enter your email"
                                />
                            </div>
                        </div>

                        <div className="mb-8">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2 transition-colors duration-300">
                                Your Message
                            </label>
                            <textarea
                                id="message"
                                required
                                rows={5}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                onFocus={(e) => e.target.previousElementSibling?.classList.add('text-neon-cyan')}
                                onBlur={(e) => e.target.previousElementSibling?.classList.remove('text-neon-cyan')}
                                className="w-full bg-dark-bg/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all duration-300 resize-none"
                                placeholder="How can I help you?"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="group relative flex items-center justify-center gap-2 w-full md:w-auto bg-neon-cyan text-dark-bg px-8 py-4 rounded-lg font-bold hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? (
                                <span className="flex items-center gap-2">
                                    <div className="w-5 h-5 border-2 border-dark-bg border-t-transparent rounded-full animate-spin" />
                                    Sending...
                                </span>
                            ) : (
                                <span className="flex items-center gap-2">
                                    Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </span>
                            )}
                        </button>
                    </form>
                </motion.div>
            </div>
        </Section>
    );
}
