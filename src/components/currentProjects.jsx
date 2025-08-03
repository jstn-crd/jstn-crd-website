import React from "react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const currentProjects = [
    {
    name: "Eigene Domain und Implementation",
    description: "Diese Website – als laufendes Fullstack-Projekt in React & Tailwind.",
    progress: 100,
    link: "https://justinconrad.dev",
  },
  {
    name: "Portfolio Website",
    description: "Diese Website – als laufendes Fullstack-Projekt in React & Tailwind.",
    progress: 80,
    link: "https://github.com/jstn-crd/jstn-crd-website",
  },
  {
    name: "Brainstorming für Projekte",
    description: "Bald neue Updates.",
    progress: 40,
    link: "https://github.com/jstn-crd/",
  },
];

function getProgressColor(progress) {
  if (progress >= 85) return "bg-green-500";
  if (progress >= 60) return "bg-yellow-500";
  return "bg-red-500";
}

export default function CurrentProjects() {
  return (
    <section className="mb-12 text-left">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-bold mb-6 tracking-wide flex items-center gap-2 text-blue-600 dark:text-blue-400"/>

      <div className="space-y-6">
        {currentProjects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-center mb-2">
              <div>
                <h3 className="text-md font-semibold">{project.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <FaGithub size={20} />
              </a>
            </div>
            <div className="w-full bg-gray-300 dark:bg-gray-600 h-2 rounded-full">
              <div
                className={`h-2 rounded-full ${getProgressColor(project.progress)} transition-all`}
                style={{ width: `${project.progress}%` }}
              />
            </div>
            <p className="text-right text-xs mt-1 text-gray-500 dark:text-gray-400">
              {project.progress}%
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
