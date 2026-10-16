import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-8 px-6 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          © {new Date().getFullYear()} Ramson Lunayo. All rights reserved.
        </p>
        <a href="#top" className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
          Back to top ↑
        </a>
      </div>
    </motion.footer>
  );
};

export default Footer;
