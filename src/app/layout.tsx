import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "THARUN KRISHNA",
  description: "Futuristic Next.js portfolio with a deep dark theme and neon accents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="animated-gradient-bg antialiased min-h-screen flex flex-col selection:bg-neon-cyan selection:text-dark-bg text-white relative">
        {/* Global Grain Overlay */}
        <div className="fixed inset-0 bg-grain z-50 pointer-events-none opacity-20"></div>

        <main className="flex-grow z-10 relative">
          {children}
        </main>
      </body>
    </html>
  );
}
