import React from "react";
const Hero = () => {
  return (
    <section className="text-center py-32 bg-gray-50">
      <h1 className="text-5xl font-bold mb-4">Hi, I'm Ramson 👋 Welcome to My Portfolio</h1>
        <p className="text-xl text-gray-600 mb-6">I'm a passionate Software Engineering Student specializing in building exceptional digital experiences with web, React, and mobile applications (Dart and Flutter). Explore my projects and skills below!</p>
        <a 
        href="#projects" 
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-500 transition"
      >View My Work</a>
    </section>
  );
};

export default Hero;