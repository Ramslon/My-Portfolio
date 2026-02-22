const interestsData = [
    {
        title: "Nature & Photography",
        description:
            "Beyond coding, I enjoy exploring the outdoors, hiking, and capturing moments through photography to stay inspired and creatively refreshed.",
    },
    {
        title: "Mobile App Development",
        description:
            "I am fascinated by how mobile apps transform daily life, and I enjoy building intuitive and engaging experiences with Flutter.",
    },
    {
        title: "Web Development",
        description:
            "I love creating modern React web applications with responsive, user-friendly interfaces that feel seamless across devices.",
    },
    {
        title: "UI/UX Design",
        description:
            "I focus on crafting clean, visually appealing, and intuitive experiences that improve usability and product clarity.",
    },
    {
        title: "Fitness & Discipline",
        description:
            "Regular fitness routines keep me disciplined and balanced, and that mindset carries directly into consistent, high-quality software work.",
    },
];

const Interests = () => {
    return (
        <section id="interests" className="py-16 px-4 md:px-8 lg:px-16 bg-gray-100 dark:bg-gray-800 scroll-mt-24">
            <h2 className="text-4xl md:text-5xl font-bold mb-10 text-gray-900 dark:text-white">Interests</h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {interestsData.map((interest) => (
                    <article
                        key={interest.title}
                        className="rounded-2xl p-6 bg-white/70 dark:bg-gray-900/60 border border-white/40 dark:border-gray-700/60 backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-300"
                    >
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{interest.title}</h3>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{interest.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Interests;