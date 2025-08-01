import React, { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaReact,
  FaNodeJs,
  FaPython,
  FaFileDownload,
  FaHtml5,
  FaCss3Alt,
  FaLock,
  FaRocket,
} from "react-icons/fa";
import { SiTypescript, SiJavascript, SiVuedotjs, SiMysql } from "react-icons/si";
import { FiSun, FiMoon } from "react-icons/fi";
import { motion } from "framer-motion";
import Timeline from "./TimeLine";
import CurrentProjects from "./currentProjects";

const techSkills = [
  { name: "JavaScript", icon: <SiJavascript />, level: 80 },
  { name: "TypeScript", icon: <SiTypescript />, level: 70 },
  { name: "React", icon: <FaReact />, level: 70 },
  { name: "Vue.js", icon: <SiVuedotjs />, level: 65 },
  { name: "HTML", icon: <FaHtml5 />, level: 85 },
  { name: "CSS", icon: <FaCss3Alt />, level: 75 },
  { name: "Node.js", icon: <FaNodeJs />, level: 70 },
  { name: "Python", icon: <FaPython />, level: 85 },
  { name: "SQL", icon: <SiMysql />, level: 80 },
];

export default function DeveloperLanding() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center px-6 py-12 font-sans relative transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        aria-label="Toggle dark mode"
        className="fixed top-6 right-6 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-3 rounded-full shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300 z-20"
      >
        {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
      </button>

      {/* Card */}
      <div className="bg-white dark:bg-gray-800 max-w-md w-full rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg p-10 text-center z-10">
        <h1
          className={`text-4xl mb-2 font-modern ${
            darkMode ? "font-normal" : "font-semibold"
          }`}
          style={{ fontWeight: darkMode ? 400 : 600 }}
        >
          JUSTIN CONRAD
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 font-dev">
          Junior Fullstack Developer
        </p>

        {/* Technologien */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Technologien</h2>
          <ul className="flex flex-wrap justify-center gap-3 text-sm font-mono">
            {techSkills.map(({ name, icon }) => (
              <li
                key={name}
                className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 px-4 py-1 rounded-full border border-gray-300 dark:border-gray-600 shadow-sm"
              >
                <span className="text-lg">{icon}</span>
                <span>{name}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Timeline */}
        <div className="mt-20 w-full">
          <Timeline />
        </div>

        {/* Skill Levels mit Animation */}
        <section className="mb-10 text-left">
          {techSkills.map(({ name, level }) => (
            <div key={name} className="mb-3">
              <div className="flex justify-between mb-1 text-xs font-semibold">
                <span>{name}</span>
                <span>{level}%</span>
              </div>
              <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${level}%` }}
                  transition={{ duration: 1.2 }}
                  className="h-2 rounded-full bg-gray-900 dark:bg-gray-100"
                />
              </div>
            </div>
          ))}
        </section>

        {/* Laufende Projekte */}
        <section className="mb-10 text-left">
          <div className="flex items-center gap-2 mb-4">
            <motion.div
              animate={{ rotate: [0, 20, -20, 20, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-blue-500 dark:text-blue-300"
            >
              <FaRocket size={18} />
            </motion.div>
            <h3 className="text-xl font-bold tracking-wide">
              Laufende Projekte
            </h3>
          </div>
          <CurrentProjects />
        </section>

        {/* Socials */}
        <nav className="flex justify-center gap-6 text-2xl mb-6">
          <a
            href="https://github.com/jstn-crd"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white transition-colors duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/justin-conrad-768753256/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
        </nav>

        {/* CV-Button (gesperrt) */}
        <button
          disabled
          className="inline-flex items-center gap-2 border border-gray-500 text-gray-500 dark:border-gray-400 dark:text-gray-400 px-5 py-2 rounded-md font-semibold cursor-not-allowed"
        >
          <FaLock />
          <span>CV aktuell nicht verfügbar</span>
        </button>
      </div>

      {/* Copyright */}
      <div className="fixed bottom-4 left-4 text-xs font-mono select-none opacity-30 pointer-events-none z-0">
        © Justin Conrad
      </div>
    </div>
  );
}
