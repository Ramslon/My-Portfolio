import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const formRef = useRef(null);
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatusMessage("Email service is not configured yet. Add your EmailJS env variables.");
      return;
    }

    setIsSending(true);
    setStatusMessage("");

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, { publicKey });
      setStatusMessage("Message sent successfully. I will get back to you soon!");
      formRef.current?.reset();
    } catch {
      setStatusMessage("Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden py-20 px-4 sm:px-6 bg-gray-100 dark:bg-gray-800 scroll-mt-24">
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" aria-hidden="true" />
      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 mb-3">Have a project in mind?</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Contact Me</h2>
          <p className="text-gray-700 dark:text-gray-300">Let’s build something amazing together 🚀</p>
        </motion.div>
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto p-6 md:p-9 bg-white dark:bg-gray-900/70 border border-gray-200 dark:border-gray-700 rounded-3xl shadow-xl shadow-gray-900/5"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <label className="text-left text-sm font-medium text-gray-700 dark:text-gray-300">
              Your name
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                className="mt-2 w-full rounded-xl border border-gray-300 dark:border-gray-700 px-4 py-3 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
            </label>
            <label className="text-left text-sm font-medium text-gray-700 dark:text-gray-300">
              Email address
              <input
                type="email"
                name="reply_to"
                placeholder="Your Email"
                required
                className="mt-2 w-full rounded-xl border border-gray-300 dark:border-gray-700 px-4 py-3 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
            </label>
          </div>

          <label className="block mt-4 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
            Message
            <textarea
              name="message"
              placeholder="Tell me a little about your project..."
              required
              rows={5}
              className="mt-2 w-full rounded-xl border border-gray-300 dark:border-gray-700 px-4 py-3 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            />
          </label>

          <button
            type="submit"
            disabled={isSending}
            className="mt-5 w-full md:w-auto px-7 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md shadow-blue-600/20 hover:bg-blue-500 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300"
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>

          {statusMessage && (
            <p role="status" className="mt-4 text-sm text-gray-700 dark:text-gray-300">{statusMessage}</p>
          )}
        </motion.form>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/ramson-lonayo-9b5a3221b/"
            aria-label="LinkedIn profile"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full flex items-center justify-center bg-white dark:bg-gray-900 text-blue-600 border border-gray-200 dark:border-gray-700 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300"
          >
            <FaLinkedin aria-hidden="true" />
          </a>
          <a
            href="https://github.com/Ramslon"
            aria-label="GitHub profile"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full flex items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300"
          >
            <FaGithub aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;