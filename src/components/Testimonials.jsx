import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Ramson consistently showed initiative in ICT support and system troubleshooting, and quickly adapted to new responsibilities with professionalism.",
    name: "ICT Supervisor",
    role: "Ministry of Health ICT Department",
  },
  {
    quote:
      "He demonstrates strong problem-solving skills and a practical understanding of software engineering concepts in both coursework and project work.",
    name: "Lecturer",
    role: "Kirinyaga University",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 bg-gray-50 dark:bg-gray-900 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 mb-3">Kind words</p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Testimonials</h2>
      </motion.div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {testimonials.map((item, index) => (
          <motion.article
            key={item.role}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="relative rounded-2xl p-7 md:p-8 bg-white dark:bg-gray-800/70 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-xl hover:shadow-blue-950/10 transition-shadow duration-300"
          >
            <span className="block text-5xl leading-none font-serif text-blue-200 dark:text-blue-900 mb-3" aria-hidden="true">“</span>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">{item.quote}</p>
            <div className="mt-6 border-t border-gray-100 dark:border-gray-700 pt-4">
              <p className="font-semibold text-gray-900 dark:text-white">{item.name}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.role}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;