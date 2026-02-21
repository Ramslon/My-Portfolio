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
         >
        <h2 className="text-4xl font-bold mb-6 text-center text-gray-900 dark:text-white">About Me</h2>
        <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto text-center leading-relaxed">
          I'm Ramson, a passionate Software Engineering Student at Kirinyaga University . 
          I enjoy building modern web and mobile applications using React, Flutter, and Node.js. 
          I love creating innovative solutions and continuously learning new technologies.
          I have experience in building projects for fitness apps, Commontable AI-app , ClimateSync AI app
        and other web solutions.
        </p>
        </motion.div>
    </section>
  );
};

export default About;
