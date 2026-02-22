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
    <section id="blog" className="py-20 px-6 bg-white dark:bg-gray-900 scroll-mt-24">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white">Blog</h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <motion.article
            key={post.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="rounded-2xl p-6 backdrop-blur-lg bg-white/70 dark:bg-black/30 border border-white/40 dark:border-gray-700/50 shadow-sm"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{post.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{post.summary}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Blog;