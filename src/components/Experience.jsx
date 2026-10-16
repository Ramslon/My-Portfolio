import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 md:px-8 bg-gray-50 dark:bg-gray-900 scroll-mt-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 mb-3">Professional journey</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Experience</h2>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/70 p-7 md:p-10 shadow-lg shadow-gray-900/5"
        >
          <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-blue-500 to-purple-500" />
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-7">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">ICT attachment</p>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">ICT Attaché</h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">Ministry of Health · Nairobi</p>
            </div>
            <span className="shrink-0 self-start rounded-full bg-blue-100 dark:bg-blue-950/60 px-4 py-2 text-sm font-semibold text-blue-700 dark:text-blue-300">
              May 2025 – July 2025
            </span>
          </div>

          <ul className="space-y-4 text-gray-700 dark:text-gray-300">
            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-500" aria-hidden="true" />
              <span>Collaborated with cross-functional teams to develop and implement digital health solutions, improving healthcare delivery and patient outcomes.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-500" aria-hidden="true" />
              <span>Assisted in the design and development of a mobile application for health data collection, resulting in a 30% increase in data accuracy and efficiency.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-500" aria-hidden="true" />
              <span>Assisted with system troubleshooting and network configuration, supported internal ICT infrastructure, and improved documentation processes.</span>
            </li>
          </ul>
        </motion.article>
      </div>
    </section>
  );
};

export default Experience;
