import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") return true;
    if (savedTheme === "light") return false;

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-between items-center px-8 py-4 backdrop-blur-md bg-white/70 dark:bg-gray-900/80 shadow-sm fixed w-full z-50"
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Ramson.dev
        </h1>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex flex-wrap gap-4 text-sm md:text-base text-gray-800 dark:text-gray-100">
            <a href="#about" className="hover:text-blue-600 transition-all duration-300">About</a>
            <a href="#skills" className="hover:text-blue-600 transition-all duration-300">Skills</a>
            <a href="#experience" className="hover:text-blue-600 transition-all duration-300">Experience</a>
            <a href="#projects" className="hover:text-blue-600 transition-all duration-300">Projects</a>
            <a href="#contact" className="hover:text-blue-600 transition-all duration-300">Contact</a>
          </div>

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden px-3 py-2 bg-gray-200 dark:bg-gray-800 dark:text-white rounded-lg transition-all duration-300"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          <button
            onClick={() => setDark((prev) => !prev)}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-800 dark:text-white rounded-lg transition-all duration-300"
          >
            {dark ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </motion.nav>
      {menuOpen && (
        <div className="md:hidden fixed top-20 left-0 right-0 z-40 px-8 pb-4">
          <div className="rounded-lg bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-sm p-4 flex flex-col gap-3 text-gray-800 dark:text-gray-100">
            <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-blue-600 transition-all duration-300">About</a>
            <a href="#skills" onClick={() => setMenuOpen(false)} className="hover:text-blue-600 transition-all duration-300">Skills</a>
            <a href="#experience" onClick={() => setMenuOpen(false)} className="hover:text-blue-600 transition-all duration-300">Experience</a>
            <a href="#projects" onClick={() => setMenuOpen(false)} className="hover:text-blue-600 transition-all duration-300">Projects</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-blue-600 transition-all duration-300">Contact</a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;