import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaNodeJs,
} from "react-icons/fa";
import { SiTypescript, SiJavascript, SiVuedotjs } from "react-icons/si";
import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2020",
    title: "Start Informatik-Interesse",
    description: "Erste Erfahrungen mit HTML, CSS und JavaScript gesammelt.",
    technologies: [
      <SiJavascript key="js" />,
      <FaHtml5 key="html5" />,
      <FaCss3Alt key="css3" />,
    ],
  },
  {
    year: "2021 – 2022",
    title: "Ausbildungsstart zum Fachinformatiker AE",
    description: "Kleinere Webseiten & Tools gebaut, Fokus auf Objektorientierte Programmierung.",
    technologies: [
      <FaPython key="python" />,
      <FaHtml5 key="html5b" />,
      <FaCss3Alt key="css3b" />,
      <FaReact key="react" />,
    ],
  },
  {
    year: "2023",
    title: "Interesse für die Web-Entwicklung",
    description:
      "Einsatz moderner Frameworks wie React & Vue. Einstieg in TypeScript.",
    technologies: [
      <FaNodeJs key="nodejs" />,
      <FaReact key="react-vue" />,   
      <SiVuedotjs key="vue" />,
      <SiTypescript key="ts" />,
    ],
  },
  {
    year: "2024",
    title: "Komplexere Frontend-Projekte",
    description:
      "Programmierung des IHK_Prüfungsprojekts basierend auf TypeScript und Vue.js",
    technologies: [
      <SiTypescript key="ts2" />,
      <SiJavascript key="js" />,
      <SiVuedotjs key="vue2" />,
    ],
  },
  {
    year: "2025",
    title: "Fullstack-Entwicklung & Abschluss",
    description:
      "Steigende Projekte mit Fokus auf Fullstack-Entwicklung. Abschluss der Ausbildung.",
    technologies: [
      <SiTypescript key="ts3" />,
      <FaReact key="react3" />,
      <FaNodeJs key="nodejs2" />,
    ],
  },
];


export default function Timeline() {
  return (
    <section className="max-w-2xl mx-auto px-6 py-12 font-sans relative">
      {/* Oberer Trenner */}
      <div className="border-t border-gray-300 dark:border-gray-700 mb-6"></div>

      {/* Überschrift */}
      <h2
        className="text-3xl font-medium text-center mb-10 tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 font-jetbrains"
      >
        Mein Fortschritt
      </h2>

      <div className="relative border-l-2 border-gray-300 dark:border-gray-700 pl-6">
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="mb-10 relative"
          >
            <div className="absolute w-4 h-4 bg-blue-500 rounded-full left-[-9px] top-1.5 border-4 border-white dark:border-gray-900"></div>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-mono">{item.year}</p>
            <h3 className="text-xl font-semibold mt-1 text-gray-800 dark:text-gray-100">
              {item.title}
            </h3>
            <p className="text-sm mt-2 mb-3 text-gray-700 dark:text-gray-300 leading-relaxed">
              {item.description}
            </p>
            <div className="flex gap-3 text-lg text-gray-600 dark:text-gray-300">
              {item.technologies.map((icon) => icon)}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Unterer Trenner */}
      <div className="border-t border-gray-300 dark:border-gray-700 mt-6"></div>
    </section>
  );
}
