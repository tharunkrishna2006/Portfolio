export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full border-t border-white/10 bg-dark-bg/80 backdrop-blur-sm py-12 mt-20 relative z-10">
            <div className="container mx-auto px-6 md:px-12 flex flex-col items-center justify-center text-center text-gray-500 text-sm">
                <p>&copy; {currentYear} Tharun Krishna D. All rights reserved.</p>
            </div>
        </footer>
    );
}
