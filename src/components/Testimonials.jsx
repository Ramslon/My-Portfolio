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
    <section id="testimonials" className="py-20 px-6 bg-gray-50 dark:bg-gray-900 scroll-mt-24">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white">Testimonials</h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {testimonials.map((item, index) => (
          <motion.article
            key={item.role}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-2xl p-6 backdrop-blur-lg bg-white/70 dark:bg-black/30 border border-white/40 dark:border-gray-700/50 shadow-sm"
          >
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">“{item.quote}”</p>
            <div className="mt-4">
              <p className="font-semibold text-gray-900 dark:text-white">{item.name}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{item.role}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;