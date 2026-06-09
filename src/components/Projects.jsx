import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder, FiStar } from 'react-icons/fi';
import { projects } from '../constants/data';

function ProjectCard({ project, index, featured }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className={`group relative ${featured ? 'col-span-1 sm:col-span-2' : ''}`}
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/10 to-accent/5 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300" />
      <div
        className={`relative bg-surface-800 rounded-2xl border overflow-hidden transition-all duration-300 h-full flex flex-col ${
          featured
            ? 'border-accent/40 group-hover:border-accent/70 shadow-lg shadow-accent/10'
            : 'border-surface-600 group-hover:border-accent/30'
        }`}
      >
        <div className="relative">
          <div
            className={`bg-surface-700 flex items-center justify-center overflow-hidden ${
              featured ? 'h-56 sm:h-64' : 'h-48'
            }`}
          >
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="flex flex-col items-center gap-2 text-gray-500">
                <FiFolder className="w-12 h-12 text-accent/40" />
                <span className="text-xs text-gray-600">Screenshot</span>
              </div>
            )}
          </div>
          {featured && (
            <div className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent text-white text-xs font-semibold shadow-lg">
              <FiStar className="w-3.5 h-3.5" /> Featured
            </div>
          )}
        </div>

        <div className="p-6 flex flex-col flex-1">
          <h3
            className={`font-semibold text-white mb-2 group-hover:text-accent transition-colors ${
              featured ? 'text-xl' : 'text-lg'
            }`}
          >
            {project.title}
          </h3>
          <p
            className={`text-gray-400 leading-relaxed mb-4 flex-1 ${
              featured ? 'text-base' : 'text-sm'
            }`}
          >
            {project.description}
          </p>

          {project.features && (
            <ul className="mb-4 space-y-1">
              {project.features.map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-2 text-sm text-gray-400"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          )}

          <div className="flex flex-wrap gap-2 mb-5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-0.5 text-xs rounded-full bg-accent-light text-accent border border-accent-border"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            <a
              href={project.github}
              className="flex items-center gap-1.5 px-4 py-2 text-sm rounded-xl bg-surface-700 text-gray-300 hover:bg-surface-500 hover:text-white transition-all border border-surface-500"
            >
              <FiGithub className="w-4 h-4" /> GitHub
            </a>
            <a
              href={project.demo}
              className="flex items-center gap-1.5 px-4 py-2 text-sm rounded-xl bg-accent hover:bg-accent-hover text-white transition-all shadow-lg shadow-accent/20"
            >
              <FiExternalLink className="w-4 h-4" /> Live Demo
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mx-auto" />
        </motion.div>

        <div className="space-y-8">
          {featured && (
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <ProjectCard
                project={featured}
                index={0}
                featured
              />
            </div>
          )}

          <div className="grid sm:grid-cols-2 gap-6">
            {others.map((project, i) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={i + 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
