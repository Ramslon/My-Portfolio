import { motion } from "framer-motion";
import { useMemo, useState } from "react";

const filterOptions = ["All", "Web", "Mobile", "Full Stack"];

const projectsData = [
    {
    title: 'Fitness Aura Athletix',
    description: 'A Flutter app for tracking workouts and fitness progress.',
    tech: ['Flutter', 'Dart', 'Firebase'],
    category: 'Mobile',
    impact: 'Improved workout tracking efficiency by 40% during beta testing.',
    link: 'https://github.com/Ramslon/Fitness-Aura-Athletix-App' 
    },

    {
    title: 'Commontable AI-app',
    description: 'A Flutter app  that uses AI to generate personalized meal plans, track nutrition, provide fitness recommendations and also budget friendly meals.',
    tech: ['Flutter', 'Dart', 'AI'],
    category: 'Mobile',
    impact: 'Over 100 users engaged with the app during beta testing enable them to plan their meals effectively.',
    link: 'https://github.com/Ramslon/My-CommonTable-AI-Mobile-App'
    },

    {
    title: 'ClimateSync AI app',
    description: 'A Web app that uses AI to provide real-time climate data, personalized weather forecasts, and actionable insights for sustainable living.',
    tech: ['JavaScript', 'Python', 'AI'],
    category: 'Full Stack',
    impact: 'Over 200 users engaged with the app during beta testing, enabling them to make informed decisions about their environmental impact.',
    link: 'https://github.com/Ramslon/ClimateSync-AI-App'
    },

    {
    title: 'Personal Portfolio Website',
    description: 'A React-based portfolio website built with Tailwind CSS showcasing my projects, skills, and experience.',
    tech: ['React', 'Tailwind CSS'],
    category: 'Web',
    impact: 'Showcased my projects, skills, and experience to potential employers and clients.',
    link: 'https://github.com/Ramslon/My-Portfolio'
    }
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projectsData;
    return projectsData.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="py-20 px-6 bg-white dark:bg-gray-900 scroll-mt-24">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900 dark:text-white">Projects</h2>

      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {filterOptions.map((option) => (
          <button
            key={option}
            onClick={() => setActiveFilter(option)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
              activeFilter === option
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white/70 dark:bg-gray-800/70 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600 hover:border-blue-600"
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {filteredProjects.map((project, index) => (
  <motion.a
    key={project.title}
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.98 }}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.05 }}
    className="p-6 backdrop-blur-lg bg-white/10 dark:bg-black/30 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 block"
  >
    <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
      {project.title}
    </h3>

    <p className="text-gray-600 dark:text-gray-300">
      {project.description}
    </p>

    <p className="mt-4 text-sm text-blue-600 dark:text-blue-400 font-medium">
      Category: {project.category}
    </p>

    <p className ="mt-4 text-sm text-gray-500 dark:text-gray-400">
      Tech: {project.tech.join(", ")}
    </p>

    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
       {project.impact}
    </p>
  </motion.a>
))}
      </div>
    </section>
  );
};

export default Projects;