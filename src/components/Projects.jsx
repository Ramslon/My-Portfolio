import { motion } from "framer-motion";

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
    link: "https://github.com/Ramslon/My-Portfolio"
    }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-white dark:bg-gray-900">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Projects</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {projectsData.map((project, index) => (
  <motion.a
    key={index}
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.98 }}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition block"
  >
    <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
      {project.title}
    </h3>

    <p className="text-gray-600 dark:text-gray-300">
      {project.description}
    </p>
  </motion.a>
))}
      </div>
    </section>
  );
};

export default Projects;