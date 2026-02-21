import { motion } from "framer-motion";

const skills = [
  { name: "React", level: 85 },
  { name: "Flutter", level: 80 },
  { name: "Node.js", level: 75 },
  { name: "Firebase", level: 78 },
];

export default function Skills() {
  return (
    <section className="py-20 px-8 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl font-bold mb-10 text-gray-900 dark:text-white">Skills</h2>

      {skills.map((skill, index) => (
        <div key={index} className="mb-6">
          <div className="flex justify-between mb-2">
            <span className="text-gray-800 dark:text-gray-100">{skill.name}</span>
            <span className="text-gray-700 dark:text-gray-300">{skill.level}%</span>
          </div>

          <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-3">
            <motion.div
              className="bg-blue-600 h-3 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />
          </div>
        </div>
      ))}
    </section>
  );
}