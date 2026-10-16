import { motion } from "framer-motion";

const coursework = [
  "Data Structures & Algorithms",
  "Software Development",
  "Database Systems",
  "Mobile App Development",
  "Web Development",
  "Software Testing & QA",
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 bg-gray-100 dark:bg-gray-800 scroll-mt-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 mb-3">Learning journey</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Education</h2>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-white/70 dark:border-gray-700 bg-white/80 dark:bg-gray-900/60 p-7 md:p-10 shadow-lg shadow-gray-900/5"
        >
          <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-blue-500 to-purple-500" />
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-7">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">Bachelor&apos;s degree</p>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                Bachelor of Science in Software Engineering
              </h3>
              <p className="mt-2 text-lg text-gray-700 dark:text-gray-300">Kirinyaga University</p>
            </div>
            <span className="shrink-0 self-start rounded-full bg-blue-100 dark:bg-blue-950/60 px-4 py-2 text-sm font-semibold text-blue-700 dark:text-blue-300">
              2023 – Present
            </span>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">Relevant coursework</h4>
            <div className="flex flex-wrap gap-2">
              {coursework.map((course) => (
                <span
                  key={course}
                  className="rounded-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-3 py-2 text-sm text-gray-700 dark:text-gray-300"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
};

export default Education;