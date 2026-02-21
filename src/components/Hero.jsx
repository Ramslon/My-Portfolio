import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen py-20 flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-50 to-purple-100 dark:from-gray-900 dark:to-gray-800 pt-20">
    
      <motion.h1 
       initial={{ opacity: 0, y: 40 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.8}}
      className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white"
      >
        Hi, I'm <span className="text-blue-600">Ramson Lunayo</span>👋 Welcome to My Portfolio</motion.h1>

        <motion.p 
        initial={{ opacity: 0}}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4}}
        className="text-lg text-gray-700 dark:text-gray-300 max-w-xl mb-8"
        >
            I'm a passionate Software Engineering Student specializing in building exceptional digital experiences with web, React, and mobile applications (Dart and Flutter). Explore my projects and skills below!
        </motion.p>
        <motion.div
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{ delay: 0.6}}
        className="flex gap-4"
        >

        <a href="#projects" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-500 transition-all duration-300">
            View Projects
        </a>
        <a href="/cv.pdf" download className="px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300">
            Download CV
        </a>
        </motion.div>
    </section>
  );
};

export default Hero;