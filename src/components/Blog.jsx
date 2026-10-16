import { motion } from "framer-motion";

const blogPosts = [
  {
    title: "How I Built a Fitness Tracking App in Flutter",
    summary:
      "A practical breakdown of planning, UI building, and Firebase integration while creating a workout-tracking mobile app.",
  },
  {
    title: "Deploying React Apps with Vercel",
    summary:
      "A simple step-by-step approach to deploying React projects with environment variables, build settings, and smooth updates.",
  },
  {
    title: "Lessons from My ICT Attachment",
    summary:
      "Key lessons from hands-on ICT support work, teamwork, and real-world problem solving at the Ministry of Health.",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 px-4 sm:px-6 bg-white dark:bg-gray-900 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 mb-3">Notes &amp; insights</p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Blog</h2>
      </motion.div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <motion.article
            key={post.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-2xl p-6 md:p-7 bg-gradient-to-br from-white to-blue-50/70 dark:from-gray-800 dark:to-gray-800/60 border border-gray-200/80 dark:border-gray-700 shadow-sm hover:shadow-xl hover:shadow-blue-950/10 transition-shadow duration-300"
          >
            <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-950/60 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-300 mb-5">
              Article 0{index + 1}
            </span>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
              {post.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{post.summary}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Blog;