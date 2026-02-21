import { FaGithub, FaLinkedin  } from "react-icons/fa";

const Contact = () => {
  return (
  <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-800 text-center scroll-mt-24">
    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">Contact Me</h2>
    <p className="mb-6 text-gray-700 dark:text-gray-300">
            Let’s build something amazing together 🚀
        </p>
        <div className="flex justify-center gap-6 text-2xl">
            <a href="https://www.linkedin.com/in/ramson-lonayo-9b5a3221b/" className="text-blue-600 hover:underline transition-all duration-300"><FaLinkedin /></a>
            <a href="https://github.com/Ramslon" className="text-blue-600 hover:underline transition-all duration-300"><FaGithub /></a>
        </div>
    </section>
  );
}

export default Contact;