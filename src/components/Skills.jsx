import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiFlutter, SiFirebase, SiDart, SiJavascript, SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "React",        level: 65, icon: FaReact,       color: "text-cyan-500"   },
  { name: "Flutter",      level: 80, icon: SiFlutter,     color: "text-blue-500"   },
  { name: "Node.js",      level: 70, icon: FaNodeJs,      color: "text-green-500"  },
  { name: "Firebase",     level: 78, icon: SiFirebase,    color: "text-amber-500"  },
  { name: "Python",       level: 60, icon: FaPython,      color: "text-yellow-500" },
  { name: "Dart",         level: 80, icon: SiDart,        color: "text-blue-400"   },
  { name: "JavaScript",   level: 72, icon: SiJavascript,  color: "text-yellow-400" },
  { name: "Tailwind CSS", level: 75, icon: SiTailwindcss, color: "text-sky-400"    },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 md:px-8 bg-gray-50 dark:bg-gray-900 scroll-mt-24">
      <h2 className="text-4xl md:text-5xl font-bold mb-10 text-gray-900 dark:text-white">Skills</h2>

      <div className="max-w-3xl mx-auto space-y-5">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              viewport={{ once: true }}
              className="backdrop-blur-lg bg-white/60 dark:bg-black/30 border border-white/40 dark:border-gray-700/50 rounded-2xl transition-all duration-300 p-5 hover:shadow-md"
            >
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-3">
                  <span className={`text-2xl ${skill.color}`}>
                    <Icon />
                  </span>
                  <span className="font-medium text-gray-800 dark:text-gray-100">{skill.name}</span>
                </div>
                <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">{skill.level}%</span>
              </div>

              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <motion.div
                  className="bg-blue-600 h-2.5 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.07 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}