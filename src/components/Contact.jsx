import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 md:px-20 bg-white">
        <h2 className="text-4xl font-bold mb-6 text-center">Contact Me</h2>
        <p className="text-center text-gray-700 mb-6">
            You can reach me at <span className="font-semibold">ramsonlonayo@gmail.com</span>
        </p>
        <div className="flex justify-center gap-4">
            <a href="https://www.linkedin.com/in/ramson-lonayo-9b5a3221b/" className="text-blue-600 hover:underline">LinkedIn</a>
            <a href="https://github.com/Ramslon" className="text-blue-600 hover:underline">GitHub</a>
            <a href="mailto:ramsonlonayo@gmail.com" className="text-blue-600 hover:underline">Email</a>
        </div>
        </section>
  );
}

export default Contact;