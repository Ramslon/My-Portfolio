import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin  } from "react-icons/fa";

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
  <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-800 text-center scroll-mt-24">
    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">Contact Me</h2>
    <p className="mb-6 text-gray-700 dark:text-gray-300">
            Let’s build something amazing together 🚀
        </p>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto mb-8 p-6 md:p-8 backdrop-blur-lg bg-white/10 dark:bg-black/30 rounded-2xl transition-all duration-300"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-3 bg-white/80 dark:bg-gray-900/70 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            />
            <input
              type="email"
              name="reply_to"
              placeholder="Your Email"
              required
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-3 bg-white/80 dark:bg-gray-900/70 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            />
          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={5}
            className="mt-4 w-full rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-3 bg-white/80 dark:bg-gray-900/70 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          />

          <button
            type="submit"
            disabled={isSending}
            className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300"
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>

          {statusMessage && (
            <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">{statusMessage}</p>
          )}
        </form>

        <div className="flex justify-center gap-6 text-2xl">
            <a href="https://www.linkedin.com/in/ramson-lonayo-9b5a3221b/" className="text-blue-600 hover:underline transition-all duration-300"><FaLinkedin /></a>
            <a href="https://github.com/Ramslon" className="text-blue-600 hover:underline transition-all duration-300"><FaGithub /></a>
        </div>
    </section>
  );
}

export default Contact;