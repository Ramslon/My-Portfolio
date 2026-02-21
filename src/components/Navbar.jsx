import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex justify-between items-center px-8 py-4 backdrop-blur-md bg-white/70 shadow-sm fixed w-full z-50"
    >
      <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Ramson.dev
      </h1>

      <div className="space-x-6 hidden md:block">
        <a href="#about" className="hover:text-blue-600">About</a>
        <a href="#projects" className="hover:text-blue-600">Projects</a>
        <a href="#contact" className="hover:text-blue-600">Contact</a>
      </div>
    </motion.nav>
  );
};

export default Navbar;