import { motion } from 'framer-motion';
import { FiBarChart2, FiActivity, FiClock } from 'react-icons/fi';
import { analyticsProjects } from '../constants/data';

const typeIcons = {
  'In Progress': FiActivity,
  'Coming Soon': FiClock,
};

export default function DataAnalytics() {
  return (
    <section id="analytics" className="py-20 sm:py-28 bg-surface-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Data Analytics <span className="text-accent">Projects</span>
          </h2>
          <p className="text-gray-400 mt-2 max-w-xl mx-auto">
            Exploring data to uncover insights — dashboard showcases and
            analytics work in progress
          </p>
          <div className="w-16 h-1 bg-accent rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {analyticsProjects.map((project, i) => {
            const TypeIcon = typeIcons[project.type] || FiBarChart2;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/10 to-accent/5 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300" />
                <div className="relative bg-surface-800 rounded-2xl border border-surface-600 group-hover:border-accent/30 overflow-hidden transition-all duration-300 h-full">
                  <div className="h-40 bg-gradient-to-br from-accent/10 to-surface-700 flex items-center justify-center">
                    {project.placeholder ? (
                      <div className="relative w-full h-full flex items-center justify-center">
                        <div className="absolute inset-4 rounded-xl border border-dashed border-surface-500 flex items-center justify-center">
                          <div className="flex flex-col items-center gap-2 text-gray-500">
                            <FiBarChart2 className="w-8 h-8 text-accent/30" />
                            <span className="text-xs text-gray-600">
                              Dashboard Preview
                            </span>
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </div>

                  <div className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-base font-semibold text-white group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <span
                        className={`flex items-center gap-1 text-xs px-2 py-0.5 rounded-full ${
                          project.type === 'In Progress'
                            ? 'bg-accent-light text-accent border border-accent-border'
                            : 'bg-surface-700 text-gray-400 border border-surface-500'
                        }`}
                      >
                        <TypeIcon className="w-3 h-3" />
                        {project.type}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
