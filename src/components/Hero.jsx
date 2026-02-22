import { motion } from "framer-motion";
import profileImage from "../assets/profile.jpg";
import { FaGithub, FaLinkedin, FaReact } from "react-icons/fa";
import { SiFlutter, SiFirebase, SiTailwindcss } from "react-icons/si";

const SOCIAL_LINKS = {
  github: "https://github.com/Ramslon",
  linkedin: "https://www.linkedin.com/",
};

const FLOATING_ICONS = [
  { icon: FaReact, className: "-top-4 left-8 text-cyan-500" },
  { icon: SiFlutter, className: "top-10 -right-4 text-blue-500" },
  { icon: SiFirebase, className: "-bottom-3 left-10 text-amber-500" },
  { icon: SiTailwindcss, className: "bottom-10 -right-5 text-sky-500" },
];

const Hero = () => {
  return (
    <section className="min-h-screen py-20 bg-gradient-to-br from-blue-50 to-purple-100 dark:from-gray-900 dark:to-gray-800 pt-20">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white"
          >
            Hi, I'm <span className="text-blue-600">Ramson Lunayo</span>👋 Welcome to My Portfolio
          </motion.h1>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="flex-1">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-gray-700 dark:text-gray-300 max-w-xl mb-8 mx-auto lg:mx-0"
              >
                I'm a passionate Software Engineering Student specializing in building exceptional digital experiences with web, React, and mobile applications (Dart and Flutter). Explore my projects and skills below!
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex gap-4 justify-center lg:justify-start"
              >
                <a href="#projects" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-500 transition-all duration-300">
                  View Projects
                </a>
                <a href="/cv.pdf" download className="px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300">
                  Download CV
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col items-center lg:items-end"
            >
              <div className="relative group">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/40 to-purple-500/40 blur-2xl scale-110" />

                {FLOATING_ICONS.map(({ icon: Icon, className }, index) => (
                  <motion.div
                    key={index}
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 2 + index * 0.4, repeat: Infinity, ease: "easeInOut" }}
                    className={`absolute ${className} w-10 h-10 rounded-full bg-white/70 dark:bg-gray-800/80 border border-white/40 backdrop-blur-md shadow-lg flex items-center justify-center`}
                  >
                    <Icon className="text-xl" />
                  </motion.div>
                ))}

                <motion.div
                  whileHover={{ scale: 1.04, rotate: 1 }}
                  transition={{ type: "spring", stiffness: 220, damping: 18 }}
                  className="relative p-3 rounded-3xl bg-white/20 dark:bg-white/10 border border-white/30 backdrop-blur-md shadow-xl"
                >
                  <img
                    src={profileImage}
                    alt="Ramson Lunayo profile"
                    className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-full border-4 border-blue-600 shadow-lg"
                  />
                </motion.div>
              </div>

              <div className="mt-5 flex items-center gap-4">
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="w-10 h-10 rounded-full bg-white/70 dark:bg-gray-800/80 border border-white/40 backdrop-blur-md shadow-md flex items-center justify-center text-blue-600 hover:scale-110 transition-transform duration-300"
                >
                  <FaLinkedin className="text-xl" />
                </a>
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="w-10 h-10 rounded-full bg-white/70 dark:bg-gray-800/80 border border-white/40 backdrop-blur-md shadow-md flex items-center justify-center text-gray-900 dark:text-white hover:scale-110 transition-transform duration-300"
                >
                  <FaGithub className="text-xl" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;