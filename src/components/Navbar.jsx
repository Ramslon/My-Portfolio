import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Navbar = () => {
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
        <div className="space-x-6 hidden md:block text-gray-800 dark:text-gray-100">
          <a href="#about" className="hover:text-blue-600 transition-all duration-300">About</a>
          <a href="#skills" className="hover:text-blue-600 transition-all duration-300">Skills</a>
          <a href="#projects" className="hover:text-blue-600 transition-all duration-300">Projects</a>
          <a href="#contact" className="hover:text-blue-600 transition-all duration-300">Contact</a>
        </div>

        <button
          onClick={() => setDark((prev) => !prev)}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-800 dark:text-white rounded-lg transition-all duration-300"
        >
          {dark ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;