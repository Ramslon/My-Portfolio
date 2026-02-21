import React from "react";

const projectsData = [
    {
    title: 'Fitness Aura Athletix',
    description: 'A Flutter app for tracking workouts and fitness progress.',
    link: '#'
    },

    {
    title: 'Commontable AI-app',
    description: 'A Flutter app  that uses AI to generate personalized meal plans, track nutrition, provide fitness recommendations and also budget friendly meals.',
    link: 'https://github.com/Ramslon/My-CommonTable-AI-Mobile-App'
    },

    {
    title: 'ClimateSync AI app',
    description: 'A Flutter app that uses AI to provide real-time climate data, personalized weather forecasts, and actionable insights for sustainable living.',
    link: 'https://github.com/Ramslon/ClimateSync-AI-App'
    },

    {
    title: 'Personal Portfolio Website',
    description: 'A React-based portfolio website built with Tailwind CSS showcasing my projects, skills, and experience.',
    link: 'https://github.com/Ramslon/My-Portfolio'
    }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 md:px-20 bg-gray-50">
        <h2 className="text-4xl font-bold mb-10 text-center">My Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
                <div key={index} className="bg-white shadow-md p-6 rounded hover:scale-105 transform transition">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <a href={project.link} className="text-blue-600 hover:underline">View Project</a>
          </div>
        ))}
        </div>
    </section>
  );
};

export default Projects;
