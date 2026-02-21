import { FaGithub, FaLinkedin  } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <p className="mb -6 text-gray-700 ">
            Let’s build something amazing together 🚀
        </p>
        <div className="flex justify-center gap-6 text-2xl">
            <a href="https://www.linkedin.com/in/ramson-lonayo-9b5a3221b/" className="text-blue-600 hover:underline "><FaLinkedin /></a>
            <a href="https://github.com/Ramslon" className="text-blue-600 hover:underline "><FaGithub /></a>
        </div>
    </section>
  );
}

export default Contact;