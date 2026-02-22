import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "../utils/Animations";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-20 bg-white dark:bg-gray-900 scroll-mt-24">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="backdrop-blur-lg bg-white/10 dark:bg-black/30 rounded-2xl transition-all duration-300 p-6 md:p-10"
         >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-gray-900 dark:text-white">About Me</h2>
        <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-center text-gray-800 dark:text-gray-100">
          I am a Software Engineering Student at Kirinyaga University passionate about building modern web and mobile applications using<span className="text-blue-600"> React, Flutter, Python and Node.js</span>. I love creating innovative solutions and continuously learning new technologies.
        </h1>
        <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto text-center leading-relaxed">
          I build scalable web and mobile applications with clean architecture,
          modern UI, and real-world impact.
        </p>
        </motion.div>
    </section>
  );
};

export default About;
